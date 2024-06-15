import React from 'react'
import sing1 from '../images/sing1.jpg'
import sing2 from '../images/sing2.jfif'
import sing3 from '../images/sing3.jpg'
import sing4 from '../images/sing3.png'
import sing5 from '../images/sing4.webp'
import sing6 from '../images/sing5.jfif'
import { motion } from 'framer-motion'
import { fadIn } from '../variants'

function RightHead() {
    return (
        <motion.div className='righthead'
            variants={fadIn('left', 0.01)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
        >
            <div>
                <div className='imaggrid'>
                    <img src={sing1} alt="sing1" />
                    <img src={sing2} alt="sing2" />
                </div>
                <div className='imaggrid'>
                    <img src={sing5} alt="sing5" />
                    <img src={sing4} alt="sing4" />
                    <img src={sing3} alt="sing3" />
                </div>
                <div className='imaggrid'>
                    <img src={sing6} alt="sing6" />
                </div>
            </div>
        </motion.div>
    )
}

export default RightHead
