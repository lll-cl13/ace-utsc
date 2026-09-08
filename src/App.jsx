import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import AceMember from './pages/AceMember'
import TeamHiring from './pages/TeamHiring'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'
import EventDetail from './pages/EventDetail'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#222] flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/ace-member" element={<AceMember />} />
          <Route path="/team-hiring" element={<TeamHiring />} />
          <Route path="/our-team-2025-2026" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback for old paths */}
          <Route path="/about-v2-draft" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
