import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // small timeout to allow layout
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    }
  }, [location.hash])
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home


