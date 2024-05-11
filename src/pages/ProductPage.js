import React from 'react'
import Navbar from '../features/nav/Navbar'
import Products from '../features/products/Products'
import ShoppingFeature from '../features/shopping-feature/ShoppingFeature'
import SliderImage from '../features/video-slider/SliderImage'
import Footer from '../features/footer/Footer'

function ProductPage() {
  return (
    <div>
        <Navbar>
            <Products/>
            <ShoppingFeature/>
            <SliderImage/>
            <Footer/>
        </Navbar>
    </div>
  )
}

export default ProductPage