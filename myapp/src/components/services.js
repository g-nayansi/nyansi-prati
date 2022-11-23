import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from "./navbar";
import { Link } from "react-router-dom";

function Services(){
    return(
        <div>
            <Header></Header>
            <div className="row">
                <div className="col-lg-6 col-12 ">
                    <p className="ourservices">our<br /><span className='services'>services</span></p>
                    <br />
                    <p className="desc5">We work with the best companies and vetted <br />vendors to provide
                    you a hassle-free event.<br /> You are only assigned two vendors that <br />
                    present you with the lowest prices and highest<br /> quality. All hasslefree!</p>
                    <img align='left' src="images/Frame (1).png" className="spacetop"/>
                    <img className="bob" src="images/bob.svg"></img>
                    <p className="bolding2">OUR SPECIALIZED EVENTS <img className="ellipse" src='images/Ellipse 1.svg'/><span className="rightarrow1">⟶</span></p>
                </div>
                <div className="col-lg-6 col-12 bgcurves">
                    <div className="positioning">
                    <Link to='/corporate' className="linkcolor"><div className="graybox">
                            <h1>Corporate <img className="building" src="images/building.png" /></h1>
                            <p className="servicesdesc">Event sponsored by a company and focuses on <br/>either its employees or clients.</p>
                            <p className="rightarrow">⟶</p>
                        </div></Link>
                        <div className="blackbox">
                            <h1>Cultural <img className="building" src="images/tent.png"/></h1>
                            <p className="servicesdesc">Events that aim to propagate and disseminate <br />cultural themes.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="graybox">
                            <h1>Educational <img className="building" src="images/cap.png" /></h1>
                            <p className="servicesdesc">Event that aims to give the opportunity to <br />professionals to enrich their integral training.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="blackbox">
                            <h1>Friends & Family <img className="building" src="images/family.svg"/></h1>
                            <p className="servicesdesc">Events that aim to propagate and disseminate <br />cultural themes.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="graybox">
                            <h1>Fashion & Beauty <img className="building" src="images/fashion.svg" /></h1>
                            <p className="servicesdesc">Event that aims to give the opportunity to <br />professionals to enrich their integral training.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="blackbox">
                            <h1>Health & Fitness <img className="building" src="images/health.svg"/></h1>
                            <p className="servicesdesc">Events that aim to propagate and disseminate <br />cultural themes.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="graybox">
                            <h1>Kids Zone <img className="building" src="images/kids.svg" /></h1>
                            <p className="servicesdesc">Event that aims to give the opportunity to <br />professionals to enrich their integral training.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="blackbox">
                            <h1>Music <img className="building" src="images/music.svg"/></h1>
                            <p className="servicesdesc">Events that aim to propagate and disseminate <br />cultural themes.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="graybox">
                            <h1>Political & Social <img className="building" src="images/political.svg" /></h1>
                            <p className="servicesdesc">Event that aims to give the opportunity to <br />professionals to enrich their integral training.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="blackbox">
                            <h1>Sports <img className="building" src="images/sports.svg"/></h1>
                            <p className="servicesdesc">Events that aim to propagate and disseminate <br />cultural themes.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                        <div className="graybox">
                            <h1>Arts <img className="building" src="images/arts.svg" /></h1>
                            <p className="servicesdesc">Event that aims to give the opportunity to <br />professionals to enrich their integral training.</p>
                            <p className="rightarrow">⟶</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;