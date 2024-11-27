// import React from 'react';
// import './About.css';
// import theme_pattern from '../../assets/assets form net/theme_pattern.svg'
// import profile_about from '../../assets/profile_about.JPG';
// import { motion } from 'framer-motion';

// const About = () => {
//     return (
//         <div id='about' className='about'>
//             <div className="about-title">
//                 <h1>About Me</h1>
//                 <img src={theme_pattern} alt="" />
//             </div>
//             <div className="about-sections">
//                 <div className="about-left">
//                     <img src={profile_about} alt="" width={'350px'} />
//                 </div>
//                 <div className="about-right">
//                     <div className="about-para">
//                         <p>I'm a frontend Developer with a passion for creating beautiful and functional websites. I have experience working with HTML, CSS, JavaScript and some frontend frameworkes.</p>
//                         <p>My goal is to bring your ideas to life and create engaging user experiences that make your business stand out.</p>
//                     </div>
//                     <div className="social-media">
//                         <h3>Know from Social Media: </h3>
//                         <div className='media'>
//                             <i className='bx bxl-instagram'></i>
//                             <i className='bx bxl-whatsapp' ></i>
//                             <i className='bx bxl-facebook-circle' ></i>
//                             <i className='bx bxl-linkedin' ></i>
//                         </div>
//                     </div>
//                 </div>
//             </div>
           

//         </div>
//     )
// }

// export default About

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
import profile_about from '../../assets/profile_about.JPG';

const About = () => {
    return (
        <motion.div
            id="about"
            className="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="about-title">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 50 }}
                >
                    About Me
                </motion.h1>
                <motion.img
                    src={theme_pattern}
                    alt="Pattern"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <div className="about-sections">
                <motion.div
                    className="about-left"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <img src={profile_about} alt="Profile" width={'350px'} />
                </motion.div>

                <motion.div
                    className="about-right"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    <div className="about-para">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            I'm a frontend Developer with a passion for creating beautiful and functional websites. I have experience working with HTML, CSS, JavaScript and some frontend frameworks.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            My goal is to bring your ideas to life and create engaging user experiences that make your business stand out.
                        </motion.p>
                    </div>

                    <div className="social-media">
                        <h3>Know from Social Media: </h3>
                        <div className="media">
                            <a href="https://github.com/Devakumaran1" target='_blank'><i class='bx bxl-github'></i></a>
                        <a href="https://www.instagram.com/stark_deva___/" target="_blank"> <i className="bx bxl-instagram"></i></a>
                            <a href="https://wa.me/8807245672" target='_blank'> <i className="bx bxl-whatsapp"></i></a>
                             <a href="https://www.facebook.com/stark.deva.7" target='_blank'><i className="bx bxl-facebook-circle"></i> </a>
                            <a href="https://www.linkedin.com/in/devakumarang" target="_blank"> <i className="bx bxl-linkedin"></i> </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
