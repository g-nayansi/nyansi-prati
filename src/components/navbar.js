import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import './navbar.css'

function Header(){
  const [isActive, setIsActive] = useState('home');


  const ClickOnHome = (context) => { 
  setIsActive('home');
  };
  const ClickOnAbout = () =>{
    setIsActive('aboutus')
  }
  const ClickOnServices = () =>{
    setIsActive('services')
  }


   return (
    <div className='app__navbar'>
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
         
          <Link  to='/' style={{color: `${isActive === 'aboutus' || isActive === 'services' ? 'black' : 'white'}`}} onClick={ClickOnHome}>Home</Link>
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


        {/* <div className='col-lg-4 col-4 '>
            <div className='row navbar'>
              <div className='col-lg-3 col-6'>
                  <p className='nav-p'>home</p>
              </div>
              <div className='col-lg-2 col-6'>
              <div className='headerline1'></div>
              </div>
            </div>
        </div>
        <div className='col-lg-5 col-6'>
            <div className='row navbar'>
              <div className='col-lg-2 col-6'>
                <p className='nav-p2'>about</p>   
              </div>
              <div className='col-lg-2 col-6'>
              <div className='headerline2'></div>
              </div>
            </div>
        </div>
        <div className='col-lg-2 col-2'>
            <div className='row navbar'>
              <div className='col-lg-3 col-6'>
                  
                  <p className='nav-p3'>services</p>
              </div>
              <div className='col-lg-2 col-6'>
              <div className='headerline3'></div>
              </div>
            </div>
   </div> */}
    </div> 
   );
}

export default Header;