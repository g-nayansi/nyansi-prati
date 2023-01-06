import React from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import Header from './navbar';

import data from './data'

import './corporate.css'

function Seminar_And_Conferences(){



    const handleConnect = () => {
        window.open("https://wa.me/message/5I7EYEKHQYGRH1 ", '_blank')
    }

    const {subServiceId} = useParams();
    var half1 = "";
    var half2 = "";
    const arr = subServiceId.split("-");
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
        navigate('/our-services');
    }
    const url = "https://s3-alpha-sig.figma.com/img/69be/112c/0a7686d291423b8e6c22516388d58d44?Expires=1673222400&Signature=kZftha-TFh3Y1pe-Fj4dw6p6p5pqHb~AHvRGZaPxYUVdXP2DE~vkJR3Ip~~KZTvhviXlxbnTiwR9uGox98P72SC-WRPWex4kVbe8sBUqfSxWviNJzDCMWB~pvXpW1V5qiJbjuWCU-hYBNf~zbZ4QPeLS88nkf9cAwbEtDjjwN~43Rbu4ms1CpgQiacxHDlpcDT-YVcZo-aS1zFRruf0EISb8oOJ5ctoObjSCGN4J3f4rEImsaugkAgPVBT00b0bCXQQM6EPfKRq1kTxyAclhN2CaIp1VSDElUI90TekaMh8SqCqKVYnI8ChNmLuYRVPc8Vc72zlU~QVy3IBNYzcN0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
    const url2 = "https://s3-alpha-sig.figma.com/img/d781/e6c2/5755b347b489237a3e9a8b0ef2f2097f?Expires=1673222400&Signature=fdlBm1zAlpBb~Z8sfUPJou~UNcBJrO4ghvjpyE1vFuokIfIL8pcARurXo0XXDAfmjp9HrSQCSXBjBp~2e0T5LBmDchdwKCkyNPDhVhdTLzGNxGY5vSpRw1bgkeayd5A-NSpqtSMiv0CIONhZ0Li4bgC5jeDYAAC-gyOSF1XKNXte9DBzxSksosZ97ywgpDYAAnNhAwQ-M7zzJrM3t4Vz--upV0RApp--kq0PuPVTpE62yDcKnVhVZkMqW2k~Z5X8QB8V09F6NIzuAsV2AhWCgluyI4Ptyee36Un804RIlXeXR-DqnQ2ZYdJTZ1cxC39xO1~foCxXQ2DXTW6uO3ASJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
    const dots = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/Frame (1).png";
    // const url = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/"+subServiceId+".png";
    // const dots = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/Frame (1).png";
    return(
        <section >
            <div className='row seminarrow'>
                <div className='col-lg-2 col-12 bgcurves'>
                    <img align='left' className='dots4' src={dots}></img>
                    <div className='discoverservices' onClick={()=>{gotoService()}}>
                        <p>DISCOVER <span className='bolding'>SERVICES</span><br /><span className='downarrow'>˅</span></p>
                    </div>
                </div>
                <div className='col-lg-5 col-12 app__seminar'>
                    <p className='seminars'><span className='bolding'>{half1}<br /></span>{half2}</p>
                    <p className='desc7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu<br />
                     turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus <br >
                     </br>nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum<br />
                      tellus elit sed risus. Maecenas eget condimentum velit, sit amet<br /> feugiat lectus.</p>
                    <button className='btn2'  onClick={handleConnect}>Book Now</button>
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
                                <ul className='venueconsult'>
                                    <li>Venue Consultation</li>
                                    <li>Creative Presentation</li>
                                    <li>Corporate Styling</li>
                                    <li>Event Planning & Consultation</li>
                                    <li>On-site Management</li>
                                </ul>
                            </div>
                            <div className='col-lg-5 col-12 app__BookNow'>
                                <button className='btn3'  onClick={handleConnect} >Book Now</button>
                            </div>
                            
                        </div>
                        
                    </div> 
                    {/* <p className='line2'></p> */}
                    <div className='col-lg-12 col-12 app__seminar_img'>
                        <img className='rectangle3538' src={url} ></img>
                        <img className='rectangle3538' src={url2} ></img>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Seminar_And_Conferences;