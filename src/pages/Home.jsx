import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ScrollFloat from '../components/ScrollFloat'
import SplitFlapText from '../components/SplitFlapText'
import GlareHover from '../components/GlareHover'
import GradientText from '../components/GradientText'
import ProfileCard from '../components/ProfileCard'
import AeroShards from '../components/AeroShards'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Stable fixed background layer (above body bg, below content) */}
      <div
        className="fixed inset-0 z-[0] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://aceuoft.wordpress.com/wp-content/uploads/2023/08/background-tower-1.jpeg')" }}
      />
      <div className="fixed inset-0 z-[0] bg-black/30 pointer-events-none" />

      <div className="-mt-16 relative z-[10]">
        {/* Hero content */}
        {/* Phase 1: Logo + big ACE UTSC (full screen) */}
        <div className="h-screen flex items-center justify-center text-white">
          <div className="text-center">
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

        {/* Phase 2: Achieve. Connect. Empower. (full screen) */}
        <div className="h-screen flex items-center justify-center text-white">
          <div className="px-[45px] text-center">
            <ScrollReveal
              containerClassName="text-2xl md:text-6xl font-semibold font-normal tracking-[-0.2px]"
              scrollStart="top bottom+=20%"
              scrollEnd="bottom bottom"
            >
              <GradientText
                colors={["#FFFFFF", "#03BBFF", "#FFFFFF"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Achieve. Connect. Empower.
              </GradientText>
            </ScrollReveal>
          </div>
        </div>

        {/* Phase 3: Who We Are (full screen + extra scroll space so fixed bg picture 
            stays visible until the reveal animation is fully complete and the text 
            has scrolled up near the top of the screen ~10%) */}
        <div className="min-h-screen pb-[55vh] flex items-center justify-center text-white">
          <div className="px-[45px] text-center">
            <ScrollReveal
              baseRotation={0}
              containerClassName="text-4xl md:text-5xl font-semibold mb-5 tracking-[-0.6px]"
            >
              Who We Are
            </ScrollReveal>
            <ScrollReveal
              baseRotation={0}
              baseOpacity={0.08}
              containerClassName="text-lg md:text-2xl leading-relaxed tracking-[-0.1px] text-white/90"
            >
              We are dedicated to offering real world practice for students. Our mission is to transform classroom knowledge into practical expertise and empower students to strengthen their skills and get ready for the real world.
            </ScrollReveal>
           </div>
          </div>
        </div>
 
        <div className="bg-white relative z-[10]">
           {/* Join + Stats */}
            <div className="px-[45px] pt-50 pb-50">
              <div className="text-center mb-10">
                <Link
                  to="/ace-member"
                  className="inline-flex items-center transition-colors"
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
                    fontSize="clamp(24px,6.5vw,72px)"
                    loop
                    padTo={12}
                  />
              </Link>
            </div>

              {/* Stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-15 px-15 pt-20 pb-20">
                {[
                  { src: '/img/UNDERGRADUATESTUDENTS.jpeg', alt: 'Undergraduate Students' },
                  { src: '/img/PUBLICAWARENESSINITIATIVES.jpeg', alt: 'Public Awareness Initiatives' },
                  { src: '/img/LARGESTCASECOMPETITION.png', alt: 'Largest Case Competition in Canada' }
                ].map((item, index) => (
                   <motion.div
                     key={index}
                      className="stat-card rounded-2xl aspect-[19/25] w-full"
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: '-80px' }}
                     transition={{ duration: 2, delay: index * 0.12, ease: [0.21, 0.92, 0.25, 1] }}
                   >
                     <ProfileCard
                       name=""
                       title=""
                       handle=""
                       status=""
                       contactText=""
                       avatarUrl={item.src}
                       showUserInfo={false}
                       enableTilt={true}
                       enableMobileTilt={true}
                       onContactClick={() => {}}
                       behindGlowEnabled={true}
                       innerGradient="transparent"
                       grainUrl="/img/GrainEffect.jpg"
                       fullImageMode
                       className="stat-profile-card w-full h-full"
                     />
                  </motion.div>
                ))}
              </div>
         </div>

       {/* Achievements, Events & Partnerships — one unified section */}
         <div className="relative">
           <div className="px-[45px] pt-6 pb-12 relative z-[1]">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-9 pb-50 pt-20">
          {/* Achievements */}
          <div className="group">
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
                playOnce={true}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/09/img_5568-1-edited.jpg?w=1024"
                  alt="Achievements"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                />
              </GlareHover>
            </div>
            <h2 className="text-xl font-semibold mb-2.5 tracking-[-0.3px]">Achievements</h2>
            <p className="text-[15px] leading-relaxed text-[#333]">
              Our team has proudly secured <strong>Top 5</strong> in Fashion and Retail Management, <strong>3rd Place</strong> in both Restaurant and Food Services Management and Marketing Management, and <strong>2nd Place</strong> in Travel Management.
            </p>
          </div>

          {/* Events */}
          <div className="group">
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
                playOnce={true}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/img_0204.jpeg?w=2048"
                  alt="Events"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
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
          <div className="group">
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
                playOnce={true}
              >
                <img
                  src="https://aceuoft.wordpress.com/wp-content/uploads/2025/08/541108638_1671807976817163_1531127534250298015_n-1.jpg"
                  alt="UTSC Campus"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
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
      </div>
    </>
  )
}
