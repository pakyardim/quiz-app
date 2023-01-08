import React from "react";
import QABlock from "./QABlock";
import { nanoid } from "nanoid";

const QuizScreen = ({ allQuestions }) => {
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
    const answersArr = formattedAnswers(question.correct_answer, question.incorrect_answers);

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
      <button className="checkBtn">Check Answer</button>
    </div>
  );
};

export default QuizScreen;
