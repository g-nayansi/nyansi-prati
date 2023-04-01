import React from 'react';

function SeventhSlide({state}) {
  return (
    <div>
       {console.log("Seventh slide")}
       <div className="second-form-slide">
        {console.log(state, "Seventh Slide")}
    <div><h4 style={{color : "#DDAB6C"}}>What's the location <span style={{color : "#ffffff"}} >you desire?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> 
    </div>
  );
}

export default SeventhSlide;
