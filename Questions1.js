import React, { useState } from "react";

export default function Questions({ question, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  function onSelect(i) {
    setSelectedOption(i);
    setShowPopup(true);

    // Check if the selected option is correct
    if (i === question.correctIndex) {
      setTimeout(() => {
        setShowPopup(false);
        onNext(); // Move to the next question
      }, 1000);
    } else {
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    }
  }

  return (
    <div className="questions">
      {/* Render your question content here */}
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
