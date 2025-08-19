import React, { useEffect } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    const animateScrollTo = (targetY, duration = 600) => {
        const startY = window.scrollY || window.pageYOffset;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutQuad(progress);
            window.scrollTo(0, startY + distance * eased);
            if (elapsed < duration) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const smoothScrollTo = (id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const y = section.getBoundingClientRect().top + window.scrollY;
        animateScrollTo(y, 600);
        if (history && history.replaceState) {
            history.replaceState(null, '', `#${id}`);
        }
    }

useEffect(() => {
        if(showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between
        items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="Logo" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" onClick={(e) => { e.preventDefault(); smoothScrollTo('Header'); }} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" onClick={(e) => { e.preventDefault(); smoothScrollTo('About'); }} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" onClick={(e) => { e.preventDefault(); smoothScrollTo('Projects'); }} className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" onClick={(e) => { e.preventDefault(); smoothScrollTo('Testimonials'); }} className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button  className='hidden md:block bg-white px-8 py-2 
            rounded-full'>
               Sign up
            </button>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="menu icon" 
            className='md:hidden w-7 cursor-pointer'/>
        </div>
        {/*---------mobile-menu-------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="cross icon" />
                </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#Header" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => smoothScrollTo('Header'), 100); }} className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="#About" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => smoothScrollTo('About'), 100); }} className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="#Projects" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => smoothScrollTo('Projects'), 100); }} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="#Testimonials" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => smoothScrollTo('Testimonials'), 100); }} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
