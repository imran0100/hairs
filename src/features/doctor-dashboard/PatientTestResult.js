import React,{useState,useEffect} from 'react'
import DoctorNavbar from './DoctorNavbar'
import BASE_URL from '../../Config';
const data1={
    "_id": "663d1c9b7279454a0148bc8e",
    "userId": "6623075c0a1c69af0ce62a94",
    "personal": {
        "name": "Imran",
        "email": "i3imran3@gmail.com",
        "phoneNumber": "7903284969",
        "Select your age group": "25-40",
        "Gender": {
            "src": "/assets/img/question/female.svg"
        }
    },
    "Nutritional": [
        [
            {
                "option": "Fasting",
                "question": "How many meals do you take per day ?",
                "subquestion": "Are you following Intermittent Fasting ?",
                "suboption": "No"
            }
        ],
        [
            {
                "option": "No",
                "question": "Do you eat Fruits & Salads regularly in your diet ?"
            }
        ],
        [
            {
                "option": "No",
                "question": "Do you consume fast food frequently ?"
            }
        ],
        [
            {
                "option": {
                    "name": "Eggetarian",
                    "src": "/assets/img/question/egg.png"
                },
                "question": "What is your eating pattern ?"
            }
        ],
        [
            {
                "option": "Yes",
                "question": "Are you following any diet plan from any dietician?",
                "subquestion": "Please specify",
                "suboption": {
                    "name": "Liquid Diet",
                    "src": "/assets/img/question/specify-pic2.png"
                }
            }
        ],
        [
            {
                "option": "No",
                "question": "Do you make a conscious effort to stay hydrated (at least 7-8 Glasses approximately) throughout the day ?"
            }
        ],
        [
            {
                "option": "No",
                "question": "Do you avoid any foods due to allergy concerns ?"
            }
        ],
        [
            {
                "option": "No",
                "question": "Do you catch colds or infections frequently ?"
            }
        ],
        [
            {
                "option": {
                    "name": "Creatine / Amino acids",
                    "src": "/assets/img/question/amino.png"
                },
                "question": "Do you consume any Supplements like WHEY Protein / Creatinine / Steroids etc. for muscle building ? (*Select all that applies)"
            },
            {
                "option": {
                    "name": "Steroids",
                    "src": "/assets/img/question/steriod.png"
                },
                "question": "Do you consume any Supplements like WHEY Protein / Creatinine / Steroids etc. for muscle building ? (*Select all that applies)"
            }
        ],
        [
            {
                "option": "Yes",
                "question": "Do you have any vitamin deficiencies / nutritional deficiencies that you are aware of ?",
                "subquestion": "Please specify",
                "suboption": "hiiii"
            }
        ]
    ],
    "LifeStyle": [
        [
            {
                "option": "Strenous Exercise",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": "None",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": "Walking & Jogging",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": {
                    "name": "Regular Shampooing & Conditioning",
                    "src": "/assets/img/question/practices-pic1.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Heat Styling / Tight Hairstyle",
                    "src": "/assets/img/question/practices-pic2.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Chemical Treatments / Keratin",
                    "src": "/assets/img/question/practices-pic3.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Trimming / Drying",
                    "src": "/assets/img/question/practices-pic4.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            }
        ],
        [
            {
                "option": {
                    "name": "Peaceful",
                    "src": "/assets/img/question/sleep2.png"
                },
                "question": "How will you describe your sleep ?"
            }
        ],
        [
            {
                "option": "Occasionally",
                "question": "Any habits like consumption of Alcohol / Smoking / Drugs addiction ?"
            }
        ],
        [
            {
                "option": "Occasionally",
                "question": "Do you typically spend time with friends and family on weekends ?"
            }
        ],
        [
            {
                "option": "Sometimes",
                "question": "Are you having constipation ?"
            }
        ],
        [
            {
                "option": "Strenous Exercise",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": "None",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": "Walking & Jogging",
                "question": "Do you follow any routine physical activities ? (*Select all that applies)"
            },
            {
                "option": {
                    "name": "Regular Shampooing & Conditioning",
                    "src": "/assets/img/question/practices-pic1.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Heat Styling / Tight Hairstyle",
                    "src": "/assets/img/question/practices-pic2.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Chemical Treatments / Keratin",
                    "src": "/assets/img/question/practices-pic3.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            },
            {
                "option": {
                    "name": "Trimming / Drying",
                    "src": "/assets/img/question/practices-pic4.png"
                },
                "question": "Which regular hair care practices do you follow ? (*Select all that applies) ?"
            }
        ]
    ],
    "Stress": [
        {
            "ques": "Physical exercise",
            "option": "Not At All"
        },
        {
            "ques": "Sound sleep",
            "option": "Sometimes"
        },
        {
            "ques": "Healthy eating",
            "option": "Not At All"
        },
        {
            "ques": "Yoga/Meditation",
            "option": "Sometimes"
        },
        {
            "ques": "Positive thinking",
            "option": "Sometimes"
        },
        {
            "ques": "Social/Medical support",
            "option": "Sometimes"
        },
        {
            "ques": "Feeling Anxious/Depressed",
            "option": "Sometimes"
        }
    ],
    "HairAndScalp": [
        [
            {
                "option": "Chronic Intermittent",
                "question": "Course of Hair Loss?"
            },
            {
                "option": "Slow progressive hair loss",
                "question": "Describe the rate at which your hair loss has occurred?"
            },
            {
                "option": "Up to 6 months",
                "question": "Since how long have you been experiencing hair loss?"
            },
            {
                "option": "40 to 100 hairs",
                "question": "Describe shedding of your hair?"
            },
            {
                "option": {
                    "name": "Brittle hair",
                    "src": "/assets/img/5-six.png"
                },
                "question": "How is your hair quality? (Select all that apply)"
            }
        ],
        [
            {
                "option": {
                    "name": "Bald Patches",
                    "src": "/assets/img/hair-three.png"
                },
                "question": "Define your current hair status?",
                "subquestions": [
                    {
                        "subQuestion": "Which image best describes your hair loss? (For Hereditary / genetic hair loss options)?",
                        "option": {
                            "name": "3",
                            "src": "/assets/img/baldness-three.png"
                        }
                    }
                ]
            },
            {
                "option": {
                    "name": "Typhoid",
                    "src": "/assets/img/7-one.png"
                },
                "question": "Have you experienced any health conditions or significant illnesses in the past? (Select all that apply)"
            },
            {
                "option": "Not Sure",
                "question": "Do you have PCOD (Polycystic Ovarian Disease) ?",
                "subquestions": [
                    {
                        "subQuestion": "Is your Menstrual cycle regular ?",
                        "option": "Yes"
                    },
                    {
                        "subQuestion": "Do you have excessive hair growth on face,chest,back or buttocks ?",
                        "option": "No"
                    },
                    {
                        "subQuestion": "Have you had any previous or current struggles with pregnancy ?",
                        "option": "Yes"
                    },
                    {
                        "subQuestion": "Do you have Acne (Pimples) on face or body ?",
                        "option": "No"
                    },
                    {
                        "subQuestion": "Have you noticed any dark patches in the areas where your skin folds ?",
                        "option": "Yes"
                    },
                    {
                        "subQuestion": "Have you noticed any signs of depression, mood swings, or anxiety ?",
                        "option": "No"
                    }
                ]
            },
            {
                "option": "No",
                "question": "Do you have signs of Thyroid?"
            },
            {
                "option": "No",
                "question": "Do you have low hemoglobin? (Anemia)"
            }
        ],
        [
            {
                "option": "No",
                "question": "Have you experienced significant hair loss following childbirth ?"
            },
            {
                "option": {
                    "name": "Blood pressure",
                    "src": "/assets/img/12-one.png"
                },
                "question": "Do you currently have any coexisting illnesses or medical conditions? (Select all that apply)"
            },
            {
                "option": {
                    "name": "Blood pressure",
                    "src": "/assets/img/13-one.png"
                },
                "question": "Are there any medications that you are currently taking on a regular basis? (Select all that apply)"
            },
            {
                "option": {
                    "name": "Seborrhic Dermatitis",
                    "src": "/assets/img/14-one.png"
                },
                "question": "Any specific scalp conditions?"
            },
            {
                "option": "No",
                "question": "Do you have dandruff?"
            },
            {
                "option": "Yes",
                "question": "Do you have gray hair?",
                "subquestions": [
                    {
                        "subQuestion": "Since when did you notice your hair are greying ?",
                        "option": "20-40 Years"
                    },
                    {
                        "subQuestion": "Do you have early greying complaints in the family ?",
                        "option": {
                            "name": "Mother side of the family",
                            "src": "/assets/img/17-two.png"
                        }
                    },
                    {
                        "subQuestion": "Do you have gray hair in patches?",
                        "option": {
                            "name": "No",
                            "src": "/assets/img/16-3-two.png"
                        }
                    },
                    {
                        "subQuestion": "Are you a frequent smoker ?",
                        "option": "No"
                    },
                    {
                        "subQuestion": "Do you frequently engage in following chemical treatments ? (*Select all that applies)",
                        "option": "Straightening"
                    },
                    {
                        "subQuestion": "Do you have Vitamin B12/D3 deficiency ?",
                        "option": "No"
                    }
                ]
            }
        ],
        [
            {
                "option": {
                    "name": "Mother side of the family",
                    "src": "/assets/img/17-two.png"
                },
                "question": "Are there any similar hair complaints in your family?"
            },
            {
                "option": "No",
                "question": "Did you notice any increased hair loss after taking any medications / hair cosmetics / Oils in the past year?"
            },
            {
                "option": "Yes",
                "question": "Have you visited a Dermatologist in the last 6 months for any hair and scalp condition?"
            },
            {
                "option": "Yes",
                "question": "Have you noticed any significant weight gain or weight loss?"
            }
        ],
        [
            {
                "option": {
                    "name": "Straight",
                    "src": "/assets/img/18-one.png"
                },
                "question": "How would you characterize the current state or texture of your hair?"
            },
            {
                "option": {
                    "name": "Wart on scalp",
                    "src": "/assets/img/19-one.png"
                },
                "question": "Have you noticed any growth or boils on your scalp like any of the below?"
            },
            {
                "option": {
                    "name": "Oily",
                    "src": "/assets/img/1-two.png"
                },
                "question": "How would you characterize the current state or texture of your hair scalp? (Select all that apply)"
            },
            {
                "option": {
                    "name": "Decreased Hair Density",
                    "src": "/assets/img/2-two.png"
                },
                "question": "How would you describe the density of your hair?"
            },
            {
                "option": "No",
                "question": "Have you experienced any gradual fading of your natural hair color over time?"
            },
            {
                "option": "No",
                "question": "How would you describe your Eyebrows / Eyelashes?"
            }
        ],
        [
            {
                "option": "Take Test",
                "question": "Around 20 to 60 hair are grasped between the thumb, index and middle fingers from base of the hair near the scalp and pulled away from it with a gentle but firm pressure. Grasp around 20 to 60 hair between the thumb, index and middle fingers from base of the hair near the scalp and pull away from it with a gentle but firm pressure ?",
                "subquestions": [
                    {
                        "subQuestion": "(a) What do you observe ?",
                        "option": "Upto 30-60"
                    },
                    {
                        "subQuestion": "(b) Do you observe hair breakage ?",
                        "option": "Yes"
                    }
                ]
            },
            {
                "option": "Take Test",
                "question": "Comb hair for 60 seconds over a pillow or sheet of contrasting color, starting with the comb at the back of the scalp and moving towards the front of the scalp ?",
                "subquestions": [
                    {
                        "subQuestion": "",
                        "option": "Positive"
                    }
                ]
            },
            {
                "option": "Hair thickness",
                "question": "Your main hair goals are ? (*Select all that applies)"
            }
        ]
    ],
    "__v": 0
}
export default function PatientTestResult() {

    const [data12, setdata12] = useState({});
    const [selectedTab, setSelectedTab] = useState('personal');

    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            const response = await fetch(`${BASE_URL}/hair-tests/gethairtest-detail`, {
              method: 'GET',
              headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzMDc1YzBhMWM2OWFmMGNlNjJhOTQiLCJpYXQiOjE3MTUzMjMwNDAsImV4cCI6MTcxNTU4MjI0MH0.r9F4CceXrSWoPtDixLMHeTPJnzmrAD24YSj9DNd83G4'
              }
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data.hairTest
                ,'fsijsaijfijiasjijis');
            setdata12(data.hairTest);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
   
      }, []);
      

  return (
    <DoctorNavbar>
            <div className='test-link container'>
        <div className='test-link-item'>
          <div onClick={() => handleTabChange('personal')} className={`tab-1 tab tab2 ${selectedTab === 'personal' ? 'selected1' : ''}`}>PERSONAL PROFILE</div>
          <div onClick={() => handleTabChange('nutritional')} className={`tab-2 tab tab2 ${selectedTab === 'nutritional' ? 'selected1' : ''}`}>NUTRITIONAL</div>
          <div onClick={() => handleTabChange('lifestyle')} className={`tab-3 tab tab2 ${selectedTab === 'lifestyle' ? 'selected1' : ''}`}>LIFESTYLE</div>
          <div onClick={() => handleTabChange('stress')} className={`tab-4 tab tab2 ${selectedTab === 'stress' ? 'selected1' : ''}`}>STRESS</div>
          <div onClick={() => handleTabChange('hairScalp')} className={`tab-5 tab tab2 ${selectedTab === 'hairScalp' ? 'selected1' : ''}`}>HAIR AND SCALP ASSESSMENT</div>
          <div onClick={() => handleTabChange('uploadedImages')} className={`tab-5 tab tab2 tabimage ${selectedTab === 'uploadedImages' ? 'selected1' : ''}`}>UPLOADED IMAGES</div>
        </div>
      </div>
    <div className="hair-scalp">
  {
  data1.personal?<>

{selectedTab === 'personal' && data1.personal &&<>
  <h3 className='test-result-h1'>Name : {data1?.personal?.name}</h3>
  <h3 className='test-result-h1'>E-mail : {data1?.personal.email}</h3>
  <h3 className='test-result-h1'>Phone Number : {data1?.personal.phoneNumber}</h3>
  <h3 className='test-result-h1'>Age group : {data1?.personal['Select your age group']}</h3>
  <h3 className='test-result-h1'>Gender : {data1?.personal.Gender.src=="/assets/img/question/female.svg"?'Female':'Male'}</h3></>}

    
  {selectedTab === 'nutritional' && data1.Nutritional &&data1?.Nutritional.map((step, stepIndex) => (
    <div key={stepIndex}>
      {step.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          <div className="options-container">
            {typeof question.option === 'object' ? (
              <label>
                <img alt='hair' src={question.option.src} alt={question.option.name} />
                <p>{question.option.name}</p>
              </label>
            ) : (
              <div className={`option ${typeof question.option === 'string' ? 'circle' : ''}`}>
                <div className="circle">
                  {question.option}
                </div>
              </div>
            )}
          </div>
          {/* Render subquestions if available */}
          {question.subquestions && question.subquestions.length > 0 && (
            <div className="subquestions">
              {question.subquestions.map((subQuestion, subQuestionIndex) => (
                <div key={subQuestionIndex}>
                  <h4>{subQuestion.subQuestion}</h4>
                  <div className="options-container">
                    {typeof subQuestion.option === 'object' ? (
                      <label>
                        <img alt='hair' src={subQuestion.option.src} alt={subQuestion.option.name} />
                        <p>{subQuestion.option.name}</p>
                      </label>
                    ) : (
                      <div className={`option ${typeof subQuestion.option === 'string' ? 'circle' : ''}`}>
                        <div className="circle">
                          {subQuestion.option}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ))}

  {selectedTab === 'lifestyle' && data1.LifeStyle &&data1?.LifeStyle.map((step, stepIndex) => (
    <div key={stepIndex}>
      {step.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          <div className="options-container">
            {typeof question.option === 'object' ? (
              <label>
                <img alt='hair' src={question.option.src} alt={question.option.name} />
                <p>{question.option.name}</p>
              </label>
            ) : (
              <div className={`option ${typeof question.option === 'string' ? 'circle' : ''}`}>
                <div className="circle">
                  {question.option}
                </div>
              </div>
            )}
          </div>
          {/* Render subquestions if available */}
          {question.subquestions && question.subquestions.length > 0 && (
            <div className="subquestions">
              {question.subquestions.map((subQuestion, subQuestionIndex) => (
                <div key={subQuestionIndex}>
                  <h4>{subQuestion.subQuestion}</h4>
                  <div className="options-container">
                    {typeof subQuestion.option === 'object' ? (
                      <label>
                        <img alt='hair' src={subQuestion.option.src} alt={subQuestion.option.name} />
                        <p>{subQuestion.option.name}</p>
                      </label>
                    ) : (
                      <div className={`option ${typeof subQuestion.option === 'string' ? 'circle' : ''}`}>
                        <div className="circle">
                          {subQuestion.option}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ))}
   
  {selectedTab === 'stress' && data1.Stress &&[data1?.Stress].map((step, stepIndex) => (
    <div key={stepIndex}>
      {step.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.ques}</h3>
          <div className="options-container">
            {typeof question.option === 'object' ? (
              <label>
                <img alt='hair' src={question.option.src} alt={question.option.name} />
                <p>{question.option.name}</p>
              </label>
            ) : (
              <div className={`option ${typeof question.option === 'string' ? 'circle' : ''}`}>
                <div className="circle">
                  {question.option}
                </div>
              </div>
            )}
          </div>
          {/* Render subquestions if available */}
          {question.subquestions && question.subquestions.length > 0 && (
            <div className="subquestions">
              {question?.subquestions?.map((subQuestion, subQuestionIndex) => (
                <div key={subQuestionIndex}>
                  <h4>{subQuestion.subQuestion}</h4>
                  <div className="options-container">
                    {typeof subQuestion.option === 'object' ? (
                      <label>
                        <img alt='hair' src={subQuestion.option.src} alt={subQuestion.option.name} />
                        <p>{subQuestion.option.name}</p>
                      </label>
                    ) : (
                      <div className={`option ${typeof subQuestion.option === 'string' ? 'circle' : ''}`}>
                        <div className="circle">
                          {subQuestion.option}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ))}
  
  {selectedTab === 'hairScalp' && data1.HairAndScalp &&data1?.HairAndScalp.map((step, stepIndex) => (
    <div key={stepIndex}>
      {step.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          <div className="options-container">
            {typeof question.option === 'object' ? (
              <label>
                <img alt='hair' src={question.option.src} alt={question.option.name} />
                <p>{question.option.name}</p>
              </label>
            ) : (
              <div className={`option ${typeof question.option === 'string' ? 'circle' : ''}`}>
                <div className="circle">
                  {question.option}
                </div>
              </div>
            )}
          </div>
          {/* Render subquestions if available */}
          {question.subquestions && question.subquestions.length > 0 && (
            <div className="subquestions">
              {question.subquestions.map((subQuestion, subQuestionIndex) => (
                <div key={subQuestionIndex}>
                  <h4>{subQuestion.subQuestion}</h4>
                  <div className="options-container">
                    {typeof subQuestion.option === 'object' ? (
                      <label>
                        <img alt='hair' src={subQuestion.option.src} alt={subQuestion.option.name} />
                        <p>{subQuestion.option.name}</p>
                      </label>
                    ) : (
                      <div className={`option ${typeof subQuestion.option === 'string' ? 'circle' : ''}`}>
                        <div className="circle">
                          {subQuestion.option}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ))}</>:<p>wait</p>
}
{
selectedTab === 'uploadedImages' &&<div>Imranfe</div>
}
</div>
    </DoctorNavbar>
  )
}
