import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./pages/Contact/Contact";
// import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main/Main";
import { projects } from "./data/projects.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main projects={projects} />} />
        {/* <Route path="/" element={<Home projects={projects} />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
