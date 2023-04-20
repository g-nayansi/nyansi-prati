import {motion} from 'framer-motion';


function FormerSlider1(){
    return  <motion.div  
    initial= {{x: 300, opacity: 0 }}
    animate={{x: 0, opacity: 1}}   
    exit={{x: -300, opacity: 0}}
    transition={{delay:0.1, duration:0.5}}  >
      <h1 style={{color : "#DDAB6C", textAlign:"center" }}>Let's Create <span style={{color : "#A07146"}} >an Event</span></h1>
  <h1  style={{color : "white", textAlign: "center"}}   >of your Choice</h1>
  <p style={{color : "white", marginLeft:"2%", textAlign:"center", marginTop: "2%", fontSize:"18px"}} >Plan and start an event with us  and invite your guests without any hassle</p>
 
    </motion.div>
}

export default FormerSlider1;