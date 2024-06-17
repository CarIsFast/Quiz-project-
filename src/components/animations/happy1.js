import React, { useState } from "react";
import Lottie from 'react-lottie';
import happyanime from './happy1.json'

function Happy({isHAPPYVisible}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: happyanime,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
      return (
        <div style={{
          display: isHAPPYVisible ? 'block' : 'none', // Conditionally render based on visibility state
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          padding: '20px'
        }}>
          <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
      );
}

export default Happy;