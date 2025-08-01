import { useNavigate } from "react-router-dom";
import CashImage from "./cash Icon.png";
import "./TransactionInside.css";

function TransactionInside() {

  const naviagte = useNavigate();
  return (
    <>
      <div className="TransactionInside_divv">
        <div className="Image_price_tagsection">
            <img src={CashImage} alt="" className="Image_for_insideTransaction" />
        <h2 className="price_for_indeptpage">₹45,000</h2>
        <b><p className="Notess">Source Of Income</p></b>
        </div>
        

        <div className="OtherInformationdivv">
        <div className="Transaction_name_content_div inside_div2323">
            <strong><h2 className="transactionHeaidngss">Transaction</h2></strong>
            <h4 className="transactioncontent transaction_name_content">Electric City Bill</h4>
        </div>
          <div className="Date_time_dd inside_div2323">
            <h2 className="Date_sectionHeading transactionHeaidngss">Date</h2>
            <h4 className="Date_sectionContent transactioncontent">
              05-12-2026
            </h4>
          </div>
          <div className="TimeSection_div inside_div2323">
            <h2 className="Time_sectionheading transactionHeaidngss">Time</h2>
            <h4 className="Time_sectioncontent transactioncontent">12:45PM</h4>
          </div>
          <div className="StatusIncexp_div inside_div2323">
            <h2 className="Status_heading transactionHeaidngss">Category</h2>
            <h4 className="status__code transactioncontent">Income</h4>
          </div>
          <div className="Transaction_no_id inside_div2323">
            <h2 className="transaction_heading transactionHeaidngss">
              Transaction ID
            </h2>
            <h4 className="Transaction_number transactioncontent">
              67H9&E22960
            </h4>
          </div>
          <div className="Buttons_cancel_delete">
            <button className="cancelTransaction_btn btn_insideTransaction">
              Edit
            </button>
            <button className="DeleteTransaction_btn btn_insideTransaction">
              Delete
            </button>
          </div>
          
        </div>
      </div>
      <div className="wentwrong_askquestion">
            <h3 className="STWWHeading">Something went wrong?</h3>
            <h4 className="helpingLink" onClick={()=>naviagte("/Contactpage")}>We're happy to help you</h4>
          </div>
    </>
  );
}
export default TransactionInside;
