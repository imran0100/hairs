
// import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file
// import { MdClose } from "react-icons/md";
// import { useSelector } from "react-redux";
// import BASE_URL from "../../Config";
// const Login = ({ onClose }) => {
//   const [loginMethod, setLoginMethod] = useState("email"); // Default login method is email
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});
 
//   const showLogin = useSelector((state) => state.login.showLogin);



//   const handleSubmit = async (e) => {
    
//     e.preventDefault();
//     console.log(email,password);
//     if (validateForm()) {
//       try {
//         const response = await fetch(`${BASE_URL}/users/login`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             // email: loginMethod === 'email' ? email : '',
//             // phone: loginMethod === 'phone' ? phone : '',
//             email,
//             password
//           })
          
//         });
        
//         if (!response.ok) {
//           // Handle non-successful responses here
//           const errorData = await response.json();
//           console.error('Login failed:', errorData.message);
//           // You can update state or display error messages accordingly
//           return;
//         }
  
//         // Login successful, handle response data
//         const userData = await response.json();
//         console.log('Login successful:', userData);
//         // Perform actions after successful login, such as updating state or redirecting
//       } catch (error) {
//         console.error('Error logging in:', error);
//         // Handle network errors or other unexpected errors
//       }
//     }
//   };
  

//   return (
//     <>
//       {(
//         <div className={`overlay-login ${showLogin ? 'open' : ''}`}>
//           <div className="popup-login">
//             <button className="close-btn-login" onClick={() => onClose()}>
//               <MdClose size={15} />
//             </button>
//             <div className="login-tabs">
//               <div
//                 className={`tab2-login ${loginMethod === "phone" ? "active" : ""}`}
//                 onClick={() => setLoginMethod("phone")}
//               >
//                 Phone
//               </div>
//               <div
//                 className={`tab2-login ${loginMethod === "email" ? "active" : ""}`}
//                 onClick={() => setLoginMethod("email")}
//               >
//                 Email
//               </div>
//             </div>
//             <form className="login-form" onSubmit={handleSubmit}>
//               {loginMethod === "email" && (
//                 <div>
//                   <div className="form-group">
//                     <label className="login-label">Email:</label>
//                     <input
//                       className="login-input"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {errors.email && <span className="error">{errors.email}</span>}
//                   </div>
//                 </div>
//               )}
//               {loginMethod === "phone" && (
//                 <div>
//                   <div className="form-group">
//                     <label className="login-label">Phone:</label>
//                     <input
//                       className="login-input"
//                       type="tel"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                     />
//                     {errors.phone && <span className="error">{errors.phone}</span>}
//                   </div>
//                 </div>
//               )}
//               <div className="form-group">
//                 <label className="login-label">Password:</label>
//                 <input
//                   className="login-input"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {errors.password && <span className="error">{errors.password}</span>}
//               </div>
//               <button type="submit" className="submit">Login</button>
//               <p className="signup-message">
//                 {/* Don't have an account? <Link to="/signup">Sign up here</Link> */}
//               </p>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import BASE_URL from "../../Config";
import { toggleLogin } from "./LoginSlice";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import { Hourglass } from 'react-loader-spinner';
// import { useAlert } from 'react-alert'
const Login = ({ onClose }) => {
  // const alert = useAlert()
  const [loginMethod, setLoginMethod] = useState("email"); // Default login method is email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to control the visibility of the "Forgot Password" form
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const showLogin = useSelector((state) => state.login.showLogin);
  const [loading, setLoading] = useState(false);

  const navigate =useNavigate()
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Email validation
    if (loginMethod === "email") {
      if (!email) {
        isValid = false;
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        newErrors.email = "Email is invalid";
      }
    }

    // Phone validation
    if (loginMethod === "phone") {
      if (!phone) {
        isValid = false;
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(phone)) { // Validation for 10-digit phone number
        isValid = false;
        newErrors.phone = "Phone number must be 10 digits";
      }
    }

    // Password validation
    if (!password) {
      isValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
   
    
    e.preventDefault();
   if(validateForm()){
    setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           
            email,
            password
          })
          
        });
       
        if (!response.ok) {
          // Handle non-successful responses here
          const errorData = await response.json();
          // console.error('Login failed:', errorData.message);
          toast.error('Wrong Credentials')
          // You can update state or display error messages accordingly
          return;
        }
     
        const userData = await response.json();
        console.log('Login successful:', userData.data);
        localStorage.setItem("User343", JSON.stringify(userData.data));
        if(userData.data.logedInUser.role==='doctor'){
          navigate('/doctor-dashboard')
        }else if(userData.data.logedInUser.role==='admin'){
          navigate('/admin-dashboard')
        }
        toast.success("Login Successful !");
    onClose()
        // Perform actions after successful login, such as updating state or redirecting
      } catch (error) {
        toast.error('Network Error')
    
      } finally {
        setLoading(false); // Hide loader regardless of success or failure
      }
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/forgetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
        
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Forgot Password request failed:', errorData.message);
        return;
      }
if(response.ok){
  setShowUpdatePassword(true)
  setShowForgotPassword(false)
}
     
    } catch (error) {
      console.error('Error sending Forgot Password request:', error);
    }
  };

  return (
    <> 
      {showForgotPassword ? (
        <div className="overlay-forgot">
          <div className="popup-forgot">
            <button className="close-btn-forgot" onClick={() => setShowForgotPassword(false)}>
              <MdClose size={15} />
            </button>
            <form className="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="forgot-password-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            
              <button type="submit" className="submit-forgot">Send OTP to Reset Password</button>
            </form>
          </div>
        </div>
      ) :showUpdatePassword?( <div className="overlay-update-password">
    <div className="popup-update-password">
    <button className="close-btn-forgot" onClick={() => {setShowUpdatePassword(false)}}>
              <MdClose size={15} />
            </button>
      <form className="update-password-form" >
        <div className="form-group">
          <label>Email:</label>
          <input
            className="update-password-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>OTP:</label>
          <input
            className="update-password-input"
            type="text"
            // value={otp}
            // onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            className="update-password-input"
            type="password"
            // value={newPassword}
            // onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-update-password">Update Password</button>
      </form>
    </div>
  </div>): (
        <div className={`overlay-login ${showLogin ? 'open' : ''}`}>
          <div className="popup-login">
            <button className="close-btn-login" onClick={() => onClose()}>
              <MdClose size={15} />
            </button>
            <div className="login-tabs">
              <div
                className={`tab2-login ${loginMethod === "phone" ? "active" : ""}`}
                onClick={() => setLoginMethod("phone")}
              >
                Phone
              </div>
              <div
                className={`tab2-login ${loginMethod === "email" ? "active" : ""}`}
                onClick={() => setLoginMethod("email")}
              >
                Email
              </div>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              {loginMethod === "email" && (
                <div>
                  <div className="form-group">
                    <label className="login-label">Email:</label>
                    <input
                      className="login-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                </div>
              )}
              {loginMethod === "phone" && (
                <div>
                  <div className="form-group">
                    <label className="login-label">Phone:</label>
                    <input
                      className="login-input"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>
                </div>
              )}
              <div className="form-group">
                <label className="login-label">Password:</label>
                <input
                  className="login-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <button className="forgot-password-btn" onClick={() => setShowForgotPassword(true)}>
                Forgot Password?
              </button>
              <button  type="submit" className="submit">{loading?"Please Wait":"Login"}</button>
            
              <p className="signup-message">
                {/* Don't have an account? <Link to="/signup">Sign up here</Link> */}
              </p>
            </form>
          </div>
        </div>
      )}
      {/* <ToastContainer /> */}
    </>
  );
};

export default Login;
