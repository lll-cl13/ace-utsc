import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlareHover from '../components/GlareHover'
import LineSidebar from '../components/LineSidebar'
import { eventsByYear } from '../data/events'

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const stripRef = useRef(null)
  const stageRef = useRef(null)
  const yearRefs = useRef({})
  const currentXRef = useRef(0)
  const maxXRef = useRef(0)
  const [activeYear, setActiveYear] = useState(eventsByYear[0].id)
  const activeYearRef = useRef(activeYear)
  activeYearRef.current = activeYear
  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 || window.innerHeight < 600
    }
    return false
  })

  // Build flat horizontal sequence: year blocks + event blocks
  const horizontalSlides = []
  eventsByYear.forEach((section) => {
    horizontalSlides.push({ type: 'year', year: section.year, id: section.id })
    section.items.forEach((ev) => {
      horizontalSlides.push({ type: 'event', ...ev, yearId: section.id })
    })
  })

  // Lock page scroll on desktop + wheel-driven horizontal scrub (no up/down)
  useEffect(() => {
    if (isSmallScreen) return

    const strip = stripRef.current
    const stage = stageRef.current
    if (!strip || !stage) return

    // Prevent any vertical page movement
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const updateMax = () => {
      maxXRef.current = -(strip.scrollWidth - stage.offsetWidth + 100)
    }
    updateMax()
    window.addEventListener('resize', updateMax)

    // Wheel controls horizontal only. No page scroll.
    const handleWheel = (e) => {
      e.preventDefault()
      let next = currentXRef.current - (e.deltaY * 0.9)
      next = Math.max(maxXRef.current, Math.min(0, next))
      currentXRef.current = next
      gsap.to(strip, {
        x: next,
        duration: 0.35,
        ease: 'power1.out',
        overwrite: true,
        onUpdate: updateActiveFromPosition,
      })
    }
    stage.addEventListener('wheel', handleWheel, { passive: false })

    // Position exactly as if we "pressed" the first sidebar item (left-aligned like jumpToYear)
    const positionToInitialYear = () => {
      const firstId = eventsByYear[0]?.id
      const targetEl = firstId ? yearRefs.current[firstId] : null
      if (targetEl && strip) {
        const offset = targetEl.offsetLeft
        let targetX = -(offset - 50)
        targetX = Math.max(maxXRef.current, Math.min(0, targetX))
        gsap.set(strip, { x: targetX })
        currentXRef.current = targetX
      } else {
        // fallback
        gsap.set(strip, { x: 0 })
        currentXRef.current = 0
      }
    }
    // Use rAF to ensure refs and layout are ready
    requestAnimationFrame(positionToInitialYear)

    return () => {
      document.documentElement.style.overflow = prevOverflow
      window.removeEventListener('resize', updateMax)
      stage.removeEventListener('wheel', handleWheel)
    }
  }, [isSmallScreen])

  // Small screen detection + vertical fallback on small screens
  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < 768 || window.innerHeight < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Desktop: tween strip to the year. Mobile: scroll to vertical section
  const jumpToYear = (id) => {
    setActiveYear(id)

    if (isSmallScreen) {
      const el = document.getElementById(`m-year-${id}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const targetEl = yearRefs.current[id]
    const strip = stripRef.current
    if (!targetEl || !strip) return

    const offset = targetEl.offsetLeft
    let targetX = -(offset - 50)
    targetX = Math.max(maxXRef.current, Math.min(0, targetX))

    currentXRef.current = targetX
    gsap.to(strip, {
      x: targetX,
      duration: 0.7,
      ease: 'power2.inOut',
      onUpdate: updateActiveFromPosition,
    })
  }

  // Compute which year is "active" based on current horizontal position (match jump target logic)
  const updateActiveFromPosition = () => {
    const strip = stripRef.current
    if (!strip || isSmallScreen) return

    const viewFocus = -currentXRef.current + 50
    let bestId = activeYearRef.current
    let bestDist = Infinity

    eventsByYear.forEach((section) => {
      const el = yearRefs.current[section.id]
      if (!el) return
      const dist = Math.abs(el.offsetLeft - viewFocus)
      if (dist < bestDist) {
        bestDist = dist
        bestId = section.id
      }
    })

    if (bestId && bestId !== activeYearRef.current) {
      setActiveYear(bestId)
    }
  }

  // Continuously track position during/after wheel movements so bold/active in sidebar updates
  useEffect(() => {
    if (isSmallScreen) return

    let rafId
    const tick = () => {
      updateActiveFromPosition()
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isSmallScreen])

  // Mobile: use IntersectionObserver on year sections to keep sidebar active in sync while scrolling vertically
  useEffect(() => {
    if (!isSmallScreen) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the one with highest intersection ratio, or the top one
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const id = visible.target.id.replace('m-year-', '')
          if (id && id !== activeYearRef.current) {
            setActiveYear(id)
          }
        }
      },
      { threshold: [0.1, 0.5, 0.9] }
    )

    // observe after mount
    const timer = setTimeout(() => {
      eventsByYear.forEach((s) => {
        const el = document.getElementById(`m-year-${s.id}`)
        if (el) observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [isSmallScreen])

  return (
    <div className={`flex flex-col bg-white ${!isSmallScreen ? 'flex-1 overflow-hidden' : ''}`}>
      {/* Main stage — flex-1 takes remaining space. No vertical scroll on page. */}
      <div
        ref={stageRef}
        className={`relative ${!isSmallScreen ? 'flex-1 overflow-hidden' : ''}`}
      >
        {!isSmallScreen ? (
          /* Desktop: horizontal strip. Pictures scale to fit screen + caption + linebar */
            <div
              ref={stripRef}
              className="flex h-full gap-8 md:gap-16 pl-[40vw] pt-4 will-change-transform"
            >
            {(() => {
              let yearIdx = 0;
              return horizontalSlides.map((slide) => {
                if (slide.type === 'year') {
                  const isFirst = yearIdx === 0;
                  yearIdx++;
                  return (
                    <div
                      key={`y-${slide.id}`}
                      ref={(el) => {
                        if (el) yearRefs.current[slide.id] = el
                      }}
                      className={`flex-shrink-0 w-[min(46vw,460px)] h-full flex items-center ${isFirst ? 'justify-start' : 'justify-center ml-16 md:ml-24'} select-none`}
                    >
                      <div className="pl-4 md:pl-8 text-[58px] md:text-[72px] font-semibold tracking-[-3.5px] leading-[0.86] text-[#00205B]">
                        {slide.year.split('–').map((p, i) => (
                          <div key={i}>{p.trim()}</div>
                        ))}
                      </div>
                    </div>
                  )
                }

                // Event block: big picture (flex-1), tiny caption below, everything fits
                return (
                  <div
                    key={slide.slug}
                    className="flex-shrink-0 w-[min(92vw,920px)] h-full flex flex-col pr-8 md:pr-12"
                  >
                    <Link to={`/events/${slide.slug}`} className="block group flex-1 flex flex-col">
                    <div className="relative overflow-hidden rounded-3xl shadow-sm" style={{ height: 'min(70vh, 670px)' }}>                      
                      <GlareHover
                          width="100%"
                          height="100%"
                          background="transparent"
                          borderRadius="24px"
                          borderColor="transparent"
                          glareColor="#ffffff"
                          glareOpacity={0.3}
                          glareAngle={-26}
                          glareSize={260}
                          transitionDuration={680}
                          playOnce={false}
                        >
                           <img
                             src={slide.img}
                             alt={slide.title}
                             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                           />
                        </GlareHover>
                      </div>

                      <div className="mt-1 pl-1 h-[35px] flex-shrink-0">
                        <div className="text-[13px] font-semibold tracking-[-0.2px] leading-tight">
                          {slide.title}
                        </div>
                        <div className="mt-0.5 text-[9px] text-[#00205B]/70 space-y-[1px]">
                          <div>📅 {slide.date}</div>
                          <div>📍 {slide.location}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            })()}
          </div>
        ) : (
          /* Mobile vertical */
          <div className="px-[45px] pt-4 pb-4">
            {eventsByYear.map((section) => (
              <div key={section.id} id={`m-year-${section.id}`} className="mb-10">
                <div className="text-center text-[48px] font-semibold tracking-[-2.2px] leading-none text-[#00205B] mb-5">
                  {section.year.split('–').map((p, i) => <div key={i}>{p.trim()}</div>)}
                </div>

                {section.items.map((ev) => (
                  <Link key={ev.slug} to={`/events/${ev.slug}`} className="block group mb-10">
                    <div className="relative w-full rounded-3xl overflow-hidden shadow-sm" style={{ height: 'min(58vh, 420px)' }}>
                      <GlareHover
                        width="100%"
                        height="100%"
                        background="transparent"
                        borderRadius="20px"
                        borderColor="transparent"
                        glareColor="#ffffff"
                        glareOpacity={0.28}
                        glareAngle={-26}
                        glareSize={240}
                        transitionDuration={600}
                        playOnce={false}
                      >
                        <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1] bold" />
                      </GlareHover>
                    </div>
                    <div className="mt-3">
                      <div className="text-[18px] font-semibold tracking-[-0.2px]">{ev.title}</div>
                      <div className="mt-1 text-[13px] text-[#00205B]/70">
                        📅 {ev.date}<br />📍 {ev.location}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Linebar always visible at bottom */}
      <div className="border-t border-[#00205B]/10 bg-white/95 backdrop-blur-sm px-[45px] py-1 min-h-[42px] flex-shrink-0">
        <div>
          <LineSidebar
            items={eventsByYear.map(y => y.year)}
            orientation="horizontal"
            spread={true}
            showIndex={false}
            showMarker={true}
            markerLength={15}
            markerGap={2}
            tickScale={0.5}
            itemGap={24}
            minorTicks={20}
            accentColor="#00205B"
            textColor="#00205B"
            markerColor="#00205B"
            fontSize={0.62}
            maxShift={2}
            smoothing={80}
            defaultActive={eventsByYear.findIndex(y => y.id === activeYear)}
            onItemClick={(idx) => {
              const y = eventsByYear[idx]
              if (y) jumpToYear(y.id)
            }}
          />
        </div>
      </div>
    </div>
  )
}
