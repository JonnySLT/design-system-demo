import './NavItem.css'

export default function NavItem({ label, icon, active = false, badge, disabled = false, onClick, href }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      className={`nav-item ${active ? 'nav-item--active' : ''} ${disabled ? 'nav-item--disabled' : ''}`}
      onClick={!disabled ? onClick : undefined}
      href={href}
      aria-current={active ? 'page' : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
    >
      {icon && <span className="nav-item-icon">{icon}</span>}
      <span className="nav-item-label">{label}</span>
      {badge != null && <span className="nav-item-badge">{badge}</span>}
    </Tag>
  )
}
