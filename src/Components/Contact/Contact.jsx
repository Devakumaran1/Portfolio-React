// import React from 'react';
// import './Contact.css';
// import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
// import mailIcon from '../../assets/assets form net/mail_icon.svg';
// import callIcon from '../../assets/assets form net/call_icon.svg';
// import locationIcon from '../../assets/assets form net/location_icon.svg';


// const Contact = () => {

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         formData.append("access_key", "3bad4425-dc21-4eb0-ad36-174dc691bf38");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         if (res.success) {
//             alert(res.message)
//             event.target.reset()
//         }


//     };

//     return (
//         <div id='contact' className='contact'>
//             <div className="contact-title">
//                 <h1>Get in Touch</h1>
//                 <img src={theme_pattern} alt="" />
//             </div>
//             <div className="contact-section">
//                 <div className="contact-left">
//                     <h1>let's Talk</h1>
//                     <p>I'm currently looking for a project so you can ask me from given below contact informaton.</p>
//                     <div className="contact-details">
//                         <div className="contact-detail">
//                             <img src={mailIcon} alt="" /><p>kumarandeva21@gmail.com</p>
//                         </div>
//                         <div className="contact-detail">
//                             <img src={callIcon} alt="" /><p>+91 8807245672</p>
//                         </div>
//                         <div className="contact-detail">
//                             <img src={locationIcon} alt="" /><p>Chennai - Tamil Nadu</p>
//                         </div>
//                     </div>
//                 </div>
//                 <form onSubmit={onSubmit} className="contact-right">
//                     <label htmlFor="">Your Name</label>
//                     <input type="text" placeholder='Enter your name' name='name' required />
//                     <label htmlFor="">Your Email</label>
//                     <input type="email" placeholder='Enter your email' name='email' required />
//                     <label htmlFor="">Write your message here</label>
//                     <textarea name="message" row="8" placeholder='Enter your message' required></textarea>
//                     <button className="contact-submit" type='submit'>Submit Now</button>
//                 </form>

//             </div>


//         </div>
//     )
// }

// export default Contact




import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import theme_pattern from '../../assets/assets form net/theme_pattern.svg';
import mailIcon from '../../assets/assets form net/mail_icon.svg';
import callIcon from '../../assets/assets form net/call_icon.svg';
import locationIcon from '../../assets/assets form net/location_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3bad4425-dc21-4eb0-ad36-174dc691bf38");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            event.target.reset()
        }
    };

    return (
        <motion.div
            id="contact"
            className="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="contact-title">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                >
                    Get in Touch
                </motion.h1>
                <motion.img
                    src={theme_pattern}
                    alt="Theme Pattern"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="contact-section">
                <motion.div
                    className="contact-left"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1>Let's Talk</h1>
                    <p>I'm currently looking for a project, so you can contact me through the details below.</p>
                    <div className="contact-details">
                        <motion.div
                            className="contact-detail"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <img src={mailIcon} alt="" />
                            <p>kumarandeva21@gmail.com</p>
                        </motion.div>
                        <motion.div
                            className="contact-detail"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <img src={callIcon} alt="" />
                            <p>+91 8807245672</p>
                        </motion.div>
                        <motion.div
                            className="contact-detail"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <img src={locationIcon} alt="" />
                            <p>Chennai - Tamil Nadu</p>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={onSubmit}
                    className="contact-right"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
                    <button className="contact-submit" type="submit">
                        Submit Now
                    </button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;

