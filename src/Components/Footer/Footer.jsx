import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
motion

const Footer = () => {

    const date=new Date().getFullYear()

  return (
  
    <motion.div className='footer' initial={{ x: 0, opacity: 0 }}
    animate={{ y:10 , opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}>
       <p> &copy; {date} All rights reserved by devakumaran </p>

        <AnchorLink className='anchor-link' offset={50} href='#home' ><i className='bx bxs-up-arrow-square' ></i></AnchorLink>
    </motion.div>
  )
}

export default Footer
