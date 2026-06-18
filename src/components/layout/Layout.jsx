import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'

export default function Layout({ children }) {
  return (
    <div className="docs-layout">
      <Sidebar />
      <div className="docs-main">
        <Header />
        <main className="docs-content">
          {children}
        </main>
      </div>
    </div>
  )
}
