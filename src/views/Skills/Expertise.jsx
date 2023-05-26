import React from "react";
import "./Expertise.css";
import ExpertiseBox from "../../components/SkillsBox/ExpertiseBox";

//icons
import HTML from "../../images/html5-plain-wordmark.png";
import CSS from "../../images/css3-plain-wordmark.png";
import JS from "../../images/javascript-original.png";
import REACT from "../../images/react-original.png";
import NODEJS from "../../images/nodejs-original.png";
import GIT from "../../images/git-plain.png";

function Expertise() {
  return (
    <>
      <div id="Expertise" className="services">
        <h1>My Skills</h1>
        <div className="boxes">
          <ExpertiseBox animation="fade-up" img={HTML} heading="" text="" />
          <ExpertiseBox animation="fade-up" img={CSS} heading="" text="" />
          <ExpertiseBox
            animation="fade-up"
            img={JS}
            heading=""
            text=""
            className="icon-js"
          />
          <ExpertiseBox animation="fade-up" img={REACT} heading="" text="" />
          <ExpertiseBox animation="fade-up" img={NODEJS} heading="" text="" />
          <ExpertiseBox animation="fade-up" img={GIT} heading="" text="" />
        </div>
      </div>
    </>
  );
}

export default Expertise;
