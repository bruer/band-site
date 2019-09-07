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