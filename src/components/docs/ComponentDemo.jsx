import { useState } from 'react'
import CodeBlock from './CodeBlock.jsx'

export default function ComponentDemo({ preview, code, centered = false }) {
  const [tab, setTab] = useState('preview')

  return (
    <div className="demo-block">
      {tab === 'preview' ? (
        <div className={`demo-preview ${centered ? 'demo-preview-centered' : ''}`}>
          {preview}
        </div>
      ) : (
        <div className="demo-code">
          <SyntaxHighlighterInline code={code} />
        </div>
      )}
      <div className="demo-tabs">
        <button
          className={`demo-tab ${tab === 'preview' ? 'active' : ''}`}
          onClick={() => setTab('preview')}
        >
          Preview
        </button>
        <button
          className={`demo-tab ${tab === 'code' ? 'active' : ''}`}
          onClick={() => setTab('code')}
        >
          Code
        </button>
      </div>
    </div>
  )
}

function SyntaxHighlighterInline({ code }) {
  const [copied, setCopied] = useState(false)
  const { Prism: SyntaxHighlighter } = require('react-syntax-highlighter')
  const { vscDarkPlus } = require('react-syntax-highlighter/dist/esm/styles/prism')

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ position: 'relative' }}>
      <button
        className={`code-copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        style={{ top: 10, right: 10 }}
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language="jsx"
        style={vscDarkPlus}
        customStyle={{ margin: 0, borderRadius: 0, background: '#1a1f2e', padding: '20px 24px' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
