import '../styles/Nav.css'
import { useRef } from 'react'

export default function Nav(props) {
  

  let contactLink = document.getElementById('contact-tab')

  function goToHome() {    
    let homeDiv = document.getElementById('homeTab')
    let projectLink = document.getElementById('project-tab')
    let homeLink = document.getElementById('home-tab')
    homeDiv.scrollIntoView({ behavior: 'smooth' })
    projectLink.classList.remove('active')
    homeLink.classList.add('active')
  }
  function goToProjects() {    
    let projects = document.getElementById('projectList')
    let projectLink = document.getElementById('project-tab')
    let homeLink = document.getElementById('home-tab')
    projects.scrollIntoView({ behavior: 'smooth' })
    projectLink.classList.add('active')
    homeLink.classList.remove('active')
  }
  return(
    <nav className='bannerNav'>
      <ul>
        <li><a onClick={goToHome}  className='active' id="home-tab" href="#home">Home</a></li>
        <li><a onClick={goToProjects} id="project-tab" href="#products">Projects</a></li>
        <li><a href="#contact" id="contact-tab">Contact</a></li>
      </ul>
    </nav>
  )
}