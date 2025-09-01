import React from "react";
import Lottie from "lottie-web/build/player/lottie_light.min.js";
import successanimation from '../../../Data/Success Animation.json';
import '../SuccessAnimation/SuccessAnimation.css'

function SuccessAnimation({name}){
    
    return(
        <>
        <div className="SuccessanimationDIv">
            <Lottie
            animationData={successanimation}
            loop={true}
            autoPlay={true}
            style={{width:400,height:400}}
            />
            <h2 className="successfullLoginHeading">Successfully {name}</h2>
            <h3 className="trackyourexpanseheading">Track your money</h3>
        </div>
        
        </>
    )
}

export default SuccessAnimation;