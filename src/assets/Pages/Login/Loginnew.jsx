import Loginimage from "../Login/face-recognition.png";
import authentication from "../Login/authenticity.png";
import "../Login/whole.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Endpoints } from "../../../Api";
import SuccessfullyLoginPage from "./successfullylogin";
import { Islogin } from "../../../Data/Context";

function LoginPage() {
  const navigate = useNavigate();
  const {isloginorsignupcontext} =useContext(Islogin)
  const [userEmail, setemail] = useState();
  const [userPassword, setuserpassword] = useState();
  const [statuscode, setstatusscode] = useState();
  const [isvalue, setvalue] = useState(false);
  const [ismodelopen, setmodelopen] = useState();
  const [isapidata, setapidata] = useState();
  const [servererror,seterror] = useState(false)
  const api = Endpoints.login;

  function getemailfunction(e) {
    setemail(e.target.value);
  }
  function getpasswordfunction(e) {
    setuserpassword(e.target.value);
  }

  async function consolefunction() {
    if (userEmail && userPassword) {
      const response = await axios.post(
        api,
        { Email: userEmail, Password: userPassword },
        { withCredentials: true }
      );
      console.log(response);
      setstatusscode(response.data.success);
      setapidata(response.data.data);
      
    } else {
    }
  }

  useEffect(() => {
    if (statuscode == true) {
      isloginorsignupcontext("Login")
      navigate("/sucesslogin")
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [statuscode]);

  console.log(statuscode);

  return (
    <>
      <div className="parent_div">
        <div className="whole_login_div">
          <div className="Login_heading_div">
            <img
              src={authentication}
              className="image_section_for_login"
              alt=""
            />
            <h2 className="login_heading">Login</h2>
          </div>
          <div className="input_section email_divv">
            <label htmlFor="" className="label_input">
              Username
            </label>
            <input
              type="text"
              name=""
              id="email_login"
              placeholder="@Jhon_Don"
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

          <div className="error_section">
            {isvalue ? (
              <p className="error_paragraph">Enter All inputs</p>
            ) : null}
            {!statuscode ? (
              <p className="error_paragraph">{isapidata}</p>
            ) : null}
          </div>

          <div className="buttons_divv">
            <button className="login_btn btn" onClick={consolefunction}>
              Login
            </button>
            <button
              className="signup_btn btn"
              onClick={() => navigate("/Signuppage")}
            >
              Signup?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
