export default function SpacingPage() {
  const scale = [
    { name: 'xs',  value: 4 },
    { name: 'sm',  value: 8 },
    { name: 'md',  value: 12 },
    { name: 'lg',  value: 16 },
    { name: 'xl',  value: 20 },
    { name: '2xl', value: 24 },
    { name: '3xl', value: 32 },
    { name: '4xl', value: 40 },
    { name: '5xl', value: 48 },
    { name: '6xl', value: 64 },
  ]

  return (
    <>
      <h1 className="page-title">Spacing</h1>
      <p className="page-description">
        All spacing uses a base-4 scale. Never use values outside this scale — arbitrary
        spacing like 13px or 22px breaks visual consistency at scale.
      </p>
      <h2 className="section-title">Scale</h2>
      <div>
        {scale.map((s) => (
          <div
            key={s.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '10px 0',
              borderBottom: '1px solid var(--color-border-default)',
            }}
          >
            <div style={{ width: 100 }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-interactive-primary)' }}>
                --spacing-{s.name}
              </code>
            </div>
            <div
              style={{
                height: 20,
                width: s.value * 2,
                background: 'var(--color-interactive-primary)',
                borderRadius: 3,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>
              {s.value}px
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
