import { Routes, Route } from "react-router-dom";


//Layouts
import Layout from "./layouts/Layout";
import Navbar from "./components/navbar/Navbar";

//Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
 
      
    <Navbar/>
      <Routes>
        <Route
          path=""
          element={
            <Layout currentSection="home">
              <Home />
            </Layout>
          }
        />
        <Route
          path="about"
          element={
            <Layout currentSection="about">
              <About />
            </Layout>
          }
        />
        <Route
          path="work"
          element={
            <Layout currentSection="work">
              <Work />
            </Layout>
          }
        />
        <Route
          path="skills"
          element={
            <Layout currentSection="skills">
              <Skills />
            </Layout>
          }
        />
        <Route
          path="contact"
          element={
            <Layout currentSection="contact">
              <Contact />
            </Layout>
          }
        />
      </Routes>
  
    </>
  );
}

export default App;
