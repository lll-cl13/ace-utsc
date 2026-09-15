import PixelSwap from '../components/PixelSwap';
import AeroShards from '../components/AeroShards';

export default function About() {
  return (
    <div className="relative bg-[#120F17] text-white -mt-16 pt-16 md:pt-20 flex-1 flex flex-col overflow-hidden">
      <AeroShards
        backgroundColor="#120F17"
        shardColor="#001E44"
        accentColor="#A80000"
        placement="full"
        flow="stream"
        material="pearl"
        detail="balanced"
        effect="none"
        scale={1}
        spread={1}
        depth={1}
        speed={1}
        spin={1}
        interaction="repel"
        density={1.5}
        shardSize={1.1}
        stretch={1}
        turbulence={1}
        glow={1}
        edgeSoftness={2}
        bloom={0.5}
        grain={0.05}
        chromaticAberration={0.0075}
        transitionDuration={1}
        interactionRadius={1.5}
        interactionStrength={0.5}
        rippleIntensity={1}
        holdToGather
        paused={false}
      />

      {/* Contained header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-6 pb-4">
        <h1 className="text-4xl font-semibold tracking-[-1px] mb-8">About Us</h1>
      </div>

      {/* Image left + text right */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
          <div>
            <img
              src="https://aceuoft.wordpress.com/wp-content/uploads/2025/09/img_9238-edited.jpg"
              alt="About ACE UTSC"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="space-y-5 text-[15.5px] leading-[1.72]">
            <p>
              ACE UTSC is the University of Toronto Scarborough’s chapter of Canada’s <strong>largest undergraduate case</strong> competition. We prepare future leaders in <strong>consulting</strong>, <strong>finance</strong>, and <strong>management</strong> by transforming classroom learning into real-world application at the 2-day Nationals in downtown Toronto.
            </p>
            <p>
              Through case training, industry events, and mentorship, we have supported the professional development of hundreds of students. Our mission is to build <strong>critical thinking</strong>, <strong>communication</strong>, and <strong>networking skills</strong> while fostering meaningful connections.
            </p>
          </div>
        </div>
      </div>

      {/* Text left + image right */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-center">
          <div className="order-2 md:order-1 space-y-5 text-[15.5px] leading-[1.72]">
            <p>
              Our mission is to build a community where students <strong>strengthen</strong> their <strong>communication</strong>, <strong>presentation</strong>, and <strong>problem-solving skills</strong> to excel in their careers. Each year, our delegates proudly represent us at Nationals, consistently placing in the Top 3. In 2024, our chapter was recognized with the <strong>Award for Largest Chapter Growth</strong>.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://aceuoft.wordpress.com/wp-content/uploads/2025/03/img_8418.jpeg?w=1024"
              alt="Our Mission"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Sponsors section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <h2 className="text-2xl font-semibold mb-4 tracking-[-0.4px]">Our Sponsors</h2>
        <p className="mb-1">ACE UTSC has proudly received sponsorship from a range of reputable organizations, including:</p>
        <p className="mb-6 text-sm text-white/60">Hover over each sponsor to reveal their logo</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8 text-center">
          <div>
            <PixelSwap
              firstContent={<div style={{height:'100%',background:'#f1f5f9',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:'#475569',fontWeight:500,padding:'8px'}}>EY</div>}
              secondContent={<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'8px'}}><img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/552707593_1483908372940497_6092641396353532351_n.jpg" alt="EY" style={{height:'100%',width:'auto',objectFit:'contain'}} /></div>}
              trigger="hover"
              pixelSize={8}
              duration={650}
              pixelDuration={280}
              aspectRatio="5 / 1"
              className="cursor-pointer" style={{height:'160px', aspectRatio:'auto', border:'1px solid #e2e8f0', borderRadius:'8px'}}
            />
            <div className="font-semibold mt-2 text-sm">EY</div>
          </div>
          <div>
            <PixelSwap
              firstContent={<div style={{height:'100%',background:'#f1f5f9',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:'#475569',fontWeight:500,padding:'8px'}}>UofT MMPA</div>}
              secondContent={<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'8px'}}><img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/553043371_817168714099790_9159688809164605491_n_resized.jpg" alt="UofT MMPA" style={{height:'100%',width:'auto',objectFit:'contain'}} /></div>}
              trigger="hover"
              pixelSize={8}
              duration={650}
              pixelDuration={280}
              aspectRatio="5 / 1"
              className="cursor-pointer" style={{height:'160px', aspectRatio:'auto', border:'1px solid #e2e8f0', borderRadius:'8px'}}
            />
            <div className="font-semibold mt-2 text-sm">UofT MMPA</div>
          </div>
          <div>
            <PixelSwap
              firstContent={<div style={{height:'100%',background:'#f1f5f9',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:'#475569',fontWeight:500,padding:'8px'}}>ICUBE UTM</div>}
              secondContent={<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'8px'}}><img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/554337631_4164718567180340_6030518401904829660_n_cropped_cropped_resized.png" alt="ICUBE UTM" style={{height:'100%',width:'auto',objectFit:'contain'}} /></div>}
              trigger="hover"
              pixelSize={8}
              duration={650}
              pixelDuration={280}
              aspectRatio="5 / 1"
              className="cursor-pointer" style={{height:'160px', aspectRatio:'auto', border:'1px solid #e2e8f0', borderRadius:'8px'}}
            />
            <div className="font-semibold mt-2 text-sm">ICUBE UTM</div>
          </div>
          <div>
            <PixelSwap
              firstContent={<div style={{height:'100%',background:'#f1f5f9',display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:'#475569',fontWeight:500,padding:'8px'}}>CFA Society</div>}
              secondContent={<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',padding:'8px'}}><img src="https://aceuoft.wordpress.com/wp-content/uploads/2025/10/553754636_1981939729254480_7985881626194828189_n_resized.jpg" alt="the CFA Society" style={{height:'100%',width:'auto',objectFit:'contain'}} /></div>}
              trigger="hover"
              pixelSize={8}
              duration={650}
              pixelDuration={280}
              aspectRatio="5 / 1"
              className="cursor-pointer" style={{height:'160px', aspectRatio:'auto', border:'1px solid #e2e8f0', borderRadius:'8px'}}
            />
            <div className="font-semibold mt-2 text-sm">CFA Society</div>
          </div>
        </div>

        <p className="text-[15px] leading-[1.7] max-w-3xl">
          These sponsors support our flagship events such as the <strong>ACE Invitationals</strong>. EY in particular has been deeply engaged, contributing judges and valuable industry insight to our students.
        </p>
      </div>
    </div>
  )
}
