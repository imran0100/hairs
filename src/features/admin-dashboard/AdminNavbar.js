// import React from 'react'
// import { FaRegUser } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { FaChevronUp } from "react-icons/fa";

// export default function AdminNavbar({children}) {
//   return (
//     <>
//     <div className="nav-container container">
//       <div>
//         <img alt='image'
//           alt="logo"
//           className="nav-logo"
//           src="https://hairsncares.com/assets/img/logo.png"
//         />
//       </div>

//       <div className="nav-right">
//         <div className="user-svg">
//           <FaRegUser size={20} />
//         </div>
//       </div>
//     </div>
//     <div className="container">
//     <div className="dashboard-container">
//       <div className="left-column">
//        {/* <NavLink to={'/admin-dashboard'}>Transactions</NavLink> */}
//        <NavLink to={'/admin-dashboard'}>Operational</NavLink>
//        <NavLink to={'/all-hair-test-result'}>All Hair Test Results</NavLink>
//        {/* <NavLink to={'/all-patient-list'}>Patient List</NavLink> */}
//        <NavLink to={'/all-patient-list'}>Order</NavLink>

//        {/* <NavLink to={'/add-doctor'}>Add Doctor</NavLink> */}
//        <NavLink to={'/add-doctor'}>Website</NavLink>

//        {/* <NavLink to={'/all-doctor'}>All Doctors List</NavLink> */}
//        <NavLink to={'/all-doctor'}>Ecommerce</NavLink>

       
//        {/* <NavLink to={'/assign-appointment'}>Assign Appointments</NavLink> */}
//       </div>
//       <div className="right-column">
//      {children}
//       </div>
//     </div>

//     </div>
//   </>
//   )
// }
import React, { useState } from 'react';
import { FaRegUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate,useLocation } from 'react-router-dom';

export default function AdminNavbar({ children }) {
  const navigate = useNavigate();
  const location=useLocation()

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [orderDropdownVisible, setOrderDropdownVisible] = useState(false);
  const [websiteDropdownVisible, setWebsiteDropdownVisible] = useState(false);
  const [ecommerceDropdownVisible, setEcommerceDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    orderDropdownVisible&&setOrderDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
  };

  const toggleOrderDropdown = () => {
    setOrderDropdownVisible(!orderDropdownVisible);
    dropdownVisible&&setDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
  };

  const toggleWebsiteDropdown = () => {
    setWebsiteDropdownVisible(!websiteDropdownVisible);
    ecommerceDropdownVisible&&setEcommerceDropdownVisible(false)
    dropdownVisible&&setDropdownVisible(false)
    orderDropdownVisible&&setOrderDropdownVisible(false)


  };

  const toggleEcommerceDropdown = () => {
    setEcommerceDropdownVisible(!ecommerceDropdownVisible);
    dropdownVisible&&setDropdownVisible(false)
    orderDropdownVisible&&setOrderDropdownVisible(false)
    websiteDropdownVisible&&setWebsiteDropdownVisible(false)

  };

  return (
    <>
      <div className="nav-container container">
        <div>
          <img alt='image'
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
            <div className='tab-color' onClick={toggleDropdown}>Operational {dropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {dropdownVisible && (
              <>
                <div className={location.pathname.includes("/admin-dashboard")?'select':''}  onClick={() => navigate('/admin-dashboard')}>All Hair Test Results</div>
                <div onClick={() => navigate('/all-contact-us-form-result')}>All Contact Us Form Results</div>
                <div onClick={() => navigate('/all-patient-list')}>All Patient List</div>
                <div onClick={() => navigate('/add-doctor')}>Add Doctor</div>
                <div onClick={() => navigate('/all-doctor')}>All Doctor List</div>


                {/* Add more sublinks as needed */}
              </>
            )}
            <div className='tab-color' onClick={toggleOrderDropdown}>Order {orderDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {orderDropdownVisible && (
              <>
                <div onClick={() => navigate('/manage-order')}>All Orders</div>
                {/* Add more sublinks related to orders as needed */}
              </>
            )}
            <div className='tab-color' onClick={toggleWebsiteDropdown}>Website{websiteDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {websiteDropdownVisible && (
              <>
                <div onClick={() => navigate('/manage-website')}>Manage Website</div>
                {/* Add more sublinks related to website as needed */}
              </>
            )}
            <div className='tab-color' onClick={toggleEcommerceDropdown}>Ecommerce {ecommerceDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
            {ecommerceDropdownVisible && (
              <>
                <div onClick={() => navigate('/add-product')}>Add Product</div>
                <div onClick={() => navigate('/edit-delete-product')}>Edit and Delete Product</div>
                {/* Add more sublinks related to ecommerce as needed */}
              </>
            )}
          </div>
          <div className="right-column">{children}</div>
        </div>
      </div>
    </>
  );
}
