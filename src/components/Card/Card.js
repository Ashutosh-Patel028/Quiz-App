import React, { useState } from "react";
import "./Card.module.css";

const Card = ({ question, options, answer, correctAnswerMarkUpdate, attempt }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = optionId => {
    setSelectedOption(optionId);
    attempt();
    correctAnswerMarkUpdate(optionId === answer)
  };

  return (
    <div className="card">
      <h4>{question}</h4>
      <div className="card-options">
        {Object.entries(options).map(([key, value]) => (
          <button
            key={key}
            className={`card-option ${value === selectedOption ? "selected" : ""}`}
            onClick={() => handleOptionClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
