import React from 'react'
//component
import About from './../components/About'
import Skills from '../components/Skills'
import Contact from './../components/Contact'
import TimeLine from '../components/TimeLine'
import Projects from '../components/Projects'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <React.Fragment>
        <About />
        <TimeLine />
        <Projects />
        <Skills />
        <Banner />
        <Contact />
    </React.Fragment>
  )
}

export default Home