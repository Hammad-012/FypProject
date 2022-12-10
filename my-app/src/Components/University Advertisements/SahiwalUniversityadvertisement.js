import { useEffect , useState } from "react";
import {Table} from 'react-bootstrap'
import { useParams } from "react-router-dom";
import CalculaterForm from "../Form/CalculaterForm";
import PopUpModel from "../PopUpModel/PopUpModel";

const SahiwalUniversityAdvertisement = () => {
    const [universitiesAdmission , setuniversitiesAdmission] = useState([]);
    const [IslamabadAdmissionAdvertisement , setIslamabadAdmissionAdvertisement] = useState([]);
    const [LahoreAdmissionAdvertisement , setLahoreAdmissionAdvertisement] = useState([]);
    const [FaislabadAdmissionAdvertisement , setFaislabadAdmissionAdvertisement] = useState([]);
    const [RawalpindiAdmissionAdvertisement , setRawalpindiAdmissionAdvertisement] = useState([]);
    const [MultanAdmissionAdvertisement , setMultanAdmissionAdvertisement] = useState([]);
    const [RahimYarKhanAdmissionAdvertisement , setRahimYarKhanAdmissionAdvertisement] = useState([]);
    const [AbottabadAdmissionAdvertisement , setAbottabadAdmissionAdvertisement] = useState([]);
    const [BhawalPurAdmissionAdvertisement , setBhawalPurAdmissionAdvertisement] = useState([]);
    const [WaahCantAdmissionAdvertisement , setWaahCantAdmissionAdvertisement] = useState([]);
    const [SargodhaAdmissionAdvertisement , setSargodhaAdmissionAdvertisement] = useState([]);
   
    const [data, setData] = useState({});
    const [showForm, setShowForm] = useState(null);
    const [isEligible, setIsEligible] = useState(false)
   const [openModel , setOpenModel] = useState(false);
   const [Name , setName] = useState('');
   const [Result , setResult] = useState('');
   const [Link , setLink] = useState('');
    const params = useParams();
    console.log(params.city)
   useEffect(()=>{
    let url;
    if(params.city === 'Sahiwal') {
        url = 'http://127.0.0.1:8000/UniversityAdmissionAdvertisement'
    }
    fetch(url)
    .then((resp)=> {
        if(resp.ok === false){
            throw new Error ('Error Message')
        }
        return resp.json();
    })
    .then((resData)=> {
        setuniversitiesAdmission(resData.UniversityAdmissionAdvertisement)
        console.log(resData)
    })
    .catch((err)=>{
       console.log(err.message)
    })
   }, [])

   useEffect(()=>{
    let url;
    if(params.city === 'Islamabad') {
        url = 'http://127.0.0.1:8000/IslamabadAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setIslamabadAdmissionAdvertisement(resData.IslamabadAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'Lahore') {
        url = 'http://127.0.0.1:8000/LahoreAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setLahoreAdmissionAdvertisement(resData.LahoreAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   
   useEffect(()=>{
    let url;
    if(params.city === 'Faislabad') {
        url = 'http://127.0.0.1:8000/FaislabadAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setFaislabadAdmissionAdvertisement(resData.FaislabadAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])

   useEffect(()=>{
    let url;
    if(params.city === 'Rawalpindi') {
        url = 'http://127.0.0.1:8000/RawalpindiAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setRawalpindiAdmissionAdvertisement(resData.RawalpindiAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'Multan') {
        url = 'http://127.0.0.1:8000/MultanAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setMultanAdmissionAdvertisement(resData.MultanAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'RahimYarKhan') {
        url = 'http://127.0.0.1:8000/RahimYarKhanAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setRahimYarKhanAdmissionAdvertisement(resData.RahimYarKhanAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'Abottabad') {
        url = 'http://127.0.0.1:8000/AbottabadAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setAbottabadAdmissionAdvertisement(resData.AbottabadAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'BhawalPur') {
        url = 'http://127.0.0.1:8000/BhawalPurAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setBhawalPurAdmissionAdvertisement(resData.BhawalPurAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'Waah Cant') {
        url = 'http://127.0.0.1:8000/WaahCantAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setWaahCantAdmissionAdvertisement(resData.WaahCantAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])
   useEffect(()=>{
    let url;
    if(params.city === 'Sargodha') {
        url = 'http://127.0.0.1:8000/SargodhaAdmissionAdvertisement'
    }
    fetch(url)
    .then((res)=>{
        if(res.ok === false){
            throw new Error('Error Message')
        }
        return res.json()
    })
    .then((resData)=>{
        setSargodhaAdmissionAdvertisement(resData.SargodhaAdmissionAdvertisement)
    })
    .catch((err)=>{
        console.log(err.message)
    })
   }, [])

   const showFormHandler = (dataObj) => {
    setData(dataObj)
    setShowForm(true);
   }
   const closeFormHandler = () => {
    setShowForm(false);
   }
   const openModelHandler = () => {
    setOpenModel(true)
   }
   const closePopUpHandler=()=>{
    setOpenModel(false)
   }
 
   
   
    return  (
        <>
        {openModel ? <PopUpModel isEligible={`${isEligible ? 'You are Elligible' : 'You are not Elligible'}`} openModel={openModelHandler}  closePopUpHandler={closePopUpHandler} data={data} Name={Name} Result={Result} Link={Link}  /> : null}
        {showForm ? <CalculaterForm setIsEligible={setIsEligible} openModel={openModelHandler} closeFormHandler={closeFormHandler} data={data} setName={setName} setResult={setResult} setLink={setLink} /> : null }
        <div>
             <Table striped bordered hover>
                <thead>
               
                <tr>
                    <th>id</th>
                    <th>University Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Check Eligibility</th>
                </tr>
                </thead>
                <tbody>
                    {universitiesAdmission.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {IslamabadAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {LahoreAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>

                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {FaislabadAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {RawalpindiAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {MultanAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {RahimYarKhanAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {AbottabadAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {BhawalPurAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {WaahCantAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                <tbody>
                    {SargodhaAdmissionAdvertisement.map((element)=>{
                        return(
                        <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.UniversityName}</td>
                        <td>{element.StartDate}</td>
                        <td>{element.EndDate}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => { showFormHandler(element) }}>
                                Check Eligibility
                            </button>
                        </td>
                        </tr>
                          )
                    })}
                    
                </tbody>
                
             </Table>
            
        </div>
        </>
    )
}
export default SahiwalUniversityAdvertisement;