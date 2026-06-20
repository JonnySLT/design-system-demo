import './NavItem.css'
import { icons } from './icons.js'

function NavIcon({ slug }) {
  const icon = icons.find(i => i.slug === slug)
  if (!icon) return null
  return <span className="nav-item-icon" dangerouslySetInnerHTML={{ __html: icon.svg }} />
}

export default function NavItem({ label, icon = null, active = false, badge, disabled = false, onClick, href }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      className={`nav-item ${active ? 'nav-item--active' : ''} ${disabled ? 'nav-item--disabled' : ''}`}
      onClick={!disabled ? onClick : undefined}
      href={href}
      aria-current={active ? 'page' : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
    >
      {icon && <NavIcon slug={icon} />}
      <span className="nav-item-label">{label}</span>
      {badge != null && <span className="nav-item-badge">{badge}</span>}
    </Tag>
  )
}
