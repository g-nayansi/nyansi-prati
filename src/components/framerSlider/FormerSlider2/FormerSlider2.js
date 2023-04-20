import {motion} from 'framer-motion';
import "./FormerSlider.css"

function FormerSlider2({state}){
    return <div className="form-slide">
         <motion.div  
    initial= {{x: 300, opacity: 0 }}
    animate={{x: 0, opacity: 1}}   
    exit={{x: -300, opacity: 0}}
    transition={{delay:0.1, duration:0.5}} >
    {console.log(state)}
<div><h4 style={{color : "rgb(221, 171, 108)" ,justifyContent: "center" , marginLeft: "130px"}}>What type of event are you planning?</h4></div>
<div className="option_list">
{state.map(a=>{ return <div className="option" key={a.name} > <div>
    <img src={a.icon} />
  </div>
    <p > {a.name} </p>
   </div> })}
</div>
</motion.div>
</div>
}

export default FormerSlider2;