import React from "react";
import "./Project.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";
import img7 from "../../images/everlasting-projecth.png";
import img5 from "../../images/everlasting-projecth.png";
import img3 from "../../images/everlasting-projecth.png";
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
              title="TextUtils using React"
              img={img7}
              demo="https://everlasting.vercel.app/"
              link="https://github.com/JSD4-ProjectH"
            />
            <ProjectBox
              title="Portfolio Website"
              img={img5}
              link="https://github.com/ahmedrohailawan/portfolio_website_using_html_css_and_js"
            />
            <ProjectBox
              title="Food Delivery Website"
              img={img3}
              link="https://github.com/ahmedrohailawan/Food-Delivery-project"
            />
            <ProjectBox
              title="Gym Website"
              img={img4}
              link="https://github.com/ahmedrohailawan/Gym-Project"
            />
            <ProjectBox
              title="Alarm Clock using js"
              img={img1}
              link="https://github.com/ahmedrohailawan/Alarm-clock-using-javascript"
            />
            <ProjectBox
              title="File downloader using js"
              img={img2}
              link="https://github.com/ahmedrohailawan/File-downloader-with-vanilla-javasctipt"
            />
            <ProjectBox
              title="Text to speech using js"
              img={img6}
              link="https://github.com/ahmedrohailawan/Text-to-Speech-Converter-using-JavaScript"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
