import React, {useState} from "react";
import QABlock from "./QABlock";

const QuizScreen = ({ handleSubmit, allQuestions }) => {
  
  const formattedAnswers = (correctAnswer, incorrectAnswers) => {
    return [
      {
        selected: false,
        correct: true,
        answer: correctAnswer,
      },
      ...incorrectAnswers.map((incorrectAnswer) => ({
        selected: false,
        correct: false,
        answer: incorrectAnswer,
      })),
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
  };

  const allQF = allQuestions.map((question) => {
    const answersArr = formattedAnswers(
      question.correct_answer,
      question.incorrect_answers
    );

    return {
      ...question,
      answers: answersArr,
    };
  });


  return (
    <div className="quizScreen">
      <div className="quizzes">
        <QABlock allQuestions={allQF} />
      </div>
      <div className="buttons">
        <button className="checkBtn">Check Answer</button>
        <button onClick={handleSubmit} className="refBtn">⟳</button>
      </div>
    </div>
  );
};

export default QuizScreen;
