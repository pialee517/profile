import React, { useRef, useState } from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer'
import Nav from './Nav';

const Layout = () => {
  const refAbout = useRef()
  const refTimeLine = useRef()
  const refProjects = useRef()
  const refSkills = useRef()
  const refBanner = useRef()
  const refContact = useRef()
  const [list, setList] = useState(
      [refAbout, refTimeLine, refProjects, refSkills, refBanner, refContact])
  const scroll = (menu) =>{
    switch(menu){
      case 'about':
        refAbout.current.scrollIntoView({ behavior: 'smooth' , block: "end", inline: "nearest" })
        break
      case 'timeline':
        console.log(menu)
        refTimeLine.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'projects':
        refProjects.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'skills':
        refSkills.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'banner':
        refBanner.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        refContact.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        refAbout.current.scrollIntoView({ behavior: 'smooth'})
        break
    }
  }

  return (
    <React.Fragment>
        <Nav scrollMethod={scroll}/>
        <Outlet context={list} />
        <Footer />
    </React.Fragment>
  )
}

export default Layout