import React, { useEffect } from 'react'
import {assets, projectsData} from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {

const [currentIndex, setCurrentIndex] = React.useState(0)
const [cardsToShow, setCardsToShow] = React.useState(1)
const [slideOffsets, setSlideOffsets] = React.useState([])
const trackRef = React.useRef(null)

useEffect(() => {
    const computeOffsets = () => {
        if (!trackRef.current) return;
        const children = Array.from(trackRef.current.children);
        const offsets = children.map(child => child.offsetLeft);
        setSlideOffsets(offsets);
    };

    const updateCardsToShow = () => {
        let newCardsToShow = 1;
        const width = window.innerWidth;
        if (width >= 1024) newCardsToShow = 4; // lg and up
        else if (width >= 768) newCardsToShow = 3; // md
        else if (width >= 640) newCardsToShow = 2; // sm
        setCardsToShow(newCardsToShow);
        const newMaxIndex = Math.max(projectsData.length - newCardsToShow, 0);
        setCurrentIndex(prev => Math.min(prev, newMaxIndex));
        // Recompute offsets after layout
        requestAnimationFrame(computeOffsets);
    };

    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => 
        window.removeEventListener('resize', updateCardsToShow);
    
}, [])


const nextProject = () => {
    const maxIndex = Math.max(projectsData.length - cardsToShow, 0);
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
}
const prevProject = () => {
    const maxIndex = Math.max(projectsData.length - cardsToShow, 0);
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
}

  return (
    <motion.div
    initial={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32
    my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

   {/*slider buttons*/}
    
    <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='previous project'>
            <img src={assets.left_arrow} alt="previous" />
        </button>
        <button onClick={nextProject} 
        className='p-3 bg-gray-200 rounded mr-2' aria-label='next project'>
            <img src={assets.right_arrow} alt="next" />
        </button>
    </div>

    {/*Project Slider Container*/}
    <div className='overflow-hidden'>
        <div ref={trackRef} className='flex gap-8 transition-transform duration-500 ease-out will-change-transform'
        style={{transform: slideOffsets.length ? `translateX(-${slideOffsets[currentIndex]}px)` : undefined}}
        >
            {projectsData.map((project, index) => (
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <img src={project.image} alt={project.title} className='w-full
                    h-auto mb-14'/>
                    <div className='absolute left-0 right-0 bottom-5 justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {project.title}
                            </h2>
                            <p className='text-gray-500 text-sm'>
                                {project.price} <span className='px-1'>|</span> {project.location}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    </div>
    
    </motion.div>
  )
}

export default Projects
