import React, { useState } from "react";
import "./BookAppointment.css";
import { CgFormatBold } from "react-icons/cg";
function BookAppointment() {
  return (
    <>
      <div className="book-appointment">
        <div className="book-appointment-container container">
          <div>
            <h1 className="contect-us-heading">CONTACT US</h1>
          </div>
          <div>
            <img alt='hair' src="https://hairsncares.com/assets/img/contact/conctact-banner.png" />
          </div>
          <div>
            <h4 className="sub-had-2">HAVE QUESTIONS OR FEEDBACK?</h4>
            <h2 className="cont-head-2">WE ARE HERE TO HELP</h2>
          </div>
        </div>
      </div>

      <div className="contect-input container">
        <div className="input-content">
          <h2>Book a Quick Online Appointment</h2>
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <input placeholder="Your Phone" />
        
          <textarea placeholder="Your Message" />
          <form>
          <p>Preferred</p>
       <i className="item-i"> <label className="check-contact">
            <input type="checkbox" />
            Whatsapp
          </label>
          <label className="check-contact">
            <input type="checkbox" />
            Whatsapp
          </label>
          <label className="check-contact">
            <input type="checkbox" />
            Whatsapp
          </label>
          <label className="check-contact">
            <input type="checkbox" />
            Whatsapp
          </label>
          </i>
        </form>
          <button className="input-button-content">Book Now</button>
        </div>
        <div>
          <h2>How it works</h2>
          <figure className="text-center">
            <img alt='hair' src="/assets/img/contact/howitwork.jpg" />
          </figure>
          <p className="text-list">
            <span>01</span>Complete online Hair test
          </p>
          <p className="text-list">
            {" "}
            <span>02</span>Take a virtual consultation with Dermatologist
          </p>
          <p className="text-list">
            <span>03</span> Get your detailed hair analysis report
          </p>
          <p className="text-list">
            <span>04</span>Get a customised hair growth solution with lifestyle
            advice at your doorstep
          </p>
        </div>
      </div>
      <div className="get-in container">
        <h2>Get in touch</h2>
        <div className="touch-container">
          <div className="touch">
            <img alt='hair' src="https://hairsncares.com/assets/img/icons/location.png" />
            <div className="c-content">
              <h4>HairsNCares</h4>
              <p>
                101, Kane Plaza, Off Link Rd, near Carters Blue, Mindspace,
                Malad West, Mumbai, Maharashtra 400064 India
              </p>
            </div>
          </div>
          <div className="touch">
            <img alt='hair' src="https://hairsncares.com/assets/img/icons/contact-icon.png" />
            <div className="c-content">
              <h4>+91 9136028327</h4>
              <p>hairsncares@gmail.com</p>
            </div>
          </div>
          <div className="touch">
            <img alt='hair' src="https://hairsncares.com/assets/img/icons/time.png" />
            <div className="c-content">
              <h4>Mon - Fri: 9AM - 7PM</h4>
              <p>Sat - Sun: 11AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
