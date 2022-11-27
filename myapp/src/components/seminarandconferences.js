import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import Header from './navbar';

function Seminar_And_Conferences(){
    const location = useLocation();
    console.log(location.state.name);
    var half1 = "";
    var half2 = "";
    const arr = location.state.name.split(" ");
    const halfportion = Math.floor(arr.length/2);
    console.log(halfportion)
    for(var i=0;i<halfportion;i++)
    {
        half1+=arr[i]+" ";
    }
    for(var j=halfportion;j<arr.length;j++)
    {
        half2+=arr[j]+" ";
    }
    const navigate = useNavigate();
    const gotoService = ()=>{
        navigate('/services');
    }
    return(
        <section >
            <Header></Header>
            <div className='row '>
                <div className='col-lg-2 col-12 bgcurves'>
                    <img align='left' className='dots4' src='images/Frame (1).png'></img>
                    <div className='discoverservices' onClick={()=>{gotoService()}}>
                        <p>DISCOVER <span className='bolding'>SERVICES</span><br /><span className='downarrow'>˅</span></p>
                    </div>
                </div>
                <div className='col-lg-5 col-12'>
                    <p className='seminars'><span className='bolding'>{half1}<br /></span>{half2}</p>
                    <p className='desc7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu<br />
                     turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus <br >
                     </br>nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum<br />
                      tellus elit sed risus. Maecenas eget condimentum velit, sit amet<br /> feugiat lectus.</p>
                    <button className='btn2'>Book Now</button>
                </div>
                <div className='col-lg-5 col-12 halfportion'>
                    <div className='col-lg-12 col-12 weprovide'>
                        <div className='row'>
                            <p>We <span className='bolding'>Provide</span></p>
                        </div>
                        <p ></p>
                        <div className='row'>
                            <div className='col-lg-1 col-12'>
                                <p className='line3'></p>
                            </div>
                            <div className='col-lg-5 col-12'>
                                <p className='venueconsult'>Venue Consultation Creative Presentation Corporate Styling Event Planning & Consultation On-site Management</p>
                            </div>
                        </div>
                        
                    </div> 
                    {/* <p className='line2'></p> */}
                    <div className='col-lg-12 col-12'>
                        <img className='rectangle3538' src='images/Rectangle 3538.png' ></img>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Seminar_And_Conferences;