import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import './navbar.css'

import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import {CgMenuGridO} from 'react-icons/cg';

function Header(){
  const [isActive, setIsActive] = useState('home');
  const [toggle, setToggle] = useState(false);


  const ClickOnHome = () => { 
  setIsActive('home');
  };
  const ClickOnAbout = () =>{
    setIsActive('aboutus')
  }
  const ClickOnServices = () =>{
    setIsActive('services')
  }

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("app__navbar").style.top = "0";
  } else {
    document.getElementById("app__navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


   return (
    <nav className='app__navbar'>
        {/* <Navbar expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {location.pathname==='/servicepage'?
                <Nav.Link href="" className="homewhite" onClick={()=>{gotoHome()}}><div className="headerline2" ></div>home</Nav.Link>:
                <Nav.Link href="" className="nav-item" onClick={()=>{gotoHome()}}><div className="headerline1" ></div>home</Nav.Link>}
                <Nav.Link href="" className="nav-item gap" onClick={()=>{gotoAbout()}}><div className="headerline1"></div>about</Nav.Link>
                {location.pathname==='/' || location.pathname==='/seminarandconferences'?<Nav.Link href="" className="nav-item gap2" onClick={()=>{gotoService()}}><div className="headerline2"></div>services</Nav.Link>:
                            <Nav.Link href="" className="nav-item gap21" onClick={()=>{gotoService()}}><div className="headerline21"></div>services</Nav.Link>}
              </Nav>
            </Navbar.Collapse>
        </Navbar> */}

      
      <div style={{flex:1, flexDirection: 'row'}}>
      <ul class="app__navbar-links" >
        <li className={`app_navbar-link${isActive === 'home' ? '_active' : '' }`}  >
          {/* <a class="/" href="/">Home</a> */}
         
          <Link  to='/' style={{color: `${isActive === 'aboutus' || isActive === 'services' ? 'black' : 'white'}`, fontFamily: 'Poppins-Medium'}} onClick={ClickOnHome}>Home</Link>
          {isActive === 'home' ? <div className="underline_nav flex flex-end col row"></div> : ''}
          
        </li>
        <li className={`app_navbar-link${isActive === 'aboutus' ? '_active' : '' }`}  >
          {/* <a  style={{color: `${isActive == 'aboutus' ? 'black' : ''}`}}  href="/about" >AboutUs</a> */}
          {/* <h3 style={{color: 'white'}}>AboutUs</h3> */}
          <Link to="/about" style={{color: `${isActive === 'aboutus' || isActive === 'services' ? 'black' : ''}`}} onClick={ClickOnAbout} >About Us</Link>
          {isActive === 'aboutus' ? <div className="underline_nav flex flex-end col row"></div> : ''}
        </li>
        <li  className={`app_navbar-link${isActive === 'services' ? '_active' : '' }`}  >
          {/* <a class="/our-services" style={{color: `${isActive == 'services' ? 'black' : ''}`}} href="/our-services">Services</a> */}
          <Link to="/our-services" style={{color: `${isActive === 'services' || isActive === 'aboutus' ? 'black' : ''}`}} onClick={ClickOnServices}>Services</Link>
          {isActive === 'services' ? <div className="underline_nav flex flex-end col row"></div> : ''}

        </li>
      </ul>
      </div>

              {/* ==========for menu================
              <div  className='app__navbar-menu'>
                <CgMenuGridO onClick={() => setToggle(true)}/>

                {
                    toggle && (
                        <motion.div
                            whileInView={{x:[300,0]}}
                            transition={{duration:0.85,ease: 'easeInOut'}}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul >
                            {['Home', 'About Us','Services'].map((item)=> (
                            <li  key={item}>
                               <a href={``} onClick={() => setToggle(false)}>{item} </a>
                            </li>
                         ))}
                         </ul>
                        </motion.div>
                    )
                } */}
        {/* </div> */}


    </nav> 
   );
}

export default Header;