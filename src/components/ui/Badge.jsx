import './Badge.css'

export default function Badge({ children, variant = 'default', size = 'md' }) {
  return (
    <span className={`ds-badge ds-badge--${variant} ds-badge--${size}`}>
      {children}
    </span>
  )
}
