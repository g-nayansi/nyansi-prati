import React from 'react';

function FifthSlide({state,secondState}) {
  return (
    <div>
       {console.log("Fifth slide")}
       <div className="second-form-slide">
        {console.log(state, "Fifth Slide")}
    <div><h4 style={{color : "#DDAB6C"}}>How many people <span style={{color : "#ffffff"}} >are expected?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
    <div>
      {console.log(secondState)}
      <h4 style={{color : "#DDAB6C"}}>What's the type <span style={{color : "#ffffff"}} >of the event venue?</span></h4></div>
    <div className="option_list">
    {secondState.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> 
    </div>
  );
}

export default FifthSlide;
