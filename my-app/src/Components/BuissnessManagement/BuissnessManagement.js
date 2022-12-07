import'./BuissnessManagement.css';
import {Link} from 'react-router-dom'
import BuissnessManagementImg from './briefcase.png';
import CardImg from './CardImage.avif';
import UELogo from './UELogo.jpg';
import ComsatsIslamabad from './ComsatsIslamabad.jpg'
import AccountingFinanceCard from './AccountingFinanceCard.png'
import BuissnessManagementCard from './BuisnessManagementCard.jpeg'
import BACard from './BACard.jpeg';
import LUMSLogo from './LUMSLogo.jpeg'
import IubLogo from './IubLogo.jpg'
import EcnomicsCard from './EcnomicsCard.jpeg'
const BuissnessManagement = () => {
    return(
        <div>
                <>
           
           <div className='BuissnessManagement-Container'>
                 <div className='BuissnessManagement-SubContainer'>
                   <center>
                   <a href='#'>
                       <img src={BuissnessManagementImg} alt='Applied'/>
                   </a>
                   </center>
                 </div>
                 <div className='BuissnessManagement-Heading'>
                    <h1>What is a Bachelor in Business & Management?</h1>
                 </div>
                 <div className='BuissnessManagement-TextHeadingContainer'>
                    <div className='BuissnessManagementTextHeading-Container'>
                      <p>Business and Management is one of the most popular fields of study in the world, teaching you everything there is to know about running a successful business. Think in terms of developing the business sustainably, managing the resources and reducing unnecessary expenses, keeping your employees motivated and engaged, and communicating a clear vision for the company — one that can bring all departments and staff members together and give them a sense of purpose and fulfilment</p>
                      <p>Business and Management includes subdisciplines like Project Management, Business Administration, Finance, Marketing, Human Resource Management (HRM), and others.</p>
                      <p>A Business degree, such as an MBA or a Master in Management (MIM) will cover all aspects related to conducting business. This includes managing and motivating your team, understanding the way the company makes money and how to reinvest it, advertising products and services, and helping the company grow both locally and internationally.</p>
                      <p>Business and Management teaches students how to improve and make enterprises more efficient. You will discover ways of increasing the revenue, hiring better people and knowing when to invest, and where. Your leadership skills will be highly valued, especially if your goal is to take on a management or administrative position after graduation.</p>
                      <p>The world of business is vast, and the tasks you will have while working for a company can vary a lot. You might need to help with marketing strategies or to analyse the budget and see if you can cut off some of the expenses. You'll also be in charge of projects – making sure deadlines are met and evaluating results at the end.</p>
                      <p>Graduates of Business & Management can pick any career path they wish, but the most popular are: entrepreneurs, forensic accountants, project managers, bankers, international business specialists.</p>
                      <p>One thing is clear: you will have a lot of responsibilities on your shoulders. A career in management is great if you like challenges and enjoy pushing your limits. To succeed in Business & Management you'll need a wide variety of interpersonal skills. Great leaders know how to manage teams, encourage people and help them develop.</p>
                    </div>
                 </div>
                 <div className='BuissnessManagement-anchor'>
                   <Link to='/BuisnessManagementAdvertisement'>
                       <p>View all Bachelor's Degrees in Business & Management</p>
                   </Link>
                   <div className='interstingProgram-Heading'>
                       <h1>Interesting programmes for you</h1>
                   </div>
                 </div>
                 <div className='BuissnessManagement-Section2'>
                    <div className='BuissnessManagement-SubSection1'>
                       <a href=''>
                           <img src={AccountingFinanceCard} alt='LogoImage' className='BuissnessManagement-CardLogo' />
                       </a>
                       <div className='BuissnessManagement-cardText'>
                       <h3>Accounting&Finance</h3>
                       <div className='Heat-Icon'>
                          <span className='BuissnessManagementHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='BuissnessManagement-OrganizationInfo'>
                           <div className='UniLogo'>
                               <img src={ComsatsIslamabad} alt='' />
                           </div>
                           <div className='UniName'>
                               <p>Comsats University Islamabad Sahiwal Campus</p>
                        
                           </div>
                           <p></p>
                       </div>
                    </div>
                    <div className='BuissnessManagement-SubSection1'>
                       <a href=''>
                           <img src={BuissnessManagementCard} alt='LogoImage' className='Agriculture-CardLogo' />
                       </a>
                       <div className='BuissnessManagement-cardText'>
                       <h3>Buissness Management</h3>
                       <div className='Heat-Icon'>
                          <span className='BuissnessManagementHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='BuissnessManagement-OrganizationInfo'>
                           <div className='UniLogo'>
                               <img src={ComsatsIslamabad} alt='' />
                           </div>
                           <div className='UniName'>
                               <p className='uniName'>Comsats University Islamabad Sahiwal Campus</p>
                           
                           </div>
                           <p></p>
                       </div>
                    </div>
                    <div className='BuissnessManagement-SubSection1'>
                       <a href=''>
                           <img src={BACard} alt='LogoImage' className='BuissnessManagement-CardLogo' />
                       </a>
                       <div className='BuissnessManagement-cardText'>
                       <h3>Buissness Administration</h3>
                       <div className='Heat-Icon'>
                          <span className='BuissnessManagementHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='BuissnessManagement-OrganizationInfo'>
                           <div className='UniLogo'>
                               <img src={LUMSLogo} alt='' />
                           </div>
                           <div className='UniName'>
                               <p>Lahore University Management Science</p>
                           
                           </div>
                           <p></p>
                       </div>
                    </div>
                    <div className='BuissnessManagement-SubSection1'>
                       <a href=''>
                           <img src={EcnomicsCard} alt='LogoImage' className='BuissnessManagement-CardLogo' />
                       </a>
                       <div className='BuissnessManagement-cardText'>
                       <h3>Economics</h3>
                       <div className='Heat-Icon'>
                          <span className='BuissnessManagementHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='BuissnessManagement-OrganizationInfo'>
                           <div className='UniLogo'>
                               <img src={IubLogo} alt='' />
                           </div>
                           <div className='UniName'>
                               <p>Islamia University BhawalPur</p>
                           
                           </div>
                           <p></p>
                       </div>
                    </div>
                   
                 </div>
                 <div className='DispayCoversion'>
                          <Link to='/BuisnessManagementAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Business & Management</Link>
                    </div>
           </div>
           <div className='BuissnessManagement-Section3'>
                    <div className='BuissnessManagement-SectionHeading'>
                        <h3>How Business & Management Subject Ranking Lists Are Created</h3>
                        <p>Do you want to do a degree in Business and Management, but also do it through a top Bachelor's or Master's programme? Check out university ranking lists according to subject such as World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities and Best Global Universities for Economics and Business, offered by U.S. News.</p>
                        <br />
                        <p>These subject specific-rankings analyse a variety of factors relevant for studies in Business and Management. Some of these factors are: published papers on Business and Management, cited research papers on Business and Management, professors' performance, the number of international students, the teaching environment, and how employable graduates from Business and Management programmes are. Data about university, programme and teachers’ reputation is usually collected through surveys.</p><br />
                        <p>Each ranking gives different weight to these factors to come up with the final subject-ranking in Business and Management.</p><br />
                        <p>The overall Business and Management ranking takes into account subdisciplines and related-disciplines such as Economics, Management, Business Administration, Marketing and so on.</p><br />
                        <p>The Business and Management degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Business and Management career that matches your skills and interests.</p><br />
                        <br /> <br />
                 </div>
         </div>
           <div className='BuissnessManagementSpecilization-FiledContainer'>
              <div className='BuissnessManagementSpecilization-HeadingText'>
               <h3>Specialisations within the field of Applied Sciences & Professions</h3>
              </div>
              <div className='BuissnessManagementSpecilization-SubFieldContainer'>
              <div className='BuissnessManagementSpecilization-Container1'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Project Management</a>
                       </li>
                       <li>
                           <a href='#'>Business Administration</a>
                       </li>
                       <li>
                           <a href='#'>Entrepreneurship</a>
                       </li>
                       <li>
                           <a href='#'>Finance</a>
                       </li>
                       <li>
                           <a href='#'>Marketing</a>
                       </li>
                       <li>
                           <a href='#'>Management Studies</a>
                       </li>
                       <li>
                           <a href='#'>Accounting</a>
                       </li>
                       <li>
                           <a href='#'>Public Administration</a>
                       </li>
                       <li>
                           <a href='#'>Human Resource Management</a>
                       </li>
                       <li>
                           <a href='#'>Supply Chain Management & Logistics</a>
                       </li>
                       <li>
                           <a href='#'>Agribusiness</a>
                       </li>
                       <li>
                           <a href='#'>Auditing</a>
                       </li>
                   </ul>
               </div>
              </div>
              <div className='BuissnessManagementSpecilization-Container2'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Business Intelligence & Analytics</a>
                       </li>
                       <li>
                           <a href='#'>Commerce</a>
                       </li>
                       <li>
                           <a href='#'>Corporate Communication</a>
                       </li>
                       <li>
                           <a href='#'>Corporate Social Responsibility</a>
                       </li>
                       <li>
                           <a href='#'>Executive MBA</a>
                       </li>
                       <li>
                           <a href='#'>Forensic Accounting</a>
                       </li>
                       <li>
                           <a href='#'>Innovation Management</a>
                       </li>
                       <li>
                           <a href='#'>International Business</a>
                       </li>
                       <li>
                           <a href='#'>Master in Business Administration (MBA)</a>
                       </li>
                       <li>
                           <a href='#'>Master in Management (MIM)</a>
                       </li>
                       <li>
                           <a href='#'>Retail Management</a>
                       </li>
                       <li>
                           <a href='#'>Risk Management</a>
                       </li>
                       <li>
                           <a href='#'>Strategic Management</a>
                       </li>
                   </ul>
               </div>
              </div>
              <div className='BuissnessManagementSpecilization-Container3'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Taxation</a>
                       </li>
                       <li>
                           <a href='#'>Engineering Management</a>
                       </li>
                       <li>
                           <a href='#'>Transport Management</a>
                       </li>
                       <li>
                           <a href='#'>Digital Communication</a>
                       </li>
                       <li>
                           <a href='#'>Digital Marketing</a>
                       </li>
                       <li>
                           <a href='#'>Actuarial Science</a>
                       </li>
                       <li>
                           <a href='#'>Construction Management</a>
                       </li>
                       <li>
                           <a href='#'>Management of Creative Industries</a>
                       </li>
                       <li>
                           <a href='#'>IT Management</a>
                       </li>
                       <li>
                           <a href='#'>Operations and Quality Management</a>
                       </li>
                       <li>
                           <a href='#'>Banking & Investment</a>
                       </li>
                       <li>
                           <a href='#'>Leadership</a>
                       </li>
                       <li>
                           <a href='#'>Marketing Management</a>
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
export default BuissnessManagement;