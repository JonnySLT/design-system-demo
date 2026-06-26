# Claude Design System — Why It Helps Each Team

**The big idea:** Figma is the source of truth for the design tokens — colors (light *and*
dark), spacing, radius, type, and shadows — plus component appearance, and the code repo
mirrors it. Code owns implementation details: how components behave, and a couple of CSS-only
specifics (like font fallback fonts). Automated checks keep the shared parts from silently
drifting apart — less manual cross-checking, fewer "the design and the build don't match"
surprises.

## 🎨 For Designers

- **One file, no confusion** — there's exactly one design system file; nobody wastes time
  wondering which is current.
- **The changelog writes itself** — every meaningful change to the Figma file is logged
  automatically with a date and category; a weekly check even catches edits made by hand.
  No more manually maintaining a "what changed" doc.
- **Consistent by construction** — colors, spacing, type, and radius all come from shared
  tokens, so the system stays visually coherent as it grows.
- **Your design decisions are respected** — where the design has been deliberately tuned
  (e.g. dark-mode colors), the system preserves those choices instead of overwriting them.
- **Changes flow to code reliably** — when you update a value in Figma, there's a clear,
  checked process for getting it into the product, so your intent actually ships.

## 💻 For Developers

- **Mistakes get caught before they ship** — automated checks block a deploy if the token
  files disagree, or if the documented component props don't match the real code. No silent
  drift reaching production.
- **One command to verify everything** — `npm run check` confirms tokens and component docs
  are all in sync before you commit.
- **Clear map between Figma and code** — a documented table links every Figma variable to its
  CSS counterpart, so translating a design change is mechanical, not guesswork.
- **Self-documenting components** — `components.json` lists every component's props, types, and
  Figma link in one machine-readable file, kept honest by an automated check.
- **Trustworthy tokens** — light/dark values, spacing, and type are centralized and guarded,
  so you're never hunting for "the real value."

## 🤖 For AI assistants (and the whole team via them)

The same structure that keeps designers and developers in sync also makes the system **AI-ready**:
intent is written down, addressable, and checkable rather than implied — so an AI can understand
the whole system in one read and verify its own changes before they ship. Three things make that work:

- **Discoverable — the whole system in a few files.** Structure is declared in machine-readable
  manifests, so an AI loads the entire API and token set without spelunking through source:
  `components.json` (every component's props, types, and Figma node ID), `tokens.json` + `llms.txt`
  (tokens and an LLM index in standard formats), and `AGENTS.md` / `CLAUDE.md` / `TOKENS.md`
  (the conventions written as instructions).
- **Addressable — a direct Figma-to-code map.** Every component maps to its Figma node ID and every
  Figma variable maps to its CSS token, so translating a design change is mechanical, not guesswork —
  point an AI at a frame and it finds the code deterministically.
- **Verifiable — AI can check its own work.** Every change runs the same automated guards as everyone
  else's: five CI checks catch hardcoded values, stale tokens, and mismatched props; visual regression
  and a Figma fingerprint catch drift in both directions; and the changelog is generated from a
  reproducible baseline. AI-assisted work can't quietly break the system, and the AI gets a fast,
  honest feedback loop.

The payoff: repetitive jobs (logging changes, checking for drift, syncing tokens) are scripted and
safe, freeing people for design and product decisions.

## ✅ The bottom line

The system is **consistent, documented, and self-checking.** Designers' intent is preserved
and flows to code; developers catch problems before users do; and AI can safely speed up the
routine work — so the team spends less time reconciling Figma vs. code and more time building.
