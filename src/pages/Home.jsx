import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ScrollFloat from '../components/ScrollFloat'
import SplitFlapText from './SplitFlapText'
import GlareHover from '../components/GlareHover'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div
        className="-mt-16 relative bg-cover bg-center min-h-[100dvh] flex flex-col"
        style={{ backgroundImage: "url('https://aceuoft.wordpress.com/wp-content/uploads/2023/08/background-tower-1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />

        {/* Logo + "ACE UTSC" centered around 50% */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <img
              src="https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-utsc-logo-1.png"
              alt="ACE UTSC Logo"
              className="mx-auto mb-4 h-16 md:h-20"
            />
            <h1>
              <ScrollFloat
                containerClassName="text-6xl md:text-7xl font-semibold tracking-[-2px]"
                scrollStart="top bottom+=50%"
                scrollEnd="bottom bottom"
              >
                ACE UTSC
              </ScrollFloat>
            </h1>
          </div>
        </div>

        {/* "Achieve. Connect. Empower." at the bottom */}
        <div className="relative z-10 pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center text-white">
            <ScrollFloat
              containerClassName="text-2xl md:text-3xl font-normal tracking-[-0.2px]"
              scrollStart="top bottom+=50%"
              scrollEnd="bottom bottom"
            >
              Achieve. Connect. Empower.
            </ScrollFloat>
          </div>
        </div>
      </div>

      {/* Who We Are - now below hero on light background */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 text-[#222]">
        <ScrollReveal
          baseRotation={0.5}
          containerClassName="text-2xl md:text-[27px] font-semibold mb-3 tracking-[-0.4px]"
        >
          Who We Are
        </ScrollReveal>
        <ScrollReveal
          baseRotation={0}
          baseOpacity={0.08}
          containerClassName="max-w-3xl text-[15px] md:text-[15.5px] leading-[1.72] mb-0 tracking-[-0.1px] text-[#333]"
        >
          We are dedicated to offering real world practice for students. Our mission is to transform classroom knowledge into practical expertise and empower students to strengthen their skills and get ready for the real world.
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-4">
        <div className="text-center mb-10">
          <Link
            to="/ace-member"
            className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-[14px] bg-[#00205B] text-white text-sm font-medium rounded-md hover:bg-[#001a47] active:bg-black transition-colors"
          >
            <SplitFlapText
              words={["JOIN US BECAUSE", "JOIN US BECAUSE","JOIN US BECAUSE"]}
              flipDuration={0.12}
              stagger={0.06}
              cycleDelay={2400}
              charset="alphanumeric"
              flipsPerChar={8}
              tileColor="#111827"
              textColor="#f8fafc"
              tileRadius={8}
              gap="clamp(2px,0.8vw,6px)"
              fontSize="clamp(22px,6vw,64px)"
              loop
              padTo={12}
            />
          </Link>
        </div>

        {/* Stats — clean modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-10 bg-[#f8f9fb] py-9 px-6 rounded-2xl">
          <div className="py-1">
            <div className="text-5xl font-semibold text-[#00205B] tracking-tighter">100+</div>
            <div className="mt-2 text-[12px] font-medium tracking-[1.5px] uppercase text-[#00205B]/70">Undergraduate Students</div>
          </div>
          <div className="py-1">
            <div className="text-5xl font-semibold text-[#00205B] tracking-tighter">50,000+</div>
            <div className="mt-2 text-[12px] font-medium tracking-[1.5px] uppercase text-[#00205B]/70">Public Awareness Initiatives</div>
          </div>
          <div className="py-1">
            <div className="text-5xl font-semibold text-[#00205B] tracking-tighter">#1</div>
            <div className="mt-2 text-[12px] font-medium tracking-[1.5px] uppercase text-[#00205B]/70">Largest Case Competition in Canada</div>
          </div>
        </div>
      </div>

      {/* Three column content — improved readability */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {/* Achievements */}
          <div>
            <div className="w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0.5rem"
                borderColor="transparent"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={280}
                transitionDuration={700}
                playOnce={false}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/09/img_5568-1-edited.jpg?w=1024"
                  alt="Achievements"
                  className="w-full h-full object-cover"
                />
              </GlareHover>
            </div>
            <h2 className="text-xl font-semibold mb-2.5 tracking-[-0.3px]">Achievements</h2>
            <p className="text-[15px] leading-relaxed text-[#333]">
              Our team has proudly secured <strong>Top 5</strong> in Fashion and Retail Management, <strong>3rd Place</strong> in both Restaurant and Food Services Management and Marketing Management, and <strong>2nd Place</strong> in Travel Management.
            </p>
          </div>

          {/* Events */}
          <div>
            <div className="w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0.5rem"
                borderColor="transparent"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={280}
                transitionDuration={700}
                playOnce={false}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/img_0204.jpeg?w=2048"
                  alt="Events"
                  className="w-full h-full object-cover"
                />
              </GlareHover>
            </div>
            <h2 className="text-xl font-semibold mb-2.5 tracking-[-0.3px]">Events</h2>
            <p className="text-[15px] leading-relaxed text-[#333]">
              We run <strong>ACE Invitationals</strong>, <strong>ACE Chronicles</strong>, and <strong>ELA</strong> — events designed to equip students with the skills and experiences needed to succeed in the workplace.
            </p>
            <p className="mt-3 text-[14px]"><Link to="/events" className="underline decoration-1 underline-offset-2 hover:text-[#00205B]">See all events →</Link></p>
          </div>

          {/* Partnerships */}
          <div>
            <div className="w-full aspect-[4/3] mb-5 rounded-xl overflow-hidden">
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="0.5rem"
                borderColor="transparent"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={280}
                transitionDuration={700}
                playOnce={false}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/541108638_1671807976817163_1531127534250298015_n-1.jpg"
                  alt="UTSC Campus"
                  className="w-full h-full object-cover"
                />
              </GlareHover>
            </div>
            <h2 className="text-xl font-semibold mb-2.5 tracking-[-0.3px]">Partnerships</h2>
            <p className="text-[15px] leading-relaxed text-[#333]">
              Proudly sponsored by <strong>EY</strong>, <strong>UofT MMPA</strong>, <strong>ICUBE UTM</strong>, and <strong>the CFA Society</strong>. We have also collaborated with RBC, Deloitte, York Region, AutoTrader, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
