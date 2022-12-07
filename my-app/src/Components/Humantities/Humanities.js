import './Humanities.css';
import HumanitiesImg from './human.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
import {Link} from 'react-router-dom'
const Humanities = () => {
    return (
        <div>
           <>
        <div className='Humanities-Container'>
              <div className='Humanities-SubContainer'>
                <center>
                <a href='#'>
                    <img src={HumanitiesImg} alt='Humanities'/>
                </a>
                </center>
              </div>
              <div className='Humanities-Heading'>
                 <h1>What is a Bachelor in Humanities?</h1>
              </div>
              <div className='Humanities-TextHeadingContainer'>
                 <div className='HumanitiesTextHeading-Container'>
                   <p>Humanities — or the Humanities — are a set of academic disciplines that focus on the way people understand, describe, and document their human experience in this world. This includes the study of speech, the development of ideas and knowledge, how society functions, behaviour patterns and challenges, historical and cultural events, as well as human interactions and relationships.</p>
                   <p>Some of the main subdisciplines of Humanities are Anthropology, Languages, Psychology, Sociology, Literature, Cultural Studies, Ethics, Modern or Ancient Philosophy, and others. These subdisciplines represent the numerous ways of expression through which we have been trying to make sense of the world and our place in it.</p>
                   <p>Humanities might be a great degree if you find people fascinating and want to understand as much as possible about our history, societies, current behaviours, and future trends. Because this is such a broad field, the curriculum will largely depend on what subdiscipline or specialisation you choose. Common Humanities subjects include Historical Studies, Traditional Logic, Introduction to Philosophy, Culture and Identities, Creative Writing, Critical Thinking, Politics, Religion, Meaning and Value, Creative Research, etc.</p>
                   <p>During Humanities classes, you will be encouraged to express your creativity, explore ideas, come up with theories and supporting arguments, do your own analysis and come up with conclusions – activities that will transform you into an excellent critical thinker, who’s not afraid to ask questions, research, and distinguish truth from fiction or propaganda.</p>
                   <p>Here are some of the most popular jobs chosen by Humanities graduates: teacher, counsellor, technical writer, editor, genealogist, and linguist.</p>
                   <p>Students of Humanities learn how to think critically and creatively. They are encouraged to ask questions and come up with their own interpretations. Humanities graduates are great at individual research and have great writing skills.</p>
                 </div>
              </div>
              <div className='Humanities-anchor'>
                <Link to='/HumantitiesAdvertisement'>
                    <p>View all Bachelor's Degrees in Humanities</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='Humanities-Section2'>
                 <div className='ArtDesign-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Humanities-CardLogo' />
                    </a>
                    <div className='Humanities-cardText'>
                    <h3>English Literature</h3>
                    <div className='Heat-Icon'>
                       <span className='HumanitiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Humanities-OrganizationInfo'>
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
                 <div className='Humanities-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Humanities-CardLogo' />
                    </a>
                    <div className='Humanities-cardText'>
                    <h3>Political Science</h3>
                    <div className='Heat-Icon'>
                       <span className='HumanitiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Humanities-OrganizationInfo'>
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
                 <div className='Humanities-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Humanities-CardLogo' />
                    </a>
                    <div className='Humanities-cardText'>
                    <h3>Urdu Literature</h3>
                    <div className='Heat-Icon'>
                       <span className='HumanitiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Humanities-OrganizationInfo'>
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
                 <div className='Humanities-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='Humanities-CardLogo' />
                    </a>
                    <div className='Humanities-cardText'>
                    <h3>Associate of Art</h3>
                    <div className='Heat-Icon'>
                       <span className='HumanitiesHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='Humanities-OrganizationInfo'>
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
                <Link to='/HumantitiesAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Humanities</Link>
                 </div>
                 <div className='Humanities-Section3'>
                    <div className='HumanitiesSub-SectionHeading'>
                        <h3>How Humanities Subject Ranking Lists Are Created</h3>
                        <p>Want to know which universities offer the best Bachelor's or Master's degrees in Humanities?</p>
                        <br />
                        <p>Take a look at university ranking tops according to subject such as World University Rankings in Arts and Humanities from Times Higher Education, QS World University Rankings in Arts & Humanities from TopUniversities and Best Global Universities for Arts and Humanities, provided by U.S. News</p>
                        
                        <br /> <br />
                        
                    <p>These Humanities subject-rankings reflect a series of combined indices and factors that impact the quality of a Humanities study programme. Typical factors that make up subject-specific rankings are:</p>
                        <div className='HumanitiesSub-SectionHeading2'>
                        <ul>
                            <li>The number of published papers on Humanities in each university;</li>
                            <li>The number of citations in research papers;</li>
                            <li>
                            The quality of the teachers (assessed via surveys, awards and published papers);
                            </li>
                            <li>The number of international students;</li>
                            <li>The number of internationally co-authored papers.</li>
                        </ul>
                        <p>
                        For the subject of Arts and Humanities the number of publications weights less in the ranking than for hard sciences. What matters more is the overall global research reputation.
                        </p>
                        <br />
                        <p>You will typically find these rankings under the overall Arts and Humanities rankings name, but they take into account subdisciplines such as Language studies, Liberal Arts, History, Philosophy. Literature, etc.</p>
                        <p>
                        The Humanities degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Humanities career that matches your skills and interests.
                        </p>
                    </div>
                 </div>
         </div>
                       
        </div>
        <div className='HumanitiesSpecilization-FiledContainer'>
           <div className='HumanitiesSpecilization-HeadingText'>
            <h3>Specialisations within the field of Humanities</h3>
           </div>
           <div className='HumanitiesSpecilization-SubFieldContainer'>
           <div className='HumanitiesSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>History</a>
                    </li>
                    <li>
                        <a href='#'>Language Studies</a>
                    </li>
                    <li>
                        <a href='#'>Philosophy & Ethics</a>
                    </li>
                    <li>
                        <a href='#'>Languages</a>
                    </li>
                    <li>
                        <a href='#'>Religious Studies & Theology</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='HumanitiesSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Ancient History</a>
                    </li>
                    <li>
                        <a href='#'>Christian Studies</a>
                    </li>
                    <li>
                        <a href='#'>Creative Writing</a>
                    </li>
                    <li>
                        <a href='#'>General Studies & Classics</a>
                    </li>
                    <li>
                        <a href='#'>Islamic Studies</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='HumanitiesSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Liberal Arts</a>
                    </li>
                    <li>
                        <a href='#'>Literature</a>
                    </li>
                    <li>
                        <a href='#'>Modern History</a>
                    </li>
                    <li>
                        <a href='#'>Linguistics</a>
                    </li>
                    <li>
                        <a href='#'>ESL</a>
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
export default Humanities;