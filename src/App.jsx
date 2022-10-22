import './App.css'
import {Routes, Route} from 'react-router-dom'
import mac from './Macintosh-working.svg'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
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
