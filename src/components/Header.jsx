import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex 
    items-center w-full overflow-hidden'
    style={{backgroundImage: `url(${assets.header_img})`}} 
    id='Header'> 
        <Navbar />
        <motion.div 
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}

        className='container text-center mx-auto py-4
        px-6 md:px-20 lg:px-32 text-white will-change-transform'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px]
            inline-block max-w-3xl font-semibold pt-20'>
                Explore Homes that Fit Your Lifestyle</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white px-8
                py-3 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500 border 
                border-white px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>

       
      
    </div>
  )
}

export default Header
