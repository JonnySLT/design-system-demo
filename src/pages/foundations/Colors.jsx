import TokenTable from '../../components/docs/TokenTable.jsx'

const indigo = [
  { name: 'indigo-50',  value: '#EEF2FF', type: 'color' },
  { name: 'indigo-100', value: '#E0E7FF', type: 'color' },
  { name: 'indigo-200', value: '#C7D2FE', type: 'color' },
  { name: 'indigo-300', value: '#A5B4FC', type: 'color' },
  { name: 'indigo-400', value: '#818CF8', type: 'color' },
  { name: 'indigo-500', value: '#6366F1', type: 'color' },
  { name: 'indigo-600', value: '#4F46E5', type: 'color' },
  { name: 'indigo-700', value: '#4338CA', type: 'color' },
  { name: 'indigo-800', value: '#3730A3', type: 'color' },
  { name: 'indigo-900', value: '#312E81', type: 'color' },
]

const slate = [
  { name: 'slate-50',  value: '#F8FAFC', type: 'color' },
  { name: 'slate-100', value: '#F1F5F9', type: 'color' },
  { name: 'slate-200', value: '#E2E8F0', type: 'color' },
  { name: 'slate-300', value: '#CBD5E1', type: 'color' },
  { name: 'slate-400', value: '#94A3B8', type: 'color' },
  { name: 'slate-500', value: '#64748B', type: 'color' },
  { name: 'slate-600', value: '#475569', type: 'color' },
  { name: 'slate-700', value: '#334155', type: 'color' },
  { name: 'slate-800', value: '#1E293B', type: 'color' },
  { name: 'slate-900', value: '#0F172A', type: 'color' },
]

export default function ColorsPage() {
  return (
    <>
      <h1 className="page-title">Colors</h1>
      <p className="page-description">
        The color system is built on two layers: primitive tokens (raw values) and
        semantic tokens (intent-based aliases). Always use semantic tokens in components.
      </p>
      <h2 className="section-title">Indigo (brand)</h2>
      <TokenTable tokens={indigo} />
      <h2 className="section-title">Slate (neutrals)</h2>
      <TokenTable tokens={slate} />
    </>
  )
}
