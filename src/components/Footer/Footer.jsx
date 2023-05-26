import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="author">
          <p>
            Created by{" "}
            <a
              href="https://drive.google.com/file/d/136e3dMk1svR0CRQUv4aA_80dTZl8TnWi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chang Nathapab
            </a>{" "}
            with <i className="far fa-heart"></i>
          </p>
        </div>
        <div className="">
          <p className="copyright">
            {" "}
            <i className="far fa-copyright"></i> 2023 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
