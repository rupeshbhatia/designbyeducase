import React from 'react'
import "./Landing.css"
function Landing() {
  return (
    <div id='landingPage'>
     <h2 id="layout-heading">Wecome to PopX</h2>
     <p id="layout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     <button className='create btns'>Create Account</button>
 
     <button className='login btns'>Already Registered? Login</button>
    </div>
  )
}

export default Landing