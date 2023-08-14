import { Routes, Route } from "react-router-dom";
import "./index.css";

//Layouts
import Navbar from "./components/navbar/Navbar";

//Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <div>
      <Navbar/>
    <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
    </div>
    </>
  );
}

export default App;
