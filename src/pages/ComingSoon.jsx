export default function ComingSoon({ title = 'Page' }) {
  return (
    <div style={{ paddingTop: 80, textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{title}</h2>
      <p style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>
        Documentation for this page is coming soon.
      </p>
    </div>
  )
}
