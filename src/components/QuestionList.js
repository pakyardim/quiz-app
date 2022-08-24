import React from 'react';
import Question from './Question';

function QuestionList(props) {
  const questionElements = props.questions.map((question) => {
    return (
      <Question
        key={question.id}
        answers={question}
      />
    );
  });

  return (
    <div>
      {questionElements}
    </div>
  );
}

export default QuestionList;