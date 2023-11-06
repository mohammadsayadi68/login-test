import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
    const isAuth=localStorage.getItem('authUser')
  return (
    isAuth?<Outlet/>:<Navigate to='login' />
  )
}

export default Protected