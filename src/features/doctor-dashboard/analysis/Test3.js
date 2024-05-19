import React from 'react'

export default function Test3({nextStep,prevStep}) {
  return (
    <div className="ana-hairscalp">
            <h1>1) Treatment Synopsis</h1>
            <h2>1) Acute Telogen Effluvium – Male</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Acute Telogen Effluvium – Male 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

          <h2>2) Chronic Telogen Effluvium – Male</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Chronic Telogen Effluvium – Male 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

          <h2>3) Acute Telogen Effluvium – Female</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Acute Telogen Effluvium – Female 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

          <h2>4) Chronic Telogen Effluvium – Female</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Chronic Telogen Effluvium – Female 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

          <h2>5) Androgenetic Alopecia Male – Grade 1 to Grade 7</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Androgenetic Alopecia Male 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

          <h2> 6) Androgenetic Alopecia Female – Grade 1 to Grade 3</h2>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                a) Importance of Modern Medicine in Androgenetic Alopecia Male 
                <p></p>
              </label>
            </p>
          </div>
          <div className="ana-ques">
            <p>
              <label>
                <input type="checkbox" /> 
                b) General Treatment Guidelines for preventing hair loss in future – Instructions 
                <p></p>
              </label>
            </p>
          </div>

        
          <div className="test-btnn">
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep} >Next</button>
      </div>
    </div>
  )
}
