import {motion} from 'framer-motion';

function FormerSlide4({state}){
    return <div>
        <motion.div  
   initial= {{x: 300, opacity: 0 }}
   animate={{x: 0, opacity: 1}}   
   exit={{x: -300, opacity: 0}}
   transition={{delay:0.1, duration:0.5}}   >
    {console.log("Fourth slide")}
     <div className="second-form-slide">
      {console.log(state, "Fourth Slide")}
  <div><h4 style={{color : "rgb(221, 171, 108)"}}>For which program do you want?</h4></div>
  <div className="option_list">
  {state.map(a=>{ return <div className="option" key={a.name} > 
      <p > {a.name} </p>
     </div> })}
  </div>
</div> 
</motion.div>
  </div>
}

export default FormerSlide4;