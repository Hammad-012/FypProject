import './EngineeringTechnology.css';
import {Link} from 'react-router-dom';
import technologyImg from './technology.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const EngineeringTechnology = () => {
    return (
        <div>
                   <>
           
           <div className='EngineeringTechnology-Container'>
                 <div className='EngineeringTechnology-SubContainer'>
                   <center>
                   <a href='#'>
                       <img src={technologyImg} alt='EngineeringTechnology'/>
                   </a>
                   </center>
                 </div>
                 <div className='EngineeringTechnology-Heading'>
                    <h1>What is a Bachelor in Engineering & Technology?</h1>
                 </div>
                 <div className='EngineeringTechnology-TextHeadingContainer'>
                    <div className='EngineeringTechnologyTextHeading-Container'>
                      <p>Engineering and Technology is a broad set of disciplines that deal with everything connected to the design, manufacture, and maintenance of infrastructure, devices, tools, and information systems used by people on a daily basis. Think about cars, TVs, smartphones, electrical power grids, mechanical bridges — all these machines and tools make our life more comfortable, and they wouldn’t have existed without the wonderful work of engineers and technology enthusiasts.</p>
                      <p>These are some of the most popular Engineering subdisciplines: Aerospace Engineering, Civil Engineering, Mechanical Engineering, Chemical Engineering, Industrial Engineering, Robotics, etc.</p>
                      <p>Engineering and Technology degrees will help you develop the knowledge and skills required to shape the future of technology, industrial design, and applied sciences. Engineers take the latest scientific discoveries and turn them into cutting-edge technology, using the language of exact sciences like Mathematics, Physics, and Chemistry.</p>
                      <p>Some of the challenges engineers face may include adapting city infrastructures to fit growing populations, optimising maintenance processes, replacing manual work with automation, or creating new durable and more efficient materials. Elon Musk is a great example of how engineering can fix complex issues, in his case, pollution and space exploration. Just like he encouraged the idea of a hyperloop transportation system, you can take the initiative and come up with your own vision. What great device do you have in mind that can completely revolutionise the world? What tech idea will you share that will make life better for everyone?</p>
                      <p>Engineering and Technology graduates find jobs in fields like Industrial Design, Aerospace Engineering, Civil Engineering, Biomedical Engineers, and many others. Depending on your specialization you can find versatile jobs in farms, car and airplane manufacturing, big pharma, construction companies, tech companies, environmental NGOs and more.</p>
                    </div>
                 </div>
                 <div className='EngineeringTechnology-anchor'>
                   <Link to='/EngineeringTechnologyAdvertisement'>
                       <p>View all Bachelor's Degrees in Engineering & Technology</p>
                   </Link>
                   <div className='interstingProgram-Heading'>
                       <h1>Interesting programmes for you</h1>
                   </div>
                 </div>
                 <div className='EngineeringTechnology-Section2'>
                    <div className='EngineeringTechnology-SubSection1'>
                       <a href=''>
                           <img src={CardImage} alt='LogoImage' className='EngineeringTechnology-CardLogo' />
                       </a>
                       <div className='EngineeringTechnology-cardText'>
                       <h3>Mechanical Engineering</h3>
                       <div className='Heat-Icon'>
                          <span className='EngineeringTechnologyHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='EngineeringTechnology-OrganizationInfo'>
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
                    <div className='EngineeringTechnology-SubSection1'>
                       <a href=''>
                           <img src={CardImage} alt='LogoImage' className='EngineeringTechnology-CardLogo' />
                       </a>
                       <div className='EngineeringTechnology-cardText'>
                       <h3>Electrical Engineering</h3>
                       <div className='Heat-Icon'>
                          <span className='EngineeringTechnologyHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='EngineeringTechnology-OrganizationInfo'>
                           <div className='UniLogo'>
                               <img src={UELogo} alt='' />
                           </div>
                           <div className='UniName'>
                               <p className='uniName'>University of Europe for<br /> Applied Science</p>
                           <div className='Location'>
                             <p> Berlin , Germany</p> 
                               </div>
                           </div>
                           <p></p>
                       </div>
                    </div>
                    <div className='EngineeringTechnology-SubSection1'>
                       <a href=''>
                           <img src={CardImage} alt='LogoImage' className='EngineeringTechnology-CardLogo' />
                       </a>
                       <div className='EngineeringTechnology-cardText'>
                       <h3>Civil Engineering</h3>
                       <div className='Heat-Icon'>
                          <span className='EngineeringTechnologyHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='EngineeringTechnology-OrganizationInfo'>
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
                    <div className='EngineeringTechnology-SubSection1'>
                       <a href=''>
                           <img src={CardImage} alt='LogoImage' className='EngineeringTechnology-CardLogo' />
                       </a>
                       <div className='EngineeringTechnology-cardText'>
                       <h3>Computer Engineering</h3>
                       <div className='Heat-Icon'>
                          <span className='EngineeringTechnologyHeart-Icon'>
                          <ion-icon name="heart-outline"></ion-icon>
                          </span>
                       </div>
                       </div>
                       <div className='EngineeringTechnology-OrganizationInfo'>
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
                          <Link to='/EngineeringTechnologyAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Engineering & Technology</Link>
                    </div>
           </div>
           <div className='EngineeringTechnology-Section3'>
                    <div className='EngineeringTechnology-SectionHeading'>
                        <h3>How Engineering & Technology Subject Ranking Lists Are Created</h3>
                        <p>Want to know which universities offer the best Bachelor's and Master's degrees in Engineering & Technology?</p>
                        <br />
                        <p>Check out the university rankings listing the best universities where you can study Engineering according to World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities, Academic Ranking of World Universities FIELD, from Shanghai Jiao Tong University and Best Global Universities for Engineering, offered by U.S. News. These subject-specific rankings listing the best Engineering degrees offered by international universities analyse indicators such as papers published in the field of Engineering, research papers cited in the industry, the impact the research had in the industry, as well as the performance of the staff teaching Engineering degrees. Other factors considered by the rankings include the reputation of employers hiring graduates of Engineering degrees, the number of international students and staff, or the teaching environment. Each of the three different rankings gives a different percentage of the final score to these different factors, depending on what they consider is most important.</p><br />
                        <p>The overall Engineering & Technology rankings take into account data from Engineering degrees covering subdisciplines such as Chemical Engineering, Electrical Engineering, Mechanical Engineering, Aerospace Engineering, and more.</p><br />
                        <p>The Engineering degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Engineering career that matches your skills and interests.</p><br />
                        <br /> <br />
                 </div>
         </div>
           <div className='EngineeringTechnologySpecilization-FiledContainer'>
              <div className='EngineeringTechnologySpecilization-HeadingText'>
               <h3>Specialisations within the field of Engineering & Technology</h3>
              </div>
              <div className='EngineeringTechnologySpecilization-SubFieldContainer'>
              <div className='EngineeringTechnologySpecilization-Container1'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Industrial & Systems Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Environmental Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Civil Engineering & Construction</a>
                       </li>
                       <li>
                           <a href='#'>Bio & Biomedical Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Chemical Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Materials Science & Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Electrical Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Computer Engineering</a>
                       </li>
                   </ul>
               </div>
              </div>
              <div className='EngineeringTechnologySpecilization-Container2'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Aerospace Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Mechanical Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Electronics & Embedded Technology</a>
                       </li>
                       <li>
                           <a href='#'>Energy & Power Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Automotive Engineering</a>
                       </li>
                       <li>
                           <a href='#'>General Engineering & Technology</a>
                       </li>
                       <li>
                           <a href='#'>Marine Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Mechatronics</a>
                       </li>
                   </ul>
               </div>
              </div>
              <div className='EngineeringTechnologySpecilization-Container3'>
               <div>
                   <ul>
                       <li>
                           <a href='#'>Mining, Oil & Gas</a>
                       </li>
                       <li>
                           <a href='#'>Robotics</a>
                       </li>
                       <li>
                           <a href='#'>Sustainable Energy</a>
                       </li>
                       <li>
                           <a href='#'>Transportation Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Communications Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Sound Engineering</a>
                       </li>
                       <li>
                           <a href='#'>Nuclear Engineering</a>
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
export default EngineeringTechnology;