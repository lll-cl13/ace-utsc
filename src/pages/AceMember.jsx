export default function AceMember() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-20 py-6 pb-2">
        <h1 className="text-4xl font-semibold mb-6">Become an ACE Member</h1>
      </div>

      {/* Full-bleed image */}
      <img src="https://aceuoft.wordpress.com/wp-content/uploads/2024/09/colours-7.png" alt="" className="mb-8 w-full" />

      <div className="max-w-7xl mx-auto px-20">
        <h2 className="text-2xl font-semibold mb-3">The Delegate Package</h2>
        <p className="mb-2">Your quick guide on becoming an ACE UTSC General Member to ACE Canada Delegate</p>
        <p className="mb-6">Stay tuned for our revised 2024/2025 Delegate Package!</p>
        <p className="mb-8">
          <a href="https://firebasestorage.googleapis.com/v0/b/deca-f0491.appspot.com/o/Delegate_Package.pdf?alt=media&token=76a07149-5014-45d2-a15e-976a085b301b" target="_blank" className="underline">Our Previous Delegate Package</a>
        </p>

        <h2 className="text-2xl font-semibold mb-3">Represent UTSC at ACE Canada Nationals 2024!</h2>
        <p className="mb-6">Join us as an <strong>ACE UTSC General Member</strong> and represent UTSC at a National level.</p>

        <h3 className="text-xl font-semibold mb-2">ACE UTSC General Member Registration Now OPEN!</h3>
        <p className="mb-4">Complete the <a href="https://docs.google.com/forms/d/e/1FAIpQLSewPA5SlxsBvRW4x0PE2hqDenoZNaOR1gyf-wUxH5JRHRt8CQ/viewform" target="_blank" className="underline">Google Form</a></p>

        <h3 className="text-xl font-semibold mb-3">ACE Canada Member Registration</h3>
        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>Go to <a href="https://acenationals.ca/dev/memberRegistration" target="_blank" className="underline">https://acenationals.ca/dev/memberRegistration</a></li>
          <li>Scroll down on the homepage where you will find a register option under the “How Do I Get Involved?”</li>
          <li>Sign in (if you already have an account)/Register as Student (if you don’t already have an account)</li>
          <li>Fill in all fields (If you are making new account)</li>
          <li>Pay $15 membership fee</li>
        </ol>

        <h3 className="text-xl font-semibold mb-2">ACE UTSC General Member Benefits:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Gain exclusive access to ACE Canada events/content</li>
          <li>As well as our training sessions</li>
          <li>Enhance both your hard and soft skills through workshops, training bootcamps, case presentation practice</li>
        </ul>

        <p>Compete individually, as a team (2), or in a special* event (3-5) and choose from a range of competitive categories including Business Law, Corporate Finance and Management Consulting—refine your leadership skills as you compete at Mock Nationals and ACE Canada Nationals.</p>
        <p className="text-xs mt-1">*Require up to 3 weeks of case prep time</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <img src="https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-nationals-2024-1.png" alt="" />
          <img src="https://aceuoft.wordpress.com/wp-content/uploads/2024/09/tricampus.png" alt="" />
          <img src="https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_2725-1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
