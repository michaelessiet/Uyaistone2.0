import React , { useEffect } from "react";
import { linkStyling, pages } from "./styles/Styles";
import splash from "../images/homesplash.jpg";
import "./styles/Home.css";
import Anime from "react-anime";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home({pageTransition,transitionProps}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transitionProps}
    >
      <div className="general-home-container">
        <div className="homesplash-container" {...pages}>
          <img src={splash} alt="" />
        </div>
        <div className="welcome-container">
          <Anime translateX={[1000, 0]} delay={500}>
            <div className="welcome-box">
              <Anime opacity={[0, 1]} delay={1500}>
                <h1 style={{ fontFamily: "Lobster" }}>Welcome to Uyaistone</h1>
              </Anime>
            </div>
          </Anime>
          <Anime opacity={[0, 1]} delay={2500} duration={10000}>
            <div className="explore-button">
              <button>
                <Anime>
                  <Link {...linkStyling} to="/Products">
                    Explore <RiArrowRightSLine />
                  </Link>
                </Anime>
              </button>
            </div>
          </Anime>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
