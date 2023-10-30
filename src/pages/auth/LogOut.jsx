import { useEffect } from 'react'

const LogOut = () => {
    useEffect(()=>{
        localStorage.removeItem("storeUser");
        window.location='/'
    })
  return null
}

export default LogOut