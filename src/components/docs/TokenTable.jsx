export default function TokenTable({ tokens }) {
  return (
    <div className="token-grid">
      {tokens.map((t) => (
        <div key={t.name} className="token-card">
          {t.type === 'color' && (
            <div
              className="token-swatch"
              style={{ background: t.value }}
            />
          )}
          <div className="token-info">
            <div className="token-name">--{t.name.replace(/\//g, '-')}</div>
            <div className="token-value">{t.value}</div>
            {t.description && (
              <div style={{ fontSize: 11, color: 'var(--color-text-disabled)', marginTop: 3 }}>
                {t.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
