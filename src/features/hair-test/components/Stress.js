// import React,{useEffect} from 'react'

// export default function Stress({nextStep,prevStep,setBanner}) {
    
//       useEffect(()=>setBanner("/assets/img/question/stress.png"),[])
//   const handleNextQuestion = () => {
  
//       nextStep();

//   };

//   const handlePrevQuestion = () => {
//   prevStep()
//   };

//   const checkFields_stressmanage = () => {
//     // Add your logic for handling input changes here
//   };
//   return (
//     <div>
//   <table className="table stress-table" id="stressManagementTable">
//       <thead>
//         <tr>
//           <th>Please tick relevant option</th>
//           <th>Not at all</th>
//           <th>Sometimes</th>
//           <th>All the time</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="left-t">Physical exercise</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="physicalexercise" id="flexCheckDefault" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="physicalexercise" id="flexCheckDefault1" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="physicalexercise" id="flexCheckDefault2" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Sound sleep</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="soundlsleep" id="flexCheckDefault3" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="soundlsleep" id="flexCheckDefault4" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="soundlsleep" id="flexCheckDefault5" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Healthy eating</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="healthyeating" id="flexCheckDefault6" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="healthyeating" id="flexCheckDefault7" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="healthyeating" id="flexCheckDefault8" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Yoga/Meditation</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="yogameditation" id="flexCheckDefault9" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="yogameditation" id="flexCheckDefault10" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="yogameditation" id="flexCheckDefault11" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Positive thinking</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="positive_thinking" id="flexCheckDefault12" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="positive_thinking" id="flexCheckDefault13" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="positive_thinking" id="flexCheckDefault14" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Social/Medical support</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="socialsupport" id="flexCheckDefault15" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="socialsupport" id="flexCheckDefault16" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="socialsupport" id="flexCheckDefault17" /></td>
//         </tr>
//         <tr>
//           <td className="left-t">Feeling Anxious/Depressed</td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Not At All" name="depressed" id="flexCheckDefault18" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="Sometimes" name="depressed" id="flexCheckDefault19" /></td>
//           <td><input className="form-check-input" onInput={checkFields_stressmanage} type="radio" value="All the time" name="depressed" id="flexCheckDefault20" /></td>
//         </tr>
//       </tbody>
//     </table>
//     <div className='test-btnn'>
//         <button onClick={handlePrevQuestion}>
//           Prev
//         </button>
//         <button onClick={handleNextQuestion} >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';

export default function Stress({ nextStep, prevStep, setBanner, onSelectedOptionsChange }) {
    const [selectedOptions, setSelectedOptions] = useState([
        { ques: 'Physical exercise', option: '' },
        { ques: 'Sound sleep', option: '' },
        { ques: 'Healthy eating', option: '' },
        { ques: 'Yoga/Meditation', option: '' },
        { ques: 'Positive thinking', option: '' },
        { ques: 'Social/Medical support', option: '' },
        { ques: 'Feeling Anxious/Depressed', option: '' },
        // Add more questions and options as needed
    ]);
    const mainData = [
        {
            step: 1,
            banner: '/assets/img/Course-of-Hair-Loss---female.jpg',
           
            questions: [
                {
                    ques: 'Course of Hair Loss?',
                    options: ['Acute', 'Chronic Intermittent', 'Chronic Persistent']
                },
                {
                    ques: 'Describe the rate at which your hair loss has occurred?',
                    options: ['Fast progressive hair loss', 'Slow progressive hair loss']
                },
                {
                    ques: 'Since how long have you been experiencing hair loss?',
                    options: ['0-3 months', 'Up to 6 months', 'More than 6 months']
                },
                {
                    ques: 'Describe shedding of your hair?',
                    options: ['Up to 40 hairs', '40 to 100 hairs', 'More than 100 hairs']
                },
                {
                    ques: 'How is your hair quality? (Select all that apply)',
                    multi: true,
                    options: [
                        { name: 'Normal', src: '/assets/img/normal.png' },
                        { name: 'Dull Hair', src: '/assets/img/5-one.png' },
                        { name: 'Frizzy Hair', src: '/assets/img/5-two.png' },
                        { name: 'Tangles easily & forms knots', src: '/assets/img/5-three.png' },
                        { name: 'Split ends', src: '/assets/img/5-four.png' },
                        { name: 'Dry Hair', src: '/assets/img/5-five.png' },
                        { name: 'Brittle hair', src: '/assets/img/5-six.png' },
                        { name: 'Greasy Hair (Oily)', src: '/assets/img/5-seven.png' }
                    ]
                }
            ]
        },
        {
            step: 2,
            banner: '/assets/img/Define-your-current-hair-status---female.jpg',
            
            questions: [
                {
                    ques: 'Define your current hair status?',
                    options: [
                        { name: 'Hair Loss', src: '/assets/img/hair-one.png' },
                        { name: 'Hair loss and hair thinning', src: '/assets/img/hair-two.png' },
                        { name: 'Bald Patches', src: '/assets/img/hair-three.png' },
                        { name: 'Patchy hairloss', src: '/assets/img/hair-four.png' },
                        { name: 'Scarring baldness', src: '/assets/img/hair-five.png' },
                        { name: 'Not Sure', src: '/assets/img/not-sure.png' }
                    ],
                    subQuestions:[{
                        'Hair loss and hair thinning':[{
                            ques:'Define the area of hair thinning ?',
                            options:[
                                { name: 'Mild thinning', src: '/assets/img/6-1-one.png' },
                                { name: 'Moderate thinning', src: '/assets/img/6-1-two.png' },
                                { name: 'Diffuse thinning', src: '/assets/img/6-1-three.png' },
                               
                              
                            ]
                        }],
                       
                    },
                    {
                        'Bald Patches':[{
                            ques:'Which image best describes your hair loss? (For Hereditary / genetic hair loss options)?',
                            options:[
                                { name: '1', src: '/assets/img/baldness-one.png' },
                                { name: '2', src: '/assets/img/baldness-two.png' },
                                { name: '3', src: '/assets/img/baldness-three.png' },
                                { name: '4', src: '/assets/img/baldness-four.png' },
                                { name: '5', src: '/assets/img/baldness-five.png' },
                                
                                { name: '6', src: '/assets/img/baldness-six.png' },
                                { name: '7', src: '/assets/img/baldness-seven.png' },
                                { name: '8', src: '/assets/img/baldness-eight.png' },
                                { name: '9', src: '/assets/img/baldness-nine.png' },
                               
                            ]
                        }]
                    },
                    {
                        'Patchy hairloss':[{
                            ques:'Specify your hairloss pattern ?',
                            options:[
                                { name: '1', src: '/assets/img/patchy-hairloss-pic1.png' },
                                { name: '2', src: '/assets/img/patchy-hairloss-pic2.png' },
                                { name: '3', src: '/assets/img/patchy-hairloss-pic3.png' },
                                { name: '4', src: '/assets/img/patchy-hairloss-pic4.png' },
                                { name: '5', src: '/assets/img/patchy-hairloss-pic5.png' },
                                { name: '6', src: '/assets/img/patchy-hairloss-pic6.png' },
                              
                         ]
                        },
                       
                        {
                            ques:'Have you noticed decreased hair on your eyebrows, axilla (underarms), chest, or pubic areas?',
                            options:[
                                'Yes','No'
    
                         ]
                        }
                    ]
                    },
                    {
                        'Scarring baldness':[{
                            ques:'Among the images presented below, which one do you feel is the most similar to your scalps current state?',
                            options:[
                                { name: '1', src: '/assets/img/scarring_hairloss1.jpg' },
                                { name: '2', src: '/assets/img/scarring_hairloss2.jpg' },
                                { name: '3', src: '/assets/img/scarring_hairloss3.jpg' },
                                { name: '4', src: '/assets/img/scarring_hairloss4.jpg' },
                                { name: '5', src: '/assets/img/scarring_hairloss5.jpg' },
                                { name: '6', src: '/assets/img/scarring_hairloss6.jpg' },
                               
                            ]
                        }]
                    },
                    ]
                    
                },
                {
                    ques: 'Have you experienced any health conditions or significant illnesses in the past? (Select all that apply)',
                    multi: true,
                    options: [
                        { name: 'Normal', src: '/assets/img/none2.png' },
                        { name: 'Typhoid', src: '/assets/img/7-one.png' },
                        { name: 'Malaria / Dengue', src: '/assets/img/7-two.png' },
                        { name: 'Viral Fever', src: '/assets/img/7-three.png' },
                        { name: 'Covid', src: '/assets/img/7-four.png' },
                        { name: 'Accident / Surgery', src: '/assets/img/7-five.png' },
                        { name: 'Other', src: '/assets/img/other2.png' }
                    ],
                    subQuestions:[{
                        Other:[{
                            ques:'Please Specify',
                            options:'input'
                        }]
                    }
                ]
    
                },
                {
                    ques: 'Do you have PCOD (Polycystic Ovarian Disease) ?',
                    options: ['Yes',  'Not Sure'],
                    subQuestions:[
                        {
                            'Not Sure':[{
                                ques:'Is your Menstrual cycle regular ?',
                                options:['Yes','No']
                            },
                            {
                                ques:'Do you have excessive hair growth on face,chest,back or buttocks ?',
                                options:['Yes','No']
                            },
                            {
                                ques:'Have you had any previous or current struggles with pregnancy ?',
                                options:['Yes','No']
                            },
                            {
                                ques:'Do you have Acne (Pimples) on face or body ?',
                                options:['Yes','No']
                            },
                            {
                                ques:'Have you noticed any dark patches in the areas where your skin folds ?',
                                options:['Yes','No']
                            },
                            {
                                ques:'Have you noticed any signs of depression, mood swings, or anxiety ?',
                                options:['Yes','No']
                            },
                        ]
                        },
                      
                    ]
                },
                {
                    ques: 'Do you have signs of Thyroid?',
                    options: ['Yes', 'No', 'Not Sure'],
                    subQuestions:[
                        {
                            Yes:[{
                                ques:'Are there any medications that you are currently taking on a regular basis ?',
                                options:['Yes','No']
                            }]
                        },
                        {
                            'Not Sure':[{
                                ques:'Please tick mark on following signs ? (Hyper thyroidism) (*Select all that applies)',
                                options:  [
                                    { name: 'Nervousness', src: '/assets/img/9-2-one.png' },
                                    { name: 'Irritability', src: '/assets/img/9-2-two.png' },
                                    { name: 'Muscle Weakness', src: '/assets/img/9-2-three.png' },
                                    { name: 'Weight Loss', src: '/assets/img/9-2-four.png' },
                                    { name: 'Trouble Sleeping', src: '/assets/img/9-2-five.png' },
                                    { name: 'Enlarged Thyroid Gland', src: '/assets/img/9-2-six.png' },
                                    { name: 'Vision Problem', src: '/assets/img/9-2-seven.png' },
                                    { name: 'Heat Sensitivity', src: '/assets/img/9-2-eight.png' }
    
                                ],
                                multi:true
                            }]
                        }
                    ]
                },
                {
                    ques: 'Do you have low hemoglobin? (Anemia)',
                    options: ['Not Sure', 'No', 'Yes'],
                    subQuestions:[
                        {
                            'Not Sure':[{
                                ques:'Are there any medications that you are currently taking on a regular basis ?',
                                options:[
                                    { name: 'Fatigue', src: '/assets/img/10-1-one.png' },
                                    { name: 'Headache', src: '/assets/img/10-1-two.png' },
                                    { name: 'Yellowish Skin', src: '/assets/img/10-1-three.png' },
                                    { name: 'Irregular Heartbeats', src: '/assets/img/10-1-four.png' },
                                    { name: 'Chest Pain', src: '/assets/img/10-1-four.png' },
                                    { name: 'Cold Hands', src: '/assets/img/10-1-six.png' },
                                    { name: 'Leg Cramps', src: '/assets/img/10-1-seven.png' },
                                    { name: 'Disturbed Sleep', src: '/assets/img/10-1-eight.png' }
                                ]
                            }]
                        }
                    ]
                }
            ]
        },
        {
            step: 3,
            banner: '/assets/img/Do-you-currently-have-any-coexisting-illnesses-or-medical-conditions--both.jpg',
            questions: [{
                ques: 'Have you experienced significant hair loss following childbirth ?',
                options: ['Yes', 'No'],
            },
                {
                    ques: 'Do you currently have any coexisting illnesses or medical conditions? (Select all that apply)',
                    multi: true,
                    options: [
                        { name: 'None', src: '/assets/img/none2.png' },
                        { name: 'Blood pressure', src: '/assets/img/12-one.png' },
                        { name: 'Diabetes', src: '/assets/img/12-two.png' },
                        { name: 'Heart / Liver Disease', src: '/assets/img/12-three.png' },
                        { name: 'Other', src: '/assets/img/other2.png' }
                    ],
                    subQuestions:[{
                        Other:[{
                            ques:'Please Specify',
    options:'input'
                        }]
                    }]
                },
                {
                    ques: 'Are there any medications that you are currently taking on a regular basis? (Select all that apply)',
                    multi: true,
                    options: [
                        { name: 'None', src: '/assets/img/none2.png' },
                        { name: 'Blood pressure', src: '/assets/img/13-one.png' },
                        { name: 'Diabetes', src: '/assets/img/13-two.png' },
                        { name: 'Thyroid', src: '/assets/img/13-three.png' },
                        { name: 'Vitamins/ Supplement/ Steroids', src: '/assets/img/13-four.png' },
                        { name: 'Anti-psychotic', src: '/assets/img/13-eight.png' },
                        { name: 'Anti-convulsant', src: '/assets/img/13-nine.png' },
                        { name: 'Anti hormonal', src: '/assets/img/13-ten.png' },
                        { name: 'Blood Thinners', src: '/assets/img/13-eleven.png' },
                        { name: 'Not Sure', src: '/assets/img/not-sure.png' }
                    ],
                    subQuestions:[{
                        "Not Sure":[{
                            ques:'Please Specify',
    options:'input'
                        }]
                    }]
                },
                {
                    ques: 'Any specific scalp conditions?',
                    multi: true,
                    options: [
                        { name: 'Normal', src: '/assets/img/normal.png' },
                        { name: 'Seborrhic Dermatitis', src: '/assets/img/14-one.png' },
                        { name: 'Contact Dermatitis', src: '/assets/img/14-two.png' },
                        { name: 'Psoriasis', src: '/assets/img/14-three.png' }
                    ]
                },
                {
                    ques: 'Do you have dandruff?',
                    options: ['Yes', 'No'],
                    subQuestions:[{
                        Yes:[{
                            ques:'What is current status of your dandruff ?',
                            options: [
                                { name: 'Mild And Seasonal', src: '/assets/img/Mild-and-Seasonal.png' },
                                { name: 'Moderate & Continuous', src: '/assets/img/Moderate-&-Continuous.png' },
                                { name: 'Severe And Thick', src: '/assets/img/Severe-and-thick.png' },
                               
                            ]
                        }]
                    }]
                },
                {
                    ques: 'Do you have gray hair?',
                    options: ['Yes', 'No'],
                    subQuestions:[{
                        "Yes":[{
                            ques:'Since when did you notice your hair are greying ?',
                            options: [
                               'Before 20 Years','20-40 Years','After 40 Years'
                            ]
                        },
                        {
                            ques:'Do you have early greying complaints in the family ?',
                            options: [
                                { name: 'Father side of the family', src: '/assets/img/17-one.png' },
                                { name: 'Mother side of the family', src: '/assets/img/17-two.png' },
                                { name: 'Both', src: '/assets/img/both.png' },
                                { name: 'None', src: '/assets/img/none2.png' },
                            ]
                        },
                        {
                            ques:'Do you have gray hair in patches?',
                            options: [
                               
                                { name: 'Yes', src: '/assets/img/16-3-one.png' },
                                { name: 'No', src: '/assets/img/16-3-two.png' },
                            ]
                        },
                        {
                            ques:'Are you a frequent smoker ?',
                            options: [
                               'Yes','No'
                            ]
                        },
                        {
                            ques:'Do you frequently engage in following chemical treatments ? (*Select all that applies)',
                            options: [
                               'None','Straightening','Smoothening','Keratin','Permanent Hair Color','Other'
                            ]
                        },
                        {
                            ques:'Do you have Vitamin B12/D3 deficiency ?',
                            options: [
                               'Yes','No','Not Sure'
                            ]
                        },
                    ]
                    }]
                }
            ]
        },
        {
            step: 4,
            banner: '/assets/img/Self-Clinical-Hair-Assessment---female.jpg',
            questions: [
                {
                    ques: 'Are there any similar hair complaints in your family?',
                    options: [
                        { name: 'Father side of the family', src: '/assets/img/17-one.png' },
                        { name: 'Mother side of the family', src: '/assets/img/17-two.png' },
                        { name: 'Both', src: '/assets/img/both.png' },
                        { name: 'None', src: '/assets/img/none2.png' }
                    ]
                },
                {
                    ques: 'Did you notice any increased hair loss after taking any medications / hair cosmetics / Oils in the past year?',
                    options: ['Yes', 'No']
                },
                {
                    ques: 'Have you visited a Dermatologist in the last 6 months for any hair and scalp condition?',
                    options: ['Yes', 'No']
                },
                {
                    ques: 'Have you noticed any significant weight gain or weight loss?',
                    options: ['Yes', 'No']
                }
            ]
        },
        {
            step: 5,
            banner: '/assets/img/Self-Clinical-Hair-Assessment---male.jpg',
            questions: [
                {
                    ques: 'How would you characterize the current state or texture of your hair?',
                    options: [
                        { name: 'Straight', src: '/assets/img/18-one.png' },
                        { name: 'Wavy', src: '/assets/img/18-thee.png' },
                        { name: 'Curly', src: '/assets/img/18-five.png' }
                    ]
                },
                {
                    ques: 'Have you noticed any growth or boils on your scalp like any of the below?',
                    options: [
                        { name: 'None', src: '/assets/img/none2.png' },
                        { name: 'Wart on scalp', src: '/assets/img/19-one.png' },
                        { name: 'Haemangioma on the scalp', src: '/assets/img/19-two.png' },
                        { name: 'Boil on scalp', src: '/assets/img/19-three.png' },
                        { name: 'Seborrheic Keratosis on Scalp', src: '/assets/img/19-four.png' },
                        { name: 'Other', src: '/assets/img/other2.png' }
                        
                    ]
                },
                {
                    ques: 'How would you characterize the current state or texture of your hair scalp? (Select all that apply)',
                    multi: true,
                    options: [
                        { name: 'Normal', src: '/assets/img/1-one.png' },
                        { name: 'Oily', src: '/assets/img/1-two.png' },
                        { name: 'Dry', src: '/assets/img/1-three.png' },
                        { name: 'Dry & Flaky', src: '/assets/img/1-four.png' },
                        { name: 'Redness', src: '/assets/img/1-five.png' }
                        
                    ]
                },
                {
                    ques: 'How would you describe the density of your hair?',
                    options: [
                        { name: 'Normal', src: '/assets/img/2-one.png' },
                        { name: 'Decreased Hair Density', src: '/assets/img/2-two.png' }
                    ]
                },
                {
                    ques: 'Have you experienced any gradual fading of your natural hair color over time?',
                    options: ['Yes', 'No']
                },
                {
                    ques: 'How would you describe your Eyebrows / Eyelashes?',
                    options: ['Yes', 'No']
                }
            ]
        },
        {
            step:6,
            banner: '/assets/img/SELF-HAIR-ANALYSIS-TEST-female.jpg',
            questions: [
                { h4:'HAIR PULL TEST (Optional)',
                    ques: 'Around 20 to 60 hair are grasped between the thumb, index and middle fingers from base of the hair near the scalp and pulled away from it with a gentle but firm pressure. Grasp around 20 to 60 hair between the thumb, index and middle fingers from base of the hair near the scalp and pull away from it with a gentle but firm pressure ?',
                    options: [
                      'Skip Test','Take Test'
                    ],
                    subQuestions:[{
                        "Take Test":[{
                            ques:'(a) What do you observe ?',
                            options:['Upto 30','Upto 30-60','Above 60']
                        },{
                            ques:'(b) Do you observe hair breakage ?',
                            options:["Yes","No"]
                        }
                    ]
                    }]
                },
                { h4:'HAIR COUNT & BREAKAGE TEST (Optional)',
                ques: 'Comb hair for 60 seconds over a pillow or sheet of contrasting color, starting with the comb at the back of the scalp and moving towards the front of the scalp ?',
                options: [
                  'Skip Test','Take Test'
                ],
                subQuestions:[{
                    "Take Test":[{
                        ques:'',
                        options:['Positive','Nagative']
                    }]
                }]
            },{
                ques:'Your main hair goals are ? (*Select all that applies)',
                options:['Stop Hair Fall','Hair thickness','cure baldness','Hair Maintenance','Stop Dandruff','Reduce Greying','Soft Shine Hair']
            }
            ]
        }
    ]
    const subquestionData = {
        "1": {
            "Is your Menstrual cycle regular ?": "No",
            "Do you have excessive hair growth on face,chest,back or buttocks ?": "No",
            "Have you had any previous or current struggles with pregnancy ?": "No",
            "Do you have Acne (Pimples) on face or body ?": "No",
            "Have you noticed any dark patches in the areas where your skin folds ?": "No",
            "Have you noticed any signs of depression, mood swings, or anxiety ?": "No"
        },
        "2": {
            "Since when did you notice your hair are greying ?": "20-40 Years"
        },
        "5": {
            "(a) What do you observe ?": "Upto 30-60",
            "(b) Do you observe hair breakage ?": "No",
            "": "Negative"
        }
    };
    
    // Iterate through each subquestion set
    mainData.forEach(step => {
        step.questions.forEach(question => {
            for (const key in subquestionData) {
                const subquestion = subquestionData[key];
                for (const subquesKey in subquestion) {
                    if (subquesKey === question.ques) {
                        question.option = subquestion[subquesKey];
                    }
                }
            }
        });
    });
    
    console.log(mainData);
    
    // Updated main data with subquestions and options inserted
    console.log(mainData,'Maina');
    useEffect(() => {
        setBanner("/assets/img/question/stress.png");
    }, []);

    const handleNextQuestion = () => {
        nextStep();
    };

    const handlePrevQuestion = () => {
        prevStep();
    };

    const checkFields_stressmanage = (event, index) => {
        const { value } = event.target;
        setSelectedOptions(prevState => {
            const updatedOptions = [...prevState];
            updatedOptions[index].option = value;
            return updatedOptions;
        });
    };

    useEffect(() => {
        if (onSelectedOptionsChange) {
            onSelectedOptionsChange(selectedOptions);
        }
    }, [selectedOptions, onSelectedOptionsChange]);
console.log(selectedOptions);
    return (
        <div>
            <table className="table stress-table" id="stressManagementTable">
                <thead>
                    <tr>
                        <th>Please tick relevant option</th>
                        <th>Not at all</th>
                        <th>Sometimes</th>
                        <th>All the time</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedOptions.map((item, index) => (
                        <tr key={index}>
                            <td className="left-t">{item.ques}</td>
                            <td><input className="form-check-input" onInput={(event) => checkFields_stressmanage(event, index)} type="radio" value="Not At All" name={`option_${index}`} /></td>
                            <td><input className="form-check-input" onInput={(event) => checkFields_stressmanage(event, index)} type="radio" value="Sometimes" name={`option_${index}`} /></td>
                            <td><input className="form-check-input" onInput={(event) => checkFields_stressmanage(event, index)} type="radio" value="All the time" name={`option_${index}`} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='test-btnn'>
                <button onClick={handlePrevQuestion}>
                    Prev
                </button>
                <button onClick={handleNextQuestion}>
                    Next
                </button>
            </div>
        </div>
    );
}
