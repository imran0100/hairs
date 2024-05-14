import React, { useState } from 'react';
import './HairTest.css';
import data from './Data';
import PersonalProfile from './components/PersonalProfile';
import Nutritional from './components/Nutritional';
import LifeStyle from './components/LifeStyle';
import Stress from './components/Stress';
import HairAndScalp from './components/HairAndScalp';
import UploadImage from './components/UploadImage';
import ThankYou from './components/ThankYou';
import Checkout from './components/Checkout';
export default function HairTest() {
  const [selectedOptions4, setSelectedOptions4] = useState([
    { ques: 'Physical exercise', option: '' },
    { ques: 'Sound sleep', option: '' },
    { ques: 'Healthy eating', option: '' },
    { ques: 'Yoga/Meditation', option: '' },
    { ques: 'Positive thinking', option: '' },
    { ques: 'Social/Medical support', option: '' },
    { ques: 'Feeling Anxious/Depressed', option: '' },
    // Add more questions and options as needed
]);
  const [banner, setBanner] = useState('/assets/img/question/personal-profile-pic.png');
  const [step, setStep] = useState(8);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOptionP, setSelectedOptionP] = useState(null);
  const [male,setMale]=useState(false)
  const [selectedOptions, setSelectedOptions] = useState(Array(data[0].questions.length).fill([]));
  const [selectedOptions1, setSelectedOptions1] = useState(Array(data[1].questions.length).fill([]));
  // const [selectedOptions3, setSelectedOptions3] = useState({1:[],2:[],3:[],4:[],5:[]});
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionIndex1, setCurrentQuestionIndex1] = useState(0);
  const [currentQuestionIndex2, setCurrentQuestionIndex2] = useState(0);

  const [currentSubQuestions, setCurrentSubQuestions] = useState({});
  const [currentSubQuestions1, setCurrentSubQuestions1] = useState({});
  const [currentSubQuestions3, setCurrentSubQuestions3] = useState({});

  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [selectedSubOption1, setSelectedSubOption1] = useState(null);
  const [selectedSubOption2, setSelectedSubOption2] = useState(null);

  // const [selectedSubOption1, setSelectedSubOption1] = useState(null);
  const [showSubQuestions, setShowSubQuestions] = useState(false);
  const [showSubQuestions1, setShowSubQuestions1] = useState(false);
console.log(selectedOptions4,'Stress')
console.log(selectedOptionP,'fiajsoijasoijfoasij');
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  let stepContent;

  switch (step) {
    case 1:
      stepContent = <PersonalProfile 
      data={data[2]}
      setMale={setMale}
      nextStep={nextStep}
      setSelectedOptionP={setSelectedOptionP}
      name={name}
      setName={setName}
      phoneNumber={phoneNumber}
setPhoneNumber={setPhoneNumber}
email={email}
setEmail={setEmail}
      />;
      break;
    case 2:
      stepContent = (
        <Nutritional
          nextStep={nextStep}
          setBanner={setBanner}
          prevStep={prevStep}
          data={data[0]}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentSubQuestions={currentSubQuestions}
          setCurrentSubQuestions={setCurrentSubQuestions}
          selectedSubOption={selectedSubOption}
          setSelectedSubOption={setSelectedSubOption}
          showSubQuestions={showSubQuestions}
          setShowSubQuestions={setShowSubQuestions}
        />
      );
      break;
    case 3:
      stepContent = 
      <LifeStyle
      nextStep={nextStep}
      setBanner={setBanner}
      prevStep={prevStep}
      data={data[1]}
      selectedOptions={selectedOptions1}
      setSelectedOptions={setSelectedOptions1}
      currentQuestionIndex={currentQuestionIndex1}
      setCurrentQuestionIndex={setCurrentQuestionIndex1}
      currentSubQuestions={currentSubQuestions1}
      setCurrentSubQuestions={setCurrentSubQuestions1}
      selectedSubOption={selectedSubOption1}
      setSelectedSubOption={setSelectedSubOption1}
      showSubQuestions={showSubQuestions1}
      setShowSubQuestions={setShowSubQuestions1}
        />
      break;
    case 4:
      stepContent = <Stress 
      selectedOptions={selectedOptions4}
      setSelectedOptions={setSelectedOptions4}
      nextStep={nextStep}
      prevStep={prevStep}
setBanner={setBanner}      />;
      break;
    case 5:
      stepContent = <HairAndScalp 
      data={male?data[4]:data[5]}
      // data={data[5]}
      selectedSubOption1={selectedSubOption2}
      setSelectedSubOption1={setSelectedSubOption2}
      nextStep={nextStep}
      prevStep={prevStep}
      setBanner={setBanner}
     
      selectedOptions3={selectedOptions3}
      setSelectedOptions3={setSelectedOptions3}
      currentQuestionIndex={currentQuestionIndex1}
      setCurrentQuestionIndex={setCurrentQuestionIndex1}
      />;
      break;
      case 6:
        stepContent = <UploadImage 
        setBanner={setBanner}
        male={male}
        name={name}
        phoneNumber={phoneNumber}
        email={email}
        selectedOptionP={selectedOptionP}
        selectedOptions={selectedOptions}
        selectedOptions1={selectedOptions1}
        selectedOptions4={selectedOptions4}
        selectedOptions3={selectedOptions3}

        />;
        break;
        case 7:
          
         stepContent= <ThankYou/>
          break;
          case 8:
            stepContent=<Checkout/>
            break;
    default:
      stepContent = null;
  }
console.log(selectedOptions,'s',selectedOptions1,'q');
  return (
    <>
      <div className="barr1">
        <div className="container">
          <h4 className="hoem1">Home &gt; Hair Test</h4>
        </div>
      </div>
      <div className='test-link container'>
        <div className='test-link-item'>
          <div className={`tab-1 tab ${step==1&&"selected1"}`}>PERSONAL PROFILE</div>
          <div className={`tab-2 tab ${step==2&&"selected1"}`}>NUTRITIONAL</div>
          <div className={`tab-3 tab ${step==3&&"selected1"}`}>LIFESTYLE</div>
          <div className={`tab-4 tab ${step==4&&"selected1"}`}>STRESS</div>
          <div className={`tab-5 tab ${step==5&&"selected1"}`}>HAIR AND SCALP ASSESSMENT</div>
        </div>
      </div>
      <div className='test-content-container container'>
        <div className='test-content'>
          {stepContent}
        </div>
        <div className='test-image'>
          <img  src={banner} alt="Banner" />
        </div>
      </div>
    </>
  );
}
