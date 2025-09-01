import Lottie from "lottie-web/build/player/lottie_light.min.js";
import React from 'react';

import Loadinganimationgif from './LoadingAnimation.json'

function Loadinganimation(){
    return(
        <>
        <Lottie 
        animationData={Loadinganimationgif}
        loop={true}
        autoplay={true}
        style={{height:400,width:400,position:'relative',right:'30px',top:"25px"}}
        />
        </>
    )
}

export default Loadinganimation;