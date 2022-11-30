import react, { useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Header from "./navbar";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Aos from "aos";

function HomeScreen(){

    useEffect(()=>{
       Aos.init({duration:2000});
    },[])

    return(
        <section>   
            {/* <Header></Header> */}
            <div className="section1" id="section1">
                <div data-aos = "fade-down" className="row">
                    <div className="col-lg-7 width57 col-6 ">
                        <img className="doublelines" src="images/double lines.svg"></img>
                        <p className="company-name" id="pratichakra">pratichakra</p>
                        <p className="headline1">We make sure your <br /><span style={{color:'#DDAB6C',opacity:2}}>special day goes</span>,<br />
                        without a <strike className="strike"><span className="hitch">hitch</span></strike></p>
                        <button className="btn1 btn">Get Started</button>
                    </div>
                    <div className="col-lg-5 width43 col-6">
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators carousel-indicators1">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <img className="banner1" src="images/Rectangle 8 (1).png"></img>
                                    <div class="carousel-caption d-none d-md-block">
                                      <p>phone +91-9818523999  &nbsp; &nbsp; email social@pratichakra.com</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="banner1" src="images/Corporate.png"></img>
                                    <div class="carousel-caption d-none d-md-block">
                                      <p>phone +91-9818523999  &nbsp; &nbsp; email social@pratichakra.com</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="banner1" src="images/Wedding.png"></img>
                                    <div class="carousel-caption d-none d-md-block">
                                      <p>phone +91-9818523999  &nbsp; &nbsp; email social@pratichakra.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );  
}

export default HomeScreen;