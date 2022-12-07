import './Logo.css';
import { Link} from 'react-router-dom'
import Search from '../SearchComponent/Search'
import LogoImg from './BachelorsPortalTransparent.svg';
import logoPortal from './LogoPortal.jpg';
import LogoImage from './logoImg.jpg'
const Logo = () => {
    return (
        <>
        <div>
            <Link to='/' className='left-container'>
                <img src={LogoImage} alt='Logo-Img'></img>
            </Link>
        </div>
        <Search />
        </>

    )
}
export default Logo;