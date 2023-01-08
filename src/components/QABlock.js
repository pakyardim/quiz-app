import React, { useState } from "react";

const QABlock = ({ allQuestions }) => {
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
  ]);

  const [hoveredOptions, setHoveredOptions] = useState([
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
  ]);

  const handleClick = (e) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option, index) => {
        if (option.id == e.target.name) {
          return { ...option, value: e.target.value };
        }
        return option;
      })
    );
  };

  const handleOnMouseEnter = (e) => {
    setHoveredOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.id == e.target.name) {
          return { ...option, value: e.target.value };
        }
        return option;
      })
    );
  };

  const handleOnMouseLeave = (e) => {
    setHoveredOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.id == e.target.name) {
          return { ...option, value: null };
        }
        return option;
      })
    );
  };

  const decodeHTMLEntities = (str) => {
    const decoded = str
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&eacute;/g, "é")
      .replace(/&rsquo;/g, "'")
      .replace(/&Delta;/g, "Δ")
      .replace(/&gt;/g, ">");

    return decoded;
  };

  const qaElements = allQuestions.map((qaElement, index) => {
    const answersArray = qaElement.answers;
    const answerBlocks = answersArray.map((answerBlock) => {
      const buttonStyles = {
        backgroundColor:
          selectedOptions[index].value === answerBlock.answer
            ? "blue"
            : hoveredOptions[index].value === answerBlock.answer
            ? "#DDD"
            : "#96ceb4",
        color: "white",
        textAlign: "center",
        padding: "5px",
        borderRadius: "0.5rem",
        borderColor: "#96ceb4",
        width: "8rem",
        minHeight: "3rem",
        marginTop: "20px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

      const decodedA = decodeHTMLEntities(answerBlock.answer);
      
      return (
        <div className="choice">
          <button
            style={buttonStyles}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            onClick={handleClick}
            className="choiceBtn"
            name={index}
            value={answerBlock.answer}
          >
            {decodedA}
          </button>
        </div>
      );
    });

    const decodedQ = decodeHTMLEntities(qaElement.question);

    return (
      <div className="qaBlock">
        <h3>{decodedQ}</h3>
        <div className="choices">{answerBlocks}</div>
      </div>
    );
  });

  return <>{qaElements}</>;
};

export default QABlock;
