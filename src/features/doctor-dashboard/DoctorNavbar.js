import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function DoctorNavbar({children}) {
  return (
    <>
    <div className="nav-container container">
      <div>
        <img 
          alt="logo"
          className="nav-logo"
          src="/assets/img/logo.png"
        />
      </div>

      <div className="nav-right">
        <div className="user-svg">
          <FaRegUser size={20} />
        </div>
      </div>
    </div>
    <div className="container">
    <div className="dashboard-container">
      <div className="left-column">
       <NavLink to={'/doctor-dashboard'}>Dashboard</NavLink>
       <NavLink to={'/patient-list'}>Patient List</NavLink>
       <NavLink to={'/appointment'}>Profile</NavLink>
      
       <NavLink to={'/appointment'}>Appointment</NavLink>
       <NavLink to={'/analysis'}>Prescription Generator</NavLink>

      </div>
      <div className="right-column">
     {children}
      </div>
    </div>

    </div>
  </>
  )
}
