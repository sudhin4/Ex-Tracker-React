import "../Lasttransaction/LastTransaction.css";

import Cash from "../Lasttransaction/cash Icon.png";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState, } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export function DataInLastTransaction({Name,Image,Date,Category,Amount,id,gettingidfunction}) {
  
  const [islastPage, setislastPage] = useState(true);
  const [isincexp,setincexp] = useState();
  const naviagate = useNavigate();

  function routerfun(){
    gettingidfunction(id);
    naviagate("/TransactionPage")
  }

  useEffect(()=>{
    if(Category){
    if(Category=="income"){
    setincexp(true);
  }
  else if(Category=="Income"){
    setincexp(true)
  }
  else{
    setincexp(false);
  }
  }else{
   
  }
  },[])
  
  

  return (
    <>
      <div className="DaTE_lastTRANSACTION" onClick={routerfun} >
        <div className="firstandsecondDivv">
          <div className="TRANSAction_name">
             <img src={Image} alt="" className="Image_for_TRANSACTION_NAME" /> 
            

          </div>
          <div className="NameDiv_date_expanseincomeDivvv" >
            <h2 className="Data_FOR_TRANSACTIONnAME DATAA">{Name}</h2>
            <h2 className="Data_forDATE DATAA">{Date}</h2>
          </div>
        </div>

        <div className="expanse_amount_divv1222">
         <h2 className= "category_INLASTTransaction DATAA" >{Category}</h2>
          <h2 className={isincexp?"Data_forAMOUNTIncome DATAA":"Data_forAMOUNTExpanse DATAA"}>{Amount}</h2>
        </div>
      </div>
    </>
  );
}



