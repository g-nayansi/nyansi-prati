function SubCategory(state){
    return  <div className='slider_container' >
    <div className="form-slide" >
      {console.log(state)}
        <div className="option_list" ></div>
           {state.map(a=>{
            return  <div className='option'>
            <p >{a.name}</p>
            </div> 
           })}
          </div>
    </div>
}



export default SubCategory;