import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Signup from './components/Signup'
import Home from './pages/Home'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
