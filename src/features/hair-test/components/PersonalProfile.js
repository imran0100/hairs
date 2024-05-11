// import React from "react";

// export default function PersonalProfile({ data, nextStep }) {
//   const handleNextQuestion = () => {
//     nextStep();
//   };
//   return (
//     <div className="profile-container">
//       <div className="progress-indicator">
//         <span className="dot" />
//       </div>
//       <h3>What is your name</h3>
//       <input />
//       <h3>Your Phone Number</h3>
//       <input />
//       <h3>Your E-mail Address</h3>
//       <input />
//       {data.questions.map((item) => {
//         return (
//           <div>
//             <h3>{item.ques}</h3>
//             <div className="options-container op-con">
//               {item.options.map((op) => {
//                 return (
//                   <div className="option circle">
//                     {op.src ? (
//                       <img alt='hair' src={op.src} />
//                     ) : (
//                       <div className="circle">{op}</div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//       <div className="test-btnn">
//         <button disabled={true}>Prev</button>
//         <button onClick={handleNextQuestion}>Next</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function PersonalProfile({ data,setMale,setSelectedOptionP, nextStep,name,setName,phoneNumber,setPhoneNumber,email,setEmail }) {
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState(data.questions);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const allInputsFilled = name && phoneNumber && email && questions.every(question => question.selectedOption !== undefined);
    setAllQuestionsAnswered(allInputsFilled);
  }, [name, phoneNumber, email, questions]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const newNumber = event.target.value;
    setPhoneNumber(newNumber);

    // Phone number validation for India
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(newNumber)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleOptionSelect = (index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].selectedOption = optionIndex;
    
    // Check if the selected option has the specific source for male
    const selectedOption = updatedQuestions[index].options[optionIndex];
    if (selectedOption.src === '/assets/img/question/male.svg') {
      setMale(true);
    }
    
    setQuestions(updatedQuestions);
    setSelectedOptionP(updatedQuestions)
  };
  

  const handleNextQuestion = () => {
    if (allQuestionsAnswered && !phoneError && !emailError) {
      nextStep();
    }
  };

  return (
    <div className="profile-container">
      <div className="progress-indicator">
        <span className="dot" />
      </div>
      <h3>What is your name</h3>
      <input value={name} onChange={handleNameChange} />
      <h3>Your Phone Number</h3>
      <div className="err-con">
      <input value={phoneNumber} onChange={handlePhoneNumberChange} />
      {phoneError && <span className="error1">{phoneError}</span>}
      </div>
      <h3>Your E-mail Address</h3>
      <div className="err-con">
      <input value={email} onChange={handleEmailChange} />
      {emailError && <span className="error1">{emailError}</span>}
      </div>
      {questions.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.ques}</h3>
            <div className="options-container op-con">
              {item.options.map((op, opIndex) => {
                return (
                  <div
                    key={opIndex}
                    className={`option circle ${item.selectedOption === opIndex ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(index, opIndex)}
                  >
                    {op.src ? (
                      <img alt='hair' src={op.src} />
                    ) : (
                      <div className="circle">{op}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="test-btnn">
        <button disabled={true}>Prev</button>
        <button disabled={!allQuestionsAnswered || phoneError || emailError} onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
}
