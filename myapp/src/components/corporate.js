import React from 'react';
import { Link } from 'react-router-dom';
import Header from './navbar';

function Corporate(){
    return(
        <section>
            <Header></Header>
            <div className='row'>
                <div className='col-lg-6 col-12 width43'>
                    <div className='frameimages'>
                    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators carousel-indicators2">
                           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="images/Rectangle 3500.png" className="d-block w-100 " alt="..." />
                              <div className="carousel-caption d-none d-md-block">
                                 <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="images/Rectangle 3500.png" className="d-block w-100 " alt="..." />
                              <div className="carousel-caption d-none d-md-block">
                                 <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src="images/Rectangle 3500.png" className="d-block w-100 " alt="..." />
                              <div className="carousel-caption d-none d-md-block">
                                 <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                              </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12 width57'>
                    <img src='images/Frame (1).png' className='dots9'/>
                    <p className='corporate'><span className='corp'>CORP</span>ORATE</p>
                    <img className='next' src='images/next.png' />
                    <p className='nexttext'>NEXT ></p>
                    <img align='right' src='images/Frame (1).png' className='dots6' />
                    <div className='darkbox'>
                        <p className='serviceswe'>Services<br /> we provide<br /><br /><Link to='/services' className='linkcolor'><span className='view'>View now ⟶</span></Link></p>
                    </div>
                    <Link to='/seminarandconferences' className='linkcolor'><p className='seminarsand'><span className='bolding'>Seminars And </span><br />Conferences<br /><br /><span className='know'>know more ˅</span>
                   </p></Link>
                </div>
            </div>
            
        </section>
    );
}

export default Corporate;