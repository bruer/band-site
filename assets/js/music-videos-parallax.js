function parallax() {
  let container = document.getElementById("music-videos-container");
  let multiplier = 0.3;
  let distance = elementDistanceFromBottomOfViewport(container);

  container.style.transform = "translateY(-" + distance * multiplier + "px)";
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallax, false);
  addEventListener('load', parallax, false);
  addEventListener('scroll', parallax, false);
}

function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();

  return window.innerHeight - rect.top;
}

function parallaxLeif1() {
  let container = document.getElementById("music-videos-leaf-1-box");
  console.log(container);
  let multiplier = 0.4;
  let distance = elementDistanceFromBottomOfViewport(container);

  container.style.transform = "translateY(-" + distance * multiplier + "px)";
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxLeif1, false);
  addEventListener('load', parallaxLeif1, false);
  addEventListener('scroll', parallaxLeif1, false);
}

function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();

  return window.innerHeight - rect.top;
}

function parallaxLeif2() {
  let container = document.getElementById("music-videos-leaf-2-box");
  console.log(container);
  let multiplier = 0.4;
  let distance = elementDistanceFromBottomOfViewport(container);

  container.style.transform = "translateY(" + distance * multiplier + "px)";
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallaxLeif2, false);
  addEventListener('load', parallaxLeif2, false);
  addEventListener('scroll', parallaxLeif2, false);
}

function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();

  return window.innerHeight - rect.top;
}