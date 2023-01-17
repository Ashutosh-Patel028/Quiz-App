import React, { useState } from "react";
import Quiz from "./components/Quiz";
import QuizControls from "./components/QuizControls";
import Banner from "./components/Banner/Banner";
import questions from "./Data/questions";
import answers from "./Data/answers";
import "./App.module.css";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (questionId, optionId) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));
  };

  const handleComplete = () => {
    setStartQuiz(false);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(selectedAnswers).forEach(([questionId, optionId]) => {
      if (answers[questionId] === optionId) {
        correct++;
      }
    });

    return {
      correct,
      total: questions.length,
    };
  };

  return (
    <>
      <Banner />
      {startQuiz && (
        <Quiz
          questions={questions}
          onAnswer={handleAnswer}
          onComplete={handleComplete}
        />
      )}
      <div className="controls-container">
        <QuizControls
          startQuiz={startQuiz}
          score={calculateScore()}
          onStart={() => {
            setStartQuiz(true);
            setSelectedAnswers({});
          }}
          onComplete={handleComplete}
        />
      </div>
    </>
  );
};

export default App;

