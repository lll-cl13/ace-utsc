import { useState } from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-20 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-utsc-logo-1.png"
            alt="ACE UTSC"
            className="h-9 w-auto"
          />
           <span className="text-sm tracking-tight text-[#00205B] hover:underline font-['League_Spartan',sans-serif]">ACE UTSC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#00205B] transition-colors">
              {l.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={() => setJoinOpen(true)} onMouseLeave={() => setJoinOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#00205B] transition-colors">
              Join Us
              <span className="text-xs">▼</span>
            </button>
            {joinOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg py-2 rounded">
                {joinLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="block px-20 py-2 text-sm hover:bg-gray-50">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/our-team-2025-2026" className="hover:text-[#00205B] transition-colors">
            Our Team
          </Link>
          <Link to="/contact" className="hover:text-[#00205B] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-20 py-4 flex flex-col gap-3 text-sm">
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
