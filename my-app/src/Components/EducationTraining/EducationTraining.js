import './EducationTraining.css';
import {Link} from 'react-router-dom'
import EducationImg from './education.png';
import CardImage from './CardImage.avif';
import UELogo from './UELogo.jpg';
const EducationTraining = () => {
    return (
        <div>
            
            <>
        <div className='EducationTraining-Container'>
              <div className='EducationTraining-SubContainer'>
                <center>
                <a href='#'>
                    <img src={EducationImg} alt='Education-Training'/>
                </a>
                </center>
              </div>
              <div className='EducationTraining-Heading'>
                 <h1>What is a Bachelor in Education & Training?</h1>
              </div>
              <div className='EducationTraining-TextHeadingContainer'>
                 <div className='EducationTraining-Container'>
                   <p>Education and Training is a great choice if you want to teach and inspire people of all ages and help them develop and be able to overcome life-challenges and find creative solutions to difficult situations that come up in life.</p>
                   <p>Education and Training is a multidisciplinary field that covers aspects of Psychology, Sociology, Anthropology, Political Science, Economics, Counselling - all forming the fundamentals on which your future teaching strategy will be built and implemented. You need to adapt this strategy to the needs of the students your work with. Depending on your specialisation, you might teach pre-schoolers, school children, adolescents or adults. They all learn differently, and you need to adapt your methods to your audience to be a successful teacher.</p>
                   <p>During Teaching courses, you will learn how to keep a class interested and engaged and how to mix theoretical elements with applying newly learned concepts, as well as interactive group activities. You will also be taught how to encourage and improve people's natural learning abilities, how to create lesson plans and explain complex concepts.</p>
                   <p>Additionally, you will also discover how to listen to people and support them on their self-development or self-discovery journeys. All these skills will allow you to empower individuals and teach them how to learn, which is a very important process as they go through different stages of their life</p>
                   <p>Teaching is a very challenging career move, and since there is such a broad range of fields that require expert education and training, the range of careers you will find is quite wide. Here are some of them: teacher, education consultant, English as a foreign language teacher, learning mentor, counsellor, personal coach.</p>
                 </div>
              </div>
              <div className='EducationTraining-anchor'>
                <Link to='/EducationTrainingAdvertisement'>
                    <p>View all Bachelor's Degrees in Education & Training</p>
                </Link>
                <div className='interstingProgram-Heading'>
                    <h1>Interesting programmes for you</h1>
                </div>
              </div>
              <div className='EducationTraining-Section2'>
                 <div className='EducationTraining-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EducationTraining-CardLogo' />
                    </a>
                    <div className='EducationTraining-cardText'>
                    <h3>Psychology</h3>
                    <div className='Heat-Icon'>
                       <span className='EducationTrainingHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EducationTraining-OrganizationInfo'>
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
                 <div className='EducationTraining-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EducationTraining-CardLogo' />
                    </a>
                    <div className='EducationTraining-cardText'>
                    <h3>Early Childhood Education</h3>
                    <div className='Heat-Icon'>
                       <span className='EducationTrainingHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EducationTraining-OrganizationInfo'>
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
                 <div className='EducationTraining-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EducationTraining-CardLogo' />
                    </a>
                    <div className='EducationTraining-cardText'>
                    <h3>Techer Education</h3>
                    <div className='Heat-Icon'>
                       <span className='EducationTrainingHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EducationTraining-OrganizationInfo'>
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
                 <div className='EducationTraining-SubSection1'>
                    <a href=''>
                        <img src={CardImage} alt='LogoImage' className='EducationTraining-CardLogo' />
                    </a>
                    <div className='EducationTraining-cardText'>
                    <h3>Applied Psychology</h3>
                    <div className='Heat-Icon'>
                       <span className='EducationTrainingHeart-Icon'>
                       <ion-icon name="heart-outline"></ion-icon>
                       </span>
                    </div>
                    </div>
                    <div className='EducationTraining-OrganizationInfo'>
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
                       <Link to='/EducationTrainingAdvertisement' className='ChampionButton'>View all Bachelor's Degrees in Education & Training</Link>
                 </div>
                 <div className='EducationTraining-Section3'>
                    <div className='EducationTrainingSub-SectionHeading'>
                        <h3>How Education & Training Subject Ranking Lists Are Created</h3>
                        <p>Do you dream of becoming that one-of-a kind inspirational teacher or educational expert? A shortcut to your goals is deciding on a Bachelor's or Master's programme based on university rankings according to subject such as World University Rankings in Education from Times Higher Education, QS World University Rankings for Education & Training, and Shanghai Ranking's Global Ranking of Academic Subjects in Education.</p>
                        <br />
                        <p>These Education-specific rankings use a series of factors which help assess which are the best universities for doing a degree in Education. These factors are: teaching style and academic reputation, number of citations in Education-related papers, employment prospects, the international outlook (number of international students and staff members). Some of these data is pulled from surveys. Other data is pulled from available indexes on published papers and citations.</p>
                        <p>Each of these factors weighs a different percentage in the overall ranking that leads to the final top universities to study a degree in Education and Training.</p>
                        <p>You will typically find these tops under the overall Education rankings name, but they also take into account subdisciplines like Special Education, Educational Research, Pedagogy, or Teaching.</p>
                        <p>The Education degree rankings are helpful tools for selecting the best Master's for your professional and academic development towards a fulfilling Education career that matches your skills and interests.</p>
                        <br /> <br />
                 </div>
         </div>
                       
        </div>
        <div className='EducationTrainingSpecilization-FiledContainer'>
           <div className='EducationTrainingSpecilization-HeadingText'>
            <h3>Specialisations within the field of Education & Training</h3>
           </div>
           <div className='EducationTrainingSpecilization-SubFieldContainer'>
           <div className='EducationTrainingSpecilization-Container1'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Education</a>
                    </li>
                    <li>
                        <a href='#'>Special Education</a>
                    </li>
                    <li>
                        <a href='#'>Educational Research</a>
                    </li>
                    <li>
                        <a href='#'>Adult Education</a>
                    </li>
                    <li>
                        <a href='#'>Coaching</a>
                    </li>
                    <li>
                        <a href='#'>School Counselling</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='EducationTrainingSpecilization-Container2'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Educational Psychology</a>
                    </li>
                    <li>
                        <a href='#'>Pedagogy</a>
                    </li>
                    <li>
                        <a href='#'>Teaching</a>
                    </li>
                    <li>
                        <a href='#'>Early Childhood Education</a>
                    </li>
                    <li>
                        <a href='#'>STEM Education</a>
                    </li>
                    <li>
                        <a href='#'>Primary Education</a>
                    </li>
                    <li>
                        <a href='#'>Educational Leadership</a>
                    </li>
                </ul>
            </div>
           </div>
           <div className='EducationTrainingSpecilization-Container3'>
            <div>
                <ul>
                    <li>
                        <a href='#'>Instructional Design</a>
                    </li>
                    <li>
                        <a href='#'>Teaching English</a>
                    </li>
                    <li>
                        <a href='#'>Secondary Education</a>
                    </li>
                    <li>
                        <a href='#'>Art Education</a>
                    </li>
                    <li>
                        <a href='#'>Higher Education</a>
                    </li>
                    <li>
                        <a href='#'>Literacy Education</a>
                    </li>
                    <li>
                        <a href='#'>Health Education</a>
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
export default EducationTraining;