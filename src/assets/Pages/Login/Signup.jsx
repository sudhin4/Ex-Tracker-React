import "./whole.css";
import contractimage from "../Login/contract.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Endpoints } from "../../../Api";
import SuccessfullyLoginPage from "./successfullylogin";

function Singup() {
  const Navigate = useNavigate();

  const [emaildata, setemaildata] = useState();
  const [passworddata, setpassworddata] = useState("");
  const [isapimessage, setapimessage] = useState();
  const [issuccesstatus, setsuccessstatus] = useState();
  const [ischeck, setcheck] = useState();
  const [isdataentered, setdataentered] = useState(true);
  const [ispasswordlenght, setpasswordlength] = useState(true);
  const [ismodelopen, setmodelopen] = useState(true);
  const navigate = useNavigate();
  const api = Endpoints.signup;

  function getemailvalue(e) {
    setemaildata(e.target.value);
  }
  function getpasswordvalue(e) {
    setpassworddata(e.target.value);
  }
  function checkedvaluefunction(e) {
    setcheck(e.target.checked);
  }

  async function sendingfunctiontodatabase(a, b) {
    try {
      const response = await axios.post(
        api,
        { Email: a, Password: b },
        { withCredentials: true }
      );
      console.log(response);
      setapimessage(response.data.message);
      setsuccessstatus(response.data.success);
    } catch (error) {}
  }

  function clickbtntosendfunction() {
    if (emaildata && passworddata && ischeck) {
      if (passworddata.length >= 8) {
        sendingfunctiontodatabase(emaildata, passworddata).then(() => {}); //call a function,to send a data to database
      } else {
        setpasswordlength(false);
      }
    } else {
      setdataentered(false);
    }

    setTimeout(() => {
      //error view function
      setdataentered(true);
      setpasswordlength(true);
    }, 4000);
  }

  //check the successstatus is true or false
  useEffect(() => {
    if (issuccesstatus == true) {
      //check the status is true or false
      setmodelopen(false);

      setTimeout(() => {
        setmodelopen(true); //model close funtion after 3sec
        navigate("/");
      }, 3000);
    }
  }, [issuccesstatus]);

  function sendloginstatus() {}

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
            <img src={contractimage} className="signupimagesection" alt="" />
            <h2 className="login_heading">Signup</h2>
          </div>
          <div className="input_section email_divv">
            <label htmlFor="" className="label_input">
              Email:
            </label>
            <input
              type="email"
              name=""
              id="email_singnup"
              placeholder="Example@gmail.com"
              className="input_emaill inputss"
              value={emaildata}
              onChange={getemailvalue}
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
              value={passworddata}
              onChange={getpasswordvalue}
            />
          </div>

          <div className="error_section">
            {!isdataentered ? (
              <p className="error_paragraph">*Please fill the fields</p>
            ) : null}
            {!ispasswordlenght ? (
              <p className="error_paragraph">*Password atleast 8 character</p>
            ) : null}
            {issuccesstatus == false ? (
              <p className="error_paragraph">Email is already used</p>
            ) : null}
          </div>

          <div className="useragreementdivvv">
            <input
              type="checkbox"
              className="useragreementsection"
              name=""
              id=""
              value={ischeck}
              onChange={checkedvaluefunction}
            />
            <h3 className="useragreementheading">User & Agreement</h3>
          </div>

          <div className="buttons_divv">
            <button className="login_btn btn" onClick={clickbtntosendfunction}>
              Signup
            </button>
            <button
              className="signup_btn btn"
              onClick={() => Navigate("/Loginpage")}
            >
              Login?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Singup;
