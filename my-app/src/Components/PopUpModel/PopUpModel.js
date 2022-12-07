import { useState } from 'react';
import './PopUpModel.css'
import {Link} from 'react-router-dom';
const PopUpModel = (props) => {
   
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
         </div>
         <div className='PopUp-footer'>
           
         </div>
        </div>
    )
}
export default PopUpModel;