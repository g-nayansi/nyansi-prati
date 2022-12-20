import react, { useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Header from "./navbar";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Aos from "aos";
import Name from '../images/Name.png'
import Frame101 from '../images/Frame101.svg'
import logo from '../images/logo.svg'
import special_days from '../images/special_days.svg'
import special_days2 from '../images/special_days2.svg'

import './homescreen.css'

import {MdCall} from 'react-icons/md'

function HomeScreen(){

    useEffect(()=>{
       Aos.init({duration:2000});
    },[])

    return(
        <div style={{backgroundColor: '#141414', height :'90%', backgroundPosition: 0}}>

                <div style={{paddingBottom: 30}}>
                    <div style={{flex:1, flexDirection: 'row'}}>
                            <img src={logo} style={{height:200, width: 200, paddingLeft:50,marginTop: 15}}></img>
                            <img src={Name} style={{height:85, width: 150, paddingLeft:30,marginTop: 15}}></img>
                        </div>     
                        <div style={{flex:1}}>
                            <img align="right" className="dots2" src="images/Frame (1).png" style={{marginTop: -210}}></img>
                    </div>
                </div>

                <div align='right' >
                    <div style={{flex:1, marginRight:250, marginTop: 0}}>
                        <h2 style={{color: 'white', fontFamily: 'Poppins-Regular', fontSize:40}}>We make sure your</h2>
                    </div>
                    <div style={{flex:1, marginRight:90, marginTop: 0}}>
                        <img src={special_days}/>
                    </div>
                    <div style={{flex:1, marginRight:100, marginTop:-88}}>
                        <img src={special_days2}/>
                    </div>
                    <div style={{flex:1, marginRight:210, marginTop: -25}}>
                        <h2 style={{color: 'white', fontFamily: 'Poppins-Regular',  fontSize:42}}>goes without a hitch</h2>
                    </div>
                    <div style={{flex:1,flexDirection:'row', height: 'auto', width: 310, backgroundColor: 'white', marginRight:100, marginTop: 50, borderRadius: 14}}>
                        <div style={{flex: 1,flexDirection: 'row',padding: 5, flexWrap: 'wrap'}}>
                            <div style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                              
                            </div>
                            <div style={{flex:1, flexDirection: 'row'}}>
                                <h3 style={{paddingRight: 20, fontFamily: 'Poppins-Regular'}}><span style={{paddingRight: 10}}><MdCall/></span>Connect with us</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div >
                    <img className="app__image" src={Frame101}/>
                </div>
        </div>
           
    );  
}

export default HomeScreen;