import logo from './logo.svg';
import './App.css';
import BorderAnimation from './components/BorderAnimation';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroBanner from './components/IntroBanner';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Modal/>
      <Header/>                
      <IntroBanner/>                                                     
      <ProjectList />                                                   
      <Footer/>
    </div>
  );
}

export default App;
