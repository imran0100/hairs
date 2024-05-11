import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

import OurExpertisePage from './pages/OurExpertisePage';
import ProductDetail from './features/products/ProductDetail';
import AboutUsPage from './pages/AboutUsPage';
import OurSpecialistsPage from './pages/OurSpecialistsPage';
import HairTestPage from './pages/HairTestPage';
import DoctorDashboard from './features/doctor-dashboard/DoctorDashboard';
import PatientList from './features/doctor-dashboard/PatientList';
import AppointmentList from './features/doctor-dashboard/AppointmentList';
import AdminDashboard from './features/admin-dashboard/AdminDashboard';
import AllPatientList from './features/admin-dashboard/AllPatientList';
import AssignAppointment from './features/admin-dashboard/AssignAppointment';
import AddDoctor from './features/admin-dashboard/AddDoctor';
import TestResults from './features/admin-dashboard/TestResults';

import AllDoctorList from './features/admin-dashboard/AllDoctorList';
import UserProfilePage from './pages/UserProfilePage';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'
import AllHairTest from './features/admin-dashboard/AllHairTest';
import ManageWebsite from './features/admin-dashboard/MangeWebsite';
import AllContactUs from './features/admin-dashboard/AllContactUs';
import AddProduct from './features/admin-dashboard/AddProduct';
import EditDeleteProduct from './features/products/EditDeleteProduct';
import ManageOrder from './features/admin-dashboard/ManageOrder';
import PatientTestResult from './features/doctor-dashboard/PatientTestResult';

function App() {
  // const options = {
  //   // you can also just use 'bottom center'
  //   position: positions.TOP_RIGHT,
  //   timeout: 5000,
  //   offset: '30px',
  //   // you can also just use 'scale'
  //   transition: transitions.SCALE
  // }
  return (
    // <AlertProvider template={AlertTemplate} {...options}>
    <div >
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductPage/>} />
        <Route path="/book" element={<BookAppointmentPage/>} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path='/product-detail/:id' element={<ProductDetail/>} />
        <Route path="/our-specialist" element={<OurSpecialistsPage/>} />
        <Route path="/hair-test" element={<HairTestPage />} />
        <Route path="/our-expertise" element={<OurExpertisePage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/appointment" element={<AppointmentList />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/all-patient-list" element={<AllPatientList />} />
        <Route path="/assign-appointment" element={<AssignAppointment />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/all-doctor" element={<AllDoctorList />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/all-hair-test-result" element={<AllHairTest />} />
        <Route path="/manage-website" element={<ManageWebsite />} />
        <Route path="/all-contact-us-form-result" element={<AllContactUs />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-delete-product" element={<EditDeleteProduct />} />
        <Route path="/manage-order" element={<ManageOrder />} />
        <Route path="/test-result" element={<TestResults />} />
        <Route path="/patient-test-result" element={<PatientTestResult />} />






        </Routes>
      </Router>
  
    </div>
   
  );
}

export default App;
