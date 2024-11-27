import React from 'react';
import { useState,useEffect } from 'react';
import './Hero.css';
import profile2 from '../../assets/profile2.JPG'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Resume from '../../assets/Devakumaran-resume.pdf'
// import { Div } from 'scroll-reveal-react';
// import Typical from 'react-typical'
// import Typical from 'react-typical';



const Hero = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const roles = ['Frontend Developer'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        if (index < roles[roleIndex].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + roles[roleIndex][index]);
                setIndex(index + 1);
            }, 120); // Delay between letters
            return () => clearTimeout(timeout);
        } else if (index === roles[roleIndex].length) {
            const timeout = setTimeout(() => {
                setIndex(0);
                setText('');
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, 2000); // Delay before switching roles
            return () => clearTimeout(timeout);
        }
    }, [index, roleIndex, roles]);


    return (
       
        <motion.div id='home' className='hero'  initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
            <motion.img src={profile2} alt="profile-image" initial={{ scale: 0 }}
                animate={{ scale: 1}}
                transition={{ duration: 1.5 }} />
            <h1><span>Devakumaran G</span> </h1>
            {/* <h2> I'm a <span>Frontend Developer</span> </h2> */}
             <h2>
                I'm a <span>{text}</span>
            </h2>
            
            <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>I'm a Frontend Developer with a passion for creating beautiful and functional websites.</motion.p>

            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={Resume} download='Devakumaran_resume.pdf'>My Resume</a></div>
            </div>

        </motion.div>
        
    )
}

export default Hero
