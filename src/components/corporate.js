import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './navbar';
import data from './data';

import './corporate.css'

function ServicePage(){
    const {serviceId} = useParams();
    var obj = {};
    var ind=0;
    for (let index = 0; index < data.length; index++) {
        if(data[index].slug==serviceId)
        {
            obj=data[index];
            ind=index;
        } 
    }
    console.log(obj);
    var i=0;
    var half1="";
    var half2 = "";
    const navigate = useNavigate();
    var size = obj.name.length;
    half1 = obj.name.substring(0,size/2);
    half2 = obj.name.substring(size/2);
    const gotosubservice = (subservicename,ind)=>{
        ind===0 ? navigate('/our-services'):
        navigate('/services/'+obj.name+'/sub-service/'+subservicename)}
    
    const gotoNext = (indices)=>{
        console.log(indices);
        if(indices===11) ind=0;
        navigate("/services/"+data[indices].slug);
        
    }
    const next = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/"+obj.next;
    const url = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/"+obj.carousel_slide;
    const dots = "https://pratichakra-resources.s3.ap-south-1.amazonaws.com/pratichakra-images/images/Frame (1).png";
    return(
        <section className='frameimages app__corporate'>
            <div className='row'>
                <div className='col-lg-6 col-12 width43 app__cor_car1'>
                    <div >
                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-indicators carousel-indicators2">
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">  
                                  <img src={url} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-md-block">
                                     <p className='caption'>{obj.desc}</p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <img src={url} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-md-block">
                                     <p className='caption'>{obj.desc}</p>
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <img src={url} className="d-block w-100 " alt="..." />
                                  <div className="carousel-caption d-md-block">
                                     <p className='caption'>{obj.desc}</p>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12 width57 app__cor_car2'>
                    <div onClick={()=>{gotoNext(ind+1)}} className="app__next">
                        <img src={dots} className='dots9'/>
                        <img className='next' src={next} />
                        <p className='nexttext'>NEXT></p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-12'>
                            <p className='servicename'><span className='corp'>{half1}</span>{half2}</p>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <img align='right' src={dots} className='dots6' />
                        </div>
                    </div>
                    <div className='subcatbox'>
                            {obj.sub_categories.map((item,index)=>{
                                i=!i;
                                return(<div className={i?"col-lg-6 subcatdesc":"col-lg-6 subcatdesc2"}>
                                            <p className='serviceswe' onClick={()=>{gotosubservice(item.slug,index)}}>{item.subservice_name}<br /><br /><span className={i?'view':'know'}>View now ⟶</span></p>
                                        </div>);
                            })}
                    </div> 
                </div>
            </div>  
        </section>
    );
}

export default ServicePage;