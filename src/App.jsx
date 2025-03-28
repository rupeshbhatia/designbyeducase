import React from 'react'
import Landing from './components/Landing'
import './App.css'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import { Route, Routes } from 'react-router-dom'
import AccountSettings from './components/AccountSettings'
function App() {
  return (
  //  <Routes>
  //   <Route path='/' element={<Landing/> }/>
  //   <Route path='/signin' element={ <SignIn/>}/>
  //   <Route path='/createAccount' element={<CreateAccount/>}/>
  //  </Routes>
  <AccountSettings/>
  )
}

export default App