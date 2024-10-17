import React from 'react'
import Part from '../../components/Card/Part/Part'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Parts = () => {
  return (
    <>
      <div className="parts">
        <Navbar/>
        <Part />
        <Footer/>
      </div>
    </>
  )
}

export default Parts
