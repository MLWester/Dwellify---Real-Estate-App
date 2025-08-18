import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="footer logo" />
            <p className='text-white mt-4'>Find your dream home with Dwellify.</p>
        </div>
        <div className='w-full md:1/3 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#Header" className='text-white'>Home</a>
                <a href="#About" className='text-white'>About Us</a>
                <a href="#Contact" className='text-white'>Contact Us</a>
                <a href="#" className='text-white'>Privacy Policy</a>
                
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our News Letter</h3>
            <p className='text-white mb-4 max-w-80'>Stay updated with the 
                latest news and offers from Dwellify.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Enter your email' className='p-2 
                    rounded bg-gray-800  w-full text-white border border-gray-700 
                    focus:outline-none md:w-auto' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
