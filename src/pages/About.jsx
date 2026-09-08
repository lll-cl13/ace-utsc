export default function About() {
  return (
    <div>
      {/* Contained header */}
      <div className="max-w-7xl mx-auto px-20 py-6 pb-4">
        <h1 className="text-4xl font-semibold mb-8">About Us</h1>
      </div>

      {/* Full-bleed image */}
      <img
        src="https://aceuoft.wordpress.com/wp-content/uploads/2025/09/img_9238-edited.jpg"
        alt="About ACE UTSC"
        className="w-full mb-8"
      />

      {/* Contained content */}
      <div className="max-w-7xl mx-auto px-20">
        <p className="text-lg leading-relaxed mb-6">
          ACE UTSC is the University of Toronto Scarborough’s chapter of Canada’s <strong>largest undergraduate case</strong> competition. We prepare future leaders in <strong>consulting</strong>, <strong>finance</strong>, and <strong>management</strong> by transforming classroom learning into real-world application at the 2-day Nationals in downtown Toronto.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Through case training, industry events, and mentorship, we have supported the professional development of hundreds of students. Our mission is to build <strong>critical</strong> <strong>thinking</strong>, <strong>communication</strong>, and <strong>networking skills</strong> while fostering meaningful connections. All students are welcome to participate in our events, whether or not they are delegates.
        </p>
      </div>

      {/* Full-bleed image */}
      <img
        src="https://aceuoft.wordpress.com/wp-content/uploads/2025/03/img_8418.jpeg?w=1024"
        alt="Mission"
        className="w-full my-8"
      />

      {/* Contained content */}
      <div className="max-w-7xl mx-auto px-20">
        <p className="text-lg leading-relaxed mb-10">
          Our mission is to build a community where students <strong>strengthen</strong> their <strong>communication</strong>, <strong>presentation</strong>, and <strong>problem-solving skills</strong> to excel in their careers. Each year, our delegates proudly represent us at Nationals, consistently placing in the Top 3. In 2024, our chapter was recognized with the <strong>Award for Largest Chapter Growth</strong>, reflecting the dedication and passion of our members.
        </p>

        <h2 className="text-3xl font-semibold mb-6">Our Sponsors</h2>
        <p className="mb-6">ACE UTSC has proudly received sponsorship from a range of reputable organizations, including:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
          <div>
            <img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/552707593_1483908372940497_6092641396353532351_n.jpg" alt="EY" className="h-14 mx-auto object-contain mb-2" />
            <div className="font-semibold">EY</div>
          </div>
          <div>
            <img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/553043371_817168714099790_9159688809164605491_n_resized.jpg" alt="UofT MMPA" className="h-14 mx-auto object-contain mb-2" />
            <div className="font-semibold">UofT MMPA</div>
          </div>
          <div>
            <img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/554337631_4164718567180340_6030518401904829660_n_cropped_cropped_resized.png" alt="ICUBE UTM" className="h-14 mx-auto object-contain mb-2" />
            <div className="font-semibold">ICUBE UTM</div>
          </div>
          <div>
            <img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/553754636_1981939729254480_7985881626194828189_n_resized.jpg" alt="the CFA Society" className="h-14 mx-auto object-contain mb-2" />
            <div className="font-semibold">the CFA Society</div>
          </div>
        </div>

        <p className="text-lg">
          These sponsors have supported our <strong>flagship events</strong> such as the <strong>ACE Invitationals</strong>, helping us create impactful experiences for students across all U of T campuses. <strong>EY, a global leader</strong> in assurance, consulting, and strategy, has been a particularly engaged sponsor, contributing <strong>28 judges</strong> to our tri-campus Invitational. Their involvement provided students with <strong>valuable industry insights, professional feedback,</strong> and <strong>meaningful networking opportunities.</strong>
        </p>
      </div>
    </div>
  )
}
