import Badge from '../components/ui/Badge.jsx'
import changelog from '../data/changelog.json'
import './Changelog.css'

// Category → Badge variant (Badge is a DS component, so the tags stay on-system)
const CATEGORY_VARIANT = {
  FIXES: 'warning',
  COMPONENTS: 'primary',
  TOKENS: 'success',
  SCREENS: 'primary',
  DOCUMENTATION: 'default',
  ACCESSIBILITY: 'success',
  FOUNDATIONS: 'default',
  'INITIAL RELEASE': 'primary',
}

export default function Changelog() {
  const { entries } = changelog
  return (
    <div className="changelog">
      <div className="changelog-intro">
        <h1>Changelog</h1>
        <p>
          Every change to the Claude Design System, newest first. This list is generated from
          the <strong>Figma changelog</strong> (the source of truth) and kept in sync with it, so
          the design file and the docs site always tell the same story.
        </p>
        <p className="changelog-count">{entries.length} releases</p>
      </div>

      <ol className="changelog-list">
        {entries.map((e) => (
          <li className="changelog-entry" key={e.version}>
            <div className="changelog-head">
              <span className="changelog-version">{e.version}</span>
              <span className="changelog-date">{e.date}</span>
              <Badge variant={CATEGORY_VARIANT[e.category] || 'default'} size="sm">{e.category}</Badge>
              {e.repoPush && <span className="changelog-pill changelog-pill--repo">REPO PUSH</span>}
              {e.author && <span className="changelog-pill changelog-pill--author">{e.author}</span>}
            </div>
            {e.sections.map((s, i) => (
              <div className="changelog-section" key={i}>
                {e.sections.length > 1 && <div className="changelog-section-label">{s.label}</div>}
                <ul className="changelog-bullets">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  )
}
