import Loginimage from "../Login/face-recognition.png";
import authentication from '../Login/authenticity.png'
import '../Login/whole.css'

function LoginPage() {
  return (
    <>
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
              className="input_emaill inputss"
              
            />
          </div>
          <div className="input_section Password_divv">
            <label htmlFor="" className="label_input">
              Password:
            </label>
            <input
              type="password"
              name=""
              id="password_login"
              placeholder="Password"
              className="password_input inputss"
            
            />
          </div>
          <p className="forgetPassword">Forgot Password?</p>
          {/* {!istrue ? <div className="error_section">
            <p className="error_paragraph">Invalid Email and Password</p>
          </div> :null} */}
          
          <div className="buttons_divv">
            <button className="login_btn btn" >
              Login
            </button>
            <button className="signup_btn btn" >
              Signup?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
