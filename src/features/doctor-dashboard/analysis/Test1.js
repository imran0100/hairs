// import React from "react";

// export default function Test1() {
//   return (
//     <div style={{ marginBottom: "2rem" }}>
//       <div className="ana-pers">
//         <h2>Name : Avinash</h2>
//         <h2>Age : 24</h2>
//         <div className="ana-per">
//           <h2>Mobile : 8947847847</h2>
//           <h2>Email : avinas@gmail.com</h2>
//           <h2>Sex : Male</h2>
//         </div>
//       </div>
//       <div className="ana-test">
//         <div className="ana-t">
//           <h1>Nutritional</h1>
//           <div className="ana-ques">
//             <p>a) Adequate Nutritional Condition</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>b) Adequate Nutritional Condition but needs improvement</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>c) Inadequate nutritional condition. Requires improvement</p>
//             <input type="checkbox" />
//           </div>
//         </div>
//         <div className="ana-t">
//           <h1>LifeStyle</h1>
//           <div className="ana-ques">
//             <p>a) Good Lifestyle condition</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>b) Good Lifestyle condition but needs improvement</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>c) Unhealthy Lifestyle and needs improvement</p>
//             <input type="checkbox" />
//           </div>
//         </div>
//         <div className="ana-t">
//           <h1>Stress</h1>
//           <div className="ana-ques">
//             <p>a) No stress</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>b) Mild to Moderate Level</p>
//             <input type="checkbox" />
//           </div>
//           <div className="ana-ques">
//             <p>c) Moderate to Severe Level</p>
//             <input type="checkbox" />
//           </div>
//         </div>
//       </div>
//       <div className="ana-hairscalp">
//         <h1>HairAndScalp</h1>
//         <h2>1) Assessment - Diagnosis</h2>
//         <div className="ana-ques">
//           <p>1) Acute Telogen Effluvium - Male</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p> 2) Chronic Effluvium – Male</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>3) Acute TelTelogen ogen Effluvium - Female</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>4) Chronic Telogen Effluvium – Female</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>5) Androgenetic Alopecia Male – Grade 1 to Grade 7</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>6) Androgenetic Alopecia Female – Grade 1 to Grade 3</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>7) Alopecia Areata</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>8) PCOD</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>9) Thyroid</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>10) Anemia</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>11) Dandruff</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>12) Grey Hair</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>13) Other (Scarring or any other diagnosis)</p>
//           <input className="ana-input" />
//         </div>
//         <h2>2) Hair & Scalp Analysis</h2>

//         <div className="ana-ques">
//           <h3>Scalp examination:</h3>
//           <p>a) Normal Scalp</p>
//           <input type="checkbox" />
//           <p>a) Oily Scalp</p>
//           <input type="checkbox" />
//           <p>c) Dry</p>
//           <input type="checkbox" />
//           <p>d) Dry & Flaky Scalp</p>
//           <input type="checkbox" />
//           <p>e) Red and irritated scalp</p>
//           <input type="checkbox" />
//         </div>

//         <div className="ana-ques">
//           <h3>2. Hair Quality (texture):</h3>
//           <p>a) Good</p>
//           <input type="checkbox" />
//           <p>b) Dull hair</p>
//           <input type="checkbox" />
//           <p>c) frizzy hair</p>
//           <input type="checkbox" />
//           <p>d) tangles easily & forms knot</p>
//           <input type="checkbox" />
//           <p>e) split ends</p>
//           <input type="checkbox" />
//           <p>f) greasy hair (oily)</p>
//           <input type="checkbox" />
//           <p>g) dry hair</p>
//           <input type="checkbox" />
//           <p>h) brittle hair</p>
//           <input type="checkbox" />
//         </div>

//         <div className="ana-ques">
//           <h3>3. Hair density (general instructions):</h3>
//           <p>a) Good </p>
//           <input type="checkbox" />
//           <p>b) Decreased</p>
//           <input type="checkbox" />
//         </div>

//         <div className="ana-ques">
//           <h3>4. Color vibrancy (color protection products):</h3>
//           <p>a) Normal Hair color</p>
//           <input type="checkbox" />
//           <p>b) Faded (Dull) Hair color</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <h3>5. Moisture and hydration of hair (general instructions):</h3>
//           <p>a) Well Hydrated </p>
//           <input type="checkbox" />
//           <p>b) Lack of moisture</p>
//           <input type="checkbox" />
//         </div>

//         <div className="ana-ques">
//           <h3>6. Hair breakage (general instructions):</h3>
//           <p>a) Excessive Breakage </p>
//           <input type="checkbox" />
//           <p>b) No Breakage</p>
//           <input type="checkbox" />
//         </div>
//         <h2>
//           3) Conclusion: Your Overall hair health is deemed to be (All
//           Checkboxes)
//         </h2>

//         <div className="ana-ques">
//           <p>a) Satisfactory condition (green)</p>
//           <input type="checkbox" />
//         </div>

//         <div className="ana-ques">
//           <p>b) Satisfactory condition but needs improvement (yellow)</p>
//           <input type="checkbox" />
//         </div>
//         <div className="ana-ques">
//           <p>c) Deficient state requiring enhancement (Red)</p>
//           <input type="checkbox" />
//         </div>
//       </div>
//       <div className="test-btnn">
//         <button disabled={true}>Prev</button>
//         <button>Next</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Test1({nextStep}) {
  // State to manage the checkboxes
  const [selected, setSelected] = useState({
    nutritional: false,
    lifestyle: false,
    stress: false,
    hairScalp: false,
  });

  // Function to update state based on selections
  const handleSelection = (section) => {
    setSelected((prev) => ({ ...prev, [section]: true }));
  };

  const handleNext=()=>{
    nextStep()
  }
  // Check if all sections have at least one checkbox selected
  const allSelected = Object.values(selected).every((val) => val);

  return (
    <div style={{ marginBottom: "2rem", padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <div className="ana-pers">
        <h2>Name: Avinash</h2>
        <h2>Age: 24</h2>
        <div className="ana-per">
          <h2>Mobile: 8947847847</h2>
          <h2>Email: avinas@gmail.com</h2>
          <h2>Sex: Male</h2>
        </div>
      </div>
      <div className="ana-test">
        <div className="ana-t">
          <h1>Nutritional</h1>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} /> a) Adequate Nutritional Condition
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} /> b) Adequate Nutritional Condition but needs improvement
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} /> c) Inadequate nutritional condition. Requires improvement
              </label>
            </p>
          </div>
        </div>
        <div className="ana-t">
          <h1>LifeStyle</h1>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("lifestyle")} /> a) Good Lifestyle condition
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("lifestyle")} /> b) Good Lifestyle condition but needs improvement
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("lifestyle")} /> c) Unhealthy Lifestyle and needs improvement
              </label>
            </p>
          </div>
        </div>
        <div className="ana-t">
          <h1>Stress</h1>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} /> a) No stress
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} /> b) Mild to Moderate Level
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} /> c) Moderate to Severe Level
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="ana-hairscalp">
        <h1>Hair And Scalp</h1>
        <h2>1) Assessment - Diagnosis</h2>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> 1) Acute Telogen Effluvium - Male
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> 2) Chronic Effluvium – Male
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> 3) Acute TelTelogen ogen Effluvium - Female
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> 4) Chronic Telogen Effluvium – Female
            </label>
          </p>
        </div>
        {/* Add other hair and scalp diagnosis checkboxes similarly */}
        <h2>2) Hair & Scalp Analysis</h2>
        <div className="ana-ques">
          <h3>Scalp examination:</h3>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> a) Normal Scalp
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> b) Oily Scalp
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> c) Dry
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> d) Dry & Flaky Scalp
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> e) Red and irritated scalp
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <h3>Hair Quality (texture):</h3>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> a) Good
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> b) Dull hair
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> c) Frizzy hair
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> d) Tangles easily & forms knot
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> e) Split ends
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> f) Greasy hair (oily)
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> g) Dry hair
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> h) Brittle hair
            </label>
          </p>
        </div>
        {/* Add other hair analysis checkboxes similarly */}
        <h2>3) Conclusion: Your Overall hair health is deemed to be</h2>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> a) Satisfactory condition (green)
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> b) Satisfactory condition but needs improvement (yellow)
            </label>
          </p>
        </div>
        <div className="ana-ques">
          <p>
            <label>
              <input type="checkbox" onChange={() => handleSelection("hairScalp")} /> c) Deficient state requiring enhancement (Red)
            </label>
          </p>
        </div>
      </div>
      <div className="test-btnn">
        <button disabled>Prev</button>
        <button onClick={handleNext} disabled={!allSelected}>Next</button>
      </div>
    </div>
  );
}
