import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
background-color: ${props => props.backgroundColor};
color: white;
text-align: center;
padding: 5px;
border-radius: 0.5rem;
border-color: #96ceb4;
width: 8rem;
min-height: 3rem;
margin-top: 20px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

&:hover {
  background-color: #DDD;
}

`

const QABlock = ({ checkAnswerTrigger, allQuestions }) => {
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
  ]);

  const handleClick = (e) => {
    if(!checkAnswerTrigger){
      setSelectedOptions((prevOptions) =>
        prevOptions.map((option) => {
          if (!checkAnswerTrigger) {
            if (option.id == e.target.name) {
              return { ...option, value: e.target.value };
            }
            return option;
          }
        })
      );
      
    }
    return;
  };

  const decodeHTMLEntities = (str) => {
    const decoded = str
      .replace(/&quot;/g, '"')
      .replace(/&ldquo;/g, "“")
      .replace(/&rdquo;/g, "”")
      .replace(/&#039;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&eacute;/g, "é")
      .replace(/&rsquo;/g, "’")
      .replace(/&lsquo;/g, "‘")
      .replace(/&Delta;/g, "Δ")
      .replace(/&ndash;/g, "-")
      .replace(/&mdash;/g, "—")
      .replace(/&gt;/g, ">");
    return decoded;
  };

  const getButtonStyles = (answerBlock, selectedOption) => {
    const { correct, answer } = answerBlock;
    let backgroundColor;

    if (checkAnswerTrigger) {
      backgroundColor = correct
        ? "green"
        : selectedOption !== answer
        ? "#96ceb4"
        : "red";
    }else{
      backgroundColor = selectedOption === answer ? "blue" : "#96ceb4"
    }
    return backgroundColor; 
  };

  const qaElements = allQuestions.map((qaElement, index) => {
    const { question, answers } = qaElement;
    const decodedQ = decodeHTMLEntities(question);
    const selectedOption = selectedOptions[index].value;
    const answerBlocks = answers.map((answerBlock) => {
      const backgroundColor = getButtonStyles(
        answerBlock,
        selectedOption,
      );

      const decodedA = decodeHTMLEntities(answerBlock.answer);

      return (
        <div className="choice">
          <Button
            backgroundColor={backgroundColor}
            onClick={handleClick}
            className="choiceBtn"
            name={index}
            value={answerBlock.answer}
          >
            {decodedA}
          </Button>
        </div>
      );
    });

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
