import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Button from '../../components/ui/Button.jsx'

const primaryCode = `<Button variant="primary">Save changes</Button>`
const secondaryCode = `<Button variant="secondary">Cancel</Button>`
const ghostCode = `<Button variant="ghost">Learn more</Button>`
const destructiveCode = `<Button variant="destructive">Delete account</Button>`
const sizesCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`
const statesCode = `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`

const props = [
  { prop: 'variant',   type: '"primary" | "secondary" | "ghost" | "destructive"', default: '"primary"',  description: 'Visual style of the button' },
  { prop: 'size',      type: '"sm" | "md" | "lg"',                                default: '"md"',       description: 'Height and padding scale' },
  { prop: 'disabled',  type: 'boolean',                                           default: 'false',      description: 'Prevents interaction and reduces opacity' },
  { prop: 'loading',   type: 'boolean',                                           default: 'false',      description: 'Shows a spinner and prevents interaction' },
  { prop: 'onClick',   type: '() => void',                                        default: '—',          description: 'Click handler' },
  { prop: 'children',  type: 'ReactNode',                                         default: '—',          description: 'Button label content' },
]

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      <h1 className="page-title">Button</h1>
      <p className="page-description">
        Triggers an action or event. Use the variant that matches the weight of the action
        — one primary per view, secondary for supporting actions, ghost for tertiary.
      </p>

      <h2 className="section-title">Variants</h2>
      <ComponentDemo
        code={primaryCode}
        preview={<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>}
      />

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo
        code={sizesCode}
        preview={<div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>}
      />

      <h2 className="section-title">States</h2>
      <ComponentDemo
        code={statesCode}
        preview={<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingDemo}>
            {loading ? 'Saving…' : 'Click to load'}
          </Button>
        </div>}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
