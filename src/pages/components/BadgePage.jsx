import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Badge from '../../components/ui/Badge.jsx'

const variantsCode = `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`

const sizesCode = `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`

const props = [
  { prop: 'variant', type: '"default" | "primary" | "success" | "warning" | "error"', default: '"default"', description: 'Color and semantic meaning of the badge' },
  { prop: 'size',    type: '"sm" | "md" | "lg"',                                      default: '"md"',      description: 'Font and padding scale' },
  { prop: 'children', type: 'ReactNode',                                               default: '—',         description: 'Badge label content' },
]

export default function BadgePage() {
  return (
    <>
      <h1 className="page-title">Badge</h1>
      <p className="page-description">
        Labels and status indicators. Use to surface metadata, categories, or states
        without disrupting the content flow.
      </p>

      <h2 className="section-title">Variants</h2>
      <ComponentDemo
        code={variantsCode}
        preview={<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>}
      />

      <h2 className="section-title">Sizes</h2>
      <ComponentDemo
        code={sizesCode}
        preview={<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
