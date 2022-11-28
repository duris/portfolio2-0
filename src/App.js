import logo from './logo.svg';
import './App.css';
import BorderAnimation from './components/BorderAnimation';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroBanner from './components/IntroBanner';

function App() {
  return (
    <div className="App">
      <Header/>                
      <IntroBanner/>                                                     
      <ProjectList />                                                   
      <Footer/>
    </div>
  );
}

export default App;
