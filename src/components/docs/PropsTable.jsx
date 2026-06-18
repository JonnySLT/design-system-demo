export default function PropsTable({ rows = [] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.prop}>
              <td><span className="prop-name">{p.prop}</span></td>
              <td><span className="prop-type">{p.type}</span></td>
              <td><span className="prop-default">{p.default ?? '—'}</span></td>
              <td style={{ color: 'var(--color-text-muted)' }}>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
