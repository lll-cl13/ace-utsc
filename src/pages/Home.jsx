import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import ScrollFloat from '../components/ScrollFloat'
import SplitFlapText from '../components/SplitFlapText'
import GlareHover from '../components/GlareHover'
import GradientText from '../components/GradientText'
import ProfileCard from '../components/ProfileCard'
import AeroShards from '../components/AeroShards'
import ShinyText from '../components/ShinyText'
import { motion } from 'framer-motion'

export default function Home() {
  const gridRef = useRef(null)
  const itemRefs = useRef([])
  const hasAnimatedRef = useRef(false)

  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const calculate = () => {
      const items = itemRefs.current.filter(Boolean)
      if (!items.length) return

      const gridRect = grid.getBoundingClientRect()
      const centerX = gridRect.left + gridRect.width / 2
      const centerY = gridRect.top + gridRect.height / 2

      let maxDist = 0
      const entries = items.map((item) => {
        const rect = item.getBoundingClientRect()
        const ix = rect.left + rect.width / 2
        const iy = rect.top + rect.height / 2
        const tx = centerX - ix
        const ty = centerY - iy
        const dist = Math.sqrt(tx * tx + ty * ty)

        if (dist > maxDist) maxDist = dist
        
        return { item, tx, ty, dist }
      })

      entries.forEach(({ item, tx, ty, dist }) => {
        item.style.setProperty('--from-x', `${tx}px`)
        item.style.setProperty('--from-y', `${ty}px`)
        const norm = maxDist > 0 ? dist / maxDist : 0
        const delay = norm * 450
        item.style.setProperty('--delay', `${delay}ms`)
      })
    }

    calculate()

    const itemsNow = itemRefs.current.filter(Boolean)
    itemsNow.forEach((item) => item.classList.add('animating'))

    requestAnimationFrame(() => {
      if (grid) {
        grid.classList.add('animate')
        hasAnimatedRef.current = true
      }
    })

    const ro = new ResizeObserver(() => {
      calculate()
    })
    ro.observe(grid)

    return () => ro.disconnect()
  }, [])

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
              className="mx-auto h-20 md:h-30"
            />
            <h1>
              <ScrollFloat
                containerClassName="text-7xl md:text-8xl font-semibold tracking-[-2px]"
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
          <div className="px-[60px] text-center">
            <ScrollReveal
              containerClassName="text-6xl md:text-7xl font-bold tracking-[-0.2px]"
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
              containerClassName="text-lg md:text-2xl leading-relaxed tracking-[-0.1px] text-white/90"
            >
              We are dedicated to offering <ShinyText text="real world practice" color="#b5b5b5" shineColor="#ffdddd" speed={2} /> for students. Our mission is to transform <ShinyText text="classroom knowledge" color="#b5b5b5" shineColor="#ffdddd" speed={2} /> into <ShinyText text="practical expertise" color="#b5b5b5" shineColor="#ffdddd" speed={2} /> and empower students to strengthen their skills and get ready for the real world.
            </ScrollReveal>
           </div>
           </div>
  
          <div
            className="min-h-screen w-full bg-repeat bg-auto bg-center"
            style={{ backgroundImage: "url('/img/background.jpg')" }}
          >
            {/* Join + Stats */}
             <div className="relative z-[1] px-[45px] pt-50 pb-50">
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
            <div className="px-[45px] pt-6 pb-12 relative z-[1]">
          <div
            ref={gridRef}
            className="achievements-grid grid grid-cols-1 gap-12 md:gap-16 pb-20 pt-10"
          >
           {/* Achievements */}
           <div
             ref={(el) => { itemRefs.current[0] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-start"
           >
             <div className="achievement-image w-full aspect-[4/3] rounded-xl overflow-hidden">
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
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Achievements</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 Our team has proudly secured <strong><ShinyText text="Top 5" color="#000000" shineColor="#ffdddd" speed={2} /></strong> in Fashion and Retail Management, <strong><ShinyText text="3rd Place" color="#000000" shineColor="#ffdddd" speed={2} /></strong> in both Restaurant and Food Services Management and Marketing Management, and <strong><ShinyText text="2nd Place" color="#000000" shineColor="#ffdddd" speed={2} /></strong> in Travel Management.
               </p>
             </div>
           </div>

           {/* Events */}
           <div
             ref={(el) => { itemRefs.current[1] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-start"
           >
             <div className="achievement-image w-full aspect-[4/3] rounded-xl overflow-hidden">
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
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Events</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 We run <strong><ShinyText text="ACE Invitationals" color="#000000" shineColor="#ffdddd" speed={2} /></strong>, <strong><ShinyText text="ACE Chronicles" color="#000000" shineColor="#ffdddd" speed={2} /></strong>, and <strong><ShinyText text="ELA" color="#000000" shineColor="#ffdddd" speed={2} /></strong> — events designed to equip students with the skills and experiences needed to succeed in the workplace.
               </p>
               <p className="mt-3 text-4sm"><Link to="/events" className="underline decoration-1 underline-offset-2 hover:text-[#00205B]">See all events →</Link></p>
             </div>
           </div>

           {/* Partnerships */}
           <div
             ref={(el) => { itemRefs.current[2] = el }}
             className="achievement-item group grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-9 items-start"
           >
             <div className="achievement-image w-full aspect-[4/3] rounded-xl overflow-hidden">
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
                   src="https://cdn.creativefabrica.com/2021/04/01/Partnership-icon-Graphics-10261127-1-1-580x386.jpg"
                   alt="UTSC Campus"
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                 />
               </GlareHover>
             </div>
              <div className="achievement-description bg-white/80 p-3 rounded-md">
               <h2 className="text-3xl font-semibold mb-2.5 tracking-[-0.3px]">Partnerships</h2>
               <p className="text-xl leading-relaxed text-[#333]">
                 Proudly sponsored by <strong><ShinyText text="EY" color="#000000" shineColor="#ffdddd" speed={2} /></strong>, <strong><ShinyText text="UofT MMPA" color="#000000" shineColor="#ffdddd" speed={2} /></strong>, <strong><ShinyText text="ICUBE UTM" color="#000000" shineColor="#ffdddd" speed={2} /></strong>, and <strong><ShinyText text="the CFA Society" color="#000000" shineColor="#ffdddd" speed={2} /></strong>. We have also collaborated with RBC, Deloitte, York Region, AutoTrader, and more.
               </p>
            </div>
            </div>
            </div>
          </div>
         </div>
        </div>
    </>
  )
}