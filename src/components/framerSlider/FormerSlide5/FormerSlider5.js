import {motion} from 'framer-motion';

function FormerSlider5({state, secondState}){

    return (
        <div>
              <motion.div  
   initial= {{x: 300, opacity: 0 }}
   animate={{x: 0, opacity: 1}}   
   exit={{x: -300, opacity: 0}}
   transition={{delay:0.1, duration:0.5}}  >
           {console.log("Fifth slide")}
           <div className="second-form-slide">
            {console.log(state, "Fifth Slide")}
        <div><h4 style={{color : "rgb(221, 171, 108)"}}>How many people are expected?</h4></div>
        <div className="option_list">
        {state.map(a=>{ return <div className="option" key={a.name} > 
            <p > {a.name} </p>
           </div> })}
        </div>
        <div>
          {console.log(secondState)}
          <h4 style={{color : "rgb(221, 171, 108)"}}>What's the type of the event venue?</h4></div>
        <div className="option_list">
        {secondState.map(a=>{ return <div className="option" key={a.name} > 
            <p > {a.name} </p>
           </div> })}
        </div>
      </div> 
      </motion.div>
        </div>
      );
}
export default FormerSlider5;