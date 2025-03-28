import React from 'react'
import './CreateAccount.css'
function CreateAccount() {
  return (
    <div id='createAccount'>
      <h3 id='create-head'>Create your PopX account</h3>
      <form action="" id='create-form'>
        <div className='input-box'>
          <label htmlFor="fname" id=''>Full Name<span className='text-danger'>*</span></label>
          <input type="text" id='name' />
        </div>
        <div className='input-box'>
          <label htmlFor="number" >Phone number<span className='text-danger'>*</span></label>
          <input type="number" name="" id="number" />
        </div>
        <div className='input-box'>
          <label htmlFor="email"  >Email address<span className='text-danger'>*</span></label>
          <input type="email" name="" id="email" />
        </div>
        <div className='input-box'>
          <label htmlFor="pwd" >Password<span className='text-danger'>*</span></label>
          <input type="password" name="" id="password" />
        </div>
        <div className='input-box'>
          <label htmlFor="fname" >Company name</label>
          <input type="text" />
        </div>
        <div className='input-radio d-flex flex-column justify-content-between'>
          <div >Are you an Agency?<span className='text-danger'>*</span></div>
          <div className='d-flex justify-content-between align-items-center '>
           <input type="radio"/>Yes
           <input type="radio"/>No
           </div>
        </div>
        <button className='create-account'>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount