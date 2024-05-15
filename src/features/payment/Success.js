import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"; // Import the CSS file for this component
import Navbar from "../nav/Navbar";

function Success() {
  const navigate = useNavigate();

const handleSuccess=()=>navigate('/')
  return (
    <Navbar>
        <div className="success-container">
      <h3 className="success-header">Payment Successful</h3>
      <p onClick={handleSuccess} className="success-button">Proceed</p>
    </div>
    </Navbar>
  );
}

export default Success;