// import './App.css';
import { useRef } from "react"
import { useEffect } from "react";

export default function BorderAnimation(props) {

  let myRef = useRef(null);
  // let myRef2 = useRef(null);

  useEffect(() => {
    const element = document.getElementById(`b-h${props.p1}`);
    const element2 = document.getElementById(`b-h${props.p2}`);


    if(props.p1<3){
      const timer = setTimeout(() => {
        element.style.display = 'block'
        element2.style.display = 'block'
      }, 0);
    } else {
      const timer = setTimeout(() => {
        element.style.display = 'block'
        element2.style.display = 'block'
      }, 600);
    }
    

  },[])


  return(
    <div className="border-b"  ref={myRef}>
      <div>
        <span className="animation-border-horizontal" id={`b-h${props.p1}`}></span>
      </div>
      <div>
        <span className="right-animation-border" id={`b-h${props.p2}`} ></span>
      </div>
    </div>
  )
}