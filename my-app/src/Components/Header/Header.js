import'./Header.css';
import Logo from '../Logo/Logo';
import LinkList from '../LinkList/LinkList'
const Header = () => {
    return (
        <div>
            <header className='left-container'>
                <nav className='right-container'>
                    <Logo />
                    <LinkList />
                </nav>
            </header>
        </div>
    )
}
export default Header