import { useState, useId } from 'react'
import './Tabs.css'

export default function Tabs({ tabs = [], defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex)
  const id = useId()
  const panelId = `tabs-panel-${id}`

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setActive(i => (i + 1) % tabs.length)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setActive(i => (i - 1 + tabs.length) % tabs.length)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActive(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setActive(tabs.length - 1)
    }
  }

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            id={`tabs-tab-${id}-${i}`}
            aria-selected={i === active}
            aria-controls={panelId}
            tabIndex={i === active ? 0 : -1}
            className={`tabs-tab ${i === active ? 'tabs-tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`tabs-tab-${id}-${active}`}
        className="tabs-content"
      >
        {tabs[active]?.content}
      </div>
    </div>
  )
}
