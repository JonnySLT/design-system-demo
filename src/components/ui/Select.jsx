import './Select.css'

export default function Select({ label, id, value, onChange, options = [], placeholder, disabled = false, error, helperText, required = false }) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={`select-field ${error ? 'select-field--error' : ''} ${disabled ? 'select-field--disabled' : ''}`}>
      {label && (
        <label className="select-label" htmlFor={selectId}>
          {label}
          {required && <span className="select-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="select-wrapper">
        <select
          id={selectId}
          className="select-control"
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : undefined}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className="select-chevron" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </div>
      {(helperText || error) && (
        <span className="select-hint">{error || helperText}</span>
      )}
    </div>
  )
}
