import React from "react";
import { nanoid } from "nanoid";
import QuestionList from "./QuestionList";

const QuizScreen = (props) => {
  const [rendered, setRendered] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  async function loadQuestions() {
    setQuestions(processData(props.questions));
  }

  React.useEffect(() => {
    if (!showResults) {
      loadQuestions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  React.useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 750);
  });

  const toggleSelect = (questionId, answerId) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((prevQuestion) => {
        if (prevQuestion.id === questionId) {
          return {
            ...prevQuestion,
            answers: prevQuestion.answers.map((answer) => {
              return answer.id === answerId
                ? { ...answer, selected: !answer.selected }
                : { ...answer, selected: false };
            }),
          };
        }
        return prevQuestion;
      });
    });
  }

  const processData = (data) => {
    const formatAnswers = (correctAnswer, incorrectAnswers) => {
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

    return data.map((item) => {
      return {
        id: nanoid(),
        title: item.question,
        answers: formatAnswers(
          item["correct_answer"],
          item["incorrect_answers"]
        ),
      };
    });
  };

  const questionAndAnswers = props.questions.map((q, index) => (
    <div key={nanoid()} className="qaBlock">
      <h3>
        {q.question}
      </h3>

      <div className="choices">
        {q.incorrect_answers.map((answer) => (
          <div key={nanoid()} className="choiceBtn">
            
            <input
              type="radio"
              id={answer}
              className="choiceRadio"
              name={index}
            />
            <label className="choiceLabel" htmlFor={answer}>
              {answer}
            </label>
          </div>
        ))}
      </div>
      <hr />
    </div>
  ));

  return (
    <div className="quizScreen">
      <div className="quizzes">
        <QuestionList
        questions={questions}
        />
        </div>
      {rendered && (
        <button
          className="checkBtn"
        >
          Check Answer
        </button>
      )}
    </div>
  );
};

export default QuizScreen;