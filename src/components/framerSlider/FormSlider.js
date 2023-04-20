import "./FormerSlider.css"
import React from 'react';
import {useEffect, useState} from 'react';
import arrow from '../../images/arrow.svg'
import {motion} from 'framer-motion';
import FormerSlider1 from "./FormerSlider1/FormerSlider1";
import FormerSlider2 from "./FormerSlider2/FormerSlider2";
import FormerSlider3 from "./FormerSlide3/FormerSlider3";
import FormerSlide4 from "./FormerSlide4/FormerSlide4";
import FormerSlider5 from "./FormerSlide5/FormerSlider5";
import FormerSlider6 from "./Formerslider6/FormerSlider6";
import FormerSlider7 from "./FormerSlider7/FormerSlider7";
import SliderLast from "./FormerSliderlast/SliderLast";
import  creativeOptiond from './createEvent.json' ;
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
import Category from "./Category/Category";




let eventOptions = [{name : "Corporate", icon: corporate}, {name: "Cultural", icon: cultural},{name: "Education", icon: education},{name: "Family & Friends",icon: familyfriends},{name: "Kids zone",icon: kidszone},{name: "Music",icon: music},{name: "Political & Social",icon: politicalsocial},{name: "Sports",icon: sports},{name: "Travel & Tourism",icon: traveltourism},{name: "Visual & Perform Arts",icon: visualperformarts},{name: "Custom",icon: custom}]
let musicTypes = [{name:"Band Jamming"}, {name : "Classical"}, {name : "Country"}, {name : "Hip Hop"} , {name : "Indie Music"}, {name : "Jazz & Blues"},{name :"Musical Theatre"} ,{name:"Pop & Rock"},{name:"R&B Soul"}]
let programTypes = [{name:"Family Function"},{name:"College Fest"},{name:"Corporate Outing"},{name:"Casual Party"},{name:"Wedding"},{name:"Cultural"},{name:"Trade Fair"},{name:"Promotional"},{name:"Others"}]
let peopleTypes1 = [{name:"1-50"},{name:"50-100"},{name:"100-200"},{name:"200-500"},{name:"500-1000"},{name:"Above 1000"}]
let peopleTypes2 = [{name:"Open Ground"},{name:"Auditorium"}]
let budgetTypes1 = [{name: "25,000 INR" },{name: "50,000 INR"},{name: "75,000 INR"},{name: "1,00,000 INR"},{name: "1,50,000 INR"},{name: "Above 1.5L"}]
let budgetTypes2= [{name:"Thursday 10 Nov 2022"},{name:"5.00pm"}] 
let locationType = [{name: "Delhi NCR"},{name: "Gurugram"},{name: "Faridabad"},{name: "Bangalore"},{name: "Jaipur"},{name: "Pune"},{name: "Amritsar"},{name: "Varanasi"},{name: "Ahemdabad"},{name: "Hyderabad"},{name: "Chennai"},{name: "Others"}]
function FormSlider() {
  let [slideArr, setSlideArr] = useState([])
  let [currentSlide, setCurrentSlide] = useState(slideArr[0]);

  useEffect(()=>{
    console.log(creativeOptiond, " HERE IS THE JSON ")
    let firstSlide = <FormerSlider1 />
    let secondSlide = <FormerSlider2 state={creativeOptiond} />
    let thirdSlide = <FormerSlider3 state={musicTypes} />
    let fourthSlide = <FormerSlide4 state={programTypes} />
    let fifthSlide = <FormerSlider5 state={peopleTypes1} secondState={peopleTypes2} />
    let sixthSlide = <FormerSlider6 state={budgetTypes1} secondState={budgetTypes2} />
    let seventhSlide = <FormerSlider7 state={locationType} />
    let lastslider = <SliderLast />



    console.log(creativeOptiond, "HERE IS THE ")

    setSlideArr(creativeOptiond)
    setCurrentSlide(slideArr[0])

  }, [])

  function  slideHandler(){
    let i = slideArr.indexOf(currentSlide);
    console.log( `currentSlide  ${i} and total Slide ${slideArr.length} `)
    // if(i< slideArr.length - 1){
    //   i+=1
    //   setCurrentSlide(slideArr[i])
    // };
}

function navigatSlide(i){
  setCurrentSlide(slideArr(i));
}

  return (

   <div className='slider_container' >
    <div className="form-slide" >
  <div className="option_list" >
  { slideArr.map(a=>{ return <Category className="option"  state={a} key={a.categoryName} /> }) }

    </div>      
    <motion.div  
    initial= {{x: 300, opacity: 0 }}
    animate={{x: 0, opacity: 1}}   
    exit={{x: -300, opacity: 0}}
    transition={{delay:0.1, duration:0.5}} >{currentSlide}</motion.div>
   { slideArr.indexOf(currentSlide) != slideArr.length - 1 ? <div className="contBtn"><button  onClick={slideHandler}>continue</button></div> :<></> }
  
    </div>
   </div>
  );
}

export default FormSlider;
