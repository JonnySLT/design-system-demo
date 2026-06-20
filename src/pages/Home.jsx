import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-tag">Design System v1.0</div>
        <h1>Build with <span>consistency</span> and confidence</h1>
        <p>
          A complete library of components, tokens, and guidelines built to accelerate
          product development — with direct integration from Figma to code.
        </p>
      </div>

      <div className="home-cards">
        <Link to="/foundations/tokens" className="home-card">
          <div className="home-card-icon">🎨</div>
          <h3>Design Tokens</h3>
          <p>Colors, spacing, typography, and radius — all generated from Figma variables.</p>
        </Link>
        <Link to="/components/button" className="home-card">
          <div className="home-card-icon">⚡</div>
          <h3>Components</h3>
          <p>16 production-ready components with live demos, props docs, and copy-ready code.</p>
        </Link>
        <Link to="/getting-started/installation" className="home-card">
          <div className="home-card-icon">🚀</div>
          <h3>Get Started</h3>
          <p>Install the package, import the tokens, and ship your first component in minutes.</p>
        </Link>
      </div>
    </>
  )
}
