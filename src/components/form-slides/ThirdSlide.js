import React from 'react';

export default function ThirdSlide({state}) {
  return (
    <>
    {console.log("third slide")}
       <div className="second-form-slide">
        {console.log(state, "Third Slide")}
    <div><h4 style={{color : "#DDAB6C"}}>What type of music <span style={{color : "#ffffff"}} >you are intrested?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> 
  </>
  );
}
