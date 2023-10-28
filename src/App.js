import React from 'react'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import {  Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
      <main className='container m-3'>
          <Routes>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </main>
      
  )
}

export default App