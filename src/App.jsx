import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import About from "./components/About/About";
// import Contact from "./pages/Contact/Contact";
// import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
