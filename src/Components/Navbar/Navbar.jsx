// import React, { useRef, useState } from 'react';
// import './Navbar.css'
// import undeline from '../../assets/assets form net/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/assets form net/menu_open.svg'
// import menu_close from '../../assets/assets form net/menu_close.svg'

// const Navbar = () => {

//   const [menu,setMenu]=useState("home")
//   const menuRef=useRef();
//   const openMenu=()=>{
//     menuRef.current.style.right="0";
//   }
//   const closeMenu=()=>{
//     menuRef.current.style.right="-350px"
//   }

//   return (
//     <div className='navbar'>
//         <h2>My Portfolio</h2>
//         <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
//         <ul ref={menuRef}  className="nav-menu">
//           <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
//             <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==="home"?<img src={undeline} alt=''/> :<></> }</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About</p></AnchorLink>{menu==="about"?<img src={undeline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p onClick={()=>setMenu('skills')}>Skills</p></AnchorLink>{menu==="skills"?<img src={undeline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink>{menu==="projects"?<img src={undeline} alt=''/>:<></>}</li>
//             <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==="contact"?<img src={undeline} alt=''/>:<></>}</li>
//         </ul>
//         <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Get in Touch</AnchorLink></div>
      
//     </div>
//   )
// }

// export default Navbar


import React, { useRef, useState } from 'react';
import './Navbar.css';
import undeline from '../../assets/assets form net/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/assets form net/menu_open.svg';
import menu_close from '../../assets/assets form net/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  // Open mobile menu
  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  // Close mobile menu
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  // Handle clicking a menu item
  const handleMenuClick = (section) => {
    setMenu(section);  // Set the active menu section
    closeMenu();  // Close the menu
  };

  return (
    <div className='navbar'>
      <h2>My Portfolio</h2>
      <img
        src={menu_open}
        alt=""
        onClick={openMenu}
        className='nav-mob-open'
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => handleMenuClick('home')}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={undeline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleMenuClick('about')}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={undeline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skill'>
            <p onClick={() => handleMenuClick('skills')}>Skills</p>
          </AnchorLink>
          {menu === "skills" ? <img src={undeline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => handleMenuClick('projects')}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={undeline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleMenuClick('contact')}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={undeline} alt='' /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Get in Touch
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

