import React, { useState } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
function SignIn() {
  let navi=useNavigate()
  let[email,setEmail]=useState("")
  let[pwd,setPwd]=useState("")
let dataSubmit=(e)=>{
  e.preventDefault()
  let user=localStorage.getItem("user");
  let data=JSON.parse(user)
  if(data.email==email && data.pwd==pwd)
{
  navi("/profile")
}
else{
  alert("Wrong Credentials")
}
}
  return (
   <div className='loginPage'>
   <h2 id="login-head">Signin to your PopX account</h2>
   <p id="login-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 </p>
   <form id='login-form' onSubmit={dataSubmit}>
    <label htmlFor="" id='email-label'>Email Address</label>
    <input type="email" placeholder='Enter email address' className='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    <label htmlFor="" id='password-label'>Password</label>
    <input type="password" name="" id="" placeholder='Enter password' className='pwd' value={pwd} onChange={(e)=>setPwd(e.target.value)}  required/>
  <br /> 
   <button className='loginBtn'>Login</button>
   </form>
   </div>
  )
}

export default SignIn