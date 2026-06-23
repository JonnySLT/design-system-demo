#!/usr/bin/env node
/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// Hardcoded-value guard for component CSS.
//
//   npm run check:hardcoded
//
// The token files agree across surfaces (check:tokens / check:figma-tokens), but
// that's worthless if components don't actually USE the tokens. This scans
// src/components/**/*.css for raw values that bypass the token system.
//
//   ERROR (fails build):
//     • hex colours (#abc / #aabbcc)  → every colour must be a var(--color-*)
//     • font-size in px that IS on the type scale (12/14/16/18/20/24/30/36)
//                                      → use the matching var(--font-size-*)
//   WARN (does not fail):
//     • font-size in px that is OFF the scale (10/11/13/15…) — a size the design
//       system doesn't define; consider snapping it to the scale
//     • rgba()/rgb() literals — usually a shadow/scrim; fine if intentional, but
//       if a token exists for it (e.g. --color-surface-overlay), use the token
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const DIR = path.resolve(__dirname, '../src/components');
const SCALE = new Set([12, 14, 16, 18, 20, 24, 30, 36]); // --font-size-xs … 4xl

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.css')) out.push(p);
  }
  return out;
}

const errors = [];
const warnings = [];

for (const file of walk(DIR)) {
  const rel = path.relative(path.resolve(__dirname, '..'), file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    const code = line.replace(/\/\*.*?\*\//g, ''); // strip inline comments

    // hex colours
    const hex = code.match(/#[0-9a-fA-F]{3,8}\b/);
    if (hex) errors.push(`${at}  hardcoded colour ${hex[0]} — use a var(--color-*) token`);

    // font-size px
    const fs_ = code.match(/font-size:\s*(\d+)px/);
    if (fs_) {
      const n = +fs_[1];
      if (SCALE.has(n)) errors.push(`${at}  font-size ${n}px is on the scale — use var(--font-size-*)`);
      else warnings.push(`${at}  font-size ${n}px is off the type scale`);
    }

    // rgba/rgb literals (skip ones already inside a var() fallback)
    const rgb = code.match(/\brgba?\([^)]*\)/);
    if (rgb && !/var\(/.test(code)) warnings.push(`${at}  raw ${rgb[0]} — use a token if one exists`);
  });
}

if (warnings.length) {
  console.error(`⚠ ${warnings.length} advisory:`);
  for (const w of warnings) console.error('    • ' + w);
  console.error('');
}

if (errors.length === 0) {
  console.log('✓ No hardcoded colours or on-scale font-sizes in component CSS — components use tokens.');
  process.exit(0);
}

console.error(`✗ ${errors.length} hardcoded value(s) that should be tokens:`);
for (const e of errors) console.error('    • ' + e);
console.error('\nFix: replace with the matching var(--…) token.');
process.exit(1);
