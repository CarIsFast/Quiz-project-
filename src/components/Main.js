import React from "react";
import { Link } from "react-router-dom";
import "./styles/Main.css";
// Import the data
import quizTopics from "../database/quizTopicData.js"; // Adjust the path based on your file structure

export default function Main() {
  return (
    <div className="main-container">
      <h1 className="page-title">Select Quiz</h1>
      <div className="quiz-container">
        {quizTopics.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <Link to={quiz.path}>
              <img src={quiz.imgSrc} alt={quiz.alt} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
