import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/HomeComponent/Home';
import ComputerScience from './Components/ComputerScience/ComputerScience';
import AgricultureForesty from './Components/AgricultureForest/AgricultureForesty';
import AppliedScience from './Components/AppliedScienceProfession/AppliedScience';
import ArtDesign from './Components/ArtDesignArchitecture/ArtDesign';
import BuissnessManagement from './Components/BuissnessManagement/BuissnessManagement';
import EducationTraining from './Components/EducationTraining/EducationTraining';
import EngineeringTechnology from './Components/EngineeringTechnology/EngineeringTechnology';
import EnviromentStudies from './Components/EnviromentStudies&EarthStudies/EnviromentStudies';
import HospitalityLisure from './Components/HospitalityLisure/HospitalityLisure';
import Humanities from './Components/Humantities/Humanities';
import JournalismMedia from './Components/JournalismMedia/JournalismMedia';
import Law from './Components/Law/Law';
import LawAdvertisement from './Components/LawAdverisement/LawAdvertisement';
import MedicinHealth from './Components/MedicinHealth/MedicinHealth';
import NaturalScienceMathametics from './Components/NaturalScienceMathametics/NaturalScienceMathametics';
import SocialScience from './Components/SocialScience/SocialScience';
import ComputerScienceAdmissionAdvertisement from './Components/ComputerScienceAdmissionAdvertisement/ComputerScienceAdmissionAdvertisement';
import AgricultureForestyAdmissionAdvertisement from './Components/AgricultureForestyAdmissionAdvertisement/AgricultureForestyAdmissionAdvertisement';
import AppliedScienceAdmissionAdvertisement from './Components/AppliedScienceAdmissionAdvertisement/AppliedScienceAdmissionAdvertisement';
import ArtDesignAdmissionAdvertisement from './Components/ArtDesignAdmissionAdvertisement/ArtDesignAdmissionAdvertisement';
import BuisnessManagementAdvertisement from './Components/BuisnessManagementAdvertisement/BusinessManagementAdvertisement';
import Footer from './Components/FooterComponent/Footer';
import {Routes, Route} from "react-router-dom";
import SahiwalUniversityAdvertisement from './Components/University Advertisements/SahiwalUniversityadvertisement';
import AboutUs from './Components/AboutUs/AboutUs';
import EnviromentStudiesEarthStudiesAdvertisement from './Components/EnviromentStudies&EarthStudiesAdvertisement/EnviromentStudiesEarthStudiesAdvertisement';
import EducationTrainingAdvertisement from './Components/EducationTrainingAdvertisement/EducationTrainingAdvertisement';
import EngineeringTechnologyAdvertisement from './Components/EngineeringTechnologyAdvertisement/EngineeringTechnologyAdverisement';
import Career from './Components/Career/Career';
import MedicinHealthAdvertisement from './Components/MedicinHealthAdvertisement/MedicinHealthAdvertisement';
import JournalismMediaAdvertisement from './Components/JournalismMediaAdvertisement/JournalismMediaAdvertisement';
import HumantitesAdvertisement from './Components/HumantitiesAdvertisement/HumantitiesAdvertisement';
import HospitalityLisureAdvertisement from './Components/Hospitality&LisureAdvertisement/HospitalityLisureAdvertisement';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import SignInform from './Components/SignInForm/SignInform';
import ScholarshipAdvertisement from './Components/ScholarshipAdvertisement/ScholarshipAdvetisement';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<ProtectedRoutes Component={Home} />} />
      <Route path='/Search/:city' element={<SahiwalUniversityAdvertisement />} />
      <Route path="/ComputerScience" element={<ComputerScience />} />
      <Route path="/AgricultureForesty" element={<AgricultureForesty />} />
      <Route path="/AppliedScience" element={<AppliedScience />} />
      <Route path="/ArtDesign" element={<ArtDesign />} />
      <Route path="/BuissnessManagement" element={<BuissnessManagement />} />
      <Route path="/EducationTraining" element={<EducationTraining />} />
      <Route path="/EngineeringTechnology" element={<EngineeringTechnology />} />
      <Route path="/EnviromentStudies" element={<EnviromentStudies />} />
      <Route path="/HospitalityLisure" element={<HospitalityLisure />} />
      <Route path="/Humantites" element={<Humanities />} />
      <Route path="/JournalismMedia" element={<JournalismMedia />} />
      <Route path="/Law" element={<Law />} />
      <Route path="/MedicinHealthAdvertisement" element={<MedicinHealthAdvertisement />} />
      <Route path="/MedicineHealth" element={<MedicinHealth />} />
      <Route path="/NaturalScience" element={<NaturalScienceMathametics />} />
      <Route path="/SocialScience" element={<SocialScience />} />
      <Route path="/HospitalityLisureAdvertisement" element={<HospitalityLisureAdvertisement />} />
      <Route path="/ComputerScienceAdmissionAdvertisement" element={<ComputerScienceAdmissionAdvertisement />} />
      <Route path="/AgricultureForestyAdmission" element={<AgricultureForestyAdmissionAdvertisement/>} />
      <Route path="/AppliedScienceAdmissionAdvertisement" element={<AppliedScienceAdmissionAdvertisement/>} />
      <Route path="/ArtDesignAdmissionAdvertisement" element={<ArtDesignAdmissionAdvertisement/>} />
      <Route path="/BuisnessManagementAdvertisement" element={<BuisnessManagementAdvertisement/>} />
      <Route path="/EducationTrainingAdvertisement" element={<EducationTrainingAdvertisement/>} />
      <Route path="/EngineeringTechnologyAdvertisement" element={<EngineeringTechnologyAdvertisement/>} />
      <Route path="/EnviromentStudiesEarthStudiesAdvertisement" element={<EnviromentStudiesEarthStudiesAdvertisement/>} />
      <Route path="/HumantitesAdvertisement" element={<HumantitesAdvertisement/>} />
      <Route path="/JournalismMediaAdvertisement" element={<JournalismMediaAdvertisement/>} />
      <Route path="/LawAdvertisement" element={<LawAdvertisement/>} />
      <Route path='/About-us' element={<AboutUs />} />
      <Route path='/career' element={<Career />} />
      <Route path='/SignInform' element={<SignInform />}  />
      <Route path='/login-form' element={<RegistrationForm />}  />
      <Route path='/forgot-password' element={<ForgotPassword />}  />
      <Route path='/Scholarships' element={<ProtectedRoutes Component={ScholarshipAdvertisement} />} />
       </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
