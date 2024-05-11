import React from 'react'
import './HairAnalysis.css'
import { useNavigate } from 'react-router-dom'
export default function HairAnalysis() {
    const navigate=useNavigate()
  return (
    <div className='hair-analysis container'>
        <div className='ana anakkk'><img src='\IMG_20240418_201628.png'/></div>
        <div className='ana'>    
            <h1>Hair Analysis</h1>
            <p>Experience a new era of AI-driven hair analysis tool, in synergy with skilled dermatologists, delivering personalized solutions for your hair</p>
            <div className='hero-btn'>
              <button onClick={()=>navigate('/hair-test')} className='btn primary'>TAKE HAIR TEST</button>
              <button onClick={()=>navigate('/book')} className='btn'>BOOK AN APPOINTMENT</button>
            </div>
        </div>
    </div>
  )
}
