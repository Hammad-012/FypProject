import './MedicinHealthAdvertisement.css';
import ArmyMedicalCollegeLogo from './ArmyMedicalCollegeLogo.jpg';
import NishtarMedicalImg from './NishtarMedicalImg.jpg';
import QMCLogo from './QMCLogo.png';
import SZABMCLogo from './SZABMC.jpg';
import KingEdwardLogo from './KingEdwardLogo.jpg'
const MedicinHealthAdvertisement = () => {
    return (
        <div>
               <div>
                <div className='Card-Container'>
            <h1>Bachelor degrees in Medicine&Health</h1>
            <p>Results</p>
            <div className='Sub-cardContainer'>
                <div className='CardContainer-heading'>
                    <h2>Bachelor of MBBS and BDS</h2>
                    <div className='Duration'>
                        <h5>Duration/5Years</h5>
                        <h6>Fee:192000</h6>
                    </div>
                </div>
                <div className='Eligibilty-heading'>
                    <p>Eligibility. Students are eligible for admission if they have Intermediate or <br />equivalent ('A' Level) with minimum 50% marks
                        from accredited institution and<br /> *NTS-NAT test score with minimum 50% marks</p>

                </div>


                <div className='university'>
                    <div className='university-logo'>
                        <a href='https://www.pakistanarmy.gov.pk/Army-Medical-College.php'>
                            <img src={ArmyMedicalCollegeLogo} alt='Co ' />
                        </a>
                    </div>
                    <div className='university-name'>
                        <a href='https://www.pakistanarmy.gov.pk/Army-Medical-College.php'>
                            <p>Army Medical College</p>
                        </a>

                    </div>


                </div>
            </div>
            <div className='Sub-cardContainer'>
                <div className='CardContainer-heading'>
                    <h2>Bachelor of MBBS and BDS</h2>
                    <div className='Duration'>
                        <h5>Duration/4Years</h5>
                        <h6>Fee:00</h6>
                    </div>
                </div>
                <div className='Eligibilty-heading'>
                    <p>Eligibility. Students are eligible for admission if they have Intermediate or <br />equivalent ('A' Level) with minimum 50% marks
                        from accredited institution and<br /> *NTS-NAT test score with minimum 50% marks</p>

                </div>


                <div className='university'>
                    <div className='university-logo'>
                    <a href='https://nmu.edu.pk/'>
                            <img src={NishtarMedicalImg} alt='Nishtar Medical College Multan' />
                        </a>
                    </div>
                    <div className='university-name'>
                        <a href='https://nmu.edu.pk/'>
                            <p>Nishtar Medical College Multan</p>
                        </a>

                    </div>


                </div>
            </div>
            <div className='Sub-cardContainer'>
                <div className='CardContainer-heading'>
                    <h2>Bachelor of MBBS and BDS</h2>
                    <div className='Duration'>
                        <h5>Duration/4Years</h5>
                        <h6>Fee:225400</h6>
                    </div>
                </div>
                <div className='Eligibilty-heading'>
                    <p>Eligibility. Students are eligible for admission if they have Intermediate or <br />equivalent ('A' Level) with minimum 50% marks
                        from accredited institution and<br /> *NTS-NAT test score with minimum 50% marks</p>

                </div>


                <div className='university'>
                    <div className='university-logo'>
                        <a href='https://qau.edu.pk/'>
                            <img src={QMCLogo} alt='Quaid-e-Azam Medical College' /> 
                        </a>
                    </div>
                    <div className='university-name'>
                        <a href='https://qau.edu.pk/'>
                            <p>Quaid-e-Azam Medical College </p>
                        </a>

                    </div>


                </div>
                
            </div>
            <div className='Sub-cardContainer'>
                <div className='CardContainer-heading'>
                    <h2>Bachelor of MBBS and BDS</h2>
                    <div className='Duration'>
                        <h5>Duration/4Years</h5>
                        <h6>Fee:00</h6>
                    </div>
                </div>
                <div className='Eligibilty-heading'>
                    <p>Eligibility. Students are eligible for admission if they have Intermediate or <br />equivalent ('A' Level) with minimum 50% marks
                        from accredited institution and<br /> *NTS-NAT test score with minimum 50% marks</p>

                </div>


                <div className='university'>
                    <div className='university-logo'>
                    <a href='https://www.szabist.edu.pk/'>
                            <img src={SZABMCLogo} alt='Shaheed Zulfikar Ali Bhutto Institute of Science and Technology - 99 Campus' />
                        </a>
                    </div>
                    <div className='university-name'>
                        <a href='https://www.szabist.edu.pk/'>
                            <p>Shaheed Zulfikar Ali Bhutto Institute of Science and Technology</p>
                        </a>

                    </div>


                </div>
            </div>
            <div className='Sub-cardContainer'>
                <div className='CardContainer-heading'>
                    <h2>Bachelor of MBBS and BDS</h2>
                    <div className='Duration'>
                        <h5>Duration/4Years</h5>
                        <h6>Fee:225400</h6>
                    </div>
                </div>
                <div className='Eligibilty-heading'>
                    <p>Eligibility. Students are eligible for admission if they have Intermediate or <br />equivalent ('A' Level) with minimum 50% marks
                        from accredited institution and<br /> *NTS-NAT test score with minimum 50% marks</p>

                </div>


                <div className='university'>
                    <div className='university-logo'>
                        <a href='https://kemu.edu.pk/'>
                            <img src={KingEdwardLogo} alt='King Edward Medical University' />
                        </a>
                    </div>
                    <div className='university-name'>
                        <a href='https://kemu.edu.pk/'>
                            <p>King Edward Medical University, Lahore </p>
                        </a>

                    </div>


                </div>
                
            </div>
           </div>
        
        </div>
        </div>
    )
}
export default MedicinHealthAdvertisement;