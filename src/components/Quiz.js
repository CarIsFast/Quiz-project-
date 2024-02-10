import React, { useEffect, useState } from "react";
import Questions from "./Questions";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  function onNext() {
    console.log("Next");
  }
  function onPrev() {
    console.log("Prev");
  }
  return (
    <div className="container">
      {/* <h1 className="title text-light">Quiz Application</h1> */}

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
