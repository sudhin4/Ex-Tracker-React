import { TiTick } from "react-icons/ti";
import './whole.css';


function SuccessfullyLoginPage(){
    return(
        <>
        <div className="successfullyLoginPagediv">
            <TiTick className="successTickIcon"/>
            <h2 className="successfullYLoginHeading">Successfully Signup</h2>
        </div>
        </>
    )
}

export default SuccessfullyLoginPage;