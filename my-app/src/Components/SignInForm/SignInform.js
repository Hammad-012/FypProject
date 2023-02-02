import './SignInform.css';
import { Link , useNavigate } from 'react-router-dom';
import { useRef, useState , useEffect } from 'react';
const SignInform = () => {



  
  const navigate = useNavigate()
  const EmailInputref = useRef();
  const PasswordInputref = useRef()
  const [isLogin , setIsLogin] = useState(true);
  const SitchAuthHandler = () => {
    setIsLogin((previousState) => !previousState)
    localStorage.setItem('login', true)
    navigate('/')
}
useEffect(() => {
  let login = localStorage.getItem('login')
  if(login) {
   navigate('/')
  }
 })
  const SubmitHandler = (event) => {
    event.preventDefault();


    const EnteredEmail = EmailInputref.current.value;
    const EnteredPassword = PasswordInputref.current.value;

    fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3igHnesMZLY2SxVnir9d_4z1rwuAOllU',
      {
          method: "POST",
          body: JSON.stringify({
              email: EnteredEmail,
              password: EnteredPassword,
              returnSecureToken: true
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
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
        <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid centered-image" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={SubmitHandler}>
                <center> <h1 className='mb-4'>Login Form</h1></center>
                <div className="form-outline mb-4">
                <label className="form-label">Email address</label>
                  <input type="email" id="form1Example13" className="form-control form-control-md" ref={EmailInputref}  defaultChecked/>
                  
                </div>
      
               
                <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                  <input type="password" id="form1Example23" className="form-control form-control-md" ref={PasswordInputref} defaultChecked />
                
                </div>
      
                <div className="d-flex justify-content-between mb-2">
                
                  <div className="form-check">
                  <label className="form-check-label"> Remember me </label>
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
                   
                  </div>
                  <a href="/forgot-password">Forgot password?</a>
                </div>
      
                
                <button type="submit" className="btn btn-primary btn-lg btn-block login-button" onClick={SitchAuthHandler}>
                Login </button>
      
               
      
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SignInform;