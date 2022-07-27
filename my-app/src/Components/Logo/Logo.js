import './Logo.css';
import Search from '../SearchComponent/Search'
import LogoImg from './BachelorsPortalTransparent.svg';
const Logo = () => {
    return (
        <>
        <div>
            <a href="#"  className='left-container'>
                <img src={LogoImg} alt='Logo-Img'></img>
            </a>
        </div>
        <Search />
        </>

    )
}
export default Logo;