import React from 'react'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import {  Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <div className='container m-3'>
          <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </div>
      
    </div>
  )
}

export default App