import React from "react";
import { nanoid } from "nanoid";

const QABlock = ({ allQuestions }) => {
  const formattedAnswers = (correctAnswer, incorrectAnswers) => {
    return [
      {
        id: nanoid(),
        selected: false,
        correct: true,
        answer: correctAnswer,
      },
      ...incorrectAnswers.map((incorrectAnswer) => ({
        id: nanoid(),
        selected: false,
        correct: false,
        answer: incorrectAnswer,
      })),
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
  };

  const qaElements = allQuestions.map((qaElement) => {
    // format answers
    const answersArray = formattedAnswers(
      qaElement.correct_answer,
      qaElement.incorrect_answers
    );

    const answerBlocks = answersArray.map((answerBlock) => {
      return (
        <>
          <input type="radio" className="choiceRadio" />
          <label className="choiceLabel" htmlFor={answerBlock.answer}>
            {answerBlock.answer}
          </label>
        </>
      );
    });

    return (
      <div className="qaBlock">
        <h3>{qaElement.question}</h3>
        <div className="choices">{answerBlocks}</div>
      </div>
    );
  });

  return <div>{qaElements}</div>;
};

export default QABlock;
