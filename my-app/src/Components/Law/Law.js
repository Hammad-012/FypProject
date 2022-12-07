import './Law.css';
import {Link} from 'react-router-dom';
import LawImg from './compliant.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const Law = () => {
    return (
        <div>
                <>
        <div className='Law-Container'>
              <div className='Law-SubContainer'>
                <center>
                <a href='#'>
                    <img src={LawImg} alt='Law'/>
                </a>
                </center>
              </div>
              <div className='Law-Heading'>
                 <h1>What is a Bachelor in Law?</h1>
              </div>
              <div className='Law-TextHeadingContainer'>
                 <div className='LawTextHeading-Container'>
                   <p>Law is a discipline that deals with understanding and interpreting the system of rules, statutes, decrees, and regulations that apply at the national or international level. Law or Legal Education is a combination of multiple theoretical subjects and case studies, which help students to develop their skills through practical assignments.</p>
                   <p>Some of the most popular subfields of Law include International Law, European Law, Criminal Law, Civil Law, Public Law, Business Law, etc.</p>
                   <p>People who attend law schools are often conscientious, and integrity is an essential quality for them. They see corruption as a major roadblock in the development of better societies and aim to improve the world by ensuring that impartial justice is served. Some of the modules included in a Law degree are law of contract, law of tort, property law, criminal law, governing the major organs of the state, constitutional law, human right law, etc. These courses are followed by legal training, where future lawyers have the opportunity to practise what they’ve learned.</p>
                   <p>While studying Law, you will also develop and enhance your public-speaking skills and the ability to form arguments and support them with relevant facts. You can use principles from rhetorical discourse to significantly improve this ability.</p>
                   <p>Law careers allow you to work as a solicitor, barrister, judge, detective, licensed conveyancer, advice worker, mediator, and more. Whether you decide to become a judge, a defence attorney, a prosecutor, or focus on working within a specific organisation or company, you will be expected to have a high level of knowledge, a great sense of justice, a vast vocabulary, and excellent negotiation and communication skills. You'll need to back them up with a great memory and strong analytical thinking.</p>
                   <p>The world needs more law practitioners. You can be one of the people who defend the truth and make sure our society is safer and fairer, and that’s something you should be proud of.</p>
                 </div>
              </div>
              <div className='Law-anchor'>
                <Link to='/LawAdvertisement'>
                    <p>View all Bachelor's Degrees in Law</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='Law-Section2'>
                 <div className='Law-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Law-CardLogo' />
                    </a>
                    <div className='Law-cardText'>
                    <h3>Law (Hons)</h3>
                    <div className='Heat-Icon'>
                       <span className='LawHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Law-OrganizationInfo'>
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
                 <div className='Law-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Law-CardLogo' />
                    </a>
                    <div className='Law-cardText'>
                    <h3>Crime Justice</h3>
                    <div className='Heat-Icon'>
                       <span className='LawHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Law-OrganizationInfo'>
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
                 <div className='Law-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Law-CardLogo' />
                    </a>
                    <div className='Law-cardText'>
                    <h3>Criminalogy</h3>
                    <div className='Heat-Icon'>
                       <span className='LawHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Law-OrganizationInfo'>
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
                 <div className='Law-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Law-CardLogo' />
                    </a>
                    <div className='Law-cardText'>
                    <h3>Global Law</h3>
                    <div className='Heat-Icon'>
                       <span className='LawHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Law-OrganizationInfo'>
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
                       <Link to='/LawAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Law</Link>
                 </div>
                 <div className='Law-Section3'>
                    <div className='LawSub-SectionHeading'>
                        <h3>How Law Subject Ranking Lists Are Created</h3>
                        <p>Find the best university for pursing a Bachelor's or Master's degree in Law by checking university ranking tops according to subject such as World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities, and ShanghaiRanking's Global Ranking of Academic Subjects in Law.</p>
                        <br />
                        <p>These Law subject-rankings are based on a combination of indices and factors relevant to the discipline of Law. They measure aspects like: published papers on Law, cited research papers on Law, professors’ performance, the number of international students, the teaching environment, and how employable are Law graduates from each university. Data about university, programme and teachers' reputation is usually collected through surveys.</p>
                        <p>The overall Law subject-rankings implies the tops also consider related-degrees in subdisciplines like International Law, Business Law, Criminal Law, Public Law, or Legal Studies.</p>
                        <p>The Law degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Law career that matches your skills and interests.</p>
                        <br /> <br />
                 </div>
         </div>
                       
        </div>
        <div className='LawSpecilization-FiledContainer'>
           <div className='LawSpecilization-HeadingText'>
            <h3>Specialisations within the field of Law</h3>
           </div>
           <div className='LawSpecilization-SubFieldContainer'>
           <div className='LawSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Pakistan Law</a>
                    </li>
                    <li>
                        <a href='#'>Patent & Intellectual Property Law</a>
                    </li>
                    <li>
                        <a href='#'>International Law</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='LawSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Criminal Law</a>
                    </li>
                    <li>
                        <a href='#'>Civil & Private Law</a>
                    </li>
                    <li>
                        <a href='#'>Public Law</a>
                    </li>
                    <li>
                        <a href='#'>Business Law</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='LawSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Legal Studies</a>
                    </li>
                    <li>
                        <a href='#'>Master of Laws (LLM)</a>
                    </li>
                    <li>
                        <a href='#'>Criminal Justice</a>
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
export default Law;