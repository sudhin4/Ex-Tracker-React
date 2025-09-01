import React from "react";
import Lottie from "lottie-react";
import Erroranimationgif from '../../../Data/FailError.json';

function Erroranimation(){
    return(
        <>
        <div className="Erroranimation">
            <Lottie
            animationData={Erroranimationgif}
            loop={true}
            autoPlay={true}
            style={{width:300,height:300,position:"relative",left:"55px",top:"55px"}}
            />
        </div>
        
        </>
    )
}
export default Erroranimation;