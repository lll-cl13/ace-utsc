import { motion } from 'framer-motion';
import DepthCarousel from '../components/DepthCarousel';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.97 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

const carouselItems = [
  {
    image: 'img/Member1.jpg',
    alt: 'ACE UTSC Banner',
  },
  {
    image: 'https://aceuoft.wordpress.com/wp-content/uploads/2023/09/ace-nationals-2024-1.png',
    alt: 'ACE Nationals 2024',
  },
  {
    image: 'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/tricampus.png',
    alt: 'Tri Campus',
  },
  {
    image: 'https://aceuoft.wordpress.com/wp-content/uploads/2024/09/img_2725-1.jpg',
    alt: 'Event Photo',
  },
];

export default function AceMember() {
  return (
    <div>
      <div className="px-[45px] py-6 pb-2">
        <motion.h1 
          className="text-4xl font-semibold tracking-[-1px] mb-6"
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Become an ACE Member
        </motion.h1>
      </div>

      {/* Landscape Depth Carousel at top */}
      <div className="w-full mb-8" style={{ height: '580px', position: 'relative' }}>
        <DepthCarousel
          items={carouselItems}
          depth={180}
          spread={65}
          tilt={14}
          tiltDirection="right"
          perspective={1300}
          visibleCards={3}
          falloff={0.22}
          blur={4}
          autoplay={true}
          loop
          cardWidth={800}
          cardHeight={480}
          radius={12}
          tint="#05060a"
          duration={650}
          ease="power3.out"
          autoplayDelay={2800}
          showIndicators
        />
      </div>

      <div className="px-[45px] pb-16 md:pb-24">
        <motion.div
          variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-3 tracking-[-0.3px]">
            The Delegate Package
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-2 text-[15px] leading-relaxed">
            Your quick guide on becoming an ACE UTSC General Member to ACE Canada Delegate.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-6 text-[15px]">
            Stay tuned for our revised 2024/2025 Delegate Package!
          </motion.p>
          <motion.p variants={itemVariants} className="mb-8 text-[15px]">
            <a href="https://firebasestorage.googleapis.com/v0/b/deca-f0491.appspot.com/o/Delegate_Package.pdf?alt=media&token=76a07149-5014-45d2-a15e-976a085b301b" target="_blank" className="underline hover:text-[#00205B]">
              View previous Delegate Package →
            </a>
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-3 tracking-[-0.3px]">
            Represent UTSC at ACE Canada Nationals
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-6 text-[15px] leading-relaxed">
            Join us as an <strong>ACE UTSC General Member</strong> and represent UTSC at a National level.
          </motion.p>

          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">
            General Member Registration — Now Open
          </motion.h3>
          <motion.p variants={itemVariants} className="mb-4 text-[15px]">
            Complete the <a href="https://docs.google.com/forms/d/e/1FAIpQLSewPA5SlxsBvRW4x0PE2hqDenoZNaOR1gyf-wUxH5JRHRt8CQ/viewform" target="_blank" className="underline hover:text-[#00205B]">Google Form</a>
          </motion.p>

          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-3">
            ACE Canada Member Registration
          </motion.h3>
          <motion.ol 
            variants={containerVariants}
            className="list-decimal pl-6 mb-6 space-y-1"
          >
            <motion.li variants={itemVariants}>Go to <a href="https://acenationals.ca/dev/memberRegistration" target="_blank" className="underline">https://acenationals.ca/dev/memberRegistration</a></motion.li>
            <motion.li variants={itemVariants}>Scroll down on the homepage where you will find a register option under the “How Do I Get Involved?”</motion.li>
            <motion.li variants={itemVariants}>Sign in (if you already have an account)/Register as Student (if you don’t already have an account)</motion.li>
            <motion.li variants={itemVariants}>Fill in all fields (If you are making new account)</motion.li>
            <motion.li variants={itemVariants}>Pay $15 membership fee</motion.li>
          </motion.ol>

          <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-2">
            ACE UTSC General Member Benefits:
          </motion.h3>
          <motion.ul 
            variants={containerVariants}
            className="list-disc pl-6 mb-6"
          >
            <motion.li variants={itemVariants}>Gain exclusive access to ACE Canada events/content</motion.li>
            <motion.li variants={itemVariants}>As well as our training sessions</motion.li>
            <motion.li variants={itemVariants}>Enhance both your hard and soft skills through workshops, training bootcamps, case presentation practice</motion.li>
          </motion.ul>

          <motion.p variants={itemVariants}>
            Compete individually, as a team (2), or in a special* event (3-5) and choose from a range of competitive categories including Business Law, Corporate Finance and Management Consulting—refine your leadership skills as you compete at Mock Nationals and ACE Canada Nationals.
          </motion.p>
            <motion.p variants={itemVariants} className="text-xs mt-1">
              *Require up to 3 weeks of case prep time
            </motion.p>
          </motion.div>
        </div>
      </div>
    )
  }


