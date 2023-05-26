import { useEffect } from "react";
import Aos from "aos";

import "./About.css";
import "aos/dist/aos.css";

import img9 from "../../images/IMG_2380.jpg";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div id="About" className="about">
        <h1>About me</h1>
        <div className="about-flex" data-aos="fade-up">
          <div className="left-content">
            <img src={img9} alt="" />
          </div>
          <div className="right-content">
            <h2>I'm Chang</h2>
            <p>
              Hi, my name is Chang, Nathapab Jirasaweksil, and I am a junior
              software developer with less than 1 year of experience with modern
              technologies like React js, Node js, Express JS, Mongo DB etc..
              <br />I am animated with a future that this community can bring
              towards our society and I'm constantly seeking out new challenges
              and opportunities to expand my knowledge and skill set.I firmly
              believe that technology has the power to transform lives and shape
              the future. It's this belief that drives me to be an active
              participant in the world of technology.
            </p>
            <a
              href="https://www.linkedin.com/in/changgg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
