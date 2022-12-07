import './EnviromentStudies.css';
import {Link} from 'react-router-dom'
import EarthStudiesImg from './earth.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const EnviromentStudies = () => {
    return (
        <div>
                  <>
        <div className='EnviromentStudies-Container'>
              <div className='EnviromentStudies-SubContainer'>
                <center>
                <a href='#'>
                    <img src={EarthStudiesImg} alt='EnviromentStudies'/>
                </a>
                </center>
              </div>
              <div className='EnviromentStudies-Heading'>
                 <h1>What is a Bachelor in Environmental Studies & Earth Sciences?</h1>
              </div>
              <div className='EnviromentStudies-TextHeadingContainer'>
                 <div className='EnviromentStudiesTextHeading-Container'>
                   <p>Environmental Studies & Earth Sciences is a multidisciplinary subject that focuses on studying the interactions between humans and the environment. The main objective is solving real-world problems like pollution, deforestation, waste production, or global warming.</p>
                   <p>Environmental Studies & Earth Sciences search for effective solutions which can stop or at least limit the negative impact of human activities on the environment. It matters because an increasing number of scientists keep telling us that we’ve already gone over the limit. You can have an impact on the implementation of policies that limit pollution output from big companies.</p>
                   <p>If you choose to focus on Earth Sciences, you will study the physical characteristics of our planet and the atmosphere. You will research natural processes and try to understand how the Earth works, track its changes and their causes. The four main subfields of Earth Sciences are Geology, Oceanography, Meteorology, and Astronomy. Through your work and discoveries, you’ll be able to predict natural disasters, meteorological phenomena, and discover new natural resources.</p>
                   <p>Some of the subfields of Environmental Studies & Earth Sciences are Geology, Climate Studies and Meteorology, Toxicology, Biodiversity and Conservation, Natural Hazard Prediction, etc.</p>
                   <p>Environmental Studies & Earth Sciences is a great study option for people who like working outdoors and are interested in finding solutions to complex environmental problems. A big part of your work will involve analysing human activities and their impact on nature.</p>
                   <p>Courses will focus on environmental processes, natural resources, and how you can make predictions for the future. Classes also involve a lot of research. You will learn how to find polluting elements and ways to control or eliminate them. You will spend a lot of time doing field work, collecting air, water, and soil samples, which you will then analyse using laboratory equipment.</p>
                   <p>As a professional environmental scientist, it will also be your job to educate people on why they should avoid using plastic, recycle it whenever possible and become more aware of the importance of a more eco-friendly lifestyle. Environmental Studies & Earth Sciences graduates will find jobs working as nature conservation officers, environmental consultants, sustainability consultants, waste management officers, toxicologists, and many others.</p>
                 </div>
              </div>
              <div className='EnviromentStudies-anchor'>
                <Link to='/EnviromentStudiesEarthStudiesAdvertisement'>
                    <p>View all Bachelor's Degrees in Environmental Studies & Earth Sciences</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='EnviromentStudies-Section2'>
                 <div className='EnviromentStudies-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EnviromentStudies-CardLogo' />
                    </a>
                    <div className='EnviromentStudies-cardText'>
                    <h3>Natural Science</h3>
                    <div className='Heat-Icon'>
                       <span className='EnviromentStudiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EnviromentStudies-OrganizationInfo'>
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
                 <div className='EnviromentStudies-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EnviromentStudies-CardLogo' />
                    </a>
                    <div className='EnviromentStudies-cardText'>
                    <h3>Enviroment Science</h3>
                    <div className='Heat-Icon'>
                       <span className='EnviromentStudiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EnviromentStudies-OrganizationInfo'>
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
                 <div className='EnviromentStudies-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EnviromentStudies-CardLogo' />
                    </a>
                    <div className='EnviromentStudies-cardText'>
                    <h3>Land and Water Management</h3>
                    <div className='Heat-Icon'>
                       <span className='EnviromentStudiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EnviromentStudies-OrganizationInfo'>
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
                 <div className='EnviromentStudies-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EnviromentStudies-CardLogo' />
                    </a>
                    <div className='EnviromentStudies-cardText'>
                    <h3>Enviromental Engineering</h3>
                    <div className='Heat-Icon'>
                       <span className='EnviromentStudiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EnviromentStudies-OrganizationInfo'>
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
                       <Link to='/EnviromentStudiesEarthStudiesAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Environmental Studies & Earth Sciences</Link>
                 </div>
                 <div className='EnviromentStudies-Section3'>
                    <div className='EnviromentStudiesSub-SectionHeading'>
                        <h3>How Environmental Studies & Earth Sciences Subject Ranking Lists Are Created</h3>
                        <p>Interested in which universities offer the best Bachelor's and Master's degrees in Environmental Studies & Earth Sciences?</p>
                        <br />
                        <p>Take a look at the university rankings listing the best universities where you can study Environmental Studies & Earth Sciences according to World University Rankings for Geology, Environmental, Earth & Marine Sciences from Times Higher Education, QS World University Rankings by Subject from TopUniversities, Best Global Universities for Environment/Ecology offered by U.S. News, and ShanghaiRanking's Global Ranking of Academic Subjects: Earth Sciences.</p>
                        <br /> <br />
                        
                    <p>These subject-specific rankings listing the best universities for an Environmental Studies & Earth Sciences degree take into account aspects like:</p>
                        <div className='EnviromentStudiesSub-SectionHeading2'>
                        <ul>
                            <li>Academic reputation of the programme and university (assessed via surveys)</li>
                            <li>Number of published papers in the field of Environmental Studies</li>
                            <li>
                            Number of citations in research papers
                            </li>
                            <li>Number of international students</li>
                            <li>The teaching environment (assessed via surveys)</li>
                            <li>Teachers' skills and number of international staff</li>
        
                        </ul>
                        <p>
                        Each of these factors has a different weight in the overall rankings that leads to the final top universities to study a degree in Environmental Studies & Earth Sciences.
                        </p>
                        <br />
                        <p>The overall Environmental Studies & Earth Sciences ranking includes subdisciplines and related disciplines such as Ecology, Hydrology, Geology, Climate Studies, Biodiversity, Sustainable Development, etc.</p>
                        <p>
                        The Environmental Studies & Earth Sciences degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Environmental Studies & Earth Sciences career that matches your skills and interests.
                        </p>
                    </div>
                 </div>
         </div>
                       
        </div>
        <div className='EnviromentStudiesSpecilization-FiledContainer'>
           <div className='EnviromentStudiesSpecilization-HeadingText'>
            <h3>Specialisations within the field of Environmental Studies & Earth Sciences</h3>
           </div>
           <div className='EnviromentStudiesSpecilization-SubFieldContainer'>
           <div className='EnviromentStudiesSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Earth Sciences</a>
                    </li>
                    <li>
                        <a href='#'>Toxicology</a>
                    </li>
                    <li>
                        <a href='#'>Soil Science</a>
                    </li>
                    <li>
                        <a href='#'>Geology</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='EnviromentStudiesSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Hydrology & Water Management</a>
                    </li>
                    <li>
                        <a href='#'>Climate Studies & Meteorology</a>
                    </li>
                    <li>
                        <a href='#'>Biodiversity & Conservation</a>
                    </li>
                    <li>
                        <a href='#'>Sustainable Development</a>
                    </li>
                    <li>
                        <a href='#'>Environmental Economics & Policy</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='EnviromentStudiesSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Environmental Management</a>
                    </li>
                    <li>
                        <a href='#'>Natural Resource Management</a>
                    </li>
                    <li>
                        <a href='#'>Environmental Sciences</a>
                    </li>
                    <li>
                        <a href='#'>Ecology</a>
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
export default EnviromentStudies;