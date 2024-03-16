import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/PublicRoute.jsx'
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>

    <RouterProvider router={Router}/>
  </ThemeProvider>
  </React.StrictMode>,
)
