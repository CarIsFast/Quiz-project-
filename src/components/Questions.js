import React, { useState } from "react";
import data from "../database/data";

export default function Questions() {
  const [selectedOption, setSelectedOption] = useState(undefined); // Corrected state variable

  function onSelect(i) {
    setSelectedOption(i); // Correctly use setSelectedOption
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
