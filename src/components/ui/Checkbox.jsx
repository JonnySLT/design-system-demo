import './Checkbox.css'

export default function Checkbox({ label, id, checked, onChange, disabled = false, indeterminate = false, helperText }) {
  const checkId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={`checkbox-field ${disabled ? 'checkbox-field--disabled' : ''}`}>
      <label className="checkbox-label" htmlFor={checkId}>
        <input
          id={checkId}
          type="checkbox"
          className="checkbox-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={el => { if (el) el.indeterminate = indeterminate }}
        />
        <span className="checkbox-box" aria-hidden="true">
          {indeterminate
            ? <svg viewBox="0 0 12 12"><line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : checked && <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          }
        </span>
        <span className="checkbox-text">{label}</span>
      </label>
      {helperText && <span className="checkbox-hint">{helperText}</span>}
    </div>
  )
}
