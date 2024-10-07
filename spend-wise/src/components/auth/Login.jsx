import React, { useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { Button, Input } from '../index.js'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const [isLogginIn, setIsLogginIn] = useState(false)
  const [user, setuser] = useState(null)
  const [heading, setHeading] = useState("Login")

  const login = async (data) => {
    setError("")
    setIsLogginIn(true)
    try {
      const session = await authService.login(data)
      if (session) {
        const user = await authService.getCurrentUser()
        if (user) {
          dispatch(storeLogin(user))
          setuser(user)
          // console.log(user)
        }
        window.location.reload(false)

      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    setHeading(isLogginIn ? "Processing..." : "Login")
  }, [isLogginIn])

  return (
    <div className='rounded-lg shadow-2xl bg-slate-200 p-5 sm:w-2/3 md:w-1/2 m-auto'>
      <div className="heading flex justify-center">
        <h1 className='font-semibold text-3xl my-7'>{heading}</h1>
      </div>
      <hr />
      <div className="form p-1 my-7">
        <form onSubmit={handleSubmit(login)} className='px-7 m-5 flex flex-col items-center gap-10'>

          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email"
              }

            })}
          />

          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8
            }
            )}
          />

          <Button
            className='text-white bg-blue-500 rounded-lg p-2 w-1/3 my-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            type="submit"
            disabled={isLogginIn}
            >
            Login
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="signup flex justify-center py-8">
          <p>
            Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login