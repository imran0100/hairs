import React, { useEffect, useState } from 'react';
import BASE_URL from '../../../Config';
const ScalpPopup = ({setBanner,name,email,phoneNumber,selectedOptionP,selectedOptions,selectedOptions1,selectedOptions4,selectedOptions3}) => {
  const [file, setFile] = useState(null);
const [show,setShow]=useState(false)
const handleFileChange = (e) => {
  // Accept only one file
  console.log(e.target.files[0]);
  setFile(e.target.files[0]);
};

  const uploadFiles = async ({setBanner}) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjIzMDc1YzBhMWM2OWFmMGNlNjJhOTQiLCJpYXQiOjE3MTUzMjMwNDAsImV4cCI6MTcxNTU4MjI0MH0.r9F4CceXrSWoPtDixLMHeTPJnzmrAD24YSj9DNd83G4";
let data={personal:{
  name,email,phoneNumber,[selectedOptionP[0].ques]:selectedOptionP[0].options[selectedOptionP[0].selectedOption],
  [selectedOptionP[1].ques]:selectedOptionP[1].options[selectedOptionP[1].selectedOption],
},
Nutritional:selectedOptions,
LifeStyle:selectedOptions1,
Stress:selectedOptions4,
HairAndScalp:selectedOptions3
}

try {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${BASE_URL}/hair-tests/upload-image`, {
    method: 'POST',
    headers: {
      'Authorization': token
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  } else {
    const responseData = await response.json();
    setShow(true);
    console.log(responseData,'huhuhu');
  }
} catch (error) {
  console.error('There was a problem with the fetch operation:', error.message);
}

// try {
//   const response = await fetch(`${BASE_URL}/hair-tests/create`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': token
//     },
//     body: JSON.stringify(data)
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }else{
//     const responseData = await response.json();
//     setShow(true)
//     console.log(responseData,'huhuhuh');
//   }

 
//   // Handle the response data as needed
// } catch (error) {
//   console.error('There was a problem with the fetch operation:', error.message);
// }

console.log(data);
  };
useEffect(()=>setBanner("/assets/img/SELF-HAIR-ANALYSIS-TEST-female.jpg"),[])
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="successicon">
          <div className="text-center">
            <img alt='image' src="/assets/img/thumb.png" alt="Thumb Icon" />
          </div>
          <p>
            <b>Awesome, A big thank you for answering all your questions patiently!</b>
            <br />
            Your input is crucial in tailoring the best care for your hair.
            <br />
            We're excited to analyze the results and provide you with the best personalized solutions.
            <br />
            One last step to finalize your submission.
            <br />
            Upload Your Scalp and hair pic as shown in the following format.
          </p>
        </div>
        <div className="upload-img text-center" style={{ margin: '15px 0' }}>
        {/* /assets/img/uploadpic.jpg */}
        {/* male */}
          <img alt='image' src="/assets/img/femaleupload.jpg" alt="Upload Image" />
        </div>
        <h5 className="modal-title mb-3" id="exampleModalLabel">Upload Your Scalp Image</h5>
        <form id="fileUploadForm" encType="multipart/form-data" method="post">
          <div className="form-group">
            <label htmlFor="fileInput" className="mb-2">Select multiple files :</label>
            <input type="file" className="form-control" id="fileInput" name="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div id="errorMessages" style={{ color: 'red' }}></div>
          <button type="button" className="btn btn-primary mt-4" onClick={uploadFiles} id="uploadButton">Upload Files</button>
          {show&&<h2>Successfull</h2>}
        </form>
        <div id="thankYouText" style={{ display: 'none' }}>
          <p>
            <b>Once again, thank you for your participation.</b>
            <br />
            Now your online hair test is completed!
            <br />
            Your responses and submitted photos are now in the hands of our Hairsncares specialists for evaluation.
            <br />
            You are requested to take an Online Video Consultation with our Dermatologist!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScalpPopup;
