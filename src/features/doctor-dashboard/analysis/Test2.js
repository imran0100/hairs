import React,{useState} from 'react'

export default function Test2({nextStep,prevStep}) {
  const [selected, setSelected] = useState({
    "1) Diet Management": false,
    lifestyle: false,
    stress: false,
    hairScalp: false,
  });
  const handleSelection = (section) => {
    setSelected((prev) => ({ ...prev, [section]: true }));
  };
  const handleNext=()=>{
    nextStep()
  }
  const allSelected = Object.values(selected).every((val) => val);
  return (
    <div>
      <div className="ana-test">
        <div className="ana-t">
          <h2>1) Diet Management</h2>
          
          <div className="ana-ques">
          <h3>a) GENERAL Hairloss DIET </h3>
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("1) Diet Management")} /> a) GENERAL Hairloss DIET 
              </label>
            </p>
          </div>
          <h3>b) Specific Hairloss Diet </h3>

          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("1) Diet Management")} />
       i) Anemia

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} />
       ii) PCOD

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} />
     
                iii) Thyroid


              </label>
            </p>
          </div>
        </div>
        <div className="ana-t">
          <h2>LifeStyle Management</h2>
          <div className="ana-ques">
          <h3>a) GENERAL Lifestyle Advice </h3>
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("1) Diet Management")} /> a) GENERAL Hairloss DIET 
              </label>
            </p>
          </div>
          <h3>a) GENERAL Lifestyle Advice</h3>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("1) Diet Management")} />
       i) Anemia

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} />
       ii) PCOD

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("nutritional")} />
     
                iii) Thyroid


              </label>
            </p>
          </div>
        </div>
        <div className="ana-t">
          {/* <h1>Stress</h1> */}
          <h2>3) Stress Management</h2>

          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} />a) No Stress Management  
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} />b) Stress Management – Mild to Moderate -General Instructions

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} /> c) Stress Management – Severe

              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" onChange={() => handleSelection("stress")} />d) Stress Management for PCOD &Thyroid

              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="test-btnn">
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
   
    </div>
  )
}
