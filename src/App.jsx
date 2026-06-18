import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Installation from './pages/GettingStarted.jsx'
import TokensPage from './pages/foundations/Tokens.jsx'
import ColorsPage from './pages/foundations/Colors.jsx'
import TypographyPage from './pages/foundations/Typography.jsx'
import SpacingPage from './pages/foundations/Spacing.jsx'
import ButtonPage from './pages/components/ButtonPage.jsx'
import AlertPage from './pages/components/AlertPage.jsx'
import BadgePage from './pages/components/BadgePage.jsx'
import AvatarPage from './pages/components/AvatarPage.jsx'
import SpinnerPage from './pages/components/SpinnerPage.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started/installation" element={<Installation />} />
        <Route path="/getting-started/usage" element={<ComingSoon title="Usage" />} />
        <Route path="/foundations/tokens"     element={<TokensPage />} />
        <Route path="/foundations/colors"     element={<ColorsPage />} />
        <Route path="/foundations/typography" element={<TypographyPage />} />
        <Route path="/foundations/spacing"    element={<SpacingPage />} />
        <Route path="/components/button"  element={<ButtonPage />} />
        <Route path="/components/alert"   element={<AlertPage />} />
        <Route path="/components/badge"   element={<BadgePage />} />
        <Route path="/components/avatar"  element={<AvatarPage />} />
        <Route path="/components/spinner" element={<SpinnerPage />} />
        <Route path="/components/*" element={<ComingSoon title="Component" />} />
      </Routes>
    </Layout>
  )
}
