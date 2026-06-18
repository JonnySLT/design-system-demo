import { NavLink } from 'react-router-dom'
import { navigation } from '../../nav.js'

function LogoMark() {
  return (
    <div className="sidebar-logo-mark">
      <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white"/>
        <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.6"/>
        <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.6"/>
        <rect x="10" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.3"/>
      </svg>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="sidebar-logo">
        <LogoMark />
        <div className="sidebar-logo-text">
          <span className="sidebar-logo-name">Design System</span>
          <span className="sidebar-logo-version">v1.0.0</span>
        </div>
      </NavLink>

      <nav className="sidebar-nav">
        {navigation.map((group) => (
          <div key={group.section} className="sidebar-section">
            <div className="sidebar-section-label">{group.section}</div>
            {group.links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}
