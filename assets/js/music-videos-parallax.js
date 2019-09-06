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
