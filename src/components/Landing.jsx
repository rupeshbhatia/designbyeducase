import React from 'react'
import "./Landing.css"
import { useNavigate } from 'react-router-dom'
function Landing() {
  let navi=useNavigate()
  return (
    <div id='landingPage'>
     <h2 id="layout-heading">Wecome to PopX</h2>
     <p id="layout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     <button className='create btns' onClick={()=>{navi("/createAccount")}}>Create Account</button>
 
     <button className='login btns'onClick={()=>navi("/signin")}>Already Registered? Login</button>
    </div>
  )
}

export default Landing