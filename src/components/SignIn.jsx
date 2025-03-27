import React from 'react'
import './SignIn.css'
function SignIn() {
  return (
   <div className='loginPage'>
   <h2 id="login-head">Signin to your PopX account</h2>
   <p id="login-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 </p>
   <form id='login-form'>
    <label htmlFor="" id='email-label'>Email Address</label>
    <input type="email" placeholder='Enter email address' className='email'/>
    <label htmlFor="" id='password-label'>Password</label>
    <input type="password" name="" id="" placeholder='Enter password' className='pwd'/>
  <br /> 
   <button className='loginBtn'>Login</button>
   </form>
   </div>
  )
}

export default SignIn