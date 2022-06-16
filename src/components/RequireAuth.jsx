import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from './AuthContext'

const RequireAuth = ({children}) => {
    const {isAuth} = useContext(AuthContext)
 
    
      if(!isAuth)
      {
         return  <Navigate to="/login" />
      }
      else
      {
          return children;
      }

  
  
}

export default RequireAuth
