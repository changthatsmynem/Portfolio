import React from "react";
import "./ExpertiseBox.css";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ExpertiseBox(props) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div data-aos={props.animation}>
        <div className="card">
          <div className="box">
            <div className="icon">
              <img
                className={props.className || "icon-skills"}
                src={props.img}
              />
            </div>
            <div className="heading">{props.heading}</div>
            <p className="text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertiseBox;
