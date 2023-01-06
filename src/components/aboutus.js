import React, { useEffect } from "react";
import {motion} from "framer-motion";
import {useLocation} from 'react-router-dom';
import Header from "./navbar";
import Aos from 'aos';
import "aos/dist/aos.css";
import './aboutus.css'
import arrow from '../images/arrow.svg'

import vendors1 from '../images/vendors1.jpeg'
import vendors2 from '../images/vendors2.jpeg'

function Aboutus(){
    let location = useLocation();
    console.log(location.pathname);
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <section className="about_us_sec">       
                {/* <div>
                    // {/* <Header></Header> 
                </div> */}
            <section>
                <div data-aos = "fade-up" className="row about_us">
                    <div className="col-lg-3 col-12">
                        <img className="dots" src="images/Frame (1).png"></img>
                    </div>
                    <div className="col-lg-5 col-12 approach">
                        <p className="our" >Our<br /><span className="word1"> approach</span></p>
                        <p className="desc1">We are a new emerging player in event managment and services domain having diverse network of
                        professional Event managers,  Vendors & Contributors on ground across India.</p>
                        <p className="learnmore">LEARN MORE <img src={arrow} className="ellipse2"/></p>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img className="img1" src="images/skate.png"></img>
                    </div>   
                </div>
                <div className="col-lg-12 col-12 poster">
                    <p className="desc2">"We know that you want your events to be unique that celebrates you! Tell us more<br />
                     about the story of yours that you want to share with your guests. We’ll get back to<br />
                     you soon with amazing ideas."</p>
                      <p className="pratichakrateam">-Pratichakra Team</p>
                </div>
            </section> 

            <section>          
                <div className="bgcurves">
                {/* <img align="right" className="dots2" src="images/Frame (1).png"></img> */}
                <div className="container  app__planning">
                    <div className="row">
                        <div data-aos="fade-up" className="col-lg-5 col-6">
                            <img src='images/Music - Celebrate.svg' className="music-celebrate"/>
                        </div>
                        <div className="col-lg-7 col-6">
                            <img className="frame62" src="images/Frame 62.png"></img>
                            <div className="desc3">
                                <p className="planning"><span className="bolding">Planning An Event</span><br />Simplified</p>
                                <div className="underline"></div>
                                <p className="gray">Plan and start an event via single click. Invite your guests without any hassle with our event
                                management and services</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-6">
                            <p className="negotiating"><span className="bolding">Negotiating Vendors</span><br />With Ease</p>
                            <div className="underline2"></div>
                            <p className="gray2">Negotiate on your terms with the vendors best suitable for your list of programs.</p>
                        </div>
                        <div data-aos = "fade-up" className="col-lg-5 col-6">
                            <img className="searching" src="images/Searching - Looking.svg" />
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos = "fade-up" className="col-lg-5 col-6">
                            <img className="music-celebrate" src="images/Workflow Teamwork.svg" />
                            <img className="frame68" src="images/Frame 90.svg"></img>
                        </div>
                        <div className="col-lg-7 col-6 desc3">
                            <p className="planning planning2"><span className="bolding">Share Memories </span><br />With Others</p>
                            <div className="underline"></div>
                            <p className="gray">Share memories with others and give us next chance to serve better for your future occasions.</p>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-12 col-12 app__offer">
                            <div className="underline3"></div>
                            <p className="offer"><span className="bolding20">What</span> we offer ?</p>
                            {/* <img align="right" className="rightimages" src="images/Frame (1).png"></img> */}
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="container Features">
                        <div className="row">
                            <div className="col-lg-1 col-12"></div>
                            <div className="col-lg-5 col-6 app__offers">
                                <img className="frame6" src="images/handshake.svg" />
                                <p className="offer1"><span className="bolding"> Professional Staff</span><br />with quality guranteed</p>
                            </div>
                            <div className="col-lg-5 col-6 app__offers">
                                <img className="frame7" src="images/buzzer.svg"></img>
                                <p className="offer2"><span className="bolding">Diverse Vendors Network</span><br /> across India</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1 col-12"></div>
                            <div className="col-lg-5 col-6 app__offers">
                                <img className=" frame8" src="images/Group1780.svg" />
                                <p className="offer3"><span className="bolding">Avail Cost Effective</span><br /> premium services</p>
                            </div>
                            <div className="col-lg-5 col-6 app__offers">
                                <img className="frame17" src="images/Group 1779.svg"></img>
                                <p className="offer4"><span className="bolding">24x7 Support</span><br />for our customers</p>
                            </div>
                        </div>
                    </div>
                    <p className="reviews">Recent <span className="bolding">Reviews</span></p>
                    <div className="underline40"></div>
                    <div className="row">
                        <div className="col-lg-3 col-12 ">
                            {/* <img className="dots1" src="images/Frame (1).png"/> */}
                        </div>
                        <div className="col-lg-7 col-12 app__reviews">
                            <img className="inverted" src="images/inverted.svg" />
                            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
                                <div className="carousel-indicators Indicators">
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                                  {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button> */}
                                </div>
                                <div className="carousel-inner1">
                                    <div className="carousel-item active ">
                                    <div className="revbox">
                                            <p className="revdesc">We’ve only recently started working with Pratichakra but they seriously saved our butts with a last minute vendor change and threw a truly incredible event for us on a really difficult timeline for our Fleet Week and Product Reveal day events.</p>
                                            <p className="revdesc">They worked with us on budget, were super communicative, very personally engaged, attended the event and were rockstars throughout. Two thumbs up from this end!</p>
                                        </div>
                                    <div className="ownerimg__block">
                                        <img className="ownerimg" src={vendors2} />
                                        <div className="owner__text">
                                            <p className="ownername">Chauhan Farm house & Swimming Pool</p>
                                            <p className="ownerdesg">Noida</p>
                                        </div>
                                       
                                    </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="revbox">
                                            <p className="revdesc">We have completed many Events successfully with Pratichakra and they are up to the Mark in all departments. With the proper team and well-organized team which leads to an excellent experience.</p>
                                            <p className="revdesc">They also did very well by inviting the guests, booking the facility, and successfully with the event. and in all the events I have not faced any issues with pratichakra.</p>
                                    </div>
                                    <div className="ownerimg__block">
                                        <img className="ownerimg" src={vendors1} />
                                        <div className="owner__text">
                                            <p className="ownername">Kapoor Studios</p>
                                            <p className="ownerdesg">Noida</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <div className="carousel-item">
                                        <div className="revbox">
                                            <p className="revdesc">We’ve only recently started working with Pratichakra but they seriously saved our butts with a last minute vendor change and threw a truly incredible event for us on a really difficult timeline for our Fleet Week and Product Reveal day events.</p>
                                            <p className="revdesc">They worked with us on budget, were super communicative, and Nikki and Brad were both very personally engaged, attended the event and were rockstars throughout. Two thumbs up from this end!</p>
                                        </div>
                                    <div className="ownerimg__block">
                                        <img className="ownerimg" src="images/Mark.svg" />
                                        <div className="owner__text">
                                            <p className="ownername">Mark Spencer33</p>
                                            <p className="ownerdesg">CEO,founder</p>
                                        </div>
                                    </div>
                                        
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>    
            </section>
                
                
        </section>
    );
}

export default Aboutus;