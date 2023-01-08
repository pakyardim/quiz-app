import React from "react";
import { nanoid } from "nanoid";
import QABlock from './QABlock';
import QuestionList from "./QuestionList";

const QuizScreen = ({allQuestions}) => {

  return (
    <div className="quizScreen">
      <div className="quizzes">
        <QABlock allQuestions={allQuestions}/>
      </div>
      <button className="checkBtn">Check Answer</button>
    </div>
  );
};

export default QuizScreen;
