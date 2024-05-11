// import React, { useEffect } from 'react';

// export default function LifeStyle({ data,prevStep, setBanner, nextStep, selectedOptions, setSelectedOptions, currentQuestionIndex, setCurrentQuestionIndex }) {
//   useEffect(() => {
//     setBanner(data.questions[currentQuestionIndex].banner);
//   }, [currentQuestionIndex, setBanner, data]);

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < data.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       nextStep();
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }else(
//       prevStep()
//     )
//   };

//   const handleOptionSelect = (option) => {
//     const newSelectedOptions = [...selectedOptions];
//     if (data.questions[currentQuestionIndex].multi) {
//       const index = newSelectedOptions[currentQuestionIndex].indexOf(option);
//       if (index === -1) {
//         newSelectedOptions[currentQuestionIndex].push(option);
//       } else {
//         newSelectedOptions[currentQuestionIndex].splice(index, 1);
//       }
//     } else {
//       newSelectedOptions[currentQuestionIndex] = [option];
//     }
//     setSelectedOptions(newSelectedOptions);
//   };

//   return (
//     <div>
//       {/* Progress indicator */}
//       <div className="progress-indicator">
//         {data.questions.map((_, index) => (
//           <span
//             key={index}
//             className={index === currentQuestionIndex ? "dot active" : "dot"}
//           />
//         ))}
//       </div>

//       <h3>{data.questions[currentQuestionIndex].ques}</h3>
//       <div className="options-container">
//         {data.questions[currentQuestionIndex].options.map((option, optionIndex) => (
//           <div key={optionIndex} className={`option ${typeof option === 'string' ? 'circle' : ''} ${selectedOptions[currentQuestionIndex].includes(option) ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
//             {typeof option === 'string' ? (
//               <div className="circle">
//                 {option}
//               </div>
//             ) : (
//               <label>
//                 {/* <img src={option.src} alt={option.name} /> */}
//                 {option.src?<img src={option.src} alt={option.name} />:<div className='circle no-image option'>{option.name}</div>}
//                 <p>{option.name}</p>
//               </label>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className='test-btnn'>
//         <button onClick={handlePrevQuestion} >
//           Prev
//         </button>
//         <button onClick={handleNextQuestion} disabled={selectedOptions[currentQuestionIndex].length === 0}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';

export default function LifeStyle({ data, setBanner, showSubQuestions, setShowSubQuestions, selectedSubOption, setSelectedSubOption, currentSubQuestions, setCurrentSubQuestions, prevStep, nextStep, selectedOptions, setSelectedOptions, currentQuestionIndex, setCurrentQuestionIndex }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setBanner(data.questions[currentQuestionIndex].banner);
    // Reset the state when moving to a new question
    setShowSubQuestions(false);
    setCurrentSubQuestions({});
    setSelectedSubOption(null);
    setInputValue(''); // Reset input value when moving to a new question
  }, [currentQuestionIndex, setBanner, data]);

  const handleNextQuestion = () => {
    const isLastQuestion = data.questions.length - 1;
    const isOptionSelected = selectedOptions[currentQuestionIndex].length > 0;

    if (isLastQuestion && !isOptionSelected) {
      console.log('Next disabled: No option selected');
      return;
    }

    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      nextStep();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      prevStep();
    }
  };

  const handleOptionSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    const selectedQuestion = data.questions[currentQuestionIndex].ques;

    if (data.questions[currentQuestionIndex].multi) {
      const index = newSelectedOptions[currentQuestionIndex].findIndex(item => item.option === option);
      if (index === -1) {
        newSelectedOptions[currentQuestionIndex].push({ option, question: selectedQuestion });
      } else {
        newSelectedOptions[currentQuestionIndex].splice(index, 1);
      }
    } else {
      newSelectedOptions[currentQuestionIndex] = [{ option, question: selectedQuestion }];
    }

    if (data.questions[currentQuestionIndex].subQuestions && data.questions[currentQuestionIndex].subQuestions[option]) {
      setShowSubQuestions(true);
      setCurrentSubQuestions(data.questions[currentQuestionIndex].subQuestions[option]);
    } else {
      setShowSubQuestions(false);
      setCurrentSubQuestions({});
      setSelectedSubOption(null); // Reset selected sub-option
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleSubOptionSelect = (option, selectedOption, currentSubQuestion) => {
    console.log("Sub-option selected:", option, selectedOption, currentSubQuestion);

    const parentOptionIndex = selectedOptions[currentQuestionIndex].findIndex(item => item.option === selectedOption);
    const newSelectedOptions = [...selectedOptions];
    setSelectedSubOption(option);
    if (parentOptionIndex !== -1) {
      newSelectedOptions[currentQuestionIndex][parentOptionIndex].subquestion = currentSubQuestion.ques;
      newSelectedOptions[currentQuestionIndex][parentOptionIndex].suboption = option;

      setSelectedOptions(newSelectedOptions);
    }

    // Store the input value when a sub-option is selected
    setInputValue(option === 'input' ? '' : option);
  };




  
  
  const handleInputValueChange = (e) => {
    console.log('Input value changed:', currentSubQuestions);
    
    // Store the input value directly
    const newSelectedOptions = [...selectedOptions];
    console.log((newSelectedOptions[currentQuestionIndex]),'fkjsakj');
    const parentOptionIndex = newSelectedOptions[currentQuestionIndex].findIndex(item => item.ques === currentSubQuestions.ques);
    // Check if the current question has any selected options
    if (newSelectedOptions[currentQuestionIndex]) {
        // Find the index of the subquestion in the selectedOptions array
        newSelectedOptions[currentQuestionIndex][0].subquestion=currentSubQuestions.ques
        newSelectedOptions[currentQuestionIndex][0].suboption = e.target.value;
        setSelectedOptions(newSelectedOptions);
        
            // Update the suboption with the input value
          }
           
  
        setSelectedOptions(newSelectedOptions);
    
  
    setInputValue(e.target.value);
};

  console.log(selectedSubOption,"opsub")
  
  return (
    <div>
      <div className="progress-indicator">
        {data.questions.map((_, index) => (
          <span
            key={index}
            className={index === currentQuestionIndex ? "dot active" : "dot"}
          />
        ))}
      </div>

      <h3>{data.questions[currentQuestionIndex].ques}</h3>
      <div className="options-container">
        {data.questions[currentQuestionIndex].options.map((option, optionIndex) => (
          <div key={optionIndex} className={`option ${typeof option === 'string' ? 'circle' : ''} ${selectedOptions[currentQuestionIndex].find(item => item.option === option) ? 'selected' : ''}`} onClick={() => handleOptionSelect(option)}>
            {typeof option === 'string' ? (
              <div className="circle">
                {option}
              </div>
            ) : (
              <label>
                {option.src ? <img src={option.src} alt={option.name} /> : <div className='circle no-image option'>{option.name}</div>}
                <p>{option.name}</p>
              </label>
            )}
          </div>
        ))}
      </div>

      {showSubQuestions && (
        <div>
          <h3>{currentSubQuestions.ques}</h3>
          <div className="options-container">
            {Array.isArray(currentSubQuestions.options) ? (
              currentSubQuestions.options.map((option, optionIndex) => (
                <div key={optionIndex} className={`option ${typeof option === 'string' ? 'circle' : ''} ${selectedSubOption === option ? 'selected' : ''}`} onClick={() => handleSubOptionSelect(option, selectedOptions[currentQuestionIndex][0].option, currentSubQuestions)}>
                  {typeof option === 'string' ? (
                    <div className="circle">
                      {option}
                    </div>
                  ) : (
                    <label>
                      {option.src ? <img src={option.src} alt={option.name} /> : <div className='circle no-image option'>{option.name}</div>}
                      <p>{option.name}</p>
                    </label>
                  )}
                </div>
              ))
            ) : (
              <input 
                className='specify-input'
                type="text" 
                placeholder="Enter your answer" 
                value={inputValue} 
                onChange={handleInputValueChange} 
              />
            )}
          </div>
        </div>
      )}

      <div className='test-btnn'>
        <button onClick={handlePrevQuestion}>
          Prev
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestionIndex === data.questions.length - 1 && selectedOptions[currentQuestionIndex].length === 0}>
          Next
        </button>
      </div>
    </div>
  );
}
