import {motion} from 'framer-motion';

function FormerSlider3({state}){
    return <div className="second-form-slide">
         <motion.div  
   initial= {{x: 300, opacity: 0 }}
   animate={{x: 0, opacity: 1}}   
   exit={{x: -300, opacity: 0}}
   transition={{delay:0.1, duration:0.5}}  >
    {console.log(state, "Third Slide")}
<div><h4 style={{color : "rgb(221, 171, 108)"}}>What type of music you are intrested?</h4></div>
<div className="option_list">
{state.map(a=>{ return <div className="option" key={a.name} > 
    <p > {a.name} </p>
   </div> })}
</div>
</motion.div>
    </div>
}

export default FormerSlider3;