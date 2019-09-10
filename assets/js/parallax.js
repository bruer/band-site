function parallax() {
  let el = document.querySelectorAll(".parallax")
  for (let i = 0; i < el.length; i++) {
    let direction = el[i].getAttribute("data-direction");
    let mult = el[i].getAttribute("data-mult");
    let distance = elementDistanceFromBottomOfViewport(el[i]);
    /* el[i].style.transform = `translate ${ + direction + distance * mult} px)`; */
    el[i].style.transform = "translate" + direction + distance * mult + "px)";
  }
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallax, false);
  addEventListener('load', parallax, false);
  addEventListener('scroll', parallax, false);
}

// DistanceFromBottom
function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}
