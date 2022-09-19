import './AboutUs.css';
import AboutImg from './Ab.png';
import AboutImg2 from './Ab2.png';
import hammadImg from './hammad.jpeg';
import HammadNasirImg from './HamadNasir.jpeg';
import ArslanImg from './Arslan.jpeg';
const AboutUs = () => {
    return (
        <div className='Section-Container'>
        <div className='Section-Container1'>
            <img src={AboutImg} alt='' />
            <div className='Image-text'>
            <h1>Studyportals is the global study choice platform.<br/>Empowering the world to choose education</h1>
        </div>
        </div>
        <div className='text-container'>
         <div className='text-row'>
            <p>Studyportals began as a spin-off from a couple of large international study associations. It was born out of frustration, a total lack of information and overview of <br /> the fast-growing number of international Master’s programmes in Europe. In 2007, Mastersportal.com was developed and proved to be a roaring success</p>
         </div>
        </div>
        <div>
                <center><h1>Meet the founders</h1></center>
            </div>
        <div className='Meet-Founder'>
            
          <div className='Meet-Founder1'>
          <a href='#'>
            <img src={hammadImg} alt='Muhammad Hammad' />
            <h4>Muhammad Hammad</h4>
            <h5>CEO</h5>
            </a>
          
          </div>
          <div className='Meet-Founder2'>
          <a href='#'>
            <img src={HammadNasirImg} alt='Hamad Nasir' />
            <h4>Hammad Nasir</h4>
            <h5>Chief Architect</h5>
            </a>
            <a href='#' className='Button-Link'>Meet the rest of our team</a>
          </div>
          
          <div className='Meet-Founder3'>
          <a href='#'>
            <img src={ArslanImg} alt='Arslan' />
            <h4>Arslan Ashraf</h4>
            <h5>Director</h5>
            </a>
          </div>
        </div>
        <div className='Section2-Container'>
          <div className='Section2-Container1'>
            <img src={AboutImg2} alt='About-Image2' />
          </div>
          <div className='Section2-textContainer'>
            <div className='Image-texts'>
              <h2>Who we are and why we do what we do</h2>
              <p>From its very conception, Studyportals was founded to solve (our own) student problems. It was, and still is, fuelled by a strong belief in the value of international experiences - both for the individual student and for the society.</p>
             <center> <a href='#' className='Button-link'>Our Mission and Core value</a></center>
              </div>
          </div>
        </div>
        </div>
        
    )
}
export default AboutUs;