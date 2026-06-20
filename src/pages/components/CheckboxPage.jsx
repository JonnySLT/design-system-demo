import { useState } from 'react'
import ComponentDemo from '../../components/docs/ComponentDemo.jsx'
import PropsTable from '../../components/docs/PropsTable.jsx'
import Guidelines from '../../components/docs/Guidelines.jsx'
import Checkbox from '../../components/ui/Checkbox.jsx'

const basicCode = `<Checkbox label="Accept terms and conditions" checked={checked} onChange={e => setChecked(e.target.checked)} />`
const statesCode = `<Checkbox label="Unchecked" checked={false} onChange={() => {}} />
<Checkbox label="Checked" checked={true} onChange={() => {}} />
<Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
<Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />`

const props = [
  { prop: 'label',         type: 'string',   default: '—',     description: 'Label text' },
  { prop: 'checked',       type: 'boolean',  default: 'false', description: 'Controlled checked state' },
  { prop: 'onChange',      type: 'function', default: '—',     description: 'Change handler' },
  { prop: 'disabled',      type: 'boolean',  default: 'false', description: 'Prevents interaction' },
  { prop: 'indeterminate', type: 'boolean',  default: 'false', description: 'Shows a dash — useful for "select all" parents' },
  { prop: 'helperText',    type: 'string',   default: '—',     description: 'Hint below the checkbox' },
]

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <h1 className="page-title">Checkbox</h1>
      <p className="page-description">
        Binary selection. Use for independent options that can each be toggled on or off.
        For mutually exclusive choices, use Radio instead.
      </p>

      <h2 className="section-title">Basic</h2>
      <ComponentDemo code={basicCode} preview={
        <Checkbox label="Accept terms and conditions" checked={checked} onChange={e => setChecked(e.target.checked)} />
      } />

      <h2 className="section-title">States</h2>
      <ComponentDemo code={statesCode} preview={
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
          <Checkbox label="Checked" checked={true} onChange={() => {}} />
          <Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
          <Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
        </div>
      } />

      <Guidelines
        accessibility={[
          'Every checkbox needs a label; clicking the label toggles the box.',
          'Space toggles the control; keep it focusable with a visible focus ring.',
          'Use indeterminate to reflect a partially-selected “select all” parent — not as a third value.',
          'Group a related set inside a fieldset with a legend.',
        ]}
        dos={[
          'Use checkboxes for independent options where more than one can be selected.',
          'Use indeterminate for a parent whose children are partially selected.',
        ]}
        donts={[
          'Don’t use checkboxes for mutually exclusive choices — use Radio.',
          'Don’t trigger an immediate action on toggle — use a Toggle or Button.',
        ]}
      />

      <h2 className="section-title">Props</h2>
      <PropsTable rows={props} />
    </>
  )
}
