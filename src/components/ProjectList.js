import BorderAnimation from "./BorderAnimation";
import Modal from "./Modal";

export default function ProjectList(props) {
  function loadModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
  }
  return (
    <>
      <BorderAnimation p1="3" p2="4" />
      <main className="main-container">
        <div className="main-wrapper" id="projectList">
          <h1>Projects</h1>
          <div className="main-center">
            <div className="box-item" onClick={loadModal}>
              <div className="box-content"></div>
              <h2>Little Lemon</h2>
            </div>
            <div className="box-item" onClick={loadModal}>
              <div className="box-content"></div>
              <h2>Click Monster</h2>
            </div>
            <div className="box-item">
              <div className="box-content"></div>
              <h2>TravelNook</h2>
            </div>
            <div className="box-item">
              <div className="box-content"></div>
              <h2>DreamJournal</h2>
            </div>
            <div className="box-item">
              <div className="box-content"></div>
              <h2>InnovCares</h2>
            </div>
            <div className="box-item">
              <div className="box-content"></div>
              <h2>TintLab</h2>
            </div>

            {/* <span className='animation-border-verticle left'></span>   
              <span className='animation-border-verticle right'></span> */}
          </div>
        </div>
      </main>
      <BorderAnimation p1="5" p2="6" />
    </>
  );
}
