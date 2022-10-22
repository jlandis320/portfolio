import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar /> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
