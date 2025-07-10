import React,{useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import "../components/loginStyle.css";
import {AiFillBook, AiFillGoogleCircle} from 'react-icons/ai';
import { CiLogin } from "react-icons/ci";
import { AuthContext } from '../contects/AuthProvider';


export default function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [username,setUsername]=useState("");


    const {login,loginwithGoogle}=useContext(AuthContext);
    const [error,setError]=useState("");
    
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname|| "/";

    
    const handleLogin=(e)=>{
        e.preventDefault();

        const form=e.target;
        const Email=form.email.value;
        const Password=form.password.value;
    
        console.log(Email,Password);

        login(email,password).then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate(from,{replace:true})
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
         
          switch (errorCode) {
            case 'auth/invalid-credential':
              setError('There seems to be an issue with your login credentials. Please double-check your email and password, or reset your password if necessary.');
              break;
            case 'auth/wrong-password':
              setError('Incorrect email or password.');
              break;
            case 'auth/user-not-found':
              setError('The email address you entered is not associated with an account.');
              break;
            default:
              setError(errorMessage); 
          } 
          
        });
        
      

        


    };


    const handleRegister=()=>{
      loginwithGoogle().then((result)=>{
        const user=result.user;
        navigate(from,{replace:true});

      }).catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        setError(errorMessage);      
        
        
     
      })
    }




  return (

    
    <div className='row g-0 justify-content-center align-items-center vh-100 login-container'>

      <div className="col-10 row g-0  border rounded-2 bg-white">

        <div className="d-none d-md-block col-6">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*TErHODvkJTDfdOJyLNrjcw.jpeg" alt="" className='img-fluid h-100'  />
        </div>

        <form className='col-12 col-md-6 px-3 py-4' onSubmit={handleLogin}>
          
          <div className='d-flex align-items-center justify-content-center'>
            <h5 className=' text-center py-2 mb-1 fst-italic fw-lighter '>Discover, Explore, Imagine.</h5>
            <AiFillBook></AiFillBook>

          </div>
          {/* <h5 className=' text-center mb-2'>Login </h5> */}

          {error ? (
          <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{error}</span> 
          </div>
        </div>
        ) : (
          <h5 className="text-center mb-2">Login</h5> 
        )}


          



          <div className="form-floating mb-3">
            <input type="email" className='form-control rounded' id='email' placeholder='xyz.@gmail.com' required onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className='form-control rounded' id='password' placeholder='password' required onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <label htmlFor="password">Password</label>
          </div>

          <div className="text-center">
            <button className='btn login-btn py-2 px-2 rounded-3 d-flex align-items-center justify-content-center' onClick={handleLogin} >Login <CiLogin></CiLogin></button>
          </div>



          <div className="text-center mt-3">
            <button className='btn btn-outline-dark w-100 d-flex align-items-center justify-content-center' onClick={handleRegister}><AiFillGoogleCircle className='w-8 h-8 mr-2' ></AiFillGoogleCircle> Continue with Google</button>
          </div>

          <div className="text-center mt-4">Don't have an Account? <Link to="/sign-up" className='loginLink'>Sign Up</Link></div>

          <div className='text-center mt-4'>By continuing, I agree to the <Link className='Terms'> Terms of Use  </Link>& <Link className='Privacy'>Privacy Policy</Link></div>

        </form>


      </div>


      
    
    </div>


  )
}
