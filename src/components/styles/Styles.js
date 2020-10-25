import {css} from 'glamor'

let fade = css.keyframes({
  from: { color: "black" },
  to: { color: "#9e2500" },
});

export let linkStyling = css(
  {
    ":hover": {
      textDecoration: "none",
      animation: `${fade} 1s`,
      color: "#9e2500",
    },
  },
  {
    color: "black",
    fontFamily:"Rubik"
  }
);

export let logoStyling = css(
  {
    ":hover": {
      textDecoration: "none",
      animation: `${fade} 1s`,
      color: "#9e2500",
    },
  },
  {
    color: "black",
    fontFamily:"Lobster"
  }
)

export let hoverBurger = css({
  "hover": {
    cursor : "pointer"
  }
})

export let mobileNav = css({
  color:'black',
  textDecoration:'none'
})

export let pages = css({
  paddingTop:'52px'
})