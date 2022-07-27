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
import MedicinHealth from './Components/MedicinHealth/MedicinHealth';
import NaturalScienceMathametics from './Components/NaturalScienceMathametics/NaturalScienceMathametics';
import SocialScience from './Components/SocialScience/SocialScience';
import ComputerScienceAdmissionAdvertisement from './Components/ComputerScienceAdmissionAdvertisement/ComputerScienceAdmissionAdvertisement';
import AgricultureForestyAdmissionAdvertisement from './Components/AgricultureForestyAdmissionAdvertisement/AgricultureForestyAdmissionAdvertisement';
import AppliedScienceAdmissionAdvertisement from './Components/AppliedScienceAdmissionAdvertisement/AppliedScienceAdmissionAdvertisement';
import ArtDesignAdmissionAdvertisement from './Components/ArtDesignAdmissionAdvertisement/ArtDesignAdmissionAdvertisement';
import Footer from './Components/FooterComponent/Footer';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/MedicineHealth" element={<MedicinHealth />} />
      <Route path="/NaturalScience" element={<NaturalScienceMathametics />} />
      <Route path="/SocialScience" element={<SocialScience />} />
      <Route path="/ComputerScienceAdmissionAdvertisement" element={<ComputerScienceAdmissionAdvertisement />} />
      <Route path="/AgricultureForestyAdmission" element={<AgricultureForestyAdmissionAdvertisement/>} />
      <Route path="/AppliedScienceAdmissionAdvertisement" element={<AppliedScienceAdmissionAdvertisement/>} />
      <Route path="/ArtDesignAdmissionAdvertisement" element={<ArtDesignAdmissionAdvertisement/>} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
