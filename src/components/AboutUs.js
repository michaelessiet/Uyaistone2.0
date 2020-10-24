import React from "react";
import Anime from "react-anime";
import "./styles/AboutUs.css";
import { pages } from "./styles/Styles";

function AboutUs() {
  return (
    <Anime opacity={[0, 1]} duration={[5000]}>
      <div {...pages}>
        <div className="about-us-container">
          <div className="what-we-do">
            <h1>What We Do</h1>
            <p>
              Consumers seek stones having higher quality in tensile and
              compressive strength, diversity in design & colour with affordable
              price tag. These days due to different reasons such as: low
              quality of natural stones, no adherence to substrate in a long
              term, higher moisture absorption, low resistance to current
              climate change, limited sources to extract couple with
              environmental factors, limited colours and designs, pollution
              permeation into internal tissues of stone, turbidity in long term
              makes using engineered stone with suitable quality and pricing a
              replacement of natural stone. Psalmstone is the new idea in the
              construction industry, making the mix of mineral, natural and
              chemical-polymer materials with uses of alteration in molecular
              tissues of Type 1 marble cement (crystallization) to cause
              polymerization reactions. By changing molecular tissues, materials
              would be 2-3 times stronger than concrete and 2 times stronger
              than natural stones having high adherence and compressive
              strength, lower moisture absorption, resistance against turbidity
              into molecular tissues of stone. Etc. Furthermore, products are
              available in a vast spectrum due to usage of various designs,
              colours, with these the traditional problem of natural stone is
              solved.
            </p>
          </div>
          <div className="our-services">
            <h1>Our Services</h1>
            <p>
              Uyaistone and Psalmstone with our state of the art manufacturing
              plant can create client’s signature look. The outstanding
              exterior/interior décor and design services includes – Building
              construction, Landscaping, Ceiling designs, wall decors, floor
              designs, kitchen design, wardrobes decors & accessory designs,
              products for a well designed package, to cater to all your
              creative needs. Our interior designing services also involves
              custom designed furniture and furnishings.
            </p>
          </div>
        </div>
      </div>
    </Anime>
  );
}

export default AboutUs;
