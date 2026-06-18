import CodeBlock from '../components/docs/CodeBlock.jsx'

export default function GettingStarted() {
  return (
    <>
      <h1 className="page-title">Installation</h1>
      <p className="page-description">
        Get the design system set up in your project. The package ships the compiled
        components and the CSS token file.
      </p>

      <h2 className="section-title">1. Install the package</h2>
      <CodeBlock language="bash" code={`npm install @your-org/design-system`} />

      <h2 className="section-title">2. Import the tokens</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, fontSize: 14 }}>
        Add the token CSS file at the root of your app. This provides all CSS custom
        properties used by every component.
      </p>
      <CodeBlock language="js" code={`// In your root file (e.g. main.jsx or App.jsx)
import '@your-org/design-system/tokens.css'`} />

      <h2 className="section-title">3. Use a component</h2>
      <CodeBlock language="jsx" code={`import { Button } from '@your-org/design-system'

export default function MyPage() {
  return <Button variant="primary">Save changes</Button>
}`} />

      <h2 className="section-title">Syncing tokens from Figma</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, fontSize: 14 }}>
        The token pipeline connects Figma variables directly to the CSS file that ships
        with this package. Set your Figma access token, then run:
      </p>
      <CodeBlock language="bash" code={`# Set your Figma personal access token
export FIGMA_ACCESS_TOKEN=your_token_here

# Pull latest tokens from Figma and rebuild the CSS
npm run tokens`} />
      <p style={{ color: 'var(--color-text-muted)', fontSize: 13, marginTop: 8 }}>
        This fetches all Figma variables, resolves aliases, and generates{' '}
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>src/tokens/tokens.css</code>.
        Commit the result and the site redeploys automatically via GitHub Actions.
      </p>
    </>
  )
}
