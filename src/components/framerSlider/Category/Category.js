import cultural from '../../../images/cultural.svg'
import {Link} from 'react-router-dom';


import {motion} from 'framer-motion';


function Category({state}){


 return <div className='option'> {console.log(state.subCategories)} <Link to={`/category/${state.categoryName}`} name="Hmanshu" ><div>
 <img src={cultural} />
</div>
 <p > {state.categoryName} </p></Link></div>
}
export default Category;