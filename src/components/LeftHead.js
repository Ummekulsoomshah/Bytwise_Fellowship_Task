import React from 'react'
import { motion } from 'framer-motion'
import { fadIn } from '../variants'
function LeftHead() {
  return (
    <motion.div className='lefthead'
    variants={fadIn('right', 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}>
     <h2>Immerse Yourself in the Music</h2>
     <p>Enjoy your favorite tunes, handpicked for you and your loved ones.</p>
     <button className='mainbutton'>
         Get Started
     </button>

    </motion.div>
  )
}

export default LeftHead
