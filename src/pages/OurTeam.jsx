const teams = {
  'Co-President': [
    { name: 'Maria Mahfuz', role: 'Co-President', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/1.png', linkedin: 'https://www.linkedin.com/in/maria-mahfuz/' },
    { name: 'Juhi Shah', role: 'Co-President', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/2.png', linkedin: 'https://www.linkedin.com/in/juhishah02/' },
  ],
  'Business Development': [
    { name: 'Marzuk Ahmed', role: 'VP of Business Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/4-1.png', linkedin: 'https://www.linkedin.com/in/marzuk-ahmed-052433242/' },
    { name: 'Jaquelin Cen', role: 'VP of Business Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/3-1.png', linkedin: 'https://www.linkedin.com/in/jaquelincen/' },
    { name: 'Iris Xie', role: 'Director of Business Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/5-1.png', linkedin: 'https://www.linkedin.com/in/iris-xie-a305aa364/' },
    { name: 'Niyati Patel', role: 'Director of Business Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/6-1.png', linkedin: 'https://www.linkedin.com/in/niyatijpatel/' },
    { name: 'Sharona Afshinmajd', role: 'Director of Business Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/7-1.png', linkedin: 'https://www.linkedin.com/in/sharona-afshinmajd/' },
  ],
  'Delegate Development': [
    { name: 'Kavyashree Ragothaman', role: 'VP of Delegate Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/8.png', linkedin: 'https://www.linkedin.com/in/kavyarago/' },
    { name: 'Ashley Shen', role: 'Director of Delegate Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/9.png', linkedin: 'https://www.linkedin.com/in/ashley-shen-utsc/' },
    { name: 'Mia Yiu', role: 'Director of Delegate Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/10.png', linkedin: 'https://www.linkedin.com/in/mia-yiu-706b09383/' },
    { name: 'Simon Zhou', role: 'Director of Delegate Development', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/11.png', linkedin: 'https://www.linkedin.com/in/simon-zhou-6152a2256/' },
  ],
  'Events': [
    { name: 'Kaylynn Joseph', role: 'VP of Events', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/12.png', linkedin: 'https://www.linkedin.com/in/kaylynnjoseph/' },
    { name: 'Maryam Rehman', role: 'VP of Events', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/13.png', linkedin: 'https://www.linkedin.com/in/maryam-rehman-14a041318/' },
    { name: 'Yalini Balasingam', role: 'Director of Events', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/14.png', linkedin: 'https://www.linkedin.com/in/yalinibalasingam/' },
    { name: 'Jessica Yuan', role: 'Director of Events', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/15.png', linkedin: 'https://www.linkedin.com/in/jessica-xin-yuan/' },
    { name: 'Minahil Asad', role: 'Director of Events', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/16.png', linkedin: 'https://www.linkedin.com/in/minahilasad/' },
  ],
  'Finance': [
    { name: 'Minghao Zhang', role: 'VP of Finance', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/17.png?w=1024', linkedin: 'https://www.linkedin.com/in/minghaozhang/' },
    { name: 'Maira Omar', role: 'Director of Finance', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/18.png?w=1024', linkedin: 'https://www.linkedin.com/in/maira-omar-b72378383/' },
  ],
  'Marketing': [
    { name: 'Farheen Shuja', role: 'VP of Marketing', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/19.png', linkedin: 'https://www.linkedin.com/in/farheen-shuja/' },
    { name: 'Bella Ly', role: 'Director of Marketing Strategy', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/20.png?w=1024', linkedin: 'https://www.linkedin.com/in/bella-ly-5a1751382/' },
    { name: 'Muchen Xie', role: 'Director of Creativity & Design', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/21.png', linkedin: 'https://www.linkedin.com/in/muchenxie/' },
    { name: 'Chloe Lai', role: 'Director of IT', img: 'https://aceuoft.wordpress.com/wp-content/uploads/2026/06/22.png?w=1024', linkedin: 'https://www.linkedin.com/in/chloemylai/' },
  ],
}

export default function OurTeam() {
  return (
    <div className="max-w-7xl mx-auto px-20 py-6">
      <h1 className="text-4xl font-semibold mb-8">Our Team 2026-2027</h1>

      {Object.entries(teams).map(([dept, members]) => (
        <div key={dept} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-1">{dept}</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {members.map((m, idx) => (
              <div key={idx}>
                <img src={m.img} alt={m.name} className="w-full mb-3 rounded" />
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="text-sm underline block">LinkedIn</a>
                <div className="font-semibold mt-1">{m.name}</div>
                <div className="text-sm text-gray-600">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
