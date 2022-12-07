import './Footer.css';
import {Link} from 'react-router-dom'
import FacebookImg from './facebook.png';
import LinkdinImg from './linkedin.png';
import youtubeImg  from './youtube.png';
import twitterImg from './twitter.png';
import InstaImg from './instagram.png';
import FooterImg from './LogoPortal.jpeg';
import LogoImage from './logoImg.jpg';

const Footer = () => {
    return (
        <>
        <footer>
        <div className='Footer-container'>
            <div className='Sub-footercontainer1'>
                <Link to='/'>
                    <img  src={LogoImage} alt='LogoPortal' />
                </Link>
            </div>
            <div className='Sub-footercontainer2'>
                <h4 className='header2'>About Study Portal</h4>
                <ul>
                    <li>
                        <Link to='/About-us'>
                            About StudyPortal
                        </Link>
                    </li>
                    <li>
                        <a href='#'>
                            Our Markeeting Service
                        </a>
                    </li>
                    <li>
                        <Link to='/career'>
                            Career
                        </Link>
                    </li>
                    <li>
                        <a href='#'>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
            <div className='Sub-footercontainer3'>
                <h4 className='header3'>Follow us</h4>
                <ul>
                    <li>
                        <a href='#'>
                            <img src={FacebookImg} alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={LinkdinImg} alt='Linkedin' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={InstaImg} alt='Instagram' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={twitterImg} alt='twitter' />
                        </a>
                    </li>
                </ul>
              
            </div>
            
        </div>
        <div className='Sub-footercontainer4'>
                    <hr></hr>
                    <p className='copyright'>
                    Copyright © 2022-23
                    <a href='#'>StudyPortal.PK</a>
                    All Rights Reserved
                    </p>
                </div>
        </footer>
        </>
    )
}
export default Footer;