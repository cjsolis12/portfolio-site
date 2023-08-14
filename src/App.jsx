import { Routes, Route } from "react-router-dom";
import "./index.css";

//Layouts
import Layout from "./layouts/Layout";

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
      <Routes>
        <Route element={<Layout currentSection="home"><Home /></Layout>} />
        <Route path="about" element={<Layout currentSection="about"><About /></Layout>} />
        <Route path="work" element={<Layout currentSection="work"><Work /></Layout>} />
        <Route path="skills" element={<Layout currentSection="skills"><Skills /></Layout>} />
        <Route path="contact" element={<Layout currentSection="contact"><Contact /></Layout>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
