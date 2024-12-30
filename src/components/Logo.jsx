import React from 'react'
import logo from "../assets/Logo/Logo.png"

function Logo({width = '100px'}) {
  return (
    <div className='rounded-3xl overflow-hidden hover:scale-105 duration-100'>
      <img src={logo} alt="Logo" style={{width}}/>
    </div>
  )
}

export default Logo
