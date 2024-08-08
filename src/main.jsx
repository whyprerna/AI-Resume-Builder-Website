import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignInPage from './auth/sign-in/index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router=createBrowserRouter([
  {
    element:<App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element:<SignInPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
