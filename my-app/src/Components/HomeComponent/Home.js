import './Home.css';
import BPHeroImg from './BPHeroStudent.avif';
import treeImg from './tree.png'
import ScienceImg from './science.png';
import ArtDesignImg from './palette.png';
import BuisnessImg from './briefcase.png';
import ComputerScienceImg from './computerscience.png';
import EducationImg from './education.png';
import technologyImg from './technology.png';
import earthStudyImg from './earth.png';
import HospitalityImg from './pin.png';
import HumanitiesImg from './human.png';
import JournalismImg from './media.png';
import LawImg from './compliant.png';
import MedicinImg from './syringe.png';
import NaturalScienceImg from './book.png';
import SocialScienceImg from './social-science.png';
import  IslamabadImg from './Islamabad.webp';
import KarachiImg from './Karachi.webp';
import LahoreImg from './Lahore.webp';
import RawalpindiImg from './Rawalpindi.webp';
import FaisalabadImg from './Faisalabad.webp';
import MultanImg from './Multan.webp';
import SahiwalImg from './Sahiwal.webp';
import RahimYarKhanImg from './RahimYarKhan.webp';
import WaahCanntimg from './WaahCannt.webp';
import AbottabadImg from './Abottabad.webp';
import BhawalPurImg from './BhawalPur.webp';
import SargodhaImg from './Sargodha.webp';
import Footer from '../FooterComponent/Footer';
import MainImage from './MainImage.jpg'
import {Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react';
const Home = () => {
    const Navigate = useNavigate()
    const [disciplines, setDisciplines] = useState([]);
    const [Cities , setCities] = useState([]);
    const [city, setCity] = useState("");
    const optionCities = Cities.map((ele)=>{
        return <option value={ele.Cities} id={ele.id} key={ele.id}>{ele.Cities}</option>
    })
    const optionData = disciplines.map((element) => {
        return <option id={element.id} key={element.id}>{element.Dicipline}</option>
    })
    useEffect(() => {
      fetch('http://127.0.0.1:8000/disciplines')
      .then((res) => {
        if(res.ok === false) {
            throw new Error('error');
        }
        return res.json();
      })
      .then((resData) => {
        setDisciplines(resData.disciplines)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }, [])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/Cities')
        .then((resp)=>{
            if(resp.ok === false) {
                throw new Error('error')
            }
            return resp.json()
        })
        .then((respData)=>{
         setCities(respData.cities)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }, [])
  const handleChange = (event) => {
    setCity(event.target.value)
  } 
  const submitHandler = (event) => {
    console.log(event)
    event.preventDefault();
    Navigate('/ComputerScienceAdmissionAdvertisement')
    
  }
    return (
        
        <>
        <div className='Section1'>
         <img src = {MainImage} alt='Background-Image' className='Background-Image' />
         <div className="content-container">
         <div className='Heading-container'>
            <h2 className='headingTextWraaper'>Find your dream Study</h2>

            <h2 className='secondheading'>Discover thousands of Bachelor's degrees in Pakistan!</h2>
        </div>
            {/* <div className='formWrapper'>
            <form onSubmit={submitHandler}>
            <select type='text' placeholder='What to Study?' >
                <option>Select Discipline</option>
                {
                  optionData
                }
            </select>
            <select onChange={handleChange} value={city} type='text' placeholder='Where to Study?'>
            <option>Select Cities</option>
            {
                optionCities
            }
            </select>
            
            <button type='submit' className='searchButton'>
                Search
            </button>
            </form>
            </div> */}
         </div>
         
        </div>
        <h1 className='Section3-heading'>Browse by Discipline</h1>
            <div className='Section3'>
                <div className='discipline'>
                   <div className='disciplinetree'>
                        <Link to='/AgricultureForesty'>
                        <img src={treeImg} alt='image' />
                           <p> Agriculture & Foresty</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/AppliedScience'>
                        <img src={ScienceImg} alt='image' />
                           <p> Applied Science & Profession</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='ArtDesign'>
                        <img src={ArtDesignImg} alt='image' />
                           <p> Arts Design & Architecture</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/BuissnessManagement'>
                        <img src={BuisnessImg} alt='image' />
                         <p>   Buissness & Management</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/ComputerScience'>
                        <img src={ComputerScienceImg} alt='image' />
                          <p>  Computer Science & IT</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/EducationTraining'>
                        <img src={EducationImg} alt='image' />
                           <p> Education & Training </p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/EngineeringTechnology'>
                        <img src={technologyImg} alt='image' />
                           <p>Engineering and technology</p> 
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/EnviromentStudies'>
                            <img src={earthStudyImg} alt='image' />
                               <p> Enviroment Studies & Earth Studies</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/HospitalityLisure'>
                        <img src={HospitalityImg} alt='image' />
                              <p>  Hospitality & Lisure</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/Humantites'>
                        <img src={HumanitiesImg} alt='image' />
                               <p> Humanities</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/JournalismMedia'>
                        <img src={JournalismImg} alt='image' />
                              <p>  Journalism and Media</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/Law'>
                        <img src={LawImg} alt='image' />
                              <p>  Law</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/MedicineHealth'>
                        <img src={MedicinImg} alt='image' />
                              <p>  Medicine and Health</p>
                        </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/NaturalScience'>
                        <img src={NaturalScienceImg} alt='image' />
                              <p>  Natural Science and Mathametics  </p> 
                            </Link>
                   </div>
                   <div className='disciplinetree'>
                        <Link to='/SocialScience'>
                        <img src={SocialScienceImg} alt='image' />
                                <p>Social Science  </p>
                        </Link>
                   </div>
                </div>
                {/* Section 4 Discover Cities */}
                <h2 className='textHeading'>Discover Cities</h2>
                <div className='DiscoverCities'>
                  
                    <div className='City'>
                        <img src = {IslamabadImg}  alt='Islamabad' className='CityImage' />
                        <h4 className='city-container'> Islamabad</h4>
                    </div>
                    <div className='City'>
                        <img src = {KarachiImg}  alt='Karachi'  className='CityImage' />
                        <h4 className='city-container'>Karachi</h4>
                    </div>
                    <div className='City'>
                        <img src = {FaisalabadImg}  alt='Faisalabad'  className='CityImage' />
                        <h4 className='city-container'>Faisalabad</h4>
                    </div>
                    <div className='City'>
                        <img src = {LahoreImg}  alt='Lahore'  className='CityImage' />
                        <h4 className='city-container'>Lahore</h4>
                    </div>
                    <div className='City'>
                        <img src = {RawalpindiImg}  alt='Rawalpindi'  className='CityImage' />
                        <h4 className='city-container'>Rawalpindi</h4>
                    </div>
                    <div className='City'>
                        <img src = {MultanImg}  alt='Multan'  className='CityImage' />
                        <h4 className='city-container'>Multan</h4>
                    </div>
                    <div className='City'>
                        <img src = {SahiwalImg}  alt='Sahiwal'  className='CityImage' />
                        <h4 className='city-container'>Sahiwal</h4>
                    </div>
                    <div className='City'>
                        <img src = {RahimYarKhanImg}  alt='RahimyarKhan'  className='CityImage' />
                        <h4 className='city-container'>RahimYarKhan</h4>
                    </div>
                    <div className='City'>
                        <img src = {AbottabadImg}  alt='Abottabad'  className='CityImage' />
                        <h4 className='city-container'>Abottabad</h4>
                    </div>
                    <div className='City'>
                        <img src = {BhawalPurImg}  alt='BhawalPur'  className='CityImage' />
                        <h4 className='city-container'>BhawalPur</h4>
                    </div>
                    <div className='City'>
                        <img src = {WaahCanntimg}  alt='WaahCannt'  className='CityImage' />
                        <h4 className='city-container'>WaahCannt</h4>
                    </div>
                    <div className='City'>
                        <img src = {SargodhaImg}  alt='WaahCannt'  className='CityImage' />
                        <h4 className='city-container'>Sargodha</h4>
                    </div>
                </div>
                <h2 className='Section5-textHeading'>Us in students' words</h2>
                <div className='Section5'>
                    <div className='Section5-container'>
                    <div className='Section5-subHeading'>
                        <h3>Hammad Nasir</h3>
                        <p>Pakistan</p>
                        <div>
                            <p>I have used it to find my programme and  I know how much it can help students in making the right decision. Even now that I am already  registered, I still use Studyportals to find  summer programmes and I am constantly  recommending it to friends that are going through the same struggle that I went through  when I had to choose a study.</p>
                        </div>
                     </div>
                     <div className='Section5-subHeading'>
                        <h3>Arslan Ashraf</h3>
                        <p>Pakistan</p>
                        <div>
                            <p>I have used it to find my programme and  I know how much it can help students in making the right decision. Even now that I am already  registered, I still use Studyportals to find  summer programmes and I am constantly  recommending it to friends that are going through the same struggle that I went through  when I had to choose a study.</p>
                        </div>
                     </div>
                     <div className='Section5-subHeading'>
                        <h3>Allah Ditta</h3>
                        <p>Pakistan</p>
                        <div>
                            <p>I have used it to find my programme and  I know how much it can help students in making the right decision. Even now that I am already  registered, I still use Studyportals to find  summer programmes and I am constantly  recommending it to friends that are going through the same struggle that I went through  when I had to choose a study.</p>
                        </div>
                     </div>
                     <div className='Section5-subHeading'>
                        <h3>Junaid Akram</h3>
                        <p>Pakistan</p>
                        <div>
                            <p>I have used it to find my programme and  I know how much it can help students in making the right decision. Even now that I am already  registered, I still use Studyportals to find  summer programmes and I am constantly  recommending it to friends that are going through the same struggle that I went through  when I had to choose a study.</p>
                        </div>
                     </div>
                    </div>
                     
                </div>
            </div>
                
        </>
    )
}
export default Home;