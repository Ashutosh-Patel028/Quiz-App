import React from 'react';
import Card from './Card/Card';

const Quiz = ({ questions, children }) => {
  return (
    <div className="quiz">
      {questions.map(question => (
        <div key={question.id} className="quiz-question">
          {children(question)}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
