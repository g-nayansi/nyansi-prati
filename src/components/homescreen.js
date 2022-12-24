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
        <Aboutus/>
        <Services/>
        </>
           
    );  
}

export default HomeScreen;