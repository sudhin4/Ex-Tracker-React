import axios from "axios";
import { Endpoints } from "../../../Api";
import "./NewEditbtncomponentn.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewEditbtncomponent({ id, isopenorclose }) {
  const [isamountvalue, setamountvalue] = useState();
  const [isamountfill, setamountfill] = useState(false);
  const api = Endpoints.updatesection;
  const navigate = useNavigate();
  const idvalue = id

  const Api = `http://192.168.91.226:3000/api/v1/${idvalue}`
  

  async function updatevalue() {
    if (isamountvalue) {
      const response = await axios.post(Api, 
       { Amount: isamountvalue},
        {withCredentials: true}
      );
      setTimeout(() => {
        navigate('/$Transaction&History@')
      }, 1000);
      
    } else {
      setamountfill(true);
    }
  }







  return (
    <>
      <div>
        <div className="fulleditbtncomponentndivv">
          <h2 className="editOptionheading">
            <b>Edit Your Amount</b>
          </h2>
          <input
            type="number"
            name=""
            id=""
            placeholder="Amount"
            className="Inputbtnsection"
            value={isamountvalue}
            onChange={(e) => setamountvalue(e.target.value)}
          />
          {isamountfill ? (
            <h4 className="pleaseenteramount">*Enter the amount</h4>
          ) : null}
          <div className="EditbtnanccancelbtnDiv">
            <button
              className="CancelBtn Editbuttonfullbtn"
              onClick={() => isopenorclose(false)}
            >
              Cancel
            </button>
            <button
              className="EditBtn Editbuttonfullbtn"
              onClick={() => updatevalue()}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewEditbtncomponent;
