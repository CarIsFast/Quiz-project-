import React, { useState } from "react";
import Lottie from 'react-lottie';
import happy2anime from './happy2.json'

function Happy2({isHAPPY2Visible}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: happy2anime,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
      return (
        <div style={{
          display: isHAPPY2Visible ? 'block' : 'none', // Conditionally render based on visibility state
          position: 'fixed',
          left: 0,
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

export default Happy2;