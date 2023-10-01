import React from 'react'
import './App.css'
import Main from './components/main/Main'
import Definition from './components/definition/Definition'
import Future from './components/future/Future'
import Imagination from './components/imagination/Imagination'
import Register from './components/register/Register'
import Library from './components/library/Library'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Main/>
      <Definition/>
      <Future/>
      <Imagination/>
      <Register/>
      <Library/>
      <Footer/>
    </>
  )
}

export default app      