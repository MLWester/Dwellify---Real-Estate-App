import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { toast } from 'react-toastify'

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Account created successfully!')
  }

  return (
    <div
      className='min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden relative'
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id='Signup'
    >
      <div className='absolute inset-0 bg-black/40'></div>
      <Navbar />
      <div className={`relative ${/* push below navbar */''} z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 mx-4 mt-24 md:mt-32`}>
        <div className='flex justify-center mb-6'>
          <img src={assets.logo} alt='Dwellify logo' className='h-8' />
        </div>
        <h2 className='text-2xl font-semibold text-gray-800 text-center mb-6'>Create your account</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm text-gray-600 mb-1'>Full Name</label>
            <input
              type='text'
              required
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Jane Doe'
              name='name'
            />
          </div>
          <div>
            <label className='block text-sm text-gray-600 mb-1'>Email</label>
            <input
              type='email'
              required
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='jane@example.com'
              name='email'
            />
          </div>
          <div>
            <label className='block text-sm text-gray-600 mb-1'>Password</label>
            <input
              type='password'
              required
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='••••••••'
              name='password'
              minLength={6}
            />
          </div>
          <div>
            <label className='block text-sm text-gray-600 mb-1'>Confirm Password</label>
            <input
              type='password'
              required
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='••••••••'
              name='confirmPassword'
              minLength={6}
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'>
            Sign up
          </button>
        </form>
        <p className='text-center text-gray-600 text-sm mt-4'>
          Already have an account? <a href='#' className='text-blue-600 underline'>Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default Signup