export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-20 py-6">
      <h1 className="text-4xl font-semibold mb-8">Contact Us</h1>
      <h2 className="text-2xl mb-4">Get in touch!</h2>
      <p className="mb-6">
        Find us on our socials or email us at <a href="mailto:ace.uoftscarborough@gmail.com" className="underline">ace.uoftscarborough@gmail.com</a>. We’ll get back to you as soon as we can.
      </p>

      <p className="mb-1">1265 Military Trail</p>
      <p className="mb-1">University of Toronto Scarborough</p>
      <p className="mb-6">Scarborough, ON M1C 1A4</p>

      <div className="flex gap-4 mb-8">
        <a href="https://www.instagram.com/aceutsc/" target="_blank" className="underline">Instagram</a>
        <a href="https://www.linkedin.com/company/ace-utsc/" target="_blank" className="underline">LinkedIn</a>
      </div>

      <a
        href="mailto:ace.uoftscarborough@gmail.com"
        className="inline-block px-20 py-3 bg-[#00205B] text-white font-medium rounded hover:bg-[#001a47] transition-colors"
      >
        Email Us
      </a>
    </div>
  )
}
