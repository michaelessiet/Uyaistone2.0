import React from "react";
// import { pages } from "./styles/Styles";
import valstone from "../images/valstone.jpg";
import threedblocks from "../images/3dblocks.jpg";
import threedpanels from "../images/3dpanels.jpg";
import ancientcastle from "../images/ancientcastle.jpg";
import arnoldtrav from "../images/arnoldtrav.jpg";
import europetrav from "../images/europetrav.jpg";
import greekslate from "../images/greekslate.jpg";
import rockbrick from "../images/rockbrick.jpg";
import romanstone from "../images/romanstone.jpg";
import woodbark from "../images/woodbark.jpg";
import "./styles/Products.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Products({ pageTransition, transitionProps }) {
  const productList = [
    {
      id: 1,
      img: valstone,
      title: "Val Stone",
      desc:
        "One of our most beautiful stones made by our parent company Psalmstone Ltd. This stone is highly durable and water resistant which means it can be used in showers, fountains and even in pools. It is highly multi-purpose and durable. Its beauty allows it to be applied in resturants, hotels, apartments, mansions and houses.",
    },
    {
      id: 2,
      img: threedblocks,
      title: "3D Block",
      desc:
        "These 3D blocks are our signature blocks which cannot be found anywhere else so if you're looking for something to impress your friends and family this block is for you as it will give your home, office or restaurant a unique look and design.",
    },
    {
      id: 3,
      img: threedpanels,
      title: "3D Wall Panels",
      desc:
        "Our 3D wall panels can be placed on any wall turning from standard to unique. These panels allow for high customization with little work to no work because our team will do all of the work for you. These panels are highly durable and easy to install. Contact us for more information on these panels.",
    },
    {
      id: 4,
      img: ancientcastle,
      title: "Ancient Castle",
      desc:
        "The most beautiful stone we have is the ancient castle. The ancient castle has one of the most unique designs you will ever see on a stone. Unfortunately this stone does not have as much customization options as the other stones but this allows you to pick the design of the emblem you would want on the wall, contact us for further enquiries on this stone.",
    },
    {
      id: 5,
      img: arnoldtrav,
      title: "Arnold Travertine",
      desc:
        "Arnold travertine a truly beautiful stone for those who would like the look of the look but not the texture of the Greek slate stone. This is an amazing stone for the minimalistic types and as well as flamboyant individuals. Why choose this stone? Well because it fits in with any type of home decor.",
    },
    {
      id: 6,
      img: europetrav,
      title: "European Travertine",
      desc:
        "The European Travertine slate as smooth as it looks, it can be used on buildings to ensure that your building has an amazing smooth texture. It can be used in homes and offices. We assure you that this stone will blow both your friends and family away.",
    },
    {
      id: 7,
      img: greekslate,
      title: "Greek Slate",
      desc:
        "One of our most beautiful stones made by our parent company Psalmstone Ltd. This stone is highly durable and water resistant which means it can be used in showers, fountains and even in pools. It is highly multi-purpose and durable. Its beauty allows it to be applied in resturants, hotels, apartments, mansions and houses.",
    },
    {
      id: 8,
      img: rockbrick,
      title: "Rock Brick",
      desc:
        "This rock brick antique can be used in place of normal red, brown and grey brick walls. Rock brick antique can be customized according to the clients specifications it can be whatever color and even brick spacing it all depends on you. Our goal is to satisfy your needs and this stone can help us do that.",
    },
    {
      id: 9,
      img: romanstone,
      title: "Roman Stone",
      desc:
        "This stone has a limestone feel but do not be alarmed as that was the intended texture. We assure you that this stone is not limestone for those of you who are worried about it losing its look and color, it is more durable than it seems.",
    },
    {
      id: 10,
      img: woodbark,
      title: "Wood Bark Brick",
      desc:
        "The Wood Bark Brick antique gives you a wood bark look and a granite texture. We allow you to choose the color and size of this stone which allows for a very unique and special look for your home and business.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const productRender = productList.map((product) => {
    return (
      <motion.div>
        <motion.div className="product-container">
          <img src={product.img} alt="" />
          <div>
            <h1 style={{ fontFamily: "Lobster" }}>{product.title}:</h1>
            <p>{product.desc}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  });

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transitionProps}
    >
      <div className="general-container">
        {productRender}
        <div className="filler"></div>
      </div>
    </motion.div>
  );
}

export default Products;
