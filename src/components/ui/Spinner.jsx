import './Spinner.css'

export default function Spinner({ size = 'md', color = 'primary' }) {
  return (
    <span
      className={`ds-spinner ds-spinner--${size} ds-spinner--${color}`}
      role="status"
      aria-label="Loading"
    />
  )
}
