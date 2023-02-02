import { useEffect, useState , useRef } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
    const EnteredEmailRef =  useRef()
    const [email , setEmail] = useState('');

       

    const SubmitHandler =  (event) => {
       event.preventDefault();
       const EnteredEmail = EnteredEmailRef.current.value
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC3igHnesMZLY2SxVnir9d_4z1rwuAOllU',
       {
           method: "POST",
           body: JSON.stringify({
               email: EnteredEmail,
               requestType: "PASSWORD_RESET"
           }),
           headers: {
               'Content-Type': 'application/json'
           }
       }
       )
       .then((res) => {
           if (res.ok === false) {
               return res.json()
           }
           return res.json()
       })
       .then((resData) => {
           console.log(resData)
           if(resData.error) {
             throw new Error(resData.error.errors[0].message)
           }
           
       })
      .catch((err)=>{
       // console.log(err.message);
       alert(err.message)
      })
   }

       
    

    return (
        
       <form className="col-sm-3 offset-sm-4" onSubmit={SubmitHandler}>
        <h1>Forgot Password</h1>

        <input type='email' placeholder="Email" ref={EnteredEmailRef}   className="form-control" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <button className="btn btn-primary">Send Reset Email</button>
        
       </form>
       
       
    )
    }

export default ForgotPassword;