import React from 'react'
import Navbar from '../features/nav/Navbar'
import About from '../features/about-us/About'
import Footer from '../features/footer/Footer'
export default function AboutUsPage
() {
  return (
    <div>
        <Navbar>
           <About/>
           <Footer/>
        </Navbar>
    </div>
  )
}
