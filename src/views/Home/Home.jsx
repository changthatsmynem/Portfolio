import React from "react";
import "./Home.css";
import img8 from "../../../src/images/home_page.png";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="Home" className="home">
        <div className="home-flex">
          <div
            className="left-content"
            data-aos="fade-down"
            data-aos-delay="2000"
          >
            <p>Hello, My name is</p>
            <h1>Nathapab</h1>
            <h2>
              And I'm a <span className="typing"></span>
            </h2>
            <a
              href="https://drive.google.com/file/d/136e3dMk1svR0CRQUv4aA_80dTZl8TnWi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          <div
            className="right-content"
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <div className="image-container">
              <img
                src={img8}
                alt="coding-cartoon"
                className="glitch-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
