// parallaxUp

function parallaxUp() {
  let el = document.querySelectorAll(".parallaxUp");
  let mult = 0.1;
  for (let i = 0; i < el.length; i++) {
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    el[i].style.transform = "translateY(-" + distance * mult + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxUp, false);
  addEventListener('load', parallaxUp, false);
  addEventListener('scroll', parallaxUp, false);
}

/* TEST - funkar ej */
/* function parallaxTest(attribute) {
  let el = document.querySelectorAll(".parallaxTest");
  let n = +attribute.getAttribute("number");
  console.log(n + "hellooooooooooo n");
  for (let i = 0; i < el.length; i++) {
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    el[i].style.transform = "translateX(-" + distance * n + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxTest, false);
  addEventListener('load', parallaxTest, false);
  addEventListener('scroll', parallaxTest("attribute"), false);
} */

// parallaxLeft
function parallaxLeft() {
  let el = document.querySelectorAll(".parallaxLeft");
  let mult = 0.3;
  for (let i = 0; i < el.length; i++) {
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    el[i].style.transform = "translateX(-" + distance * mult + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxLeft, false);
  addEventListener('load', parallaxLeft, false);
  addEventListener('scroll', parallaxLeft, false);
}

// parallaxRight
function parallaxRight() {
  let el = document.querySelectorAll(".parallaxRight");
  let mult = 0.5;
  for (let i = 0; i < el.length; i++) {
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    el[i].style.transform = "translateX(" + distance * mult + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxRight, false);
  addEventListener('load', parallaxRight, false);
  addEventListener('scroll', parallaxRight, false);
}

// parallaxDown

function parallaxDown() {
  let el = document.querySelectorAll(".parallaxDown");
  let mult = 0.5;
  for (let i = 0; i < el.length; i++) {
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    el[i].style.transform = "translateY(" + distance * mult + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxDown, false);
  addEventListener('load', parallaxDown, false);
  addEventListener('scroll', parallaxDown, false);
}

// DistanceFromBottom

function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}



// function parallax() {
//   let container = document.getElementById("music-videos-container");
//   let multiplier = 0.3;
//   let distance = elementDistanceFromBottomOfViewport(container);

//   container.style.transform = "translateY(-" + distance * multiplier + "px)";
// }

// if (window.addEventListener) {
//   addEventListener('DOMContentLoaded', parallax, false);
//   addEventListener('load', parallax, false);
//   addEventListener('scroll', parallax, false);
// }

// function elementDistanceFromBottomOfViewport(el) {
//   let rect = el.getBoundingClientRect();
//   return window.innerHeight - rect.top;
// }