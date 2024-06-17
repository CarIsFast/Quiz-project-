import React, { useState } from "react";
// import data from "../database/data"; // Ensure this is uncommented if you're using it
import confetti from "canvas-confetti"; // Importing the confetti library
// import { answers } from "../database/data"; // Uncomment if you're using 'answers'
import SadAnime from "./animations/sad";
import Happy from "./animations/happy1";
import Happy2 from "./animations/happy2";

export default function Questions({ question, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSAD1Visible, setIsSAD1Visible] = useState(false);
  const [isHAPPYVisible, setIsHAPPYVisible] = useState(false);
  const [isHAPPY2Visible, setIsHAPPY2Visible] = useState(false);
  function onSelect(i) {
    setSelectedOption(i);
    const selectedOptionText = question.options[i]; // Value of selected option
    const checkWith = question.correctanswer;       // Value of correct answer

    if (checkWith === selectedOptionText) {
      console.log(selectedOptionText);
      console.log(checkWith);
      shootConfetti(); // Call to shoot confetti function
      setIsHAPPYVisible(true);
      setTimeout(() => setIsHAPPYVisible(false), 3000);
      shootConfetti(); //call to shoot confetti function
      setIsHAPPY2Visible(true);
      setTimeout(() => setIsHAPPY2Visible(false), 3000);
      shootConfetti(); //call to shoot confetti function
    } else {
      //alert("Wrong!!!!");
      setIsSAD1Visible(true);
      setTimeout(() => setIsSAD1Visible(false), 3000);
      console.log(selectedOptionText);
      console.log(checkWith);
    }
  }

  // Shoot confetti function
  function shootConfetti() {
    var end = Date.now() + (15 * 100);
    var colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 2 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 3 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 4 },
        colors: colors
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  return (
    <div className="questions">
      <SadAnime isSAD1Visible={isSAD1Visible} />
      <Happy isHAPPYVisible={isHAPPYVisible} />
      <Happy2 isHAPPY2Visible={isHAPPY2Visible} />
      <h3>{question.question}</h3>
      <div className="answers-grid">
        {question.options.map((q, i) => (
          <div
            key={i}
            className={`answer-option ${selectedOption === i ? "selected" : ""}`}
            onClick={() => onSelect(i)}
          >
            <label className="text-primary">{q}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
