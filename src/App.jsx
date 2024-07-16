import React from 'react'
import { 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Route
  } from "react-router-dom"
import ReactDOM from "react-dom/client";
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Navbar from './components/organisms/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import './App.css'

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/skills" element={<Skills />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} />
    </Route>
  
))
  return (
   
    <div>
      <main className="text-gray-400 body-font bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...css">
        <RouterProvider router={router} />
      </main>
    </div>
    
  );
}
