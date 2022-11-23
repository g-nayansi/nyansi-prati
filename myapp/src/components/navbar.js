import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Header(){

  let location = useLocation();
   return (
    <div>
        <Navbar expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {location.pathname==='/corporate'?
                <Nav.Link href="/" className="homewhite"><div className="headerline2" ></div>home</Nav.Link>:
                <Nav.Link href="/" className="nav-item "><div className="headerline" ></div>home</Nav.Link>}
                <Nav.Link href="/aboutus" className="nav-item gap" id="about"><div className="headerline"></div>about</Nav.Link>
                {location.pathname==='/' || location.pathname==='/seminarandconferences'?<Nav.Link href="/services" className="nav-item gap2"><div className="headerline2"></div>services</Nav.Link>:
                            <Nav.Link href="/services" className="nav-item gap21"><div className="headerline21"></div>services</Nav.Link>}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
   )
}

export default Header;