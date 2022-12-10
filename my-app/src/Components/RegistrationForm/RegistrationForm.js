import './RegistrationForm.css';
import { Link , useNavigate} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';

const RegistrationForm = () => {
useEffect(()=> {
  if(localStorage.getItem('login'))
  {
    Navigate('/')
  }
}, [])

    const EmailInputref = useRef();
    const PasswordInputref = useRef();
    const [isRegister, setIsRegister] = useState(true)
    const Navigate = useNavigate()
    const SitchAuthHandler = () => {
        setIsRegister((previousState) => !previousState)
    }

    const SubmitHandler = (event) => {
        event.preventDefault();


        const EnteredEmail = EmailInputref.current.value;
        const EnteredPassword = PasswordInputref.current.value;


  
       fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3igHnesMZLY2SxVnir9d_4z1rwuAOllU',
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
                
                if(resData.error) {
                    console.log(resData.error.errors[0].message)
                    throw new Error(resData.error.errors[0].message)
                }
            })
            .catch((err)=>{
                alert(err.message)
            })
        Navigate('/SignInform')
    
  
    }

    return (

        <section className="vh-80" style={{ backgroundColor: '#eee' }}>

            <div className="container h-50">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '20px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        Have an Account ? <Link to='/SignInform'>Sign in</Link>
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4" onSubmit={SubmitHandler}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Your Email</label>
                                                    <input type="email" id="form3Example3c" className="form-control" ref={EmailInputref} defaultChecked />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" id="form3Example4c" className="form-control" ref={PasswordInputref} defaultChecked />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>

                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg register-button" onClick={SitchAuthHandler} >
                                                    
                                                    {isRegister ? 'Create new Account' : 'Login With Existing Accounting'}
                                                </button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="h-100vh col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid center-image" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default RegistrationForm;