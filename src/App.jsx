import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main/Main";
import { projects } from "./data/projects.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main projects={projects} />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
