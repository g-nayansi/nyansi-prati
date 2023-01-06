import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from "./navbar";
import data from "./data";
import {motion} from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import arrow from '../images/arrow.svg'

import './services.css'

function Services(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    const navigate = useNavigate();

    const gotoContact = (servicename)=>{
        console.log(servicename);
        navigate("/services/"+servicename);
    }

    return(
        <section className="">
            <div className="row">
                <div className="col-lg-6 col-12 app__services">
                    <p className="ourservices">our<br /><span className='services'>services</span></p>
                    <br />
                    <p className="desc5">We work with the best companies and vetted <br />vendors to provide
                    you a hassle-free event.<br /> You are only assigned two vendors that <br />
                    present you with the lowest prices and highest<br /> quality. All hasslefree!</p>
                    <img align='left' src="images/Frame (1).png" className="spacetop"/>
                    <img data-aos = "fade-up" className="bob" src="images/bob.svg"></img>
                    <p className="bolding2">OUR SPECIALIZED EVENTS <img src={arrow} className="ellipse"/></p>
                </div>
                <div className="col-lg-6 col-12 bgcurves app__serv">
                    <div className="positioning" 
                        
                    >
                        {
                            data.map((item,index)=>{
                                console.log(index);
                                return (<motion.div className={item.background} onClick={()=>{gotoContact(item.slug)}}
                                    whileHover={{x:35}}
                                >
                                    <h1 className="servicesheader">{item.name} <img className="building" src={item.image_url} /></h1>
                                    <p className="servicesdesc">{item.desc}</p>
                                    <p className="rightarrow">⟶</p>
                                </motion.div>);
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;