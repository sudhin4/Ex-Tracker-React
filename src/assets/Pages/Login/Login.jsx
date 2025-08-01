import "./whole.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Login({getnamefun}) {
  const [isemail, setemail] = useState("");
  const [ispassword, setpassword] = useState("");
  const [istrue,settrue] = useState(true);

  const navigate = useNavigate();
  const api = "http://localhost:8000/api/v1/Loginpage";

  let value;

  async function gettingvaluefromdb(email, password) {
    try {
      const response = await axios.post(api, [
        {
          Email: email,
          password: password,
        },
      ]);
      settrue(response.data.success);
      getnamefun(response.data.dbmail)
    } catch (err) {
      console.error(err);
    }
  }

  function getvaluec(e) {
    setemail(e.target.value);
  }
  function getpassword(e) {
    setpassword(e.target.value);
  }

  function getvaluefrominp() {
    gettingvaluefromdb(isemail, ispassword);
  }

  return (
    <>
      <div className="parent_div">
        <div className="whole_login_div">
          <div className="Login_heading_div">
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
              value={isemail}
              onChange={getvaluec}
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
              value={ispassword}
              onChange={getpassword}
            />
          </div>
          {!istrue ? <div className="error_section">
            <p className="error_paragraph">Invalid Email and Password</p>
          </div> :null}
          
          <div className="buttons_divv">
            <button className="login_btn btn" onClick={() => getvaluefrominp()}>
              Login
            </button>
            <button className="signup_btn btn" onClick={() => navigate("/")}>
              Signup?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
