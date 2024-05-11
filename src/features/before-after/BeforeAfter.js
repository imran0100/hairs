import React from 'react'
import './Before.css'
function BeforeAfter() {
  return (
      <div>
      <h1 className="product-title">Before & After</h1>
    <div className='before container'>
        <div className='dem0-container'>
            <img alt='image' src='/uploads/admprhair-pic1.jpg'/>
            <img alt='image' src='/uploads/admprhair-pic2.jpg'/>

        </div>
        <div className='dem0-container'>
        <img alt='image' src='/uploads/hair-pic3.jpg'/>
        <img alt='image' src='/uploads/hair-pic4.jpg'/>

        </div>
      </div>
    </div>
  )
}

export default BeforeAfter

