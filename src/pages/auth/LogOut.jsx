import { useEffect } from 'react'

const LogOut = () => {
    useEffect(()=>{
        localStorage.removeItem("authUser");
        window.location='/'
    })
  return null
}

export default LogOut