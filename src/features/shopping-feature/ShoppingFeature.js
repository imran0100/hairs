import React from 'react'
import './ShoppingFeature.css'
function ShoppingFeature() {
  return (
    <div className='shopping-feature container'>
        <div>
            <img alt='image' src='/uploads/shipping-icon1.png'/>
            <div>
                <p className='feature-heading'>FREE SHIPPING</p>
                <p>All orders above 2999</p>
            </div>
            
        </div>
        <div>
            <img alt='image' src='/uploads/shipping-icon2.png'/>
            <div>
                <p className='feature-heading'>15 DAYS RETURN</p>
                <p>Money back Guarantee</p>
            </div>
            
        </div>
        <div>
            <img alt='image' src='/uploads/shipping-icon3.png'/>
            <div>
                <p className='feature-heading'>SECURE CHECKOUT</p>
                <p>Protected by paypal</p>
            </div>
            
        </div>
        <div>
            <img alt='image' src='/uploads/shipping-icon4.png'/>
            <div>
                <p className='feature-heading'>GIFT COUPON</p>
                <p>Assured gift</p>
            </div>
            
        </div>
    </div>
  )
}

export default ShoppingFeature