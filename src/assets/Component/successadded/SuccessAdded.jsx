import Lottie from "lottie-react";
import React from "react";
import SuccessAnimtaionadded from '../../../Data/addedsuccess.json'
import './SuccessAdded.css'

function Addedsuccess(){
    return(
        <>
        <div className="successaddedfulldiv">
          <Lottie
        animationData={SuccessAnimtaionadded}
        loop={true}
        autoPlay={true}
        style={{width:300,height:300,position:"relative",top:"55px"}}
        />
        <h2 className="successaddeddatabaseheading">Successfully Added</h2>  
        </div>
        
        </>
    )
}
export default Addedsuccess;