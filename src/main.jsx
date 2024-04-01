import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { Home } from './components/pages/Home.jsx'
import { Contact } from './components/pages/Contact.jsx'
import { About } from './components/pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
