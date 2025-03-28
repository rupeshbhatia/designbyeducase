import React from 'react'
import './AccountSetting.css'
import img from '../assets/img.png'
import cam from '../assets/cam.png'
function AccountSettings() {
  return (
    <div>
      <div className="topbar">
     
      <p id='ac-txt'>Account Settings</p>
      </div>
       <div className='profile'>
       <div className="profile-pic">
        <img src={img} alt="proifle-image" />
       </div>
       <div className="profile-txt">
        <p id="uname">Marry Doe</p>
        <p id='gmail'>Marry@Gmail.Com</p>
       </div>
       <div className='para'>
       Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
       </div>
       <div className="camera-icon">
        <img src={cam} alt="camera-icon" />
       </div>
       </div>
    </div>
  )
}

export default AccountSettings