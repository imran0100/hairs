// import React from 'react'
// import './Hero.css'
// function Hero() {
//   return (
//    <div className='wrapper'>
//     <div className='hero-container container'>
//         <div className='hero-heading'>
//             <span>WITNESS A REMARKABLE</span>
//             <h2>HAIR GROWTH IN</h2>
//             <h1 >JUST FEW MONTHS</h1>
//             <div className='hero-btn'>
//                 <button className='btn primary'>TAKE HAIR TEST</button>
//                 <button className='btn'>BOOK AN APPOINTMENT </button>
//             </div>
//         </div>
//         <div style={{height:"100%"}}><img alt='image' className='hero-image' src='https://hairsncares.com/uploads/admprhero-banner.png'></img></div>
//     </div>
//    </div>
//   )
// }

// export default Hero
import React,{useState} from 'react';
import './Hero.css';
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate=useNavigate()
  const [selectedHero, setSelectedHero] = useState(1);
  return (
    <div className='icon-wrap'>
    <div className='main-hero'>
    {/* <div className='wrapper'>
      <div className='hero-container container'>
        <div className='hero-content'>
          <div className='hero-heading'>
            <span>WITNESS A REMARKABLE</span>
            <h2>HAIR GROWTH IN</h2>
            <h1>JUST FEW MONTHS</h1>
            <div className='hero-btn'>
              <button onClick={()=>navigate('/hair-test')} className='btn primary'>TAKE HAIR TEST</button>
              <button onClick={()=>navigate('/book')} className='btn'>BOOK AN APPOINTMENT</button>
            </div>
          </div>
          <img alt='image' className='hero-image' src='https://hairsncares.com/uploads/admprhero-banner.png' alt='Hair Growth' />
        </div>
      </div>
  
    </div> */}
    
      <div className={`hero-section ${selectedHero === 1 ? 'active1' : ''}`}>
      <div className='wrapper'>
      <div className='hero-container container'>
        <div className='hero-content'>
          <div className='hero-heading'>
            <span>WITNESS A REMARKABLE</span>
            <h2>HAIR GROWTH IN</h2>
            <h1>JUST FEW MONTHS</h1>
            <div className='hero-btn'>
              <button onClick={()=>navigate('/hair-test')} className='btn primary'>TAKE HAIR TEST</button>
              <button onClick={()=>navigate('/book')} className='btn'>BOOK AN APPOINTMENT</button>
            </div>
          </div>
          <img alt='image' className='hero-image' src='/uploads/admprhero-banner.png' alt='Hair Growth' />
        </div>
      </div>
  
      </div>
      </div>
      <div className={`hero-section ${selectedHero === 2 ? 'active1' : ''}`}>
      <div className='wrapper'>
      <div className='hero-container container'>
        <div className='hero-content'>
          <div className='hero-heading'>
            <span>WITNESS A REMARKABLE</span>
            <h2>HAIR GROWTH IN</h2>
            <h1>JUST FEW MONTHS</h1>
            <div className='hero-btn'>
              <button onClick={()=>navigate('/hair-test')} className='btn primary'>TAKE HAIR TEST</button>
              <button onClick={()=>navigate('/book')} className='btn'>BOOK AN APPOINTMENT</button>
            </div>
          </div>
          <img alt='image' className='hero-image' src='/uploads/admprhero-banner-two.png' alt='Hair Growth' />
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
      <FaFacebook size={25}/>
      <FaWhatsapp size={25}/>
            </div>
            </div>
  );
}

export default Hero;
