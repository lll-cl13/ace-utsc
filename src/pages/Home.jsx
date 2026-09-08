import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://aceuoft.wordpress.com/wp-content/uploads/2023/08/background-tower-1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-20 text-center text-white">
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-utsc-logo-1.png"
            alt="ACE UTSC Logo"
            className="mx-auto mb-6 h-16 md:h-20"
          />
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-2">ACE UTSC</h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide">Achieve. Connect. Empower.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-20 py-6">
        {/* Who We Are */}
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-8">
          We are dedicated to offering <strong>real world practice</strong> for students. Our mission is to transform <strong>classroom knowledge</strong> into <strong>practical expertise</strong> and empowering students to strengthen their skills and get ready for the real world.
        </p>

        <div className="text-center mb-8">
          <Link
            to="/ace-member"
            className="inline-block px-20 py-3 bg-[#00205B] text-white font-medium rounded hover:bg-[#001a47] transition"
          >
            Join Us Because
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8 bg-gray-100 py-10 px-6 rounded">
          <div>
            <div className="text-5xl font-semibold text-[#00205B]">100+</div>
            <div className="mt-1 text-sm tracking-widest">UNDERGRADUATE STUDENTS</div>
          </div>
          <div>
            <div className="text-5xl font-semibold text-[#00205B]">#50,000+</div>
            <div className="mt-1 text-sm tracking-widest">PUBLIC AWARENESS INITIATIVES</div>
          </div>
          <div>
            <div className="text-5xl font-semibold text-[#00205B]"># 1</div>
            <div className="mt-1 text-sm tracking-widest">LARGEST CASE COMPETITION IN CANADA</div>
          </div>
        </div>
      </div>

      {/* Full-bleed 3-column section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 px-20 py-10">
        {/* Achievements */}
        <div>
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2025/09/img_5568-1-edited.jpg?w=1024"
            alt="Achievements"
            className="w-70 h-70 mb-4 rounded object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
          <p className="text-sm">
            Our team has proudly secured <strong>Top 5</strong> in Fashion and Retail Management, <strong>3rd Place</strong> in both Restaurant and Food Services Management and Marketing Management, and <strong>2nd Place</strong> in Travel Management — showcasing our strength across diverse fields.
          </p>
        </div>

        {/* Events */}
        <div>
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/img_0204.jpeg?w=2048"
            alt="Events"
            className="w-70 h-70 mb-4 rounded object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">Events</h2>
          <p className="text-sm">
            This year, we have organized a series of events — including <strong>ACE Invitationals</strong>, <strong>ACE Chronicles</strong>, and <strong>ELA</strong> — all designed to equip students with the skills and experiences needed to succeed in the workplace.
          </p>
          <p className="mt-2 text-sm"><Link to="/events" className="underline">See all events →</Link></p>
        </div>

        {/* Partnerships */}
        <div>
          <img
            src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/541108638_1671807976817163_1531127534250298015_n-1.jpg"
            alt="UTSC Campus"
            className="w-70 h-70 mb-4 rounded object-cover"
          />
          <h2 className="text-2xl font-semibold mb-2">Partnerships</h2>
          <p className="text-sm">
            ACE UTSC is proud to be sponsored by a number of distinguished organizations, including <strong>EY</strong>, <strong>UofT MMPA</strong>, <strong>ICUBE UTM</strong>, and <strong>the CFA Society</strong>. We have also collaborated with RBC, Deloitte, York Region, AutoTrader Canada, and many more.
          </p>
        </div>
      </div>
    </div>
  )
}
