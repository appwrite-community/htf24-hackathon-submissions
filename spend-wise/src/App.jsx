import { useEffect, useState } from 'react'
import './App.css'
import { Navbar, Spinner } from './components'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])
  
  return !loading ? (
    <>
      <Navbar/>
      <Outlet/>
    </>
  ) : (<Spinner />)
}

export default App
