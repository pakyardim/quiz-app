import React, { useState } from "react";
import QuizScreen from "./QuizScreen";
import Loading from "./Loading";

const Initial = (props) => {
  const [category, setCategory] = useState({ value: "any" });
  const [loading, setLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);

  const handleChange = (e) => {
    setCategory({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      `https://opentdb.com/api.php?amount=5&${
        category.value === "any" ? "" : `category=${category.value}&`
      }type=multiple`
    )
      .then((res) => res.json())
      .then((question) => setAllQuestions(question.results))
      .then(() => setLoading(false))
      .then(() => setIsFetched(true))
  };

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
    <div>
      {loading ? <Loading/> : !isFetched ? (
        <div className="startDiv">
          <h1 className="title">Necmo Trivia</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Pick a category and start!
              <select
                value={category.value}
                onChange={handleChange}
                className="selectCategory"
              >
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                <option value="11">Film</option>
                <option value="12">Music</option>
                <option value="13">Musicals & Theatres</option>
                <option value="14">Television</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Computers</option>
                <option value="19">Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
                <option value="30">Gadgets</option>
                <option value="31">Anime & Manga</option>
                <option value="32">Cartoon & Animations</option>
              </select>
            </label>
            <button className="startBtn">Start Necmo Quiz</button>
          </form>
        </div>
      ) : (
        <QuizScreen handleSubmit={handleSubmit} allQuestions={allQF}/>
      )}
    </div>
  );
};

export default Initial;
