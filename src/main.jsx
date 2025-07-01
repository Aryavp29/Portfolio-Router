import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Routes } from 'react-router-dom'
import {createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom';
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='skills' element={<Skills/>}></Route>
      <Route path='projects' element={<Projects/>}></Route>
    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
