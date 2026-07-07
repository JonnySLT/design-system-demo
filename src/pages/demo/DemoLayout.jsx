import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar.jsx'
import './demo.css'

// Only Dashboard and Profile are wired up; the rest are inert demo placeholders
const NAV_SECTIONS = [
  {
    items: [
      { label: 'Dashboard', href: '#/demo' },
      { label: 'Projects', href: '#/demo/projects', badge: 4 },
      { label: 'Analytics' },
      { label: 'Messages', badge: 12 },
      { label: 'Files' },
      { label: 'Calendar' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { label: 'Profile', href: '#/demo/settings' },
      { label: 'Security' },
      { label: 'Notifications' },
      { label: 'Billing' },
      { label: 'Integrations' },
      { label: 'Team' },
    ],
  },
]

const USER = { name: 'John Smith', email: 'john@example.com', initials: 'JS' }

export default function DemoLayout({ children, activeItem }) {
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const prev = document.title
    document.title = 'Live Demo'
    return () => { document.title = prev }
  }, [])

  // Close the mobile drawer whenever the route changes (e.g. tapping a nav link)
  useEffect(() => { setNavOpen(false) }, [pathname])

  const sections = NAV_SECTIONS.map(section => ({
    ...section,
    items: section.items.map(item => ({
      ...item,
      active: item.label === activeItem,
    })),
  }))

  return (
    <div className={`demo-shell ${navOpen ? 'demo-shell--nav-open' : ''}`}>
      <header className="demo-topbar">
        <div className="demo-topbar-brand">
          <span className="demo-topbar-logo">A</span>
          <span>Acme Corp</span>
        </div>
        <button
          type="button"
          className="demo-hamburger"
          aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navOpen}
          onClick={() => setNavOpen(o => !o)}
        >
          {navOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          )}
        </button>
      </header>

      {navOpen && <div className="demo-nav-overlay" onClick={() => setNavOpen(false)} />}

      <Navbar
        brand={{ initial: 'A', name: 'Acme Corp' }}
        sections={sections}
        user={USER}
      />

      <main className="demo-content">
        {children}
      </main>
    </div>
  )
}
