import { useParams, Link } from 'react-router-dom'

const eventContents = {
  'ace-nationals-2025-2026': {
    title: 'ACE NATIONALS 2025-2026',
    date: '📅 Saturday – Sunday, January 23-25, 2026',
    loc: '📍 Sheraton Centre Toronto Hotel, 123 Queen St W, Toronto',
    imgs: [
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/03/img_2097.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/03/img_2250.jpeg?resize=2000%2C2000',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/03/20260124_012015234_ios.jpg?resize=2000%2C2000',
    ],
    body: 'Congratulations to all our students for their incredible performance at this year’s ACE Nationals! Beyond the competition itself, you have gained the kind of real-world experience and professional connections that simply can’t be taught in a classroom.\n\nWe are incredibly proud of the way you represented our chapter, showing not just technical skill, but the maturity and growth that define the next generation of industry leaders. We look forward to seeing the incredible things you’ll achieve next with these new insights in hand!',
  },
  'ace-utsc-invitationals-2025': {
    title: 'ACE UTSC Invitationals 2025',
    date: '📅 Saturday, January 10, 2025, 10:00am-3:00pm',
    loc: '📍 Instructional Centre (IC), University of Toronto Scarborough',
    imgs: [
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0426.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0420.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0439-edited.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0447.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0463.jpeg?w=1024',
      'https://aceuoft.wordpress.com/wp-content/uploads/2026/01/img_0455.jpeg?w=1024',
    ],
    body: 'Thank you everyone for joining our very first UTSC ACE Invitationals Case Competition! We hope you gained valuable experience and skills to carry forward into the ACE Nationals.\n\nCongratulations to our 1st Place Team:\nAshley Shen — Accounting & Corporate finance\nMeghana Kuchipudi & Mia Yiu — Marketing Management\nManasvi Naik — Management Consulting',
  },
  'emerging-leaders-academy-2025': {
    title: 'Emerging Leaders Academy (2025)',
    date: '📅 Tuesday, September 16, 2025, 5:30pm-8:30pm',
    loc: '📍 William Doo Auditorium (45 Willcocks St)',
    imgs: ['https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1733534526938.jpg?w=1024'],
    body: 'Presenting Emerging Leader Academy (ELA) 2025, ACE’s flagship event. Learn from subject matter experts from various industries: Consulting, Finance, and Tech & Innovation. Special thank you for all the panelists that came to our events and shared your valuable career advices!',
    extra: 'https://www.instagram.com/reel/DPHJU3lDkvW/',
  },
  'ace-uoft-invitationals-2024': {
    title: 'ACE UofT Invitationals 2024',
    date: '📅 Sunday, November 24, 2024, 10:00am-4:30pm',
    loc: '📍 Bahen Centre for Information Technology (40 St. George St)',
    imgs: ['https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1733534526938.jpg?w=1024'],
    body: 'Get ready to compete, connect, and conquer‼️Join us at the ACE UofT Invitationals, where you’ll tackle real-world business challenges, gain insights from industry experts, and showcase your skills',
  },
  'ace-chronicles': {
    title: 'ACE Chronicles',
    date: '📅 Week 1: October 2, 2024, 7-9pm (Finance and Accounting)\n📅 Week 2: October 10, 2024, 7-9pm (Technology and Innovation/ Risk Tech Consulting)\n📅 Week 3: October 16, 2024, 7-9pm (Management Consulting)\n📅 Week 4: October 23, 2024, 7-9pm (Marketing Management)',
    loc: '📍 Instructional Centre (IC), University of Toronto Scarborough',
    imgs: ['https://aceuoft.wordpress.com/wp-content/uploads/2025/03/1728951997763.jpg?w=1024'],
    body: 'This exciting 4-week series is for all UTSC students, including both delegates and non-delegates. Join us as we provide a comprehensive overview of ACE training sessions and a sample case competition. This is a unique opportunity for you to\n\n1. Gain insights into the ACE competition and learn how to participate in Nationals\n\n2. Network with professionals from diverse fields who can offer valuable advice to enhance your case competition skills.',
  },
  'emerging-leaders-academy': {
    title: 'Emerging Leaders Academy',
    date: '📅 Saturday, July 27, 2024, 10:00am-4:30pm',
    loc: '📍 Instructional Centre (IC), University of Toronto Scarborough',
    imgs: ['https://aceuoft.wordpress.com/wp-content/uploads/2023/09/emerging-leaders-academy.png?w=1024'],
    body: 'Presenting Emerging Leader Academy (ELA) 2024, ACE’s flagship event. Learn from subject matter experts from various industries: Consulting, Entrepreneurship, Finance, and Tech. Gear up for fireside chat’s with industry professionals, networking, and practice solving case studies!',
  },
  'ace-uoft-invitationals-2023': {
    title: 'ACE UofT Invitationals 2023',
    date: '📅 Saturday, November 25, 2023 ; 10:30am-5:00pm',
    loc: '📍 University College, University of Toronto St. George',
    imgs: [
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/tricampus2.png',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/20231125_164145.jpg',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/20231125_165122-1.jpg',
    ],
    body: 'Are you hoping to practice your case competition skills before Nationals? ‼️👀\n\nInvitationals is quickly approaching! Come put your problem solving and critical thinking skills to the test. You can compete as an individual or a team choosing from various categories including Management Consulting, Marketing, Accounting/Finance and more!',
  },
  'taste-of-ace': {
    title: 'Taste of ACE (Now: ACE Chronicles)',
    date: '📅 Thursday, October 19, 2023, 7:00pm-9:00pm',
    loc: '📍 Instructional Centre (IC), University of Toronto Scarborough',
    imgs: [
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_9238.jpg',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_9146.jpg',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_9183.jpg',
    ],
    body: 'ACE training is officially starting! And you’re invited to the first session of the year. Join us October 19th at 7pm in IC300 to learn more about what ACE has in store for this year and work on a consulting and ACE case with a panel of EY consultants!\n\nThis event is open to all UTSC students but priority is given to registered ACE delegates as spots are limited.',
  },
  'all-about-ace': {
    title: 'All About ACE',
    date: '📅 Thursday, September 14, 2023 ; 5:30pm-7:30pm',
    loc: '📍 Instructional Centre (IC), University of Toronto Scarborough',
    imgs: [
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_4545-1.jpg',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_4519.jpg',
      'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_4503.jpg',
    ],
    body: 'Are you ready for a night of mystery, games, and more? Join us on September 14th at 5:30pm, in the IC Atrium to in learn more about the biggest case competition club in Canada with ACE UTSC’s first event of the semester – All About ACE! 🔍',
  },
}

export default function EventDetail() {
  const { slug } = useParams()
  const ev = eventContents[slug]

  if (!ev) {
    return (
      <div className="max-w-7xl mx-auto px-20 py-6">
        <p>Event not found. <Link to="/events" className="underline">Back to Events</Link></p>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-20 py-6 pb-2">
        <Link to="/events" className="text-sm underline mb-4 inline-block">← All Events</Link>
        <h1 className="text-4xl font-semibold mb-3">{ev.title}</h1>
        <p className="mb-1 whitespace-pre-line">{ev.date}</p>
        <p className="mb-6">{ev.loc}</p>
      </div>

      {/* Full-bleed images */}
      {ev.imgs.map((src, i) => (
        <img key={i} src={src} alt="" className="w-full mb-4" />
      ))}

      <div className="max-w-7xl mx-auto px-20 pt-2">
        <div className="prose max-w-none text-lg whitespace-pre-line">{ev.body}</div>

        {ev.extra && (
          <p className="mt-4">
            <a href={ev.extra} target="_blank" rel="noreferrer" className="underline">View on Instagram →</a>
          </p>
        )}
      </div>
    </div>
  )
}
