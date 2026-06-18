import './Radio.css'

export function RadioGroup({ label, children, helperText }) {
  return (
    <fieldset className="radio-group">
      {label && <legend className="radio-group-label">{label}</legend>}
      <div className="radio-group-options">{children}</div>
      {helperText && <span className="radio-hint">{helperText}</span>}
    </fieldset>
  )
}

export default function Radio({ label, id, value, checked, onChange, disabled = false }) {
  return (
    <label className={`radio-label ${disabled ? 'radio-label--disabled' : ''}`} htmlFor={id}>
      <input
        id={id}
        type="radio"
        className="radio-input"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio-dot" aria-hidden="true" />
      <span className="radio-text">{label}</span>
    </label>
  )
}
