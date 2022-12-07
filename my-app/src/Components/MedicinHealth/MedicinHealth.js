import './MedicinHealth.css';
import {Link} from 'react-router-dom';
import MedicinImg from './syringe.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const MedicinHealth = () => {
    return (
        <div>
                  <>
        <div className='MedicinHealth-Container'>
              <div className='MedicinHealth-SubContainer'>
                <center>
                <a href='#'>
                    <img src={MedicinImg} alt='MedicinHealth'/>
                </a>
                </center>
              </div>
              <div className='MedicinHealth-Heading'>
                 <h1>What is a Bachelor in Medicine & Health?</h1>
              </div>
              <div className='MedicinHealth-TextHeadingContainer'>
                 <div className='MedicinHealthTextHeading-Container'>
                   <p>Medicine and Health is a broad field of study that equips students with the necessary knowledge and skills to treat and prevent illnesses and diseases in human beings or animals. Medical professionals take patients through the entire healing journey, from the consultation and diagnosis to the treatment and surgical intervention — if necessary — and all the way through convalescence.</p>
                   <p>Medicine and Health degrees include subdisciplines such as Biomedicine, Public Health, Human Medicine, Veterinary Medicine, Dentistry, Nursing, Health Management, Nutrition, etc.</p>
                   <p>Laughter may be the best medicine, but during a Medical degree, you will discover many interesting things like the fact that your left lung is smaller than your right lung to make room for your heart. But, most importantly, medical students will learn how to cure diseases and help people recover. It’s also the doctor’s job to teach patients how to take better care of themselves and prevent diseases from occurring in the first place.</p>
                   <p>First-year medical students will focus on introductory knowledge about how the human or animal body works. Studies then continue with advanced knowledge about internal medicine, paediatrics, psychiatry, and surgery. Those are followed by a specialisation you’ve decided to pursue. Medicine and Health students will attend supervised medical practice or internship, followed by a residency in a health care facility, where they get hands-on experience and deal with real patients and medical problems.</p>
                   <p>Medicine and Health graduates enter the following careers: surgeon, medical technician, psychiatrist, nurse, nutritionist, veterinary doctor, and others.</p>
                   <p>Being a health professional is a difficult but rewarding career. You will need soft skills like empathy, communication, and cooperation to deal with patients efficiently and work well with your peers.</p>
                 </div>
              </div>
              <div className='MedicinHealth-anchor'>
                <Link to='/MedicinHealthAdvertisement'>
                    <p>View all Bachelor's Degrees in Medicine & Health</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='MedicinHealth-Section2'>
                 <div className='MedicinHealth-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='MedicinHealth-CardLogo' />
                    </a>
                    <div className='MedicinHealth-cardText'>
                    <h3>Health and Care Management</h3>
                    <div className='Heat-Icon'>
                       <span className='MedicinHealthHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='MedicinHealth-OrganizationInfo'>
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
                 <div className='MedicinHealth-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='MedicinHealth-CardLogo' />
                    </a>
                    <div className='MedicinHealth-cardText'>
                    <h3>Medical and surgery</h3>
                    <div className='Heat-Icon'>
                       <span className='MedicinHealthHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='MedicinHealth-OrganizationInfo'>
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
                 <div className='MedicinHealth-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='MedicinHealth-CardLogo' />
                    </a>
                    <div className='MedicinHealth-cardText'>
                    <h3>MBBS</h3>
                    <div className='Heat-Icon'>
                       <span className='MedicinHealthHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='MedicinHealth-OrganizationInfo'>
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
                 <div className='MedicinHealth-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='MedicinHealth-CardLogo' />
                    </a>
                    <div className='MedicinHealth-cardText'>
                    <h3>BDS Dental</h3>
                    <div className='Heat-Icon'>
                       <span className='MedicinHealthHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='MedicinHealth-OrganizationInfo'>
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
                       <Link to='/MedicinHealthAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Medicine & Health</Link>
                 </div>
                 <div className='MedicinHealth-Section3'>
                    <div className='MedicinHealthSub-SectionHeading'>
                        <h3>How Medicine & Health Subject Ranking Lists Are Created</h3>
                        <p>Want to know which universities offer the best Master's degrees in Medicine & Health? Check out the university rankings listing the best universities where you can study Medicine & Health according to World University Rankings by Subject from Times Higher Education, and QS World University Rankings by Subject from TopUniversities, Academic Ranking of World Universities in Clinical Medicine and Pharmacy by Shanghai University, and Best Global Universities for Social Sciences and Public Health from U.S. News.</p>
                        <br />
                        <p>These subject specific-rankings take into account a variety of factors relevant for Medicine & Health. Some of these factors are: published Medical papers, cited Medical research, professors’ performance, the number of international students, the teaching environment, and how employable are graduates from Medical programmes. Data about university, programme and teachers' reputation is usually collected through surveys.</p>
                        <p>Each ranking gives different weight to these factors to come up with the final subject-ranking in Medicine & Health.</p>
                        <p>The overall Medicine & Health ranking takes into account study subjects such as Human Medicine, Public Health, Pharmacy, Nursing, Dentistry, etc.</p>
                        <p>The Medicine & Health degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Medicine & Health career that matches your skills and interests.</p>
                        <br /> <br />
                 </div>
         </div>
                       
        </div>
        <div className='MedicinHealthSpecilization-FiledContainer'>
           <div className='MedicinHealthSpecilization-HeadingText'>
            <h3>Specialisations within the field of Medicine & Health</h3>
           </div>
           <div className='MedicinHealthSpecilization-SubFieldContainer'>
           <div className='MedicinHealthSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Biomedicine</a>
                    </li>
                    <li>
                        <a href='#'>Public Health</a>
                    </li>
                    <li>
                        <a href='#'>Human Medicine</a>
                    </li>
                    <li>
                        <a href='#'>Dentistry</a>
                    </li>
                    <li>
                        <a href='#'>Physiotherapy</a>
                    </li>
                    <li>
                        <a href='#'>Pharmacy</a>
                    </li>
                    <li>
                        <a href='#'>Veterinary Medicine</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='MedicinHealthSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Nursing</a>
                    </li>
                    <li>
                        <a href='#'>Nutrition & Dietetics</a>
                    </li>
                    <li>
                        <a href='#'>Complementary & Alternative Medicine</a>
                    </li>
                    <li>
                        <a href='#'>Health Administration</a>
                    </li>
                    <li>
                        <a href='#'>Midwifery</a>
                    </li>
                    <li>
                        <a href='#'>Health Sciences</a>
                    </li>
                    <li>
                        <a href='#'>Clinical Psychology</a>
                    </li>
                    <li>
                        <a href='#'>Kinesiology</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='MedicinHealthSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Speech Pathology</a>
                    </li>
                    <li>
                        <a href='#'>Medical Imaging</a>
                    </li>
                    <li>
                        <a href='#'>Occupational Health and Safety</a>
                    </li>
                    <li>
                        <a href='#'>Gerontology</a>
                    </li>
                    <li>
                        <a href='#'>Epidemiology</a>
                    </li>
                    <li>
                        <a href='#'>Physiology</a>
                    </li>
                    <li>
                        <a href='#'>Immunology</a>
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
export default MedicinHealth;