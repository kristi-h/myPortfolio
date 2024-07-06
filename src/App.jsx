import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <main className="text-gray-400 body-font bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...css">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    </div>
    
  );
}