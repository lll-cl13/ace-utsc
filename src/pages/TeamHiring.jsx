import { motion } from 'framer-motion'
import TextLoop from '../components/TextLoop'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  },
}

export default function TeamHiring() {
  return (
    <div>
      <div className="px-[45px] py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-semibold tracking-[-1px] mb-6"
          >
            Team Hiring
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#444]"
          >
            Associate Hiring coming soon this Fall.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="mt-2"
          >
            Stay tuned for hiring descriptions!
          </motion.p>
        </motion.div>
      </div>

      <div>
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
      </div>
    </div>
  )
}