import { BsThreeDots } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import "../CardFormatMain/MainCard.css";
import { useContext, useEffect, useState } from "react";
import { Islogin } from "../../../Data/Context";
import { Endpoints } from "../../../Api";
import axios from "axios";

function MainCard() {


  const { Username,gettotal } = useContext(Islogin);
  console.log(Username)
  const [istotalamount,settotalamount] = useState();

  const api = Endpoints.Totalbalance;

  async function gettotalbalance(){
    const response = await axios.get(api,{withCredentials:true});
    console.log(response,"The totalbalance");
    settotalamount(response.data.TotalMoney)
    gettotal(response.data.TotalMoney);
  }

  useEffect(()=>{
    gettotalbalance();
  })

  

  return (
    <>
      <div className="Maincard_full_component">
        <div className="CardDiv">
          <div className="Three_dot_btn_andToday">
            <h1 className="Todayheading">This Account</h1>
            {/* <BsThreeDots className="Logo_three_btn" /> */}
          </div>

          <div className="Balanace_amount_div">
            <h1 className="Amount__">₹{istotalamount?  istotalamount.toLocaleString('en-IN'):"0"}</h1>
            <p className="Balance_para">Total Balance</p>
          </div>
          <div className="bottom_content_divvv">
            <div className="AccountName_userName_div">
              <h2 className="Accout_name_User_name">{Username?Username:"UserName"}</h2>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default MainCard;
