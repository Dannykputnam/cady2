import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children}) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleRegister = () => {
      axios.post ('/api/auth', user )
      .then (res => {
        setUser(res.data.data)
        navigate('/area')
      })
      .catch (err => {
        console.log(err)
      })
  }

  const handleLogin = (user) => {
    axios.post ('/api/auth/sign_in', user)
    .then (res => {
      setUser(res.data.data)
      navigate('/area')
    })
    .catch (err => {
      console.log(err)
    })
  }

  const handlelogout = () => {
    axios.delete('/api/auth/sign_out')
    .then (res => {
      setUser(null)
      navigate('/login')
    })
    .catch (err => {
      console.log(err)
    })
  }


return (
  <AuthContext.Provider value={{
    user,
    setUser: (user) => setUser(user),
    handleRegister,
    handleLogin,
    handlelogout,
    authenticated: user !== null,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;