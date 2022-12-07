import './LinkList.css';
import {Link} from 'react-router-dom'
import Home from '../HomeComponent/Home'
const LinkList = () => {
    return (
        <>
       <ul className='right-container2'>
        <li>
            <Link to='/Scholarships' className='wishlist-container'>
               Scholarships
            </Link>
            </li>
            <li>
            <Link to='/About-us' className='wishlist-container'>
              About us
            </Link>
            </li>
            <li>
            <a href='#' className='wishlist-container'>
              Contact us
            </a>
            </li>
            <li>
            <a href='#'  className='signin-container'>
                <span>
                <Link to='/login-form'>
                <ion-icon name="person-outline"></ion-icon>
               <p className='signinText' >Sign in</p> </Link>
                </span>
            </a>
            </li>
            
       </ul>
      
        </>
    )
}
export default LinkList;