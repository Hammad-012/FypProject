import './LinkList.css';
import {Link , useNavigate} from 'react-router-dom'
import Home from '../HomeComponent/Home'
const LinkList = () => {
  const Navigate = useNavigate()
  const Logout = () => {
    localStorage.clear();
    Navigate('login-form')
  }
    return (
        <>
       <ul className='right-container2'>
          {
            localStorage.getItem('login') ? 
            <>
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
            </>
            :  
            <>
              <li>
            <a href='#'  className='signin-container'>
                <span>
                <Link to='/login-form'>
                {/* <ion-icon name="person-outline"></ion-icon> */}
               <p className='signinText' >Sign up</p> </Link>
                </span>
            </a>
            </li>
            </>
            
          }
          {
            localStorage.getItem('login') ?
            <li>
            <a href='' className='wishlist-container' onClick={Logout}>
               Logout
             </a>
             </li>
            : null 

          }
          
       </ul>
      
        </>
    )
}
export default LinkList;