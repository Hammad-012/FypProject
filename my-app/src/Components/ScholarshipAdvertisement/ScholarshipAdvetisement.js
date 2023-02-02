import './ScholarshipAdvertisement.css';
import { useEffect, useState } from 'react';
const ScholarshipAdvertisement = () => {
    const [scholarship ,  setScholarship] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/ScholarshipAdvertisement')
        .then((resp)=> {
            if(resp.ok === false) {
                throw new Error ('Error Message')
            }
            return resp.json()
        })
        .then((respdata)=> {
             setScholarship(respdata.ScholarshipAdvertisement)
             console.log(respdata)
        })
        .catch((err)=>{
            console.log(err.message)
         })
    },[])
    return (
         <div>
            {scholarship.map((element) => {
                return <div className='row'>
                <div className="col-lg-12">
                  <div className='card'>
                    <div className='card-body'>
                      <h2 className='card-title'> {element.ScholarShipTitle}</h2>
                      <h6 className='card-text'>Eligibility : {element.Eligibility}</h6>
                      <h6 className='card-text'>Description: {element.Description}</h6>
                    </div>
                  </div>
                </div>
              </div>
            })}
         </div>
    ) 
}
export default ScholarshipAdvertisement;