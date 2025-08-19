import { useNavigate } from "react-router-dom";
import CashImage from "./cash Icon.png";
import "./TransactionInside.css";
import { Endpoints } from "../../../Api";
import axios from "axios";
import { useEffect, useState } from "react";
import { gettingImage } from "../../../Data/IncExpdata";

function TransactionInside({ idvaluefunction }) {
  const id = idvaluefunction;
  console.log(idvaluefunction);
  const naviagte = useNavigate();
  const api = Endpoints.InsidePage;
  const [isvalue,setvalue] = useState()
  const [isimagename,setimagename] = useState()
  async function gettingvaluefromback() {
    const response = await axios.post(
      api,
      { Id: id },
      { withCredentials: true }
    );
    setvalue(response.data.Transaction)
  }

  console.log(isvalue)

  useEffect(() => {
    gettingvaluefromback();
  }, [id]);

  useEffect(()=>{
    if(isvalue){
      setimagename(isvalue.TransactionName)
    }
    
  },[isvalue])



  return (
    <>
       <div className="TransactionInside_divv">
        <div className="Image_price_tagsection">
          <img
             src={gettingImage[isimagename]}
            alt=""
            className="Image_for_insideTransaction"
          />
          <h2 className="price_for_indeptpage">₹{isvalue?.Amount?.toLocaleString('en-IN')}</h2>
          <b>
            <p className="Notess">Source Of {isvalue?.Category}</p>
          </b>
        </div>
        <div className="OtherInformationdivv">
          <div className="Transaction_name_content_div inside_div2323">
            <strong>
              <h2 className="transactionHeaidngss">Transaction</h2>
            </strong>
            <h4 className="transactioncontent transaction_name_content">
              {isvalue?.TransactionName}
            </h4>
          </div>
          <div className="Date_time_dd inside_div2323">
            <h2 className="Date_sectionHeading transactionHeaidngss">Date</h2>
            <h4 className="Date_sectionContent transactioncontent">
              {isvalue?.Date}
            </h4>
          </div>
          <div className="TimeSection_div inside_div2323">
            <h2 className="Time_sectionheading transactionHeaidngss">Time</h2>
            <h4 className="Time_sectioncontent transactioncontent">
              {isvalue?.Time}
            </h4>
          </div>
          <div className="StatusIncexp_div inside_div2323">
            <h2 className="Status_heading transactionHeaidngss">Category</h2>
            <h4 className="status__code transactioncontent">
              {isvalue?.Category}
            </h4>
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
        <h4 className="helpingLink" onClick={() => naviagte("/Contactpage")}>
          We're happy to help you
        </h4>
      </div>  
    </>
  );
}
export default TransactionInside;
