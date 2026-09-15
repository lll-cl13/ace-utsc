import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TextLoop from '../components/TextLoop'
import GlareHover from '../components/GlareHover'

const events2025 = [
  {
    slug: 'ace-nationals-2025-2026',
    title: 'ACE Nationals 2025-2026',
    date: 'Saturday – Sunday, January 23-25, 2026',
    location: 'Sheraton Centre Toronto Hotel, 123 Queen St W, Toronto',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/03/img_2097.jpeg?w=1024',
  },
  {
    slug: 'ace-utsc-invitationals-2025',
    title: 'ACE UTSC Invitationals 2025',
    date: 'Saturday, January 10, 2025, 10:00am-3:00pm',
    location: 'Instructional Centre (IC), University of Toronto Scarborough',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0230-edited-2.jpeg?w=1024',
  },
  {
    slug: 'emerging-leaders-academy-2025',
    title: 'Emerging Leaders Academy',
    date: 'Tuesday, September 16, 2025, 5:30pm-8:30pm',
    location: 'William Doo Auditorium (45 Willcocks St)',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1733534526938.jpg?w=1024',
  },
]

const events2024 = [
  {
    slug: 'ace-uoft-invitationals-2024',
    title: 'ACE UofT Invitationals 2024 (sponsored by EY)',
    date: 'Sunday, November 24, 2024, 10:00am-4:30pm',
    location: 'Bahen Centre for Information Technology (40 St. George St)',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1728951997763.jpg?w=1024',
  },
  {
    slug: 'ace-chronicles',
    title: 'ACE Chronicles',
    date: 'October 2024 Series Event',
    location: 'University of Toronto Scarborough',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1723411287590.jpg?w=768',
  },
  {
    slug: 'emerging-leaders-academy',
    title: 'Emerging Leaders Academy',
    date: 'Saturday, July 27, 2024, 10:00am-4:30pm',
    location: 'Instructional Centre (IC), University of Toronto Scarborough',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2023/09/emerging-leaders-academy.png?w=1024',
  },
]

const events2023 = [
  {
    slug: 'ace-uoft-invitationals-2023',
    title: 'ACE UofT Invitationals 2023',
    date: 'Saturday, November 25, 2023 ; 10:30am-5:00pm',
    location: 'University College, University of Toronto St. George',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-nationals-2024-1.png',
  },
  {
    slug: 'taste-of-ace',
    title: 'Taste of ACE (Now: ACE Chronicles)',
    date: 'Thursday, October 19, 2023, 7:00pm-9:00pm',
    location: 'Instructional Centre (IC), University of Toronto Scarborough',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_9238.jpg?w=1024',
  },
  {
    slug: 'all-about-ace',
    title: 'All About ACE',
    date: 'Thursday, September 14, 2023 ; 5:30pm-7:30pm',
    location: 'Instructional Centre (IC), University of Toronto Scarborough',
    img: 'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_4513.jpg?w=1024',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.85, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
}

export default function Events() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-10 py-6">
        <motion.h1 
        className="text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Events
      </motion.h1>

      <YearSection title="2025 – 2026" events={events2025} />
      <YearSection title="2024 – 2025" events={events2024} />
      <YearSection title="2023 – 2024" events={events2023} />
      </div>

      <TextLoop
        text="ACE UTSC"
        shape="wave"
        speed={90}
        direction="forward"
        separator="✦"
        curviness={68}
        fontSize={46}
        fontWeight={800}
        letterSpacing={0.5}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#09346A"
          ribbonWidth={86}
          pauseOnHover={false}
        />
    </>
  )
}

function YearSection({ title, events }) {
  return (
    <div className="mb-10">
      <RollingTitle text={title} />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {events.map((ev) => (
          <EventCard key={ev.slug} {...ev} />
        ))}
      </motion.div>
    </div>
  )
}

function EventCard({ slug, title, date, location, img }) {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ scale: 1.015 }}
      className="group"
    >
      <Link to={`/events/${slug}`} className="block overflow-hidden rounded">
        <div className="w-full aspect-video overflow-hidden">
          <GlareHover
            width="100%"
            height="100%"
            background="transparent"
            borderRadius="0"
            borderColor="transparent"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <motion.img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </GlareHover>
        </div>
      </Link>

      <div className="mt-4">
        <h3 className="text-xl font-semibold leading-tight">
          <Link to={`/events/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        
        <motion.div 
          variants={textVariants}
          className="mt-2 space-y-1 text-sm text-gray-600"
        >
          <p>📅 {date}</p>
          <p>📍 {location}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

function RollingTitle({ text }) {
  return (
    <div className="overflow-hidden mb-6 h-8 relative">
      <motion.div 
        className="flex flex-col"
        initial={{ y: 0 }}
        whileInView={{ y: "-50%" }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl font-semibold leading-none">{text}</h2>
        <h2 className="text-2xl font-semibold leading-none">{text}</h2>
      </motion.div>
    </div>
  )
}
