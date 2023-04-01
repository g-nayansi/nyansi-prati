import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import './navbar.css'

import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import {CgMenuGridO} from 'react-icons/cg';

function Header(state){
  const [isActive, setIsActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [down, setDown] = useState('#fffff');

  useEffect(()=>{
    if(window.location.href.includes("formerslider")){
      console.log("IN SLIDER")
      setIsActive("formSlider")
    }
  })

  const ClickOnHome = () => { 
    setToggle(false);
  setIsActive('home');
  };
  const ClickOnAbout = () =>{
    setToggle(false);
    setIsActive('aboutus')
  }
  const ClickOnServices = () =>{
    setToggle(false);
    setIsActive('services')
  }

  const ClickOnBookNow = () =>{
    setToggle(false);
    setIsActive('booknow-form')
  }

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("app__navbar").style.top = "0";
  } else {
    // document.getElementById("navbar").style.position = "fixed"
    document.getElementById("app__navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}




window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) { // Just an example
        setDown = '#00000' // or default color
    } else {
        setDown = '#fffff'
    }
});



   return (
    <>
    <nav className='app__navbar' id='app__navbar'>
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
      <ul className="app__navbar-links" >
        <li className={`app_navbar-link${isActive === 'home' ? '_active' : '' }`}  >
          {/* <a class="/" href="/">Home</a> */}
         
          <Link className='linksss' to='/' style={{color: `${isActive === 'aboutus' || isActive =="formSlider"  || isActive === 'services' ? 'black' : 'white'}`, fontFamily: `${isActive === 'home' ? 'Poppins-Medium' : ' '}`}} onClick={ClickOnHome}>Home</Link>
          {isActive === 'home' ? <div className="underline_nav flex flex-end col row"></div> : ''}
          
        </li>
        <li className={`app_navbar-link${isActive === 'aboutus' ? '_active' : '' }`}  >
          {/* <a  style={{color: `${isActive == 'aboutus' ? 'black' : ''}`}}  href="/about" >AboutUs</a> */}
          {/* <h3 style={{color: 'white'}}>AboutUs</h3> */}
          <Link className='linksss' to="/about" style={{color: `${isActive === 'aboutus' || isActive =="formSlider"  || isActive === 'services' ? 'black' : ''}`, fontFamily: `${isActive === 'aboutus' ? 'Poppins-Medium' : ' '}`}} onClick={ClickOnAbout} >About Us</Link>
          {isActive === 'aboutus' ? <div className="underline_nav flex flex-end col row"></div> : ''}
        </li>
        <li  className={`app_navbar-link${isActive === 'services'  ? '_active' : '' }`}  >
          {/* <a class="/our-services" style={{color: `${isActive == 'services' ? 'black' : ''}`}} href="/our-services">Services</a> */}
          <Link className='linksss' to="/our-services" style={{color: `${isActive === 'services' || isActive =="formSlider"  || isActive === 'aboutus' ? 'black' : ''}`, fontFamily: `${isActive === 'services' ? 'Poppins-Medium' : ' '}`}} onClick={ClickOnServices}>Services</Link>
          {isActive === 'services' ? <div className="underline_nav flex flex-end col row"></div> : ''}

        </li>
      </ul>
      </div>


   


    </nav> 
    <div  className='app__navbar-menu'>
                <CgMenuGridO onClick={() => setToggle(true)}/>

                {
                    toggle && (
                        <motion.div
                            whileInView={{x:[300,0]}}
                            transition={{duration:0.85,ease: 'easeInOut'}}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul className='app__menu_link'>
                            {/* {['Home', 'About Us','Services'].map((item)=> (
                            <li  key={item}>
                               <a href={``} onClick={() => setToggle(false)}>{item} </a>
                            </li>
                         ))} */}
                              <li><Link className='' to='/' style={{fontFamily: `${isActive === 'home' || isActive =="formSlider" ? 'Poppins-SemiBold' : 'Poppins-Regular '}` , color:`${isActive === 'home' ? 'black' : ' '}`}}  onClick={ClickOnHome}>Home</Link></li>
                              <li> <Link className='' to="/about" style={{fontFamily: `${isActive === 'aboutus' || isActive =="formSlider" ? 'Poppins-SemiBold' : 'Poppins-Regular'}` , color:`${isActive === 'aboutus' ? 'black' : ' '}`}} onClick={ClickOnAbout} >About Us</Link></li>
                              <li> <Link className='' to="/our-services" style={{fontFamily: `${isActive === 'services' || isActive =="formSlider" ? 'Poppins-SemiBold' : 'Poppins-Regular'}` , color:`${isActive === 'services' ? 'black' : ' '}`}} onClick={ClickOnServices}>Services</Link></li>
                              
                         </ul>
                        </motion.div>
                    )
                } 
         </div>
    
    </>
    
   );
}

export default Header;