import React, { useState } from "react";
import Questions from "./Questions1";
import data from "../database/data1"; // Import your question data

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function onNext() {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  }

  function onPrev() {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  const currentQuestion = data[currentQuestionIndex];

  return (
    <div className="container">
      <Questions question={currentQuestion} onNext={onNext} /> {/* Pass current question data and onNext function */}
      <div className="grid">
        <button className="btn prev" onClick={onPrev} disabled={currentQuestionIndex === 0}>
          Prev
        </button>
        <button className="btn next" onClick={onNext} disabled={currentQuestionIndex === data.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
