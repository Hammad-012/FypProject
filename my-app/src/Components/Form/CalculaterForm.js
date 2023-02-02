import './CalculaterForm.css'
import PopUpModel from '../PopUpModel/PopUpModel'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import {addDoc, collection} from '@firebase/firestore'
const CalculaterForm = (props) => {
    const Name = useRef();
    const MatricMarksInputref = useRef();
    const IntermediateMarksInputref = useRef();
    const NtsMarksInputref = useRef();
    const EntryTestInputref = useRef();
    const MDCATInputref = useRef()
    console.log(props.data)
    const ref = collection(firestore, "Data");
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        // console.log(Name.current.value)
        // console.log(EntryTestInputref.current.value)
        // console.log(MDCATInputref.current.value)
   let Data= {
        name : Name.current.value,
        matricmarks : MatricMarksInputref.current.value,
        intermediateMarks: IntermediateMarksInputref.current.value,
        NtsMarks:   props.data.nts ? NtsMarksInputref.current.value : false,
        EntryTest :  props.data.EntryTest ? EntryTestInputref.current.value : false,
        MDCATmarks : props.data.MDCAT ? MDCATInputref.current.value : false

   }
  
   try {
    addDoc(ref,Data);
   } catch(event) {
    console.log(event)
   }

        const EnteredName = Name.current.value;
        const EnteredMatricMarks = MatricMarksInputref.current.value;
        const EnteredIntermediateMarks = IntermediateMarksInputref.current.value;
       
       
        let EnteredNtsMarks;
        let Result;
        let ntsMarksPercentage;
        let EntryTestPercentage;
        let MDCATTestPercentage;
        if(props.data.nts) {
            EnteredNtsMarks = NtsMarksInputref.current.value;
            const matricMarksPercentage = Math.round(+EnteredMatricMarks / 1100 * 100 * 0.1);
            const intermediateMarksPercentage = Math.round(+EnteredIntermediateMarks / 1100 * 100 * 0.4);
            ntsMarksPercentage = Math.round(+EnteredNtsMarks / 100 * 50)
            console.log(matricMarksPercentage , intermediateMarksPercentage , ntsMarksPercentage)
             Result = matricMarksPercentage + intermediateMarksPercentage + ntsMarksPercentage;
             console.log(Result);
         
        }
        if(Result >= props.data.eligibilityCriteria) {
            //    alert('Congraluation You are Eligible for Admission')
                  props.setIsEligible()
                  props.openModel()
                  props.closeFormHandler()
                  props.setResult(Result);
                  props.setName(EnteredName);
                  props.setLink(Link)
               
            }
            else {
                // alert(' You are not Elligible for Admission')
                props.setIsEligible();
                props.openModel();
                props.closeFormHandler();
                props.setResult(Result);
                props.setName(EnteredName);
                props.setLink(Link)
               
               }
               if(props.data){
                const intermediateMarksPercentage = Math.round(+EnteredIntermediateMarks / 1100 * 100 )
                Result = intermediateMarksPercentage;
                console.log(Result)
               }
               if(Result >= props.data.eligibilityCriteria) {
                //    alert('Congraluation You are Eligible for Admission')
                      props.setIsEligible(true)
                      props.openModel()
                      props.closeFormHandler()
                      props.setResult(Result);
                      props.setName(EnteredName);
                      props.setLink(Link)
                    
                }
               else {
                // alert('Congraluation You are not Eligible for Admission')
                props.setIsEligible(false);
                props.openModel();
                props.closeFormHandler();
                props.setResult(Result);
                props.setName(EnteredName);
                props.setLink(Link)
               
               }
       
            if(props.data.EntryTest) {
                const EnteredEntryTest = EntryTestInputref.current.value;
                const intermediateMarksPercentage = Math.round(+EnteredIntermediateMarks /1100 * 100 *0.7)
                const   EntryTestPercentage = Math.round(+EnteredEntryTest /100 *100 * 0.3);
                Result = intermediateMarksPercentage + EntryTestPercentage;
                console.log(Result)
               }
               if(Result >= props.data.eligibilityCriteria) {
                //    alert('Congraluation You are Eligible for Admission')
                      props.setIsEligible(true)
                      props.openModel()
                      props.closeFormHandler()
                      props.setResult(Result);
                      props.setName(EnteredName);
                      props.setLink(Link)
                    
                }
               else {
                props.setIsEligible(true);
                props.openModel();
                props.closeFormHandler();
                props.setResult(Result);
                props.setName(EnteredName);
                props.setLink(Link)
               
               }
              
               if(props.data.MDCAT) {
                const EnteredMDCATTest = MDCATInputref.current.value;
                const intermediateMarksPercentage = Math.round(+EnteredIntermediateMarks / 1100 * 100 * 0.5);
              MDCATTestPercentage = Math.round(+EnteredMDCATTest / 200 *100 * 0.5)
                Result = intermediateMarksPercentage + MDCATTestPercentage;
                console.log(Result);
              
               }
               if(Result >= props.data.eligibilityCriteria) {
                //    alert('Congraluation You are Eligible for Admission')
                      props.setIsEligible(true);
                      props.openModel();
                      props.closeFormHandler();
                      props.setResult(Result);
                      props.setName(EnteredName);
                      props.setLink(Link);
                      
                }
               else {
                props.setIsEligible(true);
                props.openModel();
                props.closeFormHandler();
                props.setResult(Result);
                props.setName(EnteredName);
                props.setLink(Link);
              
               }
            }
    return (
        <>
      
        <div className="pos-fixed">
            <form className='calc-form' onSubmit={formSubmitHandler}>
                <ul>
                    <li className='close-icon-container'>
                        <h2>{props.data.UniversityName} </h2>
                        <ion-icon onClick={props.closeFormHandler} name="close-outline"></ion-icon>
                    </li>
                    <li>
                        <label>Name</label>
                        <input type="text" placeholder="Name" ref={Name}  required></input>
                    </li>
                    <li>
                        <label>Matric Marks</label>
                        <input type="number" placeholder="Matric Marks" ref={MatricMarksInputref}    required></input>
                    </li>
                    <li>
                        <label>Intermediate Marks</label>
                        <input type="number" placeholder="Intermediate Marks" ref={IntermediateMarksInputref}  required></input>
                    </li>
                    {props.data.nts ? <li>
                        <label>Nts Marks</label>
                        <input type="number" placeholder="Nts Marks" ref={NtsMarksInputref}  required></input>
                    </li> : null}
                    {props.data.EntryTest ? <li>
                        <label>Entry Test Marks</label>
                        <input type="number" placeholder="Entry Test Marks" ref={EntryTestInputref} required></input>
                    </li> : null}
                    {props.data.MDCAT ? <li>
                        <label>MDCAT Marks</label>
                        <input type="number" placeholder="MDCAT Marks" ref={MDCATInputref}  required></input>
                    </li> : null}
                    <li>
                         
                        <button className='btn btn-primary' type="Submit">Submit</button>
                    </li>
                </ul>
            </form>
        </div>
        </>
    )
    
}


export default CalculaterForm;