// Reusable docs block: an Accessibility list + a Do / Don't grid.
// Usage: <Guidelines accessibility={[...]} dos={[...]} donts={[...]} />
function GuideCol({ good, items }) {
  const accent = good ? 'var(--color-success-text)' : 'var(--color-error-text)'
  return (
    <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{
        padding: '8px 14px',
        fontSize: 13,
        fontWeight: 600,
        color: accent,
        background: 'var(--color-bg-subtle)',
        borderBottom: '1px solid var(--color-border-default)',
      }}>
        {good ? '✓ Do' : '✕ Don’t'}
      </div>
      <ul style={{ margin: 0, padding: '12px 14px 12px 30px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((t, i) => (
          <li key={i} style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-text-muted)' }}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Guidelines({ accessibility = [], dos = [], donts = [] }) {
  return (
    <>
      {accessibility.length > 0 && (
        <>
          <h2 className="section-title">Accessibility</h2>
          <ul style={{ margin: '0 0 8px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {accessibility.map((a, i) => (
              <li key={i} style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-default)' }}>{a}</li>
            ))}
          </ul>
        </>
      )}
      {(dos.length > 0 || donts.length > 0) && (
        <>
          <h2 className="section-title">Guidelines</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 8 }}>
            <GuideCol good items={dos} />
            <GuideCol items={donts} />
          </div>
        </>
      )}
    </>
  )
}
