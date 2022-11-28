import { useEffect } from "react"
import BorderAnimation from "./BorderAnimation"
import Nav from "./Nav"
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
      <Nav/>
    </header> 
    <BorderAnimation p1='a' p2='b'/>  
    </>
  )
}