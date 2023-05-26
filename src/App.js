import "./App.css";
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
// import ParticleBackground from "../ParticleBackground";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Expertise from "./views/Skills/Expertise";
import Project from "./views/Project/Project";
import Contact from "./views/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="body">
        <div id="loading_start" className="loading_start_none">
          <p>Loading</p>
          <PulseLoader color={"#05e6ee"} size={12} />
        </div>
        <Navbar />
        <Home />
        <About />
        <Expertise />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;
