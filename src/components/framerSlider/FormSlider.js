import "./FormerSlider.css"
import React from 'react';
import {motion} from 'framer-motion';

function FormSlider() {
  return (
  <>
   <div className='slider_container' >
    <motion.div  
   initial= {{x: "100%" }}
   animate={{x: "0%"}}
   transition={{delay:0.1, duration:0.2}}>
      <> <h2 style={{color : "#DDAB6C"}}>Let's Create <span style={{color : "#A07146"}} >an Event</span></h2>
 <h2  style={{color : "black"}}   >of your Choice</h2>
 <p style={{color : "black", marginLeft:"2%", textAlign:"center", marginTop: "2%"}} >Plan and start an event with us  and invite your guests without any hassle</p>
 </>
   </motion.div>
  </div></>
  );
}

export default FormSlider;
