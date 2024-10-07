import React from 'react'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authServices from '../../appwrite/auth'
import { Button } from '../index'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authServices.logout().then( () => {
            console.log("logout")
            dispatch(logout())
            window.location.reload(false)
        })
    }

  return (
    <div>
        <Button onClick={logoutHandler} className='hover:text-white hover:bg-red-500 px-3 rounded-md py-1 text-base text-red-500 bg-white font-normal'>
            Log Out
        </Button>
    </div>
  )
}

export default LogoutBtn