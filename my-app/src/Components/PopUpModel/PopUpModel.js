import { useState, useEffect } from 'react';
import './PopUpModel.css'
import {Link} from 'react-router-dom';

const PopUpModel = (props) => {
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
             
        })
        .catch((err)=>{
            console.log(err.message)
         })
    },[])
    
const filterFunc = (element) => {
    if(+props.Result >= +element.Eligibility) {
        return true
    }
}
const findedElement = scholarship.find(filterFunc)
    return (
        <div className='PopUpModel-Container'>
         <div className='PopUp'>
            <div className='Title'>
            <li className='close-icon-container'>
            <h1>{props.data.UniversityName}</h1>
          <span onClick={props.closePopUpHandler}><ion-icon  name="close-outline"></ion-icon></span>
         </li>
          <h2>{props.Name}</h2>
          <h4>Your Aggrigate is :{props.Result}</h4>
          <p>{props.isEligible}</p>
          <div>

          </div>
          </div>
      <a href={props.data.UrlLink} className='btn btn-primary button'>Apply Now</a> 
       <br />
       <div>
       {scholarship.length !== 0 ? <h4>{findedElement.ScholarShipTitle}</h4>  : null}
       </div>
         </div>
         <div className='PopUp-footer'>
        
         </div>
        </div>
    )
}
export default PopUpModel;