import { Link } from 'react-router-dom'

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

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-20 py-6">
      <h1 className="text-4xl font-semibold mb-10">Events</h1>

      <h2 className="text-2xl font-semibold mb-4">2025 – 2026</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events2025.map(ev => (
          <EventCard key={ev.slug} {...ev} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">2024 – 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events2024.map(ev => (
          <EventCard key={ev.slug} {...ev} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">2023 – 2024</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events2023.map(ev => (
          <EventCard key={ev.slug} {...ev} />
        ))}
      </div>
    </div>
  )
}

function EventCard({ slug, title, date, location, img }) {
  return (
    <div>
      <Link to={`/events/${slug}`}>
        <img src={img} alt={title} className="w-full rounded aspect-video object-cover mb-3 hover:opacity-65 transition" />
      </Link>
      <h3 className="text-xl font-semibold">
        <Link to={`/events/${slug}`}>{title}</Link>
      </h3>
      <p className="text-sm mt-1">📅 {date}</p>
      <p className="text-sm">📍 {location}</p>
    </div>
  )
}
