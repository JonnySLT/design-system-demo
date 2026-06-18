export default function TypographyPage() {
  const styles = [
    { name: 'Display/Large',  size: '64px', weight: 800, sample: 'The quick brown fox' },
    { name: 'Display/Medium', size: '48px', weight: 800, sample: 'The quick brown fox' },
    { name: 'Heading/1',      size: '30px', weight: 700, sample: 'The quick brown fox jumps' },
    { name: 'Heading/2',      size: '24px', weight: 600, sample: 'The quick brown fox jumps over' },
    { name: 'Heading/3',      size: '20px', weight: 600, sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body/Large',     size: '16px', weight: 400, sample: 'The quick brown fox jumps over the lazy dog. Used for primary body content.' },
    { name: 'Body/Medium',    size: '14px', weight: 400, sample: 'The quick brown fox jumps over the lazy dog. Used for secondary body content.' },
    { name: 'Body/Small',     size: '12px', weight: 400, sample: 'Caption text, helper text, and supplementary information.' },
    { name: 'Label/Large',    size: '14px', weight: 500, sample: 'Button labels, form labels, nav items' },
    { name: 'Label/Small',    size: '12px', weight: 500, sample: 'Tags, badges, timestamps' },
  ]

  return (
    <>
      <h1 className="page-title">Typography</h1>
      <p className="page-description">
        The type system uses Inter for UI text and JetBrains Mono for code.
        All sizes follow a modular scale: 12 / 14 / 16 / 20 / 24 / 30 / 36 / 48 / 64.
      </p>
      <h2 className="section-title">Type scale</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {styles.map((s) => (
          <div
            key={s.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: 24,
              padding: '20px 0',
              borderBottom: '1px solid var(--color-border-default)',
              alignItems: 'baseline',
            }}
          >
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 2 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: 'var(--color-text-disabled)', fontFamily: 'var(--font-mono)' }}>
                {s.size} / {s.weight}
              </div>
            </div>
            <div style={{ fontSize: s.size, fontWeight: s.weight, color: 'var(--color-text-default)', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: s.size.replace('px','') > 20 ? 'nowrap' : 'normal' }}>
              {s.sample}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
