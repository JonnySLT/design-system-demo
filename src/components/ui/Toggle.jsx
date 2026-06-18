import './Toggle.css'

export default function Toggle({ label, checked, onChange, disabled = false, size = 'md' }) {
  return (
    <label className={`toggle-label toggle-label--${size} ${disabled ? 'toggle-label--disabled' : ''}`}>
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
      {label && <span className="toggle-text">{label}</span>}
    </label>
  )
}
