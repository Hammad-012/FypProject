import './LinkList.css';
import Home from '../HomeComponent/Home'
const LinkList = () => {
    return (
        <>
       <ul className='right-container2'>
        <li>
            <a href='#' className='wishlist-container'>
                <span >
                <ion-icon name="heart-outline"></ion-icon><br />
                <p className='wishlistText'>Wishlist</p>
                </span>
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