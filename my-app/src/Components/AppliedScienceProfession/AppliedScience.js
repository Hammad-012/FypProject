import './AppliedScience.css';
import AppliedScienceImg from './science.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
import {Link} from 'react-router-dom';
import NutritonalScienceCard from './NutionalScienceCard.webp'
import PULogo from './PULogo.jpg'
import FoodScienceCard from './FoodScienceCard.png'
import ComsatsIslamabad from './ComsatsIslamabad.jpg'
import IubLogo from './IubLogo.jpg'
import PhychologyCard from './PhychologyCard.jpeg'
import UniofAgriculture from './UniofAgriculture.jpg'
import HNDCard from './HNDCard.png'
const AppliedScience = () => {
    return (
        <div>
             <>
           
        <div className='AppliedScience-Container'>
              <div className='AppliedScience-SubContainer'>
                <center>
                <a href='#'>
                    <img src={AppliedScienceImg} alt='Applied'/>
                </a>
                </center>
              </div>
              <div className='AppliedScience-Heading'>
                 <h1>What is a Bachelor in Applied Sciences & Professions?</h1>
              </div>
              <div className='AppliedScience-TextHeadingContainer'>
                 <div className='AppliedScienceTextHeading-Container'>
                   <p>Applied Sciences and Professions are a group of disciplines that help you develop the practical skills needed for a specific profession – often a vocational profession. Although theoretical courses are included, Applied Sciences and Professions stand out through their pragmatic knowledge and hands-on approach. This type of degrees turns students into specialists upon graduation. That’s why people who choose Applied Professions undergo intensive training for future work as part of their study programme.</p>
                   <p>For students who already have an Associate Degree in Applied Sciences (AAS), a Bachelor of Associate Sciences (BAS) is often the next step to advance their career or increase the chances of finding better-paid jobs.</p>
                   <p>Some of the disciplines within Applied Professions are Social Work, Emergency and Disaster Management, Food Sciences, and others. In Applied Sciences, the most popular fields are Healthcare, Technology, Management, and Engineering. Depending on your chosen specialisation, you can develop a different range of skills and abilities. For example, if you study Social Work, you’ll develop soft skills, such as communication, empathy, and cooperation. You should also know how to work and interact with people and enjoy helping them overcome their issues.</p>
                   <p>If you opt for an Emergency and Disaster Management degree, classes will focus on understanding, preventing, and preparing for emergencies. You’ll learn how to respond and maintain your calm during a crisis and educate people on how to react in such a situation. While Applied Sciences and Professions are more practical and vocation-oriented, they do not prevent students’ from going on and applying to a Master’s or even a PhD programme.</p>
                   <p>An Applied Sciences & Professions degree will help you find jobs in the subfields like Library Science, Museum Studies, Military Science, Real Estate & Property Management, Family & Consumer Science, and others.</p>
                 </div>
              </div>
              <div className='AppliedScience-anchor'>
                <Link to='/AppliedScienceAdmissionAdvertisement'>
                    <p>View all Bachelor's Degrees in Applied Sciences & Professions</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='AppliedScience-Section2'>
                 <div className='Agriculture-SubSection1'>
                    <a href=''>
                        <img src={NutritonalScienceCard} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='AppliedScience-cardText'>
                    <h3>Nutritional Science</h3>
                    <div className='Heat-Icon'>
                       <span className='AppliedScienceHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='AppliedScience-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={PULogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Punjab</p>
                      
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='AppliedScience-SubSection1'>
                    <a href=''>
                        <img src={FoodScienceCard} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='AppliedScience-cardText'>
                    <h3>Food Science</h3>
                    <div className='Heat-Icon'>
                       <span className='AppliedScienceHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='AppliedScience-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={ComsatsIslamabad} alt='' />
                        </div>
                        <div className='UniName'>
                            <p className='uniName'>Comsats University Sahiwal Campus</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='AppliedScience-SubSection1'>
                    <a href=''>
                        <img src={PhychologyCard} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='AppliedScience-cardText'>
                    <h3>Applied Psychology</h3>
                    <div className='Heat-Icon'>
                       <span className='AppliedScienceHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='AppliedScience-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={IubLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Islamia University BhawalPur
                            </p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='AppliedScience-SubSection1'>
                    <a href=''>
                        <img src={HNDCard} alt='LogoImage' className='AppliedScience-CardLogo' />
                    </a>
                    <div className='AppliedScience-cardText'>
                    <h3>Human Nutrition Diet</h3>
                    <div className='Heat-Icon'>
                       <span className='AppliedScienceHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='AppliedScience-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UniofAgriculture} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Agriculture Faislabad</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                
              </div>
              <div className='DispayCoversion'>
         <Link to='/AppliedScienceAdmissionAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Applied Sciences & Professions</Link>
                 </div>
        </div>
        <div className='AppliedScienceSpecilization-FiledContainer'>
           <div className='AppliedScienceSpecilization-HeadingText'>
            <h3>Specialisations within the field of Applied Sciences & Professions</h3>
           </div>
           <div className='AppliedScienceSpecilization-SubFieldContainer'>
           <div className='AppliedScienceSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Family & Consumer Science</a>
                    </li>
                    <li>
                        <a href='#'>Library Science</a>
                    </li>
                    <li>
                        <a href='#'>Military Science</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='AppliedScienceSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Social Work</a>
                    </li>
                    <li>
                        <a href='#'>Forensic Science</a>
                    </li>
                    <li>
                        <a href='#'>Fashion, Textiles and Luxury Goods</a>
                    </li>
                    <li>
                        <a href='#'>Emergency & Disaster Management</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='AppliedScienceSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Food Sciences</a>
                    </li>
                    <li>
                        <a href='#'>Museum Studies</a>
                    </li>
                    <li>
                        <a href='#'>Real Estate & Property Management</a>
                    </li>
                </ul>
            </div>
           </div>
           </div>
           
        </div>
        </>
             
        </div>
    )
}
export default AppliedScience;