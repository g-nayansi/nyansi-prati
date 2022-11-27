import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './navbar';
import data from './data';
function ServicePage(index){
    var i=0;
    var half1="";
    var half2 = "";
    const navigate = useNavigate();
    const state = useLocation();
    const obj = data[state.state.index];
    var size = obj.name.length;
    half1 = obj.name.substring(0,size/2);
    half2 = obj.name.substring(size/2);
    const gotosubservice = (data,ind)=>{
        ind===0 ? navigate('/services',{state : {name : data}}):
        navigate('/seminarandconferences',{state : {name : data}})
    }
    const gotoNext = (ind)=>{
        if(ind===11) ind=0;
        navigate("/servicepage",{state : {index : ind}});
    }
    return(
        <section className='frameimages'>
            <Header></Header>
            <div className='row'>
                <div className='col-lg-6 col-12 width43'>
                    <div >
                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-indicators carousel-indicators2">
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">  
                                  <img src={obj.carousel_slide} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-none d-md-block">
                                     <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <img src={obj.carousel_slide} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-none d-md-block">
                                     <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <img src={obj.carousel_slide} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-none d-md-block">
                                     <p className='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12 width57'>
                    <div onClick={()=>{gotoNext((state.state.index)+1)}}>
                        <img src='images/Frame (1).png' className='dots9'/>
                        <img className='next' src={obj.next} />
                        <p className='nexttext'>NEXT ></p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-12'>
                            <p className='servicename'><span className='corp'>{half1}</span>{half2}</p>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img align='right' src='images/Frame (1).png' className='dots6' />
                        </div>
                    </div>
                    <div className='subcatbox'>
                             {obj.sub_categories.map((item,index)=>{
                                 i=!i;
                                 return(<div className={i?"col-lg-6 subcatdesc":"col-lg-6 subcatdesc2"}>
                                             <p className='serviceswe' onClick={()=>{gotosubservice(item,index)}}>{item}<br /><br /><span className={i?'view':'know'}>View now ⟶</span></p>
                                        </div>);
                             })}
                    </div> 
                </div>
            </div>
            
        </section>
    );
}

export default ServicePage;