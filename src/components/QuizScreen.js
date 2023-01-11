import React, {useState} from "react";
import QABlock from "./QABlock";

const QuizScreen = ({ handleSubmit, allQuestions }) => {
  const [checkAnswerTrigger, setCheckAnswerTrigger] = useState(false);
  


  const handleClick = () => {
    setCheckAnswerTrigger(true);
  }

  return (
    <div className="quizScreen">
      <div className="quizzes">
        <QABlock checkAnswerTrigger={checkAnswerTrigger} allQuestions={allQuestions} />
      </div>
      <div className="buttons">
        <button onClick={handleClick} className="checkBtn">Check Answer</button>
        <button onClick={handleSubmit} className="refBtn">⟳</button>
      </div>
    </div>
  );
};

export default QuizScreen;
