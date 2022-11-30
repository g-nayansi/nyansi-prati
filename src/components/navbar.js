import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

function Header(){
  let location = useLocation();
  const navigate = useNavigate();
  const gotoHome = ()=>{
    navigate('/');
  };

  const gotoAbout = ()=>{
    navigate('/aboutus');
  };

  const gotoService = ()=>{
    navigate('/services');
  };

   return (
    <div className='row'>
        <Navbar expand="lg" fixed="top">
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
        </Navbar>
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