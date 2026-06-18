import './Input.css'

export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  helperText,
  error,
  disabled = false,
  required = false,
  ...rest
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''} ${disabled ? 'input-field--disabled' : ''}`}>
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="input-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-describedby={helperText || error ? `${inputId}-hint` : undefined}
        aria-invalid={error ? 'true' : undefined}
        {...rest}
      />
      {(helperText || error) && (
        <span id={`${inputId}-hint`} className="input-hint">
          {error || helperText}
        </span>
      )}
    </div>
  )
}
