import'./ArtDesign.css';
import ArtDesignImg from './palette.png';
import CardImg from './CardImage.avif';
import UELogo from './UELogo.jpg';
import {Link} from 'react-router-dom';
import gcuf from './gcuf-9.webp'
import FineArtsCard from './FineArtsCard.jpeg'
import UMTLogo from './UMTLogo.png'
import GraphicDesignCard from './GraphicDesignCard.png'
import PifdLogo from './Pifd.png'
import FashionDesignCard from './FashionDesignCard.png'
import ArtitectureCard from './ArtitectureCard.png'
import UETLogo from './UETLogo.png'
const ArtDesign =() => {
    return (
        <div>
               <>
        <div className='ArtDesign-Container'>
              <div className='ArtDesign-SubContainer'>
                <center>
                <a href='#'>
                    <img src={ArtDesignImg} alt='ArtDesign&Architecture'/>
                </a>
                </center>
              </div>
              <div className='ArtDesign-Heading'>
                 <h1>What is a Bachelor in Arts, Design & Architecture?</h1>
              </div>
              <div className='ArtDesign-TextHeadingContainer'>
                 <div className='ArtDesignTextHeading-Container'>
                   <p>Arts, Design and Architecture is a group of disciplines that enables students to combine creativity and design principles, theories, and methods in order to create a safer, more beautiful, and functional world. Arts, Design and Architecture deal with developing projects, plans, designs and concepts for everything, from buildings to monuments, from clothes to devices, from intuitive graphical interfaces to user-friendly web pages, and everything in between. Arts, Design and Architecture graduates are also creators of fabulous art forms, including paintings, music, theatre plays, dances, and many other wonderful expressions of beauty and imagination.</p>
                   <p>Some of the main disciplines included in this group are Art History, Graphic Design, Landscape Architecture, Music, Visual Arts, and others.</p>
                   <p>If you choose to focus on Architecture, you will learn everything there is to know about creating the perfect design for a new building or even an entire city. Courses will focus on fundamental architecture elements, on safety and materials, environmental impact, as well as lighting, textures, and how to create the perfect contrast between materials and colours. It’s not an easy job, as it also involves principles from Physics and Mathematics, but designing someone’s dream house or the perfect office is a very rewarding job.</p>
                   <p>Graphic Design teaches students how to use images, text, and colours to communicate messages effectively. Classes will explore basic design principles, elements, and rules. If you go for Music, you will study musical theory, instruments, perfect harmonies, and numerous musical styles. After graduation, you’ll be an expert in playing at least one instrument, and you’ll work with other talented musicians.</p>
                   <p>Arts, Design & Architecture opens up many career opportunities, specialising in Fashion Design, Film, Photography & Media, Theatre & Dance, User Experience Design, and others.</p>
                 </div>
              </div>
              <div className='ArtDesign-anchor'>
                <Link to='/ArtDesignAdmissionAdvertisement'>
                    <p>View all Bachelor's Degrees in Arts, Design & Architecture</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='ArtDesign-Section2'>
                 <div className='ArtDesign-SubSection1'>
                    <a href=''>
                        <img src={FineArtsCard} alt='LogoImage' className='ArtDesign-CardLogo' />
                    </a>
                    <div className='ArtDesign-cardText'>
                    <h3>Fine Arts</h3>
                    <div className='Heat-Icon'>
                       <span className='ArtDesignHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='ArtDesign-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={gcuf} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Government College University Faislabad</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='ArtDesign-SubSection1'>
                    <a href=''>
                        <img src={GraphicDesignCard} alt='LogoImage' className='ArtDesign-CardLogo' />
                    </a>
                    <div className='ArtDesign-cardText'>
                    <h3>Graphic Design (Hons)</h3>
                    <div className='Heat-Icon'>
                       <span className='ArtDesignHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='ArtDesign-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UMTLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Management Technology</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='ArtDesign-SubSection1'>
                    <a href=''>
                        <img src={FashionDesignCard} alt='LogoImage' className='ArtDesign-CardLogo' />
                    </a>
                    <div className='ArtDesign-cardText'>
                    <h3>Fashion Designer</h3>
                    <div className='Heat-Icon'>
                       <span className='ArtDesignHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='ArtDesign-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={PifdLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>Pakistan Institute of Fashion Design</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                 <div className='ArtDesign-SubSection1'>
                    <a href=''>
                        <img src={ArtitectureCard} alt='LogoImage' className='ArtDesign-CardLogo' />
                    </a>
                    <div className='ArtDesign-cardText'>
                    <h3>Architecture and Engineering Technology</h3>
                    <div className='Heat-Icon'>
                       <span className='ArtDesignHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='ArtDesign-OrganizationInfo'>
                        <div className='UniLogo'>
                            <img src={UETLogo} alt='' />
                        </div>
                        <div className='UniName'>
                            <p>University of Engineering and Technology</p>
                        
                        </div>
                        <p></p>
                    </div>
                 </div>
                
              </div>
              <div className='DispayCoversion'>
            <Link to='/ArtDesignAdmissionAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Arts, Design & Architecture</Link>
                 </div>
                 <div className='ArtDesign-Section3'>
                    <div className='ArtDesignSub-SectionHeading'>
                        <h3>How Arts, Design & Architecture Subject Ranking Lists Are Created</h3>
                        <p>Want to know which universities offer the best Master's degrees in Arts, Design & Architecture?</p>
                        <br />
                        <p>Check out the university rankings listing the best universities where you can study Arts, Design & Architecture according to World University Rankings by Subject from Times Higher Education, QS World University Rankings by Subject from TopUniversities, and Best Global universities for Arts and Humanities</p>
                        <br /> <br />
                        
                    <p>These subject- specific university rankings are based on combining different assessment criteria such as:</p>
                        <div className='ArtDesignSub-SectionHeading2'>
                        <ul>
                            <li>The learning environment</li>
                            <li>Research and citations</li>
                            <li>
                            International outlook and academic reputation
                            </li>
                            <li>Industry impact</li>
                            <li>Employability of graduates</li>
                        </ul>
                        <p>
                        Each of these factors has a different weight the final university ranking in the field of Arts, Design & Architecture.
                        </p>
                        <br />
                        <p>The overall Arts, Design & Architecture university ranking also refers to subdisciplines such as Architecture, Industrial Design, Fashion Design, Visual Arts, Interior Design, and so on.</p>
                        <p>
                        The Arts, Design & Architecture degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Arts, Design & Architecture career that matches your skills and interests.
                        </p>
                    </div>
                 </div>
         </div>
                       
        </div>
        <div className='ArtDesignSpecilization-FiledContainer'>
           <div className='ArtDesignSpecilization-HeadingText'>
            <h3>Specialisations within the field of Arts, Design & Architecture</h3>
           </div>
           <div className='ArtDesignSpecilization-SubFieldContainer'>
           <div className='ArtDesignSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Architecture</a>
                    </li>
                    <li>
                        <a href='#'>Industrial Design</a>
                    </li>
                    <li>
                        <a href='#'>Design</a>
                    </li>
                    <li>
                        <a href='#'>Visual Arts</a>
                    </li>
                    <li>
                        <a href='#'>Film, Photography & Media</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='ArtDesignSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Music</a>
                    </li>
                    <li>
                        <a href='#'>Art History</a>
                    </li>
                    <li>
                        <a href='#'>Fashion Design</a>
                    </li>
                    <li>
                        <a href='#'>Graphic Design</a>
                    </li>
                    <li>
                        <a href='#'>Interior Design</a>
                    </li>
                    <li>
                        <a href='#'>Landscape Architecture</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='AgricultureSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Musicology</a>
                    </li>
                    <li>
                        <a href='#'>Theatre & Dance</a>
                    </li>
                    <li>
                        <a href='#'>Music Composition</a>
                    </li>
                    <li>
                        <a href='#'>Urban Planning</a>
                    </li>
                    <li>
                        <a href='#'>Music Performance</a>
                    </li>
                    <li>
                        <a href='#'>Music Composition</a>
                    </li>
                    <li>
                        <a href='#'>Fine Arts</a>
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
export default ArtDesign;