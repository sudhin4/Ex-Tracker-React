import IncomeImage from "../NewAddbtn_design/Income_imageForIncome.png";
import Income_expanseImage from "../NewAddbtn_design/saving Image For expanse app.png";
import "../NewAddbtn_design/Newaddbtn.css";
import Expanse_Image from "../NewAddbtn_design/Expanse image For Expanse.png";
import CategoryDropdown from "../Categorydropdown/CategoryDropdown";
import Choosetypelist from "../TypeList/TypelistMapfull";
import { useState, useEffect, useContext } from "react";
import { incomeorexpansecontext } from "../../../Data/Context";
import { Islogin } from "../../../Data/Context";
import LoginDirectComponent from "../../Pages/LoginDirectPage/LoginDirectComponent";
import axios from "axios";
import { Endpoints } from "../../../Api";
import { useNavigate } from "react-router-dom";

function Newaddbtn_({ getuserdata }) {
  //checking is login or not

  
  const api = Endpoints.AddIncomeExpanseData;
  const isloginapi = Endpoints.Islogin

  const naviagate = useNavigate();

  const [islogin, setislogin] = useState();

async  function checkinglogin() {
   const response = await axios.get(isloginapi,{withCredentials:true});
   setislogin(response.data.success);
  }

  useEffect(() => {
    checkinglogin();
  }, [islogin]);

  const [getcategorystateincome, setgetcategorystateincome] = useState();
  const [getcategorystateexpanse, setgetcategorystateexpanse] = useState(true);
  const [checkincomeorexpanse, setincomeorexpanse] = useState(false); //false : Expanse || true : income
  // store and get data from user
  const [getamount, setgetamount] = useState();
  const [getdate, setgetdate] = useState("");
  const [getnote, setgetnote] = useState("");
  const [getcategory, setcategory] = useState("expanses");
  const [getimage, setgetimage] = useState("");
  const [getname, setgetname] = useState("");
  const [gettime, settime] = useState("");
  const [getdatafromuser, setgetdatafromuser] = useState([]); // main data
  // push a value to the state

  async function sendvaluetobackend() {
    const response = await axios.post(
      api,
      {
        Category: getcategory,
        TransactionName: getname,
        Amount: getamount,
        Date: getdate,
        Note: getnote,
        Time: new Date().toLocaleTimeString("en-IN", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      },
      { withCredentials: true }
    );
    
  }

  const [getdateiscorrect, setdateiscorrect] = useState(false);
  const [pleaseenterdate, setpleaseenterdata] = useState(false);

  // check the value is type or not
  function checkingprocessbtn() {
    const todaydate = new Date();
    if (getname && getamount && getcategory && getdate && getnote) {
      if (new Date(getdate) <= todaydate) {
        
        sendvaluetobackend();
        setgetamount("");
        setgetdate("");
        setgetnote("");
        setdateiscorrect(false);

        naviagate('/SuccessAdded')
        setTimeout(() => {
          naviagate('/')
        }, 4000);

      } else {
        setdateiscorrect(true);
      }
    } else {
      setpleaseenterdata(true);
    }
  }

  useEffect(() => {
    getuserdata(getdatafromuser);
  }, [getdatafromuser]);

  // get type of expanse or income
  function gettingname(namee) {
    setgetname(namee);
  }
  function gettingimage(image) {
    setgetimage(image);
  }

  //select income or expanse category method

  function getcategoryyy(value = "expanses") {
    setcategory(value);
    if (value == "income") {
      setgetcategorystateexpanse(false);
      setgetcategorystateincome(true);
      setincomeorexpanse(true); // check Income or not
    } else if (value == "expanse") {
      setgetcategorystateincome(false);
      setgetcategorystateexpanse(true);
      setincomeorexpanse(false); //check Expanse or not
    }
  }

  return (
    <>
      {!islogin ? (
        <LoginDirectComponent />
      ) : (
        <div>
          {" "}
          <div className="heading_div_details">
            <h1 className="addYourMoneyDetails">Add your money details.!</h1>
          </div>
          <div className="Newadd_btn_design_whole_div">
            <div className="category_choose_div___">
              <div
                onClick={() => getcategoryyy("income")}
                className={
                  getcategorystateincome
                    ? "income_btn_section  income_btn_divvv _clicked"
                    : "income_btn_section  income_btn_divvv"
                }
              >
                <img
                  src={Income_expanseImage}
                  alt=""
                  className="income_image_tagg image_tag_for_btn"
                />
                <h2 className="Income_heading">Income</h2>
              </div>
              <div
                onClick={() => getcategoryyy("expanse")}
                className={
                  getcategorystateexpanse
                    ? "income_btn_divvv _clicked Expanse_btn_section"
                    : "income_btn_divvv Expanse_btn_section"
                }
              >
                <img
                  src={Expanse_Image}
                  alt=""
                  className="expanse_image_tagg image_tag_for_btn"
                />
                <h2 className="Exapanse_heading">Expanse</h2>
              </div>
            </div>

            <div className="whole_input_tag_addbtn_component incomeee_btn_divvvv">
              <div className="dropdown_for_category section_wise_add_button">
                <label
                  htmlFor="category"
                  className="label--- label_for_category"
                >
                  Choose Category
                </label>
                <Choosetypelist
                  getname={gettingname}
                  getimage={gettingimage}
                  isincomeorexpanse={checkincomeorexpanse}
                />
              </div>
              <div className="Amount_div_for_addbtn section_wise_add_button">
                <label htmlFor="" className="label--- label_for_amount">
                  Enter an amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={getamount}
                  onChange={(e) => setgetamount(Number(e.target.value))}
                  id=""
                  placeholder="Amount"
                  className="amount_input_add__ input_for_newadd"
                />
              </div>
              <div className="date_div_for_addbtn section_wise_add_button">
                <label htmlFor="" className="label--- label_for_amount">
                  Enter a Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={getdate}
                  onChange={(e) => setgetdate(e.target.value)}
                  id=""
                  placeholder="DD/MM/YYYY"
                  className="DATE_input_add__ input_for_newadd"
                />
              </div>
              <div className="Note_div_for_addbtn section_wise_add_button">
                <label htmlFor="note" className="label--- label_for_note">
                  Add Note
                </label>
                <input
                  type="text"
                  name="note"
                  value={getnote}
                  onChange={(e) => setgetnote(e.target.value)}
                  placeholder="Add Note"
                  className="Add_note_input_addbtn input_for_newadd"
                />
              </div>
            </div>
            {getdateiscorrect ? (
              <p className="errorPara_for _Date">
                *Choose Correct date(not future)
              </p>
            ) : null}
            {pleaseenterdate ? (
              <p className="errorPara_for _data">*Fill all the inputs</p>
            ) : null}

            <div className="buttons_for_save_addbtn">
              <button className="cancel_btn__ btn_addbtn">Cancel</button>
              <button
                className="Add_btn__ btn_addbtn"
                onClick={checkingprocessbtn}
              >
                Add
              </button>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
}
export default Newaddbtn_;
