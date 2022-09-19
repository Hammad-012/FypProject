import './Logo.css';
import { Link} from 'react-router-dom'
import Search from '../SearchComponent/Search'
import LogoImg from './BachelorsPortalTransparent.svg';
const Logo = () => {
    return (
        <>
        <div>
            <Link to='/' className='left-container'>
                <img src={LogoImg} alt='Logo-Img'></img>
            </Link>
        </div>
        <Search />
        </>

    )
}
export default Logo;