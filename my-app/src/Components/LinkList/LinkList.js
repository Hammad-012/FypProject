import './LinkList.css';
import {Link} from 'react-router-dom'
import Home from '../HomeComponent/Home'
const LinkList = () => {
    return (
        <>
       <ul className='right-container2'>
        <li>
            <a href='#' className='wishlist-container'>
               Scholarships
            </a>
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
                <ion-icon name="person-outline"></ion-icon>
                <p className='signinText'>Sign in</p>
                </span>
            </a>
            </li>
            
       </ul>
      
        </>
    )
}
export default LinkList;