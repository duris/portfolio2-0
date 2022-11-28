import BorderAnimation from "./BorderAnimation"

export default function ProjectList(props) {
  return(
    <>
    <BorderAnimation p1='1' p2='2'/>
      <main className='main-container'> 
        <div className="main-wrapper" id="projectList">
        <h2>Projects</h2>
        <div className='main-center'>                   
                <div className='box-item'>  
                  <div className='box-content'></div>
                  <h2>PixelPrinted</h2>
                </div>
                <div className='box-item'>              
                  <div className='box-content'></div>
                  <h2>BannedBooklist</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                  <h2>DreamJournal</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                  <h2>TimeLion</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                  <h2>FocusTimer</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                <h2>HandMan</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                <h2>TintLab</h2>
                </div>
                <div className='box-item'>
                  <div className='box-content'></div>
                <h2>InnovCares</h2>
                </div>
  
                
              {/* <span className='animation-border-verticle left'></span>   
              <span className='animation-border-verticle right'></span> */}
            </div>           
          </div>
      </main>
      <BorderAnimation p1='3' p2='4'/>
    </>
  )
}