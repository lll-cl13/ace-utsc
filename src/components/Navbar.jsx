import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
]

const joinLinks = [
  { label: 'Become an ACE Member', to: '/ace-member' },
  { label: 'Team Hiring', to: '/team-hiring' },
]

export default function Navbar() {
  const [joinOpen, setJoinOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const joinTimeout = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDarkPage = isHome || location.pathname === '/about'

  const openJoin = () => {
    if (joinTimeout.current) clearTimeout(joinTimeout.current)
    setJoinOpen(true)
  }

  const closeJoin = () => {
    joinTimeout.current = setTimeout(() => setJoinOpen(false), 150)
  }

  return (
    <nav className="sticky top-0 z-50">
      <div className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 ${isDarkPage ? '' : 'bg-white'}`}>
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-utsc-logo-1.png"
            alt="ACE UTSC"
            className="h-9 w-auto"
          />
            <span className={`text-sm tracking-tight hover:underline font-['League_Spartan',sans-serif] ${isDarkPage ? 'text-white' : 'text-[#00205B]'}`}>ACE UTSC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={`transition-colors ${isDarkPage ? 'text-white hover:text-white/80' : 'hover:text-[#00205B]'}`}>
              {l.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={openJoin} onMouseLeave={closeJoin}>
            <button className={`flex items-center gap-1 transition-colors ${isDarkPage ? 'text-white hover:text-white/80' : 'hover:text-[#00205B]'}`}>
              Join Us
              <span className="text-xs">▼</span>
            </button>
            {joinOpen && (
              <div
                className={`absolute left-0 top-full mt-1 w-56 shadow-lg py-2 rounded ${isDarkPage ? 'bg-[#1a1720] text-white' : 'bg-white text-[#222]'}`}
                onMouseEnter={openJoin}
                onMouseLeave={closeJoin}
              >
                {joinLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="block px-4 py-2 text-sm hover:bg-gray-50">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/our-team-2025-2026" className={`transition-colors ${isDarkPage ? 'text-white hover:text-white/80' : 'hover:text-[#00205B]'}`}>
            Our Team
          </Link>
          <Link to="/contact" className={`transition-colors ${isDarkPage ? 'text-white hover:text-white/80' : 'hover:text-[#00205B]'}`}>
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden text-2xl ${isDarkPage ? 'text-white' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t px-6 md:px-10 py-4 flex flex-col gap-3 text-sm ${isDarkPage ? 'bg-[#120F17] text-white' : 'bg-white'}`}>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <div className="font-medium">Join Us</div>
          {joinLinks.map((l) => (
            <Link key={l.to} to={l.to} className="pl-4" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <Link to="/our-team-2025-2026" onClick={() => setMobileOpen(false)}>Our Team</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
