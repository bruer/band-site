function parallax() {
  // var box = document.querySelector(".about-foreground");

  // var multiplier = 0.2;

  // var distance = elementDistanceFromBottomOfViewport(box);

  // box.style.transform = "translateY(" + distance * multiplier + "px)";

  var boxes = document.querySelectorAll(".about-text");

  var multiplier = 0.2;

  boxes.forEach(function(box) {
    var distance = elementDistanceFromBottomOfViewport(box);

    // box.style.transform = "translateY(" + distance * multiplier + "px)";
  });
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallax, false);
  addEventListener("load", parallax, false);
  addEventListener("scroll", parallax, false);
}

function elementDistanceFromBottomOfViewport(el) {
  var rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}
