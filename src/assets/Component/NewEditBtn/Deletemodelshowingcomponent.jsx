import axios from "axios";
import { Endpoints } from "../../../Api";
import { useNavigate } from "react-router-dom";
import "./NewEditbtncomponentn.css";

function Deletefunctionapimodel({ id, isopenfunction }) {
  const naviagate = useNavigate();

  const Apideletefunction = `http://192.168.91.226:3000/api/v1/DeleteTransaction/${id}`;

  async function apifunction() {
    const response = await axios.post(
      Apideletefunction,
      { id },
      { withCredentials: true }
    );
    console.log(response)
    naviagate("/$Transaction&History@");
  }

  return (
    <>
      <div>
        <div className="fulleditbtncomponentndivv  ">
          <h2 className="editOptionheading">
            <b>Are you sure?</b>
          </h2>

          <div className="EditbtnanccancelbtnDiv">
            <button
              className="CancelBtn Editbuttonfullbtn"
              onClick={() => isopenfunction(false)}
            >
              Cancel
            </button>
            <button
              className="DeleteBtn Editbuttonfullbtn"
              onClick={() => apifunction()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Deletefunctionapimodel;
