import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="our-promise">
          <h1>Our Promise</h1>
          <p>
            Our promise as a manufacturer is to build community value into every
            project while delivering professional expertise, ecxeptional
            customers service and quality products line for construction
            companies as well as individuals.{" "}
          </p>
        </div>
        <div className="get-in-touch">
          <h1>Get in touch</h1>
          <h3>Address:</h3>
          <p>
            2nd Ave, Banking Layout, Navy Town, Amuwo Odofin, Lagos, Nigeria.
          </p>
          <h3>Phone:</h3>
          <p>
            <a href="tel:+2348033001104">+234-803-300-1104</a>
          </p>
          <h3>Email:</h3>
          <p>
            <a href="mailto:akwadreal@gmail.com">akwadreal@gmail.com</a>
          </p>
        </div>
      </div>
			<div className="copyright">
				<p>Copyright 2020 Uyaistone | Designed by Michael Essiet</p>
			</div>
    </div>
  );
}

export default Footer;
