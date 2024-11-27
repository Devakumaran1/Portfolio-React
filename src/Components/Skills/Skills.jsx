// import React from 'react';
// import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
// import './Skill.css'

// const Skills = () => {
//   return (
//     <div id='skill' className='skills'>
//          <div className="skill-title">
//                 <h1>My Skills</h1>
//                 <img src={theme_pattern} alt="" />
//             </div>
//          <div className="about-skills">
//                 <div className="about-skill"><p>HTML & CSS </p><hr style={{ width: '85%' }} /></div>
//                 <div className="about-skill"><p>Javascript</p><hr style={{ width: '70%' }} /></div>
//                 <div className="about-skill"><p>React JS</p><hr style={{ width: '65%' }} /></div>
//                 <div className="about-skill"><p>Bootstrap</p><hr style={{ width: '70%' }} /></div>
//                 <div className="about-skill"><p>MySql</p><hr style={{ width: '65%' }} /></div>
//                 <div className="about-skill"><p>Python</p><hr style={{ width: '45%' }} /></div>
//             </div>
      
//     </div>
//   )
// }

// export default Skills

import React from 'react';
import { motion } from 'framer-motion';
import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
import './Skill.css';

const Skills = () => {
    return (
        <motion.div
            id="skill"
            className="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="skill-title">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 50 }}
                >
                    My Skills
                </motion.h1>
                <motion.img
                    src={theme_pattern}
                    alt="Theme Pattern"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <div className="about-skills">
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p>HTML & CSS</p>
                    <hr style={{ width: '85%' }} />
                </motion.div>
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>Javascript</p>
                    <hr style={{ width: '70%' }} />
                </motion.div>
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p>React JS</p>
                    <hr style={{ width: '65%' }} />
                </motion.div>
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p>Bootstrap</p>
                    <hr style={{ width: '70%' }} />
                </motion.div>
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p>MySql</p>
                    <hr style={{ width: '65%' }} />
                </motion.div>
                <motion.div
                    className="about-skill"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p>Python</p>
                    <hr style={{ width: '45%' }} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skills;

