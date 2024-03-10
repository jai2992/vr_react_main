import React from 'react'
import styled from 'styled-components'
import NavMenu from './Nav'
import { useState } from 'react';

function Quize() {
  const questionsData=[
    {
      "id": 1,
      "question": "What is 2 + 2?",
      "options": [
        { "id": 1, "text": "2" },
        { "id": 2, "text": "3" },
        { "id": 3, "text": "4", "isCorrect": true },
        { "id": 4, "text": "5" }
      ]
    },
    {
      "id": 2,
      "question": "What is the capital of France?",
      "options": [
        { "id": 1, "text": "London" },
        { "id": 2, "text": "Paris", "isCorrect": true },
        { "id": 3, "text": "Berlin" },
        { "id": 4, "text": "Madrid" }
      ]
    }
  ];  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleAnswerSelect = (optionId) => {
    const questionId = questionsData[currentStep].id;
    setAnswers([...answers, { questionId, optionId }]);
    handleNextStep();
  };

  return (
    
    <Container>
      <NavMenu/>
      <h1>quize</h1>
      <div className='quize-question'>
      {currentStep < questionsData.length ? (
        <>
          <h2 className='question-txt'>{questionsData[currentStep].question}</h2>
          <ul>
            {questionsData[currentStep].options.map((option) => (
              <li key={option.id}>
                <button className='answers-txt' onClick={() => handleAnswerSelect(option.id)}>
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
          {currentStep > 0 && (
            <button onClick={handlePreviousStep}>Previous</button>
          )}
        </>
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      )}
    </div>
    </Container>
  )
}

export default Quize

const Container =styled.main`
height:100vh;
width:100vw;
overflow:hidden;
// min-height : calc(100vh - 70px);
// padding:0 calc(3.5vw + 5px);
position:relative;


&:before{
  background: radial-gradient(circle, #FFFFFF, #E0F8F0);
    background-size: cover;
    background-position: end; 
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
  content : "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
.quize-question{
  display:flex;
  flex-direction:column;
  align-items:center;
}
.question-txt{
  color:#203F29;
}
.answers-txt{
  color:#203f39;
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  margin: 4px;
  cursor: pointer;
}
`