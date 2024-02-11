import React, { useState } from "react";
import data from "../database/data";
import confetti from "canvas-confetti"; // importing the confetti library of npm 

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState(undefined); // Corrected state variable

  function onSelect(i) {
    setSelectedOption(i); // Correctly use setSelectedOption
    shootConfetti(); //call to shoot confetti function
  }
   //shoot confetti func
   function shootConfetti(){
    //third option
    var end = Date.now() + (15 * 100);
    var colors = ['#a864fd','#29cdff','#78ff44','#ff718d','#fdff6a'];

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
  const questions = data[0];

  return (
    <div className="questions">
      <img
        className="question-img"
        src={questions?.imageURL}
        alt="Question"
        style={{
          width: "250px",
          height: "300px",
          borderRadius: "8px",
          display: "block",
          margin: "auto",
        }}
      />
      <div className="answers-grid">
        {questions?.options.map((q, i) => (
          <div
            key={i}
            className={`answer-option ${
              selectedOption === i ? "selected" : ""
            }`}
            onClick={() => onSelect(i)}
          >
            {/* Hidden radio button, if needed for form submission */}
            <input
              type="radio"
              value={q}
              name="options"
              id={`q${i}-option`}
              checked={selectedOption === i}
              onChange={() => {}} // This is a no-op function since the click handler of the div is used instead
              style={{ display: "none" }}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
