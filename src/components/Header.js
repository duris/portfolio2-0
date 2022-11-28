import { useEffect } from "react"
import BorderAnimation from "./BorderAnimation"
export default function Header(params) {

 

  function goToProjects() {
    
    // console.log(list)
    
  }
  useEffect(() => {
    document.getElementById("projectList").scrollTo()
  }, [])
  
  return(
    <>
    <header className="App-header">
      <nav>
        <a href="/">Home</a>
        <a onClick={goToProjects}>projects</a>
        <a href="#">blog</a>
        <a href="#">contact</a>        
      </nav>     
    </header> 
    <BorderAnimation p1='a' p2='b'/>  
    </>
  )
}