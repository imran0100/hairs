import React from 'react'
import './Growth.css'
function GrowthTransition() {
  return (
    <div className='growth-wrapper'>
<h1>Start Your Hair Growth Transformation</h1>
<div className='growth-container container'>
    <div>
        <img alt='hair' src='/uploads/icon1.png'/>
        <a><span>01</span> HAIR LOSS/THINING </a>
    </div>
    <div>
        <a><span>02</span>HAIR TEST</a>
        <img alt='hair' src='/uploads/icon2.png'/>
    </div>
    <div>
        <img alt='hair' src='/uploads/icon3.png'/>
        <a><span>03</span>EVOLUTION OF PHOTOS</a>
    </div>
    <div>
        <a><span>04</span>CONSULTATION</a>
        <img alt='hair' src='/uploads/icon4.png'/>
    </div>
    <div>
        <img alt='hair' src='/uploads/icon5.png'/>
        <a><span>05</span>TREATMENT PLAN</a>
    </div>
    <div>
        <a><span>06</span>HAIR GROWTH</a>
        <img alt='hair' src='/uploads/icon6.png'/>
    </div>
</div>
<div className='growth-btn'><button className='btn primary'>TAKE HAIR TEST</button></div>
    </div>
  )
}

export default GrowthTransition
