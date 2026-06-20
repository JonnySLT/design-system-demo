import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import NavItem from '../../components/ui/NavItem.jsx'

const basicCode = `<NavItem label="Dashboard" active />
<NavItem label="Projects" />
<NavItem label="Settings" />`

const withBadgeCode = `<NavItem label="Inbox" badge={4} />
<NavItem label="Notifications" badge={12} />`

const iconsCode = `<NavItem icon="house" label="Dashboard" active />
<NavItem icon="people-line" label="Team" />
<NavItem icon="gear" label="Settings" disabled />`

const props = [
  { prop: 'label',    type: 'string',    default: '—',     description: 'Nav item text' },
  { prop: 'icon',     type: 'string',    default: 'null',  description: 'Icon slug from the icon library (e.g. "house", "gear")' },
  { prop: 'active',   type: 'boolean',   default: 'false', description: 'Highlights the active/current item' },
  { prop: 'badge',    type: 'number',    default: '—',     description: 'Count badge shown on the right' },
  { prop: 'disabled', type: 'boolean',   default: 'false', description: 'Prevents interaction' },
  { prop: 'href',     type: 'string',    default: '—',     description: 'Renders as an anchor tag when provided' },
  { prop: 'onClick',  type: 'function',  default: '—',     description: 'Click handler (used when not an anchor)' },
]

export default function NavItemPage() {
  return (
    <>
      <h1 className="page-title">Nav Item</h1>
      <p className="page-description">
        A single item in a sidebar or vertical navigation menu. Compose a list of these to build
        your app's navigation.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <div style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <NavItem label="Dashboard" active />
          <NavItem label="Projects" onClick={() => {}} />
          <NavItem label="Settings" onClick={() => {}} />
        </div>
      } />

      <h2 className="section-title">With badge</h2>
      <ComponentDemo code={withBadgeCode} preview={
        <div style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <NavItem label="Inbox" badge={4} onClick={() => {}} />
          <NavItem label="Notifications" badge={12} onClick={() => {}} />
        </div>
      } />

      <h2 className="section-title">With icons</h2>
      <ComponentDemo code={iconsCode} preview={
        <div style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <NavItem icon="house" label="Dashboard" active />
          <NavItem icon="people-line" label="Team" onClick={() => {}} />
          <NavItem icon="gear" label="Settings" disabled />
        </div>
      } />

      <Guidelines
        accessibility={[
          'Mark the current item with aria-current="page" (the active prop does this).',
          'Pass href when it navigates so it renders a real link — keyboard- and screen-reader-friendly.',
          'Icon-only items need an accessible label.',
        ]}
        dos={[
          'Use within a nav landmark; keep labels short and scannable.',
          'Show the active state for the current location.',
        ]}
        donts={[
          'Don\'t use a button for navigation — pass href to render a link.',
          'Don\'t rely on an icon alone without a label.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
