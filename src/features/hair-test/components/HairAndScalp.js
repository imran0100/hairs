
// import React, { useEffect, useState } from 'react';

// export default function HairAndScalp({ data, selectedOptions3, setSelectedOptions3, currentQuestionIndex, setCurrentQuestionIndex, setBanner, nextStep, prevStep }) {
//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     setBanner(data.steps[currentStep].banner);
//   }, [currentStep, setBanner, data]);

//   const handleNextStep = () => {
//     if (currentStep < data.steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       nextStep();
//     }
//   };

//   const handlePrevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     } else {
//       prevStep();
//     }
//   };


//   const handleOptionSelect = (option, question) => {
//     const updatedSelectedOptions = [...selectedOptions3];
  
//     // If options for the current step are not initialized, initialize them
//     if (!updatedSelectedOptions[currentStep]) {
//       updatedSelectedOptions[currentStep] = [];
//     }
  
//     // Find the index of the question in the current step's selected options
//     const questionIndex = updatedSelectedOptions[currentStep].findIndex(
//       (item) => item.question === question
//     );
  
//     // If the question is not found in the current step's selected options, add it
//     if (questionIndex === -1) {
//       updatedSelectedOptions[currentStep].push({ option, question });
//     } else {
//       // If the question is found, update the option
//       updatedSelectedOptions[currentStep][questionIndex].option = option;
//     }
  
//     setSelectedOptions3(updatedSelectedOptions);
//   };

  
  
  
// console.log(selectedOptions3);
//   return (
//     <div className='hair-scalp'>
//       <div className="progress-indicator">
//         {data.steps.map((_, index) => (
//           <span
//             key={index}
//             className={index === currentStep ? "dot active" : "dot"}
//           />
//         ))}
//       </div>
//       {data.steps[currentStep].questions.map((question, index) => (
//   <div key={index}>
//     <h3>{question.ques}</h3>
//     <div className="options-container">
//       {question.options.map((option, optionIndex) => {
//         const isSelected = selectedOptions3[currentStep]?.some(
//           (selectedOption) =>
//             selectedOption.question === question.ques &&
//             selectedOption.option ===
//               (typeof option === 'string' ? option : option)
//         );

//         return (
//           <div
//             key={optionIndex}
//             className={`option ${typeof option === 'string' ? 'circle' : ''} ${
//               isSelected ? 'selected' : ''
//             }`}
//             onClick={() => handleOptionSelect(option, question.ques)}
//           >
//             {typeof option === 'string' ? (
//               <div className="circle">{option}</div>
//             ) : (
//               <label >
//                 {option.src ? (
//                   <img alt='image' src={option.src} alt={option.name} />
//                 ) : (
//                   <div className="circle no-image option">{option.name}</div>
//                 )}
//                 <p>{option.name}</p>
//               </label>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   </div>
// ))}

//       <div className='test-btnn'>
//         <button onClick={handlePrevStep}>Prev</button>
//         <button onClick={handleNextStep}>Next</button>
//       </div>
//     </div>
//   );
// }


//////////////workable///////////////////code//////////

// import React, { useEffect, useState } from 'react';

// export default function HairAndScalp({ data, selectedOptions3, setSelectedOptions3, currentQuestionIndex, setCurrentQuestionIndex, setBanner, nextStep, prevStep }) {
//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     setBanner(data.steps[currentStep].banner);
//   }, [currentStep, setBanner, data]);

//   const handleNextStep = () => {
//     if (currentStep < data.steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       nextStep();
//     }
//   };

//   const handlePrevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     } else {
//       prevStep();
//     }
//   };

//   const handleOptionSelect = (option, question) => {
//     const updatedSelectedOptions = [...selectedOptions3];
  
//     // If options for the current step are not initialized, initialize them
//     if (!updatedSelectedOptions[currentStep]) {
//       updatedSelectedOptions[currentStep] = [];
//     }
  
//     // Find the index of the question in the current step's selected options
//     const questionIndex = updatedSelectedOptions[currentStep].findIndex(
//       (item) => item.question === question
//     );
  
//     // If the question is not found in the current step's selected options, add it
//     if (questionIndex === -1) {
//       updatedSelectedOptions[currentStep].push({ option, question });
//     } else {
//       // If the question is found, update the option
//       updatedSelectedOptions[currentStep][questionIndex].option = option;
//     }
  
//     setSelectedOptions3(updatedSelectedOptions);
//   };

//   return (
//     <div className='hair-scalp'>
//       <div className="progress-indicator">
//         {data.steps.map((_, index) => (
//           <span
//             key={index}
//             className={index === currentStep ? "dot active" : "dot"}
//           />
//         ))}
//       </div>
//       {data.steps[currentStep].questions.map((question, index) => (
//   <div key={index}>
//     <h3>{question.ques}</h3>
//     <div className="options-container">
//       {question.options.map((option, optionIndex) => {
//         const isSelected = selectedOptions3[currentStep]?.some(
//           (selectedOption) =>
//             selectedOption.question === question.ques &&
//             selectedOption.option ===
//               // (typeof option === 'string' ? option : option.name || option)
//               (typeof option === 'string' ? option :  option)

//         );

//         return (
//           <div key={optionIndex} className="option-container">
//             <div
//               className={`option ${
//                 typeof option === 'string' ? 'circle' : ''
//               } ${isSelected ? 'selected' : ''}`}
//               onClick={() => handleOptionSelect(option, question.ques)}
//             >
//               {typeof option === 'string' ? (
//                 <div className="circle">{option}</div>
//               ) : (
//                 <label>
//                   {option.src ? (
//                     <img alt='image' src={option.src} alt={option.name} />
//                   ) : (
//                     <div className="circle no-image option">{option.name}</div>
//                   )}
//                   <p>{option.name}</p>
//                 </label>
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//     {/* Render sub-questions */}
//     {question.options.map((option, optionIndex) => {
//       const isSelected = selectedOptions3[currentStep]?.some(
//         (selectedOption) =>
//           selectedOption.question === question.ques &&
//           selectedOption.option ===
//             (typeof option === 'string' ? option : option.name && option)
//       );

//       const subQuestions = question.subQuestions
//         ? question.subQuestions.find(
//             (subQuestion) =>
//               subQuestion[option.name || option]
//           )
//         : null;

//       return (
//         isSelected &&
//         subQuestions && (
//           <div key={optionIndex} className="sub-questions">
//             {Object.entries(subQuestions).map(([key, subQuestionGroup], subIndex) => (
//               <div key={subIndex} className="sub-question">
//                 <h4>{key}</h4>
//                 {subQuestionGroup.map((subQuestion, subQIndex) => (
//                   <div key={subQIndex} className="sub-option">
//                     <p>{subQuestion.ques}</p>
//                     {/* Render sub-options */}
//                     {subQuestion.options === 'input' ? (
//                       <input
//                         type="text"
//                         placeholder="Enter your answer"
//                         // value={inputValue} // Assuming you manage inputValue state
//                         // onChange={(e) => handleSubOptionSelect(e.target.value, option, subQuestion)}
//                       />
//                     ) : (
//                       subQuestion.options.map((subOption, subOptionIndex) => (
//                         <div key={subOptionIndex} className="sub-option-container">
//                           <div
//                             className={`option ${isSelected ? 'selected' : ''}`}
//                             onClick={() => handleOptionSelect(subOption, subQuestion.ques)}
//                           >
//                             {typeof subOption === 'string' ? (
//                               <div className="circle">{subOption}</div>
//                             ) : (
//                               <label>
//                                 {subOption.src ? (
//                                   <img alt='image' src={subOption.src} alt={subOption.name} />
//                                 ) : (
//                                   <div className="circle no-image option">{subOption.name}</div>
//                                 )}
//                                 <p>{subOption.name}</p>
//                               </label>
//                             )}
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )
//       );
//     })}
//   </div>
// ))}

//       <div className='test-btnn'>
//         <button onClick={handlePrevStep}>Prev</button>
//         <button onClick={handleNextStep}>Next</button>
//       </div>
//     </div>
//   );
// }

////////////////////////////this is perfect need to add multi and save data////////
import React, { useEffect, useState } from 'react';

export default function HairAndScalp({ data, selectedOptions3, setSelectedOptions3, currentQuestionIndex, setCurrentQuestionIndex, setBanner, nextStep, prevStep }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSubOptions, setSelectedSubOptions] = useState({});
const[mainQuestion,setMainQuestion]=useState('')
  useEffect(() => {
    setBanner(data.steps[currentStep].banner);
  }, [currentStep, setBanner, data]);

  const handleNextStep = () => {
    if (currentStep < data.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      nextStep();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      prevStep();
    }
  };

  const handleOptionSelect = (option, question) => {
    setMainQuestion(question)
    const updatedSelectedOptions = [...selectedOptions3];
  
    // If options for the current step are not initialized, initialize them
    if (!updatedSelectedOptions[currentStep]) {
      updatedSelectedOptions[currentStep] = [];
    }
  
    // Find the index of the question in the current step's selected options
    const questionIndex = updatedSelectedOptions[currentStep].findIndex(
      (item) => item.question === question
    );
  
    // If the question is not found in the current step's selected options, add it
    if (questionIndex === -1) {
      updatedSelectedOptions[currentStep].push({ option, question });
    } else {
      // If the question is found, update the option
      updatedSelectedOptions[currentStep][questionIndex].option = option;
    }
  console.log(question,"quesmain");
    setSelectedOptions3(updatedSelectedOptions);
  };

  // const handleSubOptionSelect = (option, question,mainquestion) => {
  //   setSelectedSubOptions({
  //     ...selectedSubOptions,
  //     [currentStep]: {
  //       ...selectedSubOptions[currentStep],
  //       [question]: option
  //     }
  //   });
  //   const updatedSelectedOptions = [...selectedOptions3];
  //   const questionIndex = updatedSelectedOptions[currentStep].findIndex(
  //     (item) => item.question === mainquestion
  //   );
  //   if (questionIndex === 1) {
      
  //     // If the question is found, update the option
  //     updatedSelectedOptions[currentStep][questionIndex].suboption = option;
  //   }
  
  //   setSelectedOptions3(updatedSelectedOptions);
  // };

  const handleSubOptionSelect = (option, subQuestion) => {
    setSelectedSubOptions({
      ...selectedSubOptions,
      [currentStep]: {
        ...selectedSubOptions[currentStep],
        [subQuestion]: option
      }
    });
    const updatedSelectedOptions = [...selectedOptions3];
    const questionIndex = updatedSelectedOptions[currentStep].findIndex(
      (item) => item.question === mainQuestion
    );
    if (questionIndex !== -1) {
     
      let subdata=[{subQuestion,option}]
      if(updatedSelectedOptions[currentStep][questionIndex].subquestions){
        updatedSelectedOptions[currentStep][questionIndex].subquestions.push({subQuestion,option})
      }else{
      updatedSelectedOptions[currentStep][questionIndex].subquestions=subdata
      }
      // updatedSelectedOptions[currentStep][questionIndex].suboption = option;

    }
  console.log(mainQuestion,'index');
    setSelectedOptions3(updatedSelectedOptions);
  };

console.log(selectedOptions3,"fskj",selectedSubOptions);
  return (
    <div className='hair-scalp'>
      <div className="progress-indicator">
        {data.steps.map((_, index) => (
          <span
            key={index}
            className={index === currentStep ? "dot active" : "dot"}
          />
        ))}
      </div>
      {data.steps[currentStep].questions.map((question, index) => (
        <div key={index}>
          {question.h4&&<h2 className='h4'>{question.h4}</h2>}
          <h3>{question.ques}</h3>
          <div className="options-container">
            {question.options.map((option, optionIndex) => {
              const isSelected = selectedOptions3[currentStep]?.some(
                (selectedOption) =>
                  selectedOption.question === question.ques &&
                  selectedOption.option ===
                    (typeof option === 'string' ? option : option)
              );

              return (
                <div key={optionIndex} className="option-container">
                  <div
                    className={`option ${
                      typeof option === 'string' ? 'circle' : ''
                    } ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(option, question.ques)}
                  >
                    {typeof option === 'string' ? (
                      <div className="circle">{option}</div>
                    ) : (
                      <label>
                        {option.src ? (
                          <img alt='image' src={option.src} alt={option.name} />
                        ) : (
                          <div className="circle no-image option">{option.name}</div>
                        )}
                        <p>{option.name}</p>
                      </label>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Render sub-questions */}
          {question.options.map((option, optionIndex) => {
            const isSelected = selectedOptions3[currentStep]?.some(
              (selectedOption) =>
                selectedOption.question === question.ques &&
                selectedOption.option ===
                  (typeof option === 'string' ? option : option.name && option)
            );

            const subQuestions = question.subQuestions
              ? question.subQuestions.find(
                  (subQuestion) =>
                    subQuestion[option.name || option]
              )
              : null;

            return (
              isSelected &&
              subQuestions && (
                <div key={optionIndex} className="sub-questions">
                  {Object.entries(subQuestions).map(([key, subQuestionGroup], subIndex) => (
                    <div key={subIndex} className="sub-question">
                     
                     {subQuestionGroup.map((subQuestion, subQIndex) => (
  <div key={subQIndex}>
    <h3>{subQuestion.ques}</h3>
    <div className="options-container">
      {/* Render sub-options */}
      {subQuestion.options === 'input' ? (
        <input
          type="text"
          className='specify-input'
          placeholder="Enter your answer"
          value={selectedSubOptions[currentStep]?.[subQuestion.ques] || ''}
          onChange={(e) => handleSubOptionSelect(e.target.value, subQuestion.ques,question)}
        />
      ) : (
        subQuestion.options.map((subOption, subOptionIndex) => (
          <div
            key={subOptionIndex}
            className={`option ${typeof subOption === 'string' ? 'circle' : ''} ${selectedSubOptions[currentStep]?.[subQuestion.ques] === subOption ? 'selected' : ''}`}
            onClick={() => handleSubOptionSelect(subOption, subQuestion.ques)}
          >
            {typeof subOption === 'string' ? (
              <div className="circle">{subOption}</div>
            ) : (
              <label>
                {subOption.src ? (
                  <img alt='image' src={subOption.src} alt={subOption.name} />
                ) : (
                  <div className="circle no-image option">{subOption.name}</div>
                )}
                <p>{subOption.name}</p>
              </label>
            )}
          </div>
        ))
      )}
    </div>
  </div>
))}


                    </div>
                  ))}
                </div>
              )
            );
          })}
        </div>
      ))}
      <div className='test-btnn'>
        <button onClick={handlePrevStep}>Prev</button>
        <button onClick={handleNextStep}>Next</button>
      </div>
    </div>
  );
}

