import React, {  useState } from "react";
import Questions from "./Questions";
import data from "../database/data";

export default function Quiz() {
  //const [check, setChecked] = useState(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function onNext() {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  }
  function onPrev() {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }
  const currentQuestion = data[currentQuestionIndex];
  return (
    // <div className="container">
    //   {/* <h1 className="title text-light">Quiz Application</h1> */}

    //   {/* display questions */}
    //   <Questions />

    //   <div className="grid">
    //     <button className="btn prev" onClick={onPrev}>
    //       Prev
    //     </button>
    //     <button className="btn next" onClick={onNext}>
    //       Next
    //     </button>
    //   </div>
    // </div>
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