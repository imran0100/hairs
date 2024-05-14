import React from 'react'

export default function ThankYou() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="successicon">
          <div className="text-center">
            <img  src="/assets/img/like.png" alt="Thumb Icon" />
          </div>
          <p className='pcenter'>
            <b>Once again, thank you for your participation.</b>
            <br />
            Now your online hair test is completed!
            <br />
            Your responses and submitted photos are now in the hands of our Hairsncares specialists for evaluation.
            <br />
            You are requested to take an Online Video Consultation with our Dermatologist!
           
          </p>
        </div>
        <div className="upload-img text-center" style={{ margin: '15px 0' }}>
        
     
        <div id="thankYouText" style={{ display: 'none' }}>
          <p >
            <b>Once again, thank you for your participation.</b>
            <br />
            Now your online hair test is completed!
            <br />
            Your responses and submitted photos are now in the hands of our Hairsncares specialists for evaluation.
            <br />
            You are requested to take an Online Video Consultation with our Dermatologist!
          </p>
        </div>
        <button  type="button" className="btn btn-primary mt-4"  id="uploadButton">Continue to checkout</button>
      </div>
    </div>
    </div>
  )
}
