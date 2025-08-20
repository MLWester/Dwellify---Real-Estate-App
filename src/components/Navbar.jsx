import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }
        smoothScrollTo(id);
    }

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
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.height = '';
        }
    return () => {
            document.body.style.overflow = 'auto';
            document.body.style.height = '';
        }
    }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-50'>
        <div className='container mx-auto flex justify-between
        items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="Logo" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="/#Header" onClick={(e) => { e.preventDefault(); goToSection('Header'); }} className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="/#About" onClick={(e) => { e.preventDefault(); goToSection('About'); }} className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="/#Projects" onClick={(e) => { e.preventDefault(); goToSection('Projects'); }} className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="/#Testimonials" onClick={(e) => { e.preventDefault(); goToSection('Testimonials'); }} className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button onClick={(e) => { e.preventDefault(); navigate('/signup'); }} className='hidden md:block bg-white px-8 py-2 rounded-full'>
               Sign up
            </button>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt="menu icon" 
            className='md:hidden w-7 cursor-pointer'/>
        </div>
        {/*---------mobile-menu-------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed inset-0 z-50 bg-gradient-to-b from-white/25 to-white/5 backdrop-blur-3xl' : 'h-0 w-0'} overflow-hidden transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="cross icon" />
                </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-900'>
                <a href="/#Header" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => goToSection('Header'), 100); }} className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="/#About" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => goToSection('About'), 100); }} className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="/#Projects" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => goToSection('Projects'), 100); }} className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="/#Testimonials" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => goToSection('Testimonials'), 100); }} className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                <a href="/signup" onClick={(e) => { e.preventDefault(); setShowMobileMenu(false); setTimeout(() => navigate('/signup'), 100); }} className='px-4 py-2 rounded-full inline-block'>Sign up</a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
