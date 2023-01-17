import React from "react";
import Button from "./Button/Button";
import styles from "./QuizControls.module.css";

const QuizControls = ({ startQuiz, onStart, onComplete, score, correctAnswers }) => {
  if (score === null) {
    return (
      <div className={styles["quiz-controls"]}>
        {!startQuiz && <Button className={styles.button} onClick={onStart}>Start Quiz</Button>}
        {startQuiz && <Button className={styles.button} onClick={onComplete}>Show Results</Button>}
      </div>
    );
  } else {
    return (
      <div className={styles["quiz-controls"]}>
        <div>
          Score: {score}%
        </div>
        <div>
          Correct answers: {score / (100 / correctAnswers.length)} / {correctAnswers.length}
        </div>
        <br/>
        <Button className={styles.button} onClick={onStart}>
            Start Quiz Again
        </Button>
      </div>
    );
  }
};

export default QuizControls;
