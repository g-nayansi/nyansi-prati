import React from 'react';
import "./SecondSlide.css"

export default function SecondSlide({state}) {
  return (
    <> <div className="form-slide">
        {console.log(state)}
    <div><h4 style={{color : "#DDAB6C"}}>What type of event <span style={{color : "#ffffff"}} >are you planning?</span></h4></div>
    <div className="option_list">
    {state.map(a=>{ return <div className="option" key={a.name} > <div>
        <img src={a.icon} />
      </div>
        <p > {a.name} </p>
       </div> })}
    </div>
  </div> </>
  );
}
