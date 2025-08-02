import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='w-screen overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
