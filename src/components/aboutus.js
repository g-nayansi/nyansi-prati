import React, { useEffect } from "react";
import {motion} from "framer-motion";
import {useLocation} from 'react-router-dom';
import Header from "./navbar";
import Aos from 'aos';
import "aos/dist/aos.css";
import './aboutus.css'

function Aboutus(){
    let location = useLocation();
    console.log(location.pathname);
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <section >       
                {/* <div>
                    // {/* <Header></Header> 
                </div> */}
            <section>
                <div data-aos = "fade-up" className="row">
                    <div className="col-lg-3 col-12">
                        <img className="dots" src="images/Frame (1).png"></img>
                    </div>
                    <div className="col-lg-5 col-12 approach">
                        <p >Our<br /><span className="word1"> approach</span></p>
                        <p className="desc1">We are a new emerging player in event managment and services domain having diverse network of
                        professional Event managers,  Vendors & Contributors on ground across India.</p>
                        <p className="learnmore">LEARN MORE <img className="ellipse2" src='images/Ellipse 1.svg'/><span className="rightarrow0">⟶</span></p>
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
                <img align="right" className="dots2" src="images/Frame (1).png"></img>
                <div className="container">
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
                            <p className="planning"><span className="bolding">Share Memories </span><br />With Others</p>
                            <div className="underline"></div>
                            <p className="gray">Share memories with others and give us next chance to serve better for your future occasions.</p>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="underline3"></div>
                            <p className="offer"><span className="bolding">What</span> we offer ?</p>
                            {/* <img align="right" className="rightimages" src="images/Frame (1).png"></img> */}
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="container">
                        <div className="row">
                            <div className="col-lg-1 col-12"></div>
                            <div className="col-lg-5 col-6">
                                <img className="frame6" src="images/handshake.svg" />
                                <p className="offer1"><span className="bolding"> Professional Staff</span><br />with quality guranteed</p>
                            </div>
                            <div className="col-lg-5 col-6">
                                <img className="frame7" src="images/buzzer.svg"></img>
                                <p className="offer2"><span className="bolding">Diverse Vendors Network</span><br /> across India</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1 col-12"></div>
                            <div className="col-lg-5 col-6">
                                <img className=" frame8" src="images/Group1780.svg" />
                                <p className="offer3"><span className="bolding">Avail Cost Effective</span><br /> premium services</p>
                            </div>
                            <div className="col-lg-5 col-6">
                                <img className="frame17" src="images/Group 1779.svg"></img>
                                <p className="offer4"><span className="bolding">24x7 Support</span><br />for our customers</p>
                            </div>
                        </div>
                    </div>
                    <p className="reviews">Recent <span className="bolding">Reviews</span></p>
                    <div className="underline4"></div>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <img className="dots1" src="images/Frame (1).png"/>
                        </div>
                        <div className="col-lg-7 col-12">
                            <img className="inverted" src="images/inverted.svg" />
                            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
                                <div className="carousel-indicators">
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active ">
                                    <div className="revbox">
                                            <p className="revdesc">We’ve only recently started working with Pratichakra but they seriously saved our butts with a last minute vendor change and threw a truly incredible event for us on a really difficult timeline for our Fleet Week and Product Reveal day events.</p>
                                            <p className="revdesc">They worked with us on budget, were super communicative, and Nikki and Brad were both very personally engaged, attended the event and were rockstars throughout. Two thumbs up from this end!</p>
                                        </div>
                                        <img className="ownerimg" src="images/Mark.svg" />
                                        <p className="ownername">Mark Spencer</p>
                                        <p className="ownerdesg">CEO,founder</p>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="revbox">
                                            <p className="revdesc">We’ve only recently started working with Pratichakra but they seriously saved our butts with a last minute vendor change and threw a truly incredible event for us on a really difficult timeline for our Fleet Week and Product Reveal day events.</p>
                                            <p className="revdesc">They worked with us on budget, were super communicative, and Nikki and Brad were both very personally engaged, attended the event and were rockstars throughout. Two thumbs up from this end!</p>
                                        </div>
                                        <img className="ownerimg" src="images/Mark.svg" />
                                        <p className="ownername">Mark Spencer</p>
                                        <p className="ownerdesg">CEO,founder</p>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="revbox">
                                            <p className="revdesc">We’ve only recently started working with Pratichakra but they seriously saved our butts with a last minute vendor change and threw a truly incredible event for us on a really difficult timeline for our Fleet Week and Product Reveal day events.</p>
                                            <p className="revdesc">They worked with us on budget, were super communicative, and Nikki and Brad were both very personally engaged, attended the event and were rockstars throughout. Two thumbs up from this end!</p>
                                        </div>
                                        <img className="ownerimg" src="images/Mark.svg" />
                                        <p className="ownername">Mark Spencer</p>
                                        <p className="ownerdesg">CEO,founder</p>
                                    </div>
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