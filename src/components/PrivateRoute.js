import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate, useNavigate, redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
const PrivateRoute = ({children}) => {
   const {isLoggedIn} = useStateContext();
   const navigate = useNavigate();
   useEffect(() => {
    if (!isLoggedIn) {
     
      navigate('/login');
    }
   }, [isLoggedIn])
   
  return (
    <div>
        { console.log("Inside Private Route")}
      {isLoggedIn ? (children) :  null }
    </div>
  )
}

export default PrivateRoute
