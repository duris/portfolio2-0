import '../styles/Nav.css'
import { useRef } from 'react'

export default function Nav(props) {
  let projects = document.getElementById('project-tab')
  let home = document.getElementById('home-tab')
  let contact = document.getElementById('contact-tab')
  function goToProjects() {    
    projects.classList.add('active')
    home.classList.remove('active')
    contact.classList.remove('active')
    projects.scrollIntoView()
  }
  return(
    <nav className='bannerNav'>
      <ul>
        <li><a  className='active' id="home-tab" href="#home">Home</a></li>
        <li><a onClick={goToProjects} id="project-tab" href="#products">Projects</a></li>
        <li><a href="#contact" id="contact-tab">Contact</a></li>
      </ul>
    </nav>
  )
}