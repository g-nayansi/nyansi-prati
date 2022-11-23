import React from 'react';

import {Link} from "react-router-dom";
import Header from './navbar';

function Seminar_And_Conferences(){
    return(
        <section >
            <Header></Header>
            <div className='row '>
                <div className='col-lg-7 col-12 bgcurves'>
                    <img align='left' className='dots4' src='images/Frame (1).png'></img>
                    <p className='seminars'><span className='bolding'>Seminars And <br /></span>Conferences</p>
                    <p className='desc7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu<br />
                     turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus <br >
                     </br>nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum<br />
                      tellus elit sed risus. Maecenas eget condimentum velit, sit amet<br /> feugiat lectus.</p>
                    <button className='btn2'>Book Now</button>
                    <div className='discoverservices'>
                        <p>DISCOVER <span className='bolding'>SERVICES</span><br /><span className='downarrow'>˅</span></p>
                    </div>
                </div>
                <div className='col-lg-5 col-12 halfportion'>
                    <p className='weprovide'>We <span className='bolding'>Provide</span></p>
                    <p className='line3'></p>
                    <p className='venueconsult'>Venue Consultation<br /> Creative Presentation<br />
                     Corporate Styling<br /> Event Planning & Consultation<br /> On-site Management</p>
                    {/* <p className='line2'></p> */}
                    <img className='rectangle3538' src='images/Rectangle 3538.png' ></img>
                </div>
            </div>
        </section>
    );
} 

export default Seminar_And_Conferences;