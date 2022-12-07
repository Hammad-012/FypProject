import './AgricultureForesty.css';
import {Link} from 'react-router-dom'
import treeImg from './tree.png';
import CardImage from './CardImage.jpeg';
import CardSoil from './CardSoil.png'
import PuLogo from './PuLogo.jpeg'
import BioCard from './BioCard.webp'
import Argonomy from './Argonomy.png'
import UAFLogo from './UAFLogo.png'
import AridLogo from './AridLogo.png';
import UOSLogo from './UOSLogo.jpg'
const AgricultureForesty = () => {
    return (
        <div>
            <>
        <div className='Agriculture-Container'>
              <div className='Agriculture-SubContainer'>
                <center>
                <a href='#'>
                    <img src={treeImg} alt='treeImage'/>
                </a>
                </center>
              </div>
              <div className='Agriculture-Heading'>
                 <h1>What is a Bachelor in Agriculture & Forestry?</h1>
              </div>
              <div className='AgricultureForesty-TextHeadingContainer'>
                 <div className='AgricultureTextHeading-Container'>
                   <p>Agriculture and Forestry is a vital scientific field that focuses on studyig plants, animals, and the environments in which they thrive. You’ll learn about forest restoration, managing natural resources, food production, and preserving the natural beauty that surrounds us. Agriculture and Forestry also studies crop rotation and preserving the soil’s mineral qualities. They make sure that products follow industry standards and reach the markets. This is essential in the mass production of food, whose demand will grow as the human population increases.</p>
                   <p>Agriculture & Forestry students can find themselves working in Horticulture, Animal Sciences, Aquaculture and Fisheries, and other subfields</p>
                   <p>You can help businesses manage their ecological impact; establish and preserve wildlife, knowing exactly how animal husbandry and cultivating plants affects the environment; or you can create spectacular garden landscapes for everyone to admire. During courses, you will also learn how to properly manage forests. Many people still depend on lumber, as alternative building materials and energy sources’ popularity is growing slowly. You will be responsible for finding a balance that maintains the health of forests, while also providing for our needs.</p>
                   <p>Agriculture & Forestry students can also focus on permaculture, a concept that fully embraces the idea of working with nature, rather than against it. Permaculture aims to create systems that produce no waste and are beneficial for us and the environment. Permaculture principles are applied in many fields, including regenerative agriculture and rewilding. The need for this type of approaches will keep growing in the next years.</p>
                   <p>Agriculture & Forestry graduates find themselves in diverse careers, working as agricultural engineers, agronomists, forests rangers, conservationists, nutrient management specialists, landscapers, water management planners, and others. Here are other related fields you might be interested in environmental sustainability, food science, geology, ecology, animal husbandry.</p>
            
                 </div>
              </div>
              <div className='Agriculture-anchor'>
                <Link to='/AgricultureForestyAdmission'>
                    <p>View all Bachelor's Degrees in Agriculture & Forestry</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='Agriculture-Section2'>
                 <div className='Agriculture-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='Agriculture-cardText'>
                    <h3>BS Agricultural Science</h3>
                    <div className='Heat-Icon'>
                       <span className='AgricultureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Agriculture-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UAFLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Agricultural University Faisalabad</p>
                       
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='Agriculture-SubSection1'>
                    <a href=''>
                        <img src={CardSoil} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='Agriculture-cardText'>
                    <h3>Soil Science</h3>
                    <div className='Heat-Icon'>
                       <span className='AgricultureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Agriculture-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={AridLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Arid Agriculture Universities(PMASU)</p>
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='Agriculture-SubSection1'>
                    <a href=''>
                        <img src={BioCard} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='Agriculture-cardText'>
                    <h3>Bio-diversity</h3>
                    <div className='Heat-Icon'>
                       <span className='AgricultureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Agriculture-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UOSLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Swat</p>
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='Agriculture-SubSection1'>
                    <a href=''>
                        <img src={Argonomy} alt='LogoImage' className='Agriculture-CardLogo' />
                    </a>
                    <div className='Agriculture-cardText'>
                    <h3>Agronomy</h3>
                    <div className='Heat-Icon'>
                       <span className='AgricultureHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Agriculture-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UAFLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Agriculture University Faisalabad</p>
                        </div>
                        <p></p>
                    </div>
                 </div>
                
              </div>
              <div className='DispayCoversion'>
                       <Link to='/AgricultureForestyAdmission' className='ChampionButton'>View all Bachelor's Degrees in Agriculture & Forestry</Link>
                 </div>
                 <div className='Agriculture-Section3'>
                    <div className='AgricultureSub-SectionHeading'>
                        <h3>How Agriculture & Forestry Subject Ranking Lists Are Created</h3>
                        <p>Want to find out which universities offer the best Bachelor’s and Master’s degrees in Agriculture & Forestry?</p>
                        <br />
                        <p>Take a look at the university rankings listing the best universities where you can study Agriculture according to World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities, Best Global Universities for Plant and Animal Science, offered by U.S. News, and ShanghaiRanking's Global Ranking of Academic Subjects – Agricultural Sciences</p>
                        <br /> <br />
                        
                    <p>These subject-specific rankings listing the best universities for an Agriculture & Forestry degree analyse indicators such as:</p>
                        <div className='AgricultureSub-SectionHeading2'>
                        <ul>
                            <li>Academic reputation of the programme and university (assessed via surveys)</li>
                            <li>Number of published papers in the field of Agriculture</li>
                            <li>
                            Number of citations in research papers
                            </li>
                            <li>Number of international students</li>
                            <li>The teaching environment (assessed via surveys)</li>
                            <li>Teachers' skills and number of international staff</li>
        
                        </ul>
                        <p>
                        Each of these factors has a different weight in the overall rankings that leads to the final top universities to study a degree in Agriculture & Forestry
                        </p>
                        <br />
                        <p>The overall Agriculture & Forestry ranking takes into account subdisciplines and related disciplines such as Animal Sciences, Fisheries, Horticulture and Plant& Crop Sciences.</p>
                        <p>
                        The Agriculture & Forestry degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Agriculture & Forestry career that matches your skills and interests.
                        </p>
                    </div>
                 </div>
         </div>
                       
        </div>
        <div className='AgricultureSpecilization-FiledContainer'>
           <div className='AgricultureSpecilization-HeadingText'>
            <h3>Specialisations within the field of Agriculture & Forestry</h3>
           </div>
           <div className='AgricultureSpecilization-SubFieldContainer'>
           <div className='AgricultureSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Agriculture</a>
                    </li>
                    <li>
                        <a href='#'>Animal Sciences</a>
                    </li>
                   
                </ul>
            </div>
           </div>
           <div className='AgricultureSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Marine Studies</a>
                    </li>
                    <li>
                        <a href='#'>Forestry</a>
                    </li>
                    
                </ul>
            </div>
           </div>
           <div className='AgricultureSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Horticulture</a>
                    </li>
                    <li>
                        <a href='#'>Botany</a>
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
export default AgricultureForesty;