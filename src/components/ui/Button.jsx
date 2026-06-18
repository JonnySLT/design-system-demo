import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
}) {
  return (
    <button
      className={`ds-button ds-button--${variant} ds-button--${size}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className="ds-button-spinner" aria-hidden="true" />}
      {children}
    </button>
  )
}
