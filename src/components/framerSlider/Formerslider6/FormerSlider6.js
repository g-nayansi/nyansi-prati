import React from 'react';
import {motion} from 'framer-motion';


function FormerSlider6({state , secondState}) {
  return (
    <div>
          <motion.div  
    initial= {{x: 300, opacity: 0 }}
    animate={{x: 0, opacity: 1}}   
    exit={{x: -300, opacity: 0}}
    transition={{delay:0.1, duration:0.5}} >
       {console.log("sixth slide")}
       <div className="second-form-slide">
       
        {console.log(state, "sixth Slide")}
    <div><h4 style={{color : "rgb(221, 171, 108)"}}>What's the budget you have?</h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
    <div><h4 style={{color : "rgb(221, 171, 108)"}}>What's the date & time of your event?</h4></div>
  </div> 
  <div className="option_list">
    {secondState.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
    </motion.div>
    </div>
  );
}

export default FormerSlider6;
