import React from 'react'
import Navbar from '../features/nav/Navbar'
import HairTest from '../features/hair-test/HairTest'
import ShoppingFeature from '../features/shopping-feature/ShoppingFeature'
import Footer from '../features/footer/Footer'

export default function HairTestPage() {
  return (
   <Navbar>
    <HairTest/>
    <ShoppingFeature/>
    <Footer/>
   </Navbar>
  )
}
