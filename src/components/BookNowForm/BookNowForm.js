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
import ThirdSlide from "../form-slides/ThirdSlide";
import FourthSlide from "../form-slides/FourthSlide";
import FifthSlide from "../form-slides/FifthSlide";
import SixthSlide from "../form-slides/SixthSlide";
import SeventhSlide from "../form-slides/SeventhSlide";
import LastSlide from "../form-slides/LastSlide";

let eventOptions = [{name : "Corporate", icon: corporate}, {name: "Cultural", icon: cultural},{name: "Education", icon: education},{name: "Family & Friends",icon: familyfriends},{name: "Kids zone",icon: kidszone},{name: "Music",icon: music},{name: "Political & Social",icon: politicalsocial},{name: "Sports",icon: sports},{name: "Travel & Tourism",icon: traveltourism},{name: "Visual & Perform Arts",icon: visualperformarts},{name: "Custom",icon: custom}]
let musicTypes = [{name:"Band Jamming"}, {name : "Classical"}, {name : "Country"}, {name : "Hip Hop"} , {name : "Indie Music"}, {name : "Jazz & Blues"},{name :"Musical Theatre"} ,{name:"Pop & Rock"},{name:"R&B Soul"}]
let programTypes = [{name:"Family Function"},{name:"College Fest"},{name:"Corporate Outing"},{name:"Casual Party"},{name:"Wedding"},{name:"Cultural"},{name:"Trade Fair"},{name:"Promotional"},{name:"Others"}]
let peopleTypes1 = [{name:"1-50"},{name:"50-100"},{name:"100-200"},{name:"200-500"},{name:"500-1000"},{name:"Above 1000"}]
let peopleTypes2 = [{name:"Open Ground"},{name:"Auditorium"}]
let budgetTypes1 = [{name: "25,000 INR" },{name: "50,000 INR"},{name: "75,000 INR"},{name: "1,00,000 INR"},{name: "1,50,000 INR"},{name: "Above 1.5L"}]
let budgetTypes2= [{name:"Thursday 10 Nov 2022"},{name:"5.00pm"}] 
let locationType = [{name: "Delhi NCR"},{name: "Gurugram"},{name: "Faridabad"},{name: "Bangalore"},{name: "Jaipur"},{name: "Pune"},{name: "Amritsar"},{name: "Varanasi"},{name: "Ahemdabad"},{name: "Hyderabad"},{name: "Chennai"},{name: "Others"}]
function BookNowForm() {
  
  let [slideArr, setSlideArr] = useState([]);
  let [currentSlide, setCurrentSlide] = useState(slideArr[0]);
  useEffect(()=>{
    let firstFormSlide = <FirstSlide />
    let secondFormSlide =  <SecondSlide state={eventOptions} />

  let thirdFormSlide = <ThirdSlide state={musicTypes} />
  let fourthSlide = < FourthSlide state={programTypes} />
  let fifthSlide = < FifthSlide state={peopleTypes1} secondState={peopleTypes2} />
  let sixthSlide = < SixthSlide state={budgetTypes1} secondState={budgetTypes2} />
  let seventhSlide = < SeventhSlide state={locationType} />
  let lastSlide = < LastSlide />
  setSlideArr( [firstFormSlide, secondFormSlide, thirdFormSlide, fourthSlide, fifthSlide, sixthSlide ,seventhSlide ,lastSlide ]);
  setCurrentSlide(firstFormSlide)
  }, [])

  function  slideHandler(){
      let i = slideArr.indexOf(currentSlide);
      i+=1
      if(i!= slideArr.length ){
        setCurrentSlide(slideArr[i])
      };
  }
  return (
    <>
    <section className='book-now-form'>
      <div className="form_options" >
        {slideArr.indexOf(currentSlide) > 0 ?   <div><p style={{color: "rgba(221, 171, 108, 1)"}} >STEPS <span>{slideArr.indexOf(currentSlide)}</span><span style={{color: "white"}}>-{slideArr.length -2}</span></p> </div> : <></>}
        {currentSlide}
       {slideArr.length -1 !=slideArr.indexOf(currentSlide) ?  <div className="button_sec" onClick={slideHandler} ><img   src={arrow}></img></div> : <></>}
      </div>
    </section>
    
    </>
  );
}
export default BookNowForm;
