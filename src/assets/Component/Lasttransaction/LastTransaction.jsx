import "../Lasttransaction/LastTransaction.css";
import Image from "../Lasttransaction/Electric city.png";
import Cash from "../Lasttransaction/cash Icon.png";
import { MdOutlineEdit } from "react-icons/md";
import { useState, } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";





export function DataInLastTransaction() {
  const [islastPage, setislastPage] = useState(true);
  const naviagate = useNavigate();

  function routerfun(){
    naviagate("/TransactionPage")
  }

  return (
    <>
      <div className="DaTE_lastTRANSACTION" onClick={routerfun} >
        <div className="firstandsecondDivv">
          <div className="TRANSAction_name">
             <img src={Image} alt="" className="Image_for_TRANSACTION_NAME" /> 
            

          </div>
          <div className="NameDiv_date_expanseincomeDivvv" >
            <h2 className="Data_FOR_TRANSACTIONnAME DATAA">Current Bill </h2>
            <h2 className="Data_forDATE DATAA">04-05-2005</h2>
          </div>
        </div>

        <div className="expanse_amount_divv1222">
          <h2 className="category_INLASTTransaction DATAA">Expanse</h2>
          <h2 className="Data_forAMOUNTExpanse DATAA">₹45,000</h2>
        </div>
      

        {/* {islastPage ? (
          <button className="EditBtn">
            <MdOutlineEdit className="EditLgo_icon" />
            Edit
          </button>
        ) : null} */}
      </div>
    </>
  );
}

