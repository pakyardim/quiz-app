import React from "react";
import { nanoid } from "nanoid";

const Question = (props) => {
  const answerElements = props.answers.map((answer) => {
    return (
      <div key={nanoid()} className="choiceBtn">
        <input
          type="radio"
          key={answer.id}
          className="choiceRadio"
          //{...(!props.showResults && { onClick: () => props.toggleSelect(props.id, answer.id) })}
        />
        <label className="choiceLabel" htmlFor={answer}>
          {answer}
        </label>
        {answer.answer}
      </div>
    );
  });

  return (
    <div className="qaBlock">
      <h3>{props.title}</h3>
      <div className="choices">{answerElements}</div>
    </div>
  );
};

export default Question;
