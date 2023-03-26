import "./BookNowForm.css"
import React from 'react';
import FirstSlide from "../form-slides/FirstSlide";
import SecondSlide from "../form-slides/SecondSlide";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import arrow from '../../images/arrow.svg'
import corporate from '../../images/corporate.svg'
import cultural from '../../images/cultural.svg'
import education from '../../images/education.svg'
import familyfriends from '../../images/familyfriends.svg'
import kidszone from '../../images/kidszone.svg'
import music from '../../images/music.svg'
import politicalsocial from '../../images/politicalsocial.svg'
import sports from '../../images/sports.svg'
import traveltourism from '../../images/traveltourism.svg'
import visualperformarts from '../../images/visualperformarts.svg'
import custom from '../../images/custom.svg'
import { display } from "@mui/system";

let eventOptions = [{name : "Corporate", icon: corporate}, {name: "Cultural", icon: cultural},{name: "Education", icon: education},{name: "Family & Friends",icon: familyfriends},{name: "Kids zone",icon: kidszone},{name: "Music",icon: music},{name: "Political & Social",icon: politicalsocial},{name: "Sports",icon: sports},{name: "Travel & Tourism",icon: traveltourism},{name: "Visual & Perform Arts",icon: visualperformarts},{name: "Custom",icon: custom}]

function BookNowForm() {
  
  let [slideArr, setSlideArr] = useState([]);
  let [currentSlide, setCurrentSlide] = useState(slideArr[0]);
  useEffect(()=>{
    let firstFormSlide = <FirstSlide />
    let secondFormSlide =  <SecondSlide state={eventOptions} />

  let thirdFormSlide = <>
    <h2>THIRD</h2>
  </>

  setSlideArr( [firstFormSlide, secondFormSlide]);
  setCurrentSlide(firstFormSlide)
  }, [])

  function  slideHandler(){
      let i = slideArr.indexOf(currentSlide);
      i+=1
      setCurrentSlide(slideArr[i]);
  }
  return (
    <>
    <section className='book-now-form'>
      <div className="form_options" >
        {slideArr.indexOf(currentSlide) > 0 ?  <div className="step"> <h6>STEP <span>{slideArr.indexOf(currentSlide)}</span> - <span>{slideArr.length}</span></h6></div> :  <div style={{display:"none"}} className="step"> <h6>STEP <span>{slideArr.indexOf(currentSlide)}</span> - <span>{slideArr.length}</span></h6></div>}
        {currentSlide}
        <div className="button_sec" onClick={slideHandler} ><img   src={arrow}></img></div>
      </div>
    </section>
    
    </>
  );
}
export default BookNowForm;
