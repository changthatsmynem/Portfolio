import React from "react";
import "./Project.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";
import img7 from "../../images/everlasting-projecth.png";
import img5 from "../../images/react-form-manipulation.png";
import yummyGif from "../../images/yummy-scoop-project.gif";
import img4 from "../../images/everlasting-projecth.png";
import img1 from "../../images/everlasting-projecth.png";
import img2 from "../../images/everlasting-projecth.png";
import img6 from "../../images/everlasting-projecth.png";

function Project() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="Exercise Recording WebApp"
              img={img7}
              demo="https://everlasting.vercel.app/"
              link="https://github.com/JSD4-ProjectH"
            />
            <ProjectBox
              title="Yummy Scoop Game"
              img={yummyGif}
              demo="https://replit.com/@changthatsmynem/JSD4-Find-Scoopjs"
              link="https://replit.com/@changthatsmynem/JSD4-Find-Scoopjs"
            />
            <ProjectBox
              title="Mini Project - Form Manipulation"
              img={img5}
              link="https://github.com/changthatsmynem/career-changer-react-assessment"
            />
            <ProjectBox
              title="Exercise Recording WebApp"
              img={img4}
              link="https://github.com/JSD4-ProjectH"
            />
            <ProjectBox
              title="Exercise Recording WebApp"
              img={img1}
              link="https://github.com/JSD4-ProjectH"
            />
            <ProjectBox
              title="Exercise Recording WebApp"
              img={img2}
              link="https://github.com/JSD4-ProjectH"
            />
            <ProjectBox
              title="Exercise Recording WebApp"
              img={img6}
              link="https://github.com/JSD4-ProjectH"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
