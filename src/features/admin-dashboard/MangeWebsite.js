import React, { useState } from 'react';
import '../hero-section/Hero.css'
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function ManageWebsite() {
  const navigate = useNavigate();
  const [selectedHero, setSelectedHero] = useState(1);
  const [spanText, setSpanText] = useState("WITNESS A REMARKABLE");
  const [h2Text, setH2Text] = useState("HAIR GROWTH IN");
  const [headingText, setHeadingText] = useState("JUST FEW MONTHS");
  const [hairTestButtonText, setHairTestButtonText] = useState("TAKE HAIR TEST");
  const [bookAppointmentButtonText, setBookAppointmentButtonText] = useState("BOOK AN APPOINTMENT");

  const handleSpanChange = (e) => {
    setSpanText(e.target.value);
  };

  const handleH2Change = (e) => {
    setH2Text(e.target.value);
  };

  const handleHeadingChange = (e) => {
    setHeadingText(e.target.value);
  };

  const handleHairTestTextChange = (e) => {
    setHairTestButtonText(e.target.value);
  };

  const handleBookAppointmentTextChange = (e) => {
    setBookAppointmentButtonText(e.target.value);
  };

  return (
    <AdminNavbar>
      <div className='icon-wrap'>
        <div className='main-hero'>
          <div className={`hero-section ${selectedHero === 1 ? 'active1' : ''}`}>
            <div className='wrapper'>
              <div className='hero-container container'>
                <div className='hero-content'>
                  <div className='hero-heading'>
                    <input
                      type="text"
                      value={spanText}
                      onChange={handleSpanChange}
                      className='editable-input'
                    />
                    <input
                      type="text"
                      value={h2Text}
                      onChange={handleH2Change}
                      className='editable-input'
                    />
                    <input
                      type="text"
                      value={headingText}
                      onChange={handleHeadingChange}
                      className='editable-input'
                    />
                    <div className='hero-btn'>
                      <input
                        type="button"
                        value={hairTestButtonText}
                       
                        className='btn primary'
                        onChange={handleHairTestTextChange}
                      />
                      <input
                        type="button"
                        value={bookAppointmentButtonText}
                      
                        className='btn'
                        onChange={handleBookAppointmentTextChange}
                      />
                    </div>
                  </div>
                 <div className='Edit-Image'> <input type="file" accept="image/*" />
                  <img alt='image' className='hero-image' src='/uploads/admprhero-banner.png' alt='Hair Growth' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`hero-section ${selectedHero === 2 ? 'active1' : ''}`}>
            <div className='wrapper'>
              <div className='hero-container container'>
                <div className='hero-content'>
                  <div className='hero-heading'>
                    <input
                      type="text"
                      value={spanText}
                      onChange={handleSpanChange}
                      className='editable-input'
                    />
                    <input
                      type="text"
                      value={h2Text}
                      onChange={handleH2Change}
                      className='editable-input'
                    />
                    <input
                      type="text"
                      value={headingText}
                      onChange={handleHeadingChange}
                      className='editable-input'
                    />
                    <div className='hero-btn'>
                      <input
                        type="button"
                        value={hairTestButtonText}
                        onClick={() => navigate('/hair-test')}
                        className='btn primary'
                        onChange={handleHairTestTextChange}
                      />
                      <input
                        type="button"
                        value={bookAppointmentButtonText}
                        onClick={() => navigate('/book')}
                        className='btn'
                        onChange={handleBookAppointmentTextChange}
                      />
                    </div>
                  </div>
                  <div className='Edit-Image'> <input type="file" accept="image/*" />
                  <img alt='image' className='hero-image' src='/uploads/admprhero-banner-two.png' alt='Hair Growth' /></div>
                  {/* <img alt='image' className='hero-image' src='/uploads/admprhero-banner-two.png' alt='Hair Growth' /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="radio-buttons3">
            <label>
              <input
                type="radio"
                value={1}
                checked={selectedHero === 1}
                onChange={() => setSelectedHero(1)}
              />
            </label>
            <label>
              <input
                type="radio"
                value={2}
                checked={selectedHero === 2}
                onChange={() => setSelectedHero(2)}
              />
            </label>
          </div>
        </div>
        <div className='icon-abs'>
          <FaFacebook size={25} />
          <FaWhatsapp size={25} />
        </div>
      </div>
    </AdminNavbar>
  );
}

export default ManageWebsite;
