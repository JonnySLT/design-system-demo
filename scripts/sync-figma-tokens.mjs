import { writeFileSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FILE_KEY = 'njWLlZEF7ekubL8zrsegQ3'
const TOKEN = process.env.FIGMA_ACCESS_TOKEN

if (!TOKEN) {
  console.error('Error: FIGMA_ACCESS_TOKEN environment variable is not set.')
  process.exit(1)
}

async function fetchVariables() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/variables/local`
  const res = await fetch(url, { headers: { 'X-Figma-Token': TOKEN } })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Figma API error ${res.status}: ${text}`)
  }
  return res.json()
}

function resolveAlias(variableId, variables) {
  const seen = new Set()
  let id = variableId
  while (id) {
    if (seen.has(id)) break
    seen.add(id)
    const v = variables[id]
    if (!v) break
    const val = Object.values(v.valuesByMode)[0]
    if (val?.type === 'VARIABLE_ALIAS') {
      id = val.id
    } else {
      return { value: val, name: v.name, type: v.resolvedType }
    }
  }
  return null
}

function rgbaToHex({ r, g, b, a = 1 }) {
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0')
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
  return a < 1 ? `${hex}${toHex(a)}` : hex
}

function formatValue(val, type) {
  if (type === 'COLOR') {
    return val?.r !== undefined ? rgbaToHex(val) : String(val)
  }
  if (type === 'FLOAT') return val
  if (type === 'STRING') return val
  return val
}

async function main() {
  console.log(`Fetching variables from Figma file ${FILE_KEY}…`)
  const data = await fetchVariables()
  const { variables, variableCollections } = data.meta

  const output = {}

  for (const [id, variable] of Object.entries(variables)) {
    const collection = variableCollections[variable.variableCollectionId]
    if (!collection) continue

    // Use Light mode by default (first mode)
    const modeId = collection.defaultModeId
    const rawValue = variable.valuesByMode[modeId]

    let resolvedValue = rawValue
    let resolvedType = variable.resolvedType

    if (rawValue?.type === 'VARIABLE_ALIAS') {
      const resolved = resolveAlias(rawValue.id, variables)
      if (resolved) {
        resolvedValue = resolved.value
        resolvedType = resolved.type
      }
    }

    const formatted = formatValue(resolvedValue, resolvedType)
    if (formatted === undefined || formatted === null) continue

    const collName = collection.name
    const varName = variable.name

    if (!output[collName]) output[collName] = {}
    output[collName][varName] = {
      value: formatted,
      type: resolvedType.toLowerCase(),
      description: variable.description || undefined,
    }
  }

  const outDir = join(__dirname, '..', 'tokens')
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, 'figma-tokens.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`Wrote ${Object.keys(output).length} collections to ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
