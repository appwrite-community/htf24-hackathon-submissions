import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

const Navbar = () => {

    const authStatus = useSelector((state) => state.auth.status)
    // console.log(authStatus)

    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Sign Up",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "Transactions",
            slug: "/transactions",
            active: authStatus
        },
        {
            name: "Financial Tips",
            slug: "/finance",
            active: authStatus
        }

    ]

    return (
        <div>
            <nav className='fixed left-0 right-0 top-0 z-10'>
                <ul className='flex px-7 justify-between items-center py-3 bg-slate-400 text-black text-lg font-bold'>
                    {navItems.map((item, index) => (
                        item.active ? (<li key={index} className='hover:text-gray-50'>
                            <Link to={item.slug}>{item.name} </Link>
                        </li>) : null
                    ))}
                    {authStatus && <li><LogoutBtn /></li>}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar