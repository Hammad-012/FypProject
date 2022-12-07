import './JournalismMedia.css';
import {Link} from 'react-router-dom'
import MediaImg from './media.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const JournalismMedia = () => {
    return (
        <div>
               <>
        <div className='JournalismMedia-Container'>
              <div className='JournalismMedia-SubContainer'>
                <center>
                <a href='#'>
                    <img src={MediaImg} alt='JournalismMedia'/>
                </a>
                </center>
              </div>
              <div className='JournalismMedia-Heading'>
                 <h1>What is a Bachelor in Journalism & Media?</h1>
              </div>
              <div className='JournalismMedia-TextHeadingContainer'>
                 <div className='JournalismMediaTextHeading-Container'>
                   <p>Journalism and Media is a subject that deals with researching events, creating accurate reports and then distributing the information to the public through various communication channels. Journalism is important because the world needs people who can look at a situation objectively, determine the authenticity of every story, and discover the truth behind it.</p>
                   <p>Whether it is through traditional media (newspapers, magazines, radio, television) or digital/new media (social media, blogs, vlogs, and others), studying Journalism and Media will allow you to keep people informed and debate aspects that are essential for the wellbeing of our society.</p>
                   <p>At a basic level, Journalism and Media encompasses subdisciplines that focus on how the public gains access to information. Be it through Journalism, Media Management, Public Relations, or Translation and Interpreting, Journalism students learn to choose their words carefully and understand their full impact.</p>
                   <p>Journalism courses deliver essential knowledge for working in media organisations, such as excellent written and spoken communication skills, critical thinking, research, as well as an ethical and responsible attitude.</p>
                   <p>Some of the specialisations in Journalism and Media include Broadcast Journalism, Digital Journalism, Enterprise Journalism, Political Journalism, Journalism Design and Graphics, Science and Environmental Journalism, and Public Relations and Advertising.</p>
                   <p>After graduating, you'll find jobs as a: broadcast journalist, editorial assistant, magazine journalist, writer, web content manager, and publishing copy-editor or proofreader. A Journalism & Media degree also allows you to work as a digital copywriter, multimedia specialist, translator, or public relations officer.</p>
                 </div>
              </div>
              <div className='JournalismMedia-anchor'>
                <Link to='JournalismMediaAdvertisement'>
                    <p>View all Bachelor's Degrees in Journalism & Media</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='JournalismMedia-Section2'>
                 <div className='JournalismMedia-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='JournalismMedia-CardLogo' />
                    </a>
                    <div className='JournalismMedia-cardText'>
                    <h3>Mass Communication</h3>
                    <div className='Heat-Icon'>
                       <span className='JournalismMediaHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='JournalismMediaLisure-OrganizationInfo'>
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
                 <div className='JournalismMedia-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='JournalismMedia-CardLogo' />
                    </a>
                    <div className='JournalismMedia-cardText'>
                    <h3>Communication and Public Relations</h3>
                    <div className='Heat-Icon'>
                       <span className='JournalismMediaHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='JournalismMedia-OrganizationInfo'>
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
                 <div className='JournalismMedia-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='JournalismMedia-CardLogo' />
                    </a>
                    <div className='JournalismMedia-cardText'>
                    <h3>Media and Society</h3>
                    <div className='Heat-Icon'>
                       <span className='JournalismMediaHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='JournalismMedia-OrganizationInfo'>
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
                 <div className='JournalismMedia-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='JournalismMedia-CardLogo' />
                    </a>
                    <div className='JournalismMedia-cardText'>
                    <h3>Film and Media Studies</h3>
                    <div className='Heat-Icon'>
                       <span className='JournalismMediaHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='JournalismMedia-OrganizationInfo'>
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
                       <Link to='/JournalismMediaAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Journalism & Media</Link>
                 </div>
                 <div className='JournalismMedia-Section3'>
                    <div className='JournalismMediaSub-SectionHeading'>
                        <h3>How Journalism & Media Subject Ranking Lists Are Created</h3>
                        <p>Curious about which universities offer the best Bachelor's and Master's degrees in Journalism and Media? Take a look at the university rankings listing the best universities where you can study Journalism & Media, according to World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities, and ShanghaiRanking's Global Ranking of Academic Subjects.</p>
                        <br />
                        <p>In these tops you will typically find the best universities for Journalism and Media under the headline Communication and Media studies.</p>
                        <p>The overall Journalism & Media ranking considers subdisciplines and related disciplines such as Media Studies, Media Management, Translations and PR.</p>
                        <p>The Journalism & Media degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Journalism & Media career that matches your skills and interests.</p>
                        <br /> <br />
                 </div>
         </div>
                       
        </div>
        <div className='JournalismMediaSpecilization-FiledContainer'>
           <div className='JournalismMediaSpecilization-HeadingText'>
            <h3>Specialisations within the field of Journalism & Media</h3>
           </div>
           <div className='JournalismMediaSpecilization-SubFieldContainer'>
           <div className='JournalismMediaSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Journalism</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='JournalismMediaSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Media Management</a>
                    </li>
                    <li>
                        <a href='#'>Media Studies & Mass Media</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='JournalismMediaSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Public Relations</a>
                    </li>
                    <li>
                        <a href='#'>Translation & Interpreting</a>
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
export default JournalismMedia;