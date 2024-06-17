
import React, { useState } from "react";
import Lottie from 'react-lottie';
import animationData from './sadClouds.json';


function SadAnime({isSAD1Visible}) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div style={{
      display: isSAD1Visible ? 'block' : 'none', // Conditionally render based on visibility state
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



export default SadAnime;

