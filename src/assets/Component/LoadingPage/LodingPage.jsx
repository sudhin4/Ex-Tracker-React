import Lottie from 'lottie-react';
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