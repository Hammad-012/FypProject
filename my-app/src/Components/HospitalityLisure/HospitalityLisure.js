import './HospitalityLisure.css';
import {Link} from 'react-router-dom';
import HospitalityImg from './pin.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const HospitalityLisure = () => {
    return (
        <div>
          <>
        <div className='HospitalityLisure-Container'>
              <div className='HospitalityLisure-SubContainer'>
                <center>
                <a href='#'>
                    <img src={HospitalityImg} alt='HospitalityLisure'/>
                </a>
                </center>
              </div>
              <div className='HospitalityLisure-Heading'>
                 <h1>What is a Bachelor in Hospitality, Leisure & Sports ?</h1>
              </div>
              <div className='HospitalityLisure-TextHeadingContainer'>
                 <div className='HospitalityLisureTextHeading-Container'>
                   <p>Hospitality, Leisure, and Sports is a larger category of disciplines that has given rise to a variety of degrees in Sports Management, Hospitability Management, Culinary Arts, Event Management, and Tourism. You should choose one of these disciplines if you love socialising, travelling, preparing tasty dishes, planning events, or managing sports teams and businesses.</p>
                   <p>Hospitality, Leisure, and Sports has been growing in popularity because it helps students transform their passions into successful careers.</p>
                   <p>Courses focus on different academic outcomes. You can either learn how to become an excellent chef, make sure events are well organised, learn how to cater to the needs of tourists and make sure they have a great experience or discover how to manage sports teams and facilities.</p>
                   <p>Depending on your specialisation, you can take classes in Cultural and Natural Heritage, International Tourism, Business and Professional Ethics, Sports Marketing and Sales, Leading the Service Experience, Quantity Food Production, Social Innovation, etc.</p>
                   <p>People who graduate Hospitality, Leisure & Sports choose careers such as: travel agent, hotel and resort staff, tour guide, restaurant manager, athletic director, personal chef, and others.</p>
                 </div>
              </div>
              <div className='HospitalityLisure-anchor'>
                <Link to='/HospitalityLisureAdvertisement'>
                    <p>View all Bachelor's Degrees in Hospitality, Leisure & Sports</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='HospitalityLisure-Section2'>
                 <div className='HospitalityLisure-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='HospitalityLisure-CardLogo' />
                    </a>
                    <div className='HospitalityLisure-cardText'>
                    <h3>Hospitality Tourism</h3>
                    <div className='Heat-Icon'>
                       <span className='HospitalityLisureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='HospitalityLisure-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UELogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Europe for<br /> Applied Science</p>
                        <div className='Location'>
                          <p> Berlin , Germany</p> 
                            </div>
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='HospitalityLisure-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='HospitalityLisure-CardLogo' />
                    </a>
                    <div className='HospitalityLisure-cardText'>
                    <h3>Tourism Sports and Event Management</h3>
                    <div className='Heat-Icon'>
                       <span className='HospitalityLisureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='HospitalityLisure-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UELogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Europe for<br /> Applied Science</p>
                        <div className='Location'>
                          <p> Berlin , Germany</p> 
                            </div>
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='HospitalityLisure-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='HospitalityLisure-CardLogo' />
                    </a>
                    <div className='HospitalityLisure-cardText'>
                    <h3>Sports Management</h3>
                    <div className='Heat-Icon'>
                       <span className='HospitalityLisureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='HospitalityLisure-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UELogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Europe for<br /> Applied Science</p>
                        <div className='Location'>
                          <p> Berlin , Germany</p> 
                            </div>
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='HospitalityLisure-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='HospitalityLisure-CardLogo' />
                    </a>
                    <div className='HospitalityLisure-cardText'>
                    <h3>Digital Business</h3>
                    <div className='Heat-Icon'>
                       <span className='HospitalityLisureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='HospitalityLisure-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UELogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Europe for<br /> Applied Science</p>
                        <div className='Location'>
                          <p> Berlin , Germany</p> 
                            </div>
                        </div>
                        <p></p>
                    </div>
                 </div>
                
              </div>
              <div className='DispayCoversion'>
                       <Link to='/HospitalityLisureAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Hospitality, Leisure & Sports</Link>
                 </div>
                 <div className='HospitalityLisure-Section3'>
                    <div className='HospitalityLisureSub-SectionHeading'>
                        <h3>How Hospitality, Leisure & Sports Subject Ranking Lists Are Created</h3>
                        <p>Take a look at the university rankings listing the best universities where you can study Hospitality, Leisure & Sports according to, QS World University Rankings by Subject from TopUniversities, and ShanghaiRanking's Global Ranking of Academic Subjects.</p>
                        <br />
                        <p>These subject- specific university rankings are based on combining different assessment criteria such as research and citations, academic reputation, employability, and internationalisation. Each of these factors has a different weight the final university ranking in the field of Hospitality, Leisure & Sports.</p>
                        <p>The overall Hospitality, Leisure & Sports university ranking also refers to related- disciplines such as Culinary Arts, Event Management, Tourism & Leisure, or Hospitality Management.</p>
                        <p>The Hospitality, Leisure & Sports degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Hospitality, Leisure & Sports career that matches your skills and interests.</p>
                        <br /> <br />
                 </div>
         </div>
                       
        </div>
        <div className='HospitalityLisureSpecilization-FiledContainer'>
           <div className='HospitalityLisureSpecilization-HeadingText'>
            <h3>Specialisations within the field of Hospitality, Leisure & Sports</h3>
           </div>
           <div className='HospitalityLisureSpecilization-SubFieldContainer'>
           <div className='HospitalityLisureSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Sports Management</a>
                    </li>
                    <li>
                        <a href='#'>Hospitality Management</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='HospitalityLisureSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Culinary Arts</a>
                    </li>
                    <li>
                        <a href='#'>Event Management</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='HospitalityLisureSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Sports Science</a>
                    </li>
                    <li>
                        <a href='#'>Tourism Leisure</a>
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
export default HospitalityLisure;