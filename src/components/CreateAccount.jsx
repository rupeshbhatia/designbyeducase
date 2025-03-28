import React, { useState } from 'react'
import './CreateAccount.css'
import { useNavigate } from 'react-router-dom'
function CreateAccount() {
let navi=useNavigate()
  const[name,setName]=useState("")
  const[cname,setCname]=useState("")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  const[pass,setPass]=useState("")
  const[check,setCheck]=useState(false)

  const formData=(e)=>{
e.preventDefault()
let user={
  name:name,
  email:email,
  company:cname,
  number:number,
  pwd:pass,
  agency:check
}
localStorage.setItem("user",JSON.stringify(user))
navi("/profile")

  }
  return (
    <div id='createAccount'>
      <h3 id='create-head'>Create your PopX account</h3>
      <form onSubmit={formData} id='create-form'>
        <div className='input-box'>
          <label htmlFor="fname" id=''>Full Name<span className='text-danger'>*</span></label>
          <input type="text" id='name'value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <label htmlFor="number" >Phone number<span className='text-danger'>*</span></label>
          <input type="number" name="" id="number" value={number} onChange={(e)=>setNumber(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <label htmlFor="email"  >Email address<span className='text-danger'>*</span></label>
          <input type="email" name="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <label htmlFor="pwd" >Password<span className='text-danger'>*</span></label>
          <input type="password" name="" id="password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
        </div>
        <div className='input-box'>
          <label htmlFor="fname" >Company name</label>
          <input type="text" value={cname} onChange={(e)=>setCname(e.target.value)} />
        </div>
        <div className='input-radio d-flex flex-column justify-content-between'>
          <div >Are you an Agency?<span className='text-danger'>*</span></div>
          <div className='d-flex justify-content-between align-items-center '>
           <input type="radio" onChange={(e)=>setCheck(e.target.value)} value={check} name='same'/>Yes
           <input type="radio" onChange={(e)=>setCheck(e.target.value)} value={check} name='same'/>No
           </div>
        </div>
        <button className='create-account' type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount