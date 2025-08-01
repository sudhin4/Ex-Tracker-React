import "./whole.css";
import contractimage from "../Login/contract.png";

function Singup() {
  return (
    <>
      <div className="parent_div">
        <div className="whole_login_div">
          <div className="Login_heading_div">
            <img src={contractimage} className="signupimagesection" alt="" />
            <h2 className="login_heading">Signup</h2>
          </div>
          <div className="input_section email_divv">
            <label htmlFor="" className="label_input">
              Email:
            </label>
            <input
              type="text"
              name=""
              id="email_singnup"
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
              id="password_singup"
              placeholder="Password"
              className="password_input inputss"
            />
          </div>
          {/* {!isresponsedata ?<div className="error_section">
            <p className="error_paragraph"> Email are already used</p>
          </div> : null} */}
          <div className="useragreementdivvv">
            <input
              type="checkbox"
              className="useragreementsection"
              name=""
              id=""
            />
            <h3 className="useragreementheading">User & Agreement</h3>
          </div>

          <div className="buttons_divv">
            <button className="login_btn btn">Signup</button>
            <button className="signup_btn btn">Login?</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Singup;
