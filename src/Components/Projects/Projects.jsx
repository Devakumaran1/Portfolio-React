// import React from 'react';
// import './Projects.css';
// import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
// import projectData from '../../assets/project-images/ProjectDataset.js';

// const Projects = () => {
//   return (
//     <div id='projects' className='projects'>
//         <div className="project-title">
//             <h1>My Projects</h1>
//             <img src={theme_pattern} alt="" />
//         </div>
//         <div className="project-grid">
//             {projectData.map((project)=>{
//               return (
//                 <div className='project-card' key={project.p_no}>
//                   <img src={project.p_img} alt="project_image" />
//                   <h2 className='title'>{project.p_name}</h2>
//                   <a href={project.p_link} className='view-btn' target='_blank'>Learn more</a>
//                 </div>
//               )
//             })}

            
//         </div>
      
//     </div>
//   )
// }

// export default Projects


import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
import projectData from '../../assets/project-images/ProjectDataset.js';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-title">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          My Projects
        </motion.h1>
        <motion.img
          src={theme_pattern}
          alt="Theme Pattern"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="project-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.p_no}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.5, // Stagger the animations for each card
            }}
          >
            <img src={project.p_img} alt="project_image" />
            <h2 className="title">{project.p_name}</h2>
            <a href={project.p_link} className="view-btn" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




