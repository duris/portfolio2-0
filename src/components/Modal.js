import '../styles/Modal.css'


export default function Modal(props) {
  function closeModal() {
    let modal = document.getElementById('modal')    
    modal.style.animationName = 'fade-out'   
    let h2 = document.getElementById('modalHeading')
    h2.innerText = "Goodbye"
    setTimeout(() => {
      modal.style.display = 'none'          
      modal.style.animationName = ''
      h2.innerText = "Hello from the modal!"
    }, 700);
  }
  return(
    <div id="modal" onClick={closeModal}>      
      <h2 id="modalHeading">Hello from the modal!</h2>
    </div>
  )
}