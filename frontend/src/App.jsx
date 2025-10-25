import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={
        <Layout>
          <HomePage />
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <AboutPage />
        </Layout>
      } />
    </Routes>
  )
}

export default App
