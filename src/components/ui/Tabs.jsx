import { useState } from 'react'
import './Tabs.css'

export function Tab({ children }) {
  return <div className="tab-panel">{children}</div>
}

export default function Tabs({ tabs = [], defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex)
  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === active}
            className={`tabs-tab ${i === active ? 'tabs-tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content" role="tabpanel">
        {tabs[active]?.content}
      </div>
    </div>
  )
}
