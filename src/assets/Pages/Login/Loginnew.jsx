import Loginimage from "../Login/face-recognition.png";
import authentication from '../Login/authenticity.png'
import '../Login/whole.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Endpoints } from "../../../Api";
import SuccessfullyLoginPage from "./successfullylogin";


function LoginPage() {

  const navigate = useNavigate();
  const [userEmail,setemail] = useState();
  const [userPassword,setuserpassword] = useState();
  const [statuscode,setstatusscode] = useState();
  const [isvalue,setvalue] = useState(false);
  const [ismodelopen,setmodelopen] = useState(true)
  
  const api = Endpoints.login;


  function getemailfunction(e){
    setemail(e.target.value)
  }
  function getpasswordfunction(e){
    setuserpassword(e.target.value);
  }

 async function consolefunction(){
    if(userEmail && userPassword){
      const response = await axios.post(api,{
        Email:userEmail,
        Password:userPassword,
        
      })
      console.log(response)
      setstatusscode(response.data.success);

    
        setmodelopen(false)
    

      setTimeout(() => {
  setmodelopen(true);
  navigate('/')
}, 3000);
      
    }
    else{

    }
  }





  return (
    <>
    {!ismodelopen ? (
        <div className="successfullYlogin_componenttt">
          <SuccessfullyLoginPage />
        </div>
      ) : null}
      <div className="parent_div">
        <div className="whole_login_div">
          <div className="Login_heading_div">
            <img src={authentication} className="image_section_for_login" alt="" />
            <h2 className="login_heading">Login</h2>
          </div>
          <div className="input_section email_divv">
            <label htmlFor="" className="label_input">
              Email:
            </label>
            <input
              type="text"
              name=""
              id="email_login"
              placeholder="example@gmail.com"
              value={userEmail}
              className="input_emaill inputss"
              onChange={getemailfunction}
              
            />
          </div>
          <div className="input_section Password_divv">
            <label htmlFor="" className="label_input">
              Password:
            </label>
            <input
              type="password"
              name=""
              value={userPassword}
              onChange={getpasswordfunction}
              id="password_login"
              placeholder="Password"
              className="password_input inputss"
            
            />
          </div>
          <p className="forgetPassword">Forgot Password?</p>
           {isvalue ? <div className="error_section">
            <p className="error_paragraph">Enter All inputs</p>
          </div> :null} 
          
          <div className="buttons_divv">
            <button className="login_btn btn" onClick={consolefunction} >
              Login
            </button>
            <button className="signup_btn btn" onClick={()=>navigate('/Signuppage')} >
              Signup?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
