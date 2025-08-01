import { FaPlus } from "react-icons/fa6";
import "../UpcomingPaymentPages/UpcomingPayment.css";
import UpcomingpaymentImage from '../UpcomingPaymentPages/monthly-bill.png'
import UpcomingpaymentImage1 from '../UpcomingPaymentPages/Monnn.png'
import Upcomingpayment from "../../Component/UpcomingPayment/UpcomingPayment";
import UpcomingComponent from "./UpcomingComponent";

function UpcomingPaymentPage() {
  return (
    <>
      <div className="UpcomingPaymentPageDIvv">
        <div className="UpcomingPaymentHeadingDivv">
          <h2 className="upcomingHeading">Upcoming Payments</h2>
          <div className="Btn_div">
            <button className="Btn_for_add">
              <FaPlus className="Logo_for_add_btn" />
              <p className="btn_add_home">Add</p>
            </button>
          </div>
        </div>

        {/* <div className="NoPaymentsechdul">
            <img src={UpcomingpaymentImage1} alt="" className="emptyupcomingbill" />
            <h2 className="Noupcomingpayment">No Upcoming Payments </h2>
            <div className="Btn_div">
            <button className="Btn_for_add">
              <FaPlus className="Logo_for_add_btn" />
              <p className="btn_add_home">Add</p>
            </button>
          </div>
        </div> */}
        <div className="Upcomingpaymentcontent">
          <UpcomingComponent/>
          <UpcomingComponent/>
          
        </div>
        
      </div>
    </>
  );
}
export default UpcomingPaymentPage;
