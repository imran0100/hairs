import React from 'react'
import Navbar from '../features/nav/Navbar'
import OurSpecialist from '../features/our-specialist/OurSpecialist'
import Footer from '../features/footer/Footer'

function OurSpecialistsPage() {
  return (
    <div>
        <Navbar>
          <OurSpecialist/>
          <Footer/>
        </Navbar>
    </div>
  )
}

export default OurSpecialistsPage