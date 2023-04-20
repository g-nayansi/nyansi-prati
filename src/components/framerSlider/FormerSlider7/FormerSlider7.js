import React from 'react';

function FormerSlider7({state}) {
  return (
    <div>
       {console.log("Seventh slide")}
       <div className="second-form-slide">
        {console.log(state, "Seventh Slide")}
    <div><h4 style={{color : "rgb(221, 171, 108)"}}>What's the location you desire?</h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> 
    </div>
  );
}

export default FormerSlider7;
