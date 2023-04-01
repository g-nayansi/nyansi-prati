import React from 'react';

function SixthSlide({state , secondState}) {
  return (
    <div>
       {console.log("sixth slide")}
       <div className="second-form-slide">
        {console.log(state, "sixth Slide")}
    <div><h4 style={{color : "#DDAB6C"}}>What's the budget <span style={{color : "#ffffff"}} > you have?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
    <div><h4 style={{color : "#DDAB6C"}}>What's the date & time <span style={{color : "#ffffff"}} >of your event?</span></h4></div>
  </div> 
  <div className="option_list">
    {secondState.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
    </div>
  );
}

export default SixthSlide;
