import React from 'react';

function FourthSlide({state}) {
  return (
    <div>
      {console.log("Fourth slide")}
       <div className="second-form-slide">
        {console.log(state, "Fourth Slide")}
    <div><h4 style={{color : "#DDAB6C"}}>For which program <span style={{color : "#ffffff"}} >do you want?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > 
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> 
    </div>
  );
}

export default FourthSlide;
