import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout} from './components'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Transactions from './pages/Transactions'
import AddTransaction from './pages/AddTransaction'
import EditTransaction from './pages/EditTransaction'
import Finance from './pages/Finance.jsx'
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/transactions',
        element: (
          <AuthLayout authentication>
            <Transactions />
          </AuthLayout>
        )
      },
      {
        path: '/finance',
        element: (
          <AuthLayout authentication>
            <Finance />
          </AuthLayout>
        )
      },
      {
        path: '/add-transaction',
        element: (
          <AuthLayout authentication>
            <AddTransaction />
          </AuthLayout>
        )
      },
      {
        path: '/update-transaction/:slug',
        element: (
          <AuthLayout authentication>
            <EditTransaction />
          </AuthLayout>
        )
      },
      {
        path: '*',
        element: (
          <AuthLayout authentication={false}>
            <NotFound />
          </AuthLayout>
        )
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  ,
)
