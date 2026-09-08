import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative mt-16 text-sm text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://aceuoft.wordpress.com/wp-content/uploads/2025/08/utsc_campus.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-7xl mx-auto px-20 py-6 grid md:grid-cols-2 gap-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://aceuoft.wordpress.com/wp-content/uploads/2024/06/cropped-ace-utsc.png"
              alt="ACE UTSC"
              className="h-6"
            />
            <span className="font-semibold">ACE UTSC</span>
          </div>
          <p className="mb-1">1265 Military Trail</p>
          <p className="mb-1">University of Toronto Scarborough</p>
          <p>ON M1C 1A4, CA</p>

          <div className="mt-4 flex gap-4">
            <a href="https://www.instagram.com/aceutsc/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href="https://www.linkedin.com/company/ace-utsc/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href="mailto:ace.uoftscarborough@gmail.com" className="hover:underline">Mail</a>
          </div>
        </div>

        <div className="md:text-right text-sm">
          <div className="mb-2 flex flex-wrap md:justify-end gap-x-4 gap-y-1">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/events" className="hover:underline">Events</Link>
            <Link to="/ace-member" className="hover:underline">Become an ACE Member</Link>
            <Link to="/team-hiring" className="hover:underline">Team Hiring</Link>
            <Link to="/our-team-2025-2026" className="hover:underline">Our Team</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
          <p className="text-xs text-white/70 mt-4">© {new Date().getFullYear()} ACE UTSC</p>
        </div>
      </div>
    </footer>
  )
}
