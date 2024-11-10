import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../Context'
export const Logout = () => {

  const {LogoutUser}=useAuth();

  useEffect(()=>{
    LogoutUser()
    console.log("logout successful")
  },[LogoutUser])

  return <Navigate to='/login'/>
}

