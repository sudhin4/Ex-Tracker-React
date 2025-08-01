import { BsThreeDots } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import "../CardFormatMain/MainCard.css";

function MainCard() {
  return (
    <>
      <div className="Maincard_full_component">
        <div className="CardDiv">
          <div className="Three_dot_btn_andToday">
            <h1 className="Todayheading">Today</h1>
            <BsThreeDots className="Logo_three_btn" />
          </div>

          <div className="Balanace_amount_div">
            <h1 className="Amount__">₹45,000</h1>
            <p className="Balance_para">Total Balance</p>
          </div>
          <div className="bottom_content_divvv">
            <div className="AccountName_userName_div">
              <h2 className="Accout_name_User_name">SUDHIN SUDHAKARAN</h2>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
export default MainCard;
