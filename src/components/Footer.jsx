import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start'>
        <div>
            <img src={assets.logo_dark} alt="footer logo" />
            <p className='text-white mt-4'>Find your dream home with Dwellify.</p>
        </div>
        <div>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-white'>
                <a href="#Header" className='text-white'>Home</a>
                <a href="#About" className='text-white'>About Us</a>
                <a href="#Contact" className='text-white'>Contact Us</a>
                <a href="#" className='text-white'>Privacy Policy</a>
                
            </ul>
        </div>
        <div>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our News Letter</h3>
            <p className='text-white mb-4 max-w-80'>Stay updated with the 
                latest news and offers from Dwellify.</p>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 w-full text-white border border-gray-700 focus:outline-none sm:flex-1' />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white sm:w-auto w-full'>Subscribe</button>
                </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
