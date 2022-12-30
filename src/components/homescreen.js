import react, { useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Header from "./navbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Aos from "aos";
import Name from '../images/Name.png'
import Frame101 from '../images/Frame101.svg'
import logo from '../images/logo.svg'
import special_days from '../images/special_days.svg'
import special_days2 from '../images/special_days2.svg'

import vector1 from '../images/vector1.svg';
import vector2 from '../images/vector2.svg';
import vector3 from '../images/vector3.svg';
import vector4 from '../images/vector4.svg';
import phone1 from '../images/phone1.svg';

import startupindia from '../images/startupindia.svg';
import woodenhands from '../images/woodenhands.svg';
import googleplay from '../images/googleplay.svg';
import appstore from '../images/appstore.svg';

import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

import './homescreen.css'

import {MdCall} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import Aboutus from "./aboutus";
import Services from "./services";

const handleConnect = () => {
    window.open("https://wa.me/message/5I7EYEKHQYGRH1 ", '_blank')
}
function HomeScreen(){

    const navigate = useNavigate();

    useEffect(()=>{
       Aos.init({duration:2000});
    },[]);

 

  

    return(
        <>
      
        <section>
            <div className="app__home">

                <div className="app__home_first col">
                    <div className="name__logo" >
                            <img className="__logo" src={logo}></img>
                            <img className="__name" src={Name}></img>
                        </div>     
                        <div>
                            <img align="right" className="dots2" src="images/Frame (1).png" style={{marginTop: -210, zIndex:1}}></img>
                    </div>
                </div>

                <div className="textss" align='right' >
                    <div className="L1">
                        <label>We make sure your</label>
                    </div>
                    <div className="style_name">
                        <div className="L2-1">
                            <img src={special_days}/>
                        </div>
                        <div className="L2-2">
                            <img src={special_days2}/>
                        </div>
                    </div>
                    
                    <div className="L3">
                        <label>goes without a hitch</label>
                        
                    </div>

                    <div className="btn_connect">
                            <div className="connect_btn" >
                            <div style={{flex: 1,flexDirection: 'row',padding: 5, flexWrap: 'wrap', cursor: 'pointer'}}  onClick={handleConnect} >

                                <div style={{flex:1, flexDirection: 'row'}}>
                                    <h3 className="text_connect"><span><BsWhatsapp/></span>Connect with us</h3>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="app__images" >
                    <img className="app__image" src={Frame101}/>
                </div>


        </div>
        </section>
        {/* <Aboutus/>
        <Services/> */}

        <section>
                  <div className="texts2">
                    <p className="p1">Worried about events?</p>
                    <label className="label2">Let’s make it simple and easy for you</label>
                    <p className="p2">Contact us and book your special event by simply sharing your needs with our event managers</p>
                </div>
            <div className="section2">
                <div className="box1">
                    <div className="app__box">
                        <img src={vector1}/>
                        <h2>Explore</h2>
                        <p>Check out the application and see the trending events, multiple brands, venues, vendors & special packages</p>
                    </div>
                    <div className="app__box" style={{marginTop: '150px'}}>
                        <img src={vector2}/>
                        <h2>Events & Packages</h2>
                        <p>We have multiple events for you and special packages that you can easily get to save your money</p>
                    </div>
                </div>
                <div className="box2">
                    <div>
                        <img src={phone1}/>
                    </div>
                </div>
                <div className="box3">
                    <div className="app__box">
                        <img src={vector3}/>
                        <h2>Refer & Earn</h2>
                        <p>When you refer a friend and invite them to sign up with App, both you and your friend earn money by referral code</p>
                    </div>
                    <div className="app__box" style={{marginTop: '150px'}}>
                        <img src={vector4}/>
                        <h2>Secure & Safe</h2>
                        <p>We ensure measure security & safe payment. Manage the event without any trouble</p> 
                    </div>
                </div>
            </div>

            <div className="banner2">
                <div className="block1">
                    <p>Our journey</p>
                    <h2>We have started booking events in the year <span className="span2">2021</span></h2>
                </div>
                <div className="block2">
                        <div className="div2">
                            <h2>85+</h2>
                            <p>Events booked</p>
                        </div>
                        <div className="div2">
                            <h2>100+</h2>
                            <p>Cities Covered</p>
                        </div>
                        <div className="div2">
                            <h2>65+</h2>
                            <p>Event Managers</p>
                        </div>
                </div>
            </div>
        </section>
        <section>
            <div className="banner3">
                    <p>Our company is also registered under</p>
                    <img src={startupindia}/>
            </div>
        </section>
        <section>
            <div className="app__store">
                <div className="store_block1">
                    <h2>Pratichakra app will be available for all devices</h2>
                    <p>Our App will soon available to you</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div className="store_button">
                            <img src={googleplay}/>
                        </div>
                        <div className="store_button">
                            <img style={{marginLeft: '1rem'}} src={appstore}/>
                        </div>
                    </div>
                </div>
                <div className="store_block2">
                    <img align="bottom" src={woodenhands}/>
                </div>
            </div>
        </section>
        <footer>
            <div className="app__footer">
                <div className="footer_block1">
                    <img src={logo}/>
                    <img src={Name}/>
                </div>
                <div className="footer_block2">
                    <h2>Sudarshan Chakra Pratispardha (OPC) Private Limited</h2>
                    <p>Customer Care no- <a href='tel:+91 (9818523999)' className='p-text'>+91 9818523999</a></p>
                </div>
                <div className="footer_block3">
                    <p>Privacy   |   Terms & Conditions   |   Help & Support</p>
                    <div className="app__social">
                        <a href="https://www.facebook.com/pratichakrasocial" target="_blank"><AiFillFacebook className="social"/></a>
                        <a href="https://www.instagram.com/pratichakra_think_and_do_it/" target="_blank"><AiFillInstagram className="social"/></a>
                        <a href="https://www.linkedin.com/in/pratichakra-social-54620b235/" target="_blank"><AiFillLinkedin className="social"/></a>
                        <a href="https://twitter.com/pratichakra" target="_blank"><AiFillTwitterCircle className="social"/></a>
                        <a href="https://www.youtube.com/channel/UCMveNVFxfNbnBj1awQaVUtg" target="_blank"><AiFillYoutube className="social"/></a>
                    </div>
                    <h4>All Rights Reserved © 2023</h4>
                </div>
            </div>
        </footer>
        </>
           
    );  
}

export default HomeScreen;