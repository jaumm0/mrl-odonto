import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import Services from './components/Services.jsx'
import Workon from './components/Workon.jsx'
import Dep from './components/Dep.jsx'
import About from './components/About.jsx'
import Prefooter from './components/Prefooter.jsx'
import Footer from  './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function App() {


  return (
    <>
    <Header />
    <Inicio/>
    <Services/>
    <Workon/>
    <Dep/>
    <About/>
    <Prefooter/>
    <Footer/>
    <WhatsAppButton />
    </>
  )
}

export default App
