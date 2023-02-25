import { useEffect } from "react"
import BorderAnimation from "./BorderAnimation"
import Nav from "./Nav"
export default function Header(params) {

 

  return(
    <>
    <header className="App-header">
      <Nav/>      
      <BorderAnimation p1='1' p2='2'/>            
    </header>     
    </>
  )
}