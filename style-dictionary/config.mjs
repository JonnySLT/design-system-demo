import StyleDictionary from 'style-dictionary'
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const tokensPath = join(__dirname, '..', 'tokens', 'figma-tokens.json')

if (!existsSync(tokensPath)) {
  console.error(`tokens/figma-tokens.json not found. Run "npm run sync-tokens" first.`)
  process.exit(1)
}

const figmaTokens = JSON.parse(readFileSync(tokensPath, 'utf-8'))

// Flatten all collections into a single token tree
const tokens = {}
for (const [collectionName, vars] of Object.entries(figmaTokens)) {
  for (const [varName, tokenData] of Object.entries(vars)) {
    // Convert "color/bg/primary" → nested { color: { bg: { primary: {...} } } }
    const parts = varName.split('/')
    let node = tokens
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i].replace(/[^a-zA-Z0-9_-]/g, '-')
      if (!node[part]) node[part] = {}
      node = node[part]
    }
    const leafKey = parts[parts.length - 1].replace(/[^a-zA-Z0-9_-]/g, '-')
    node[leafKey] = {
      value: tokenData.value,
      type: tokenData.type,
      comment: tokenData.description,
    }
  }
}

// Write flattened tokens for Style Dictionary
const sdTokensPath = join(__dirname, '..', 'tokens', 'sd-tokens.json')
writeFileSync(sdTokensPath, JSON.stringify(tokens, null, 2))

const sd = new StyleDictionary({
  tokens,
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: '',
      files: [
        {
          destination: join(__dirname, '..', 'src', 'tokens', 'tokens.css'),
          format: 'css/variables',
          options: {
            outputReferences: false,
            selector: ':root',
          },
        },
      ],
    },
  },
})

await sd.buildAllPlatforms()
console.log('Tokens built → src/tokens/tokens.css')
