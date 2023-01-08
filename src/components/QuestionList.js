import React from 'react';
import QABlock from './QABlock';

function QuestionList({allQuestions}) {
  const questionElements = allQuestions.map((question) => {
    return (
      <QABlock
        answers={question}
      />
    );
  });

  return (
    <div>
      sfgd
    </div>
  );
}

export default QuestionList;