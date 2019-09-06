function parallax() {
  var box = document.querySelector(".about-foreground ");

  var multiplier = 0.2;

  var distance = elementDistanceFromBottomOfViewport(box);

  box.style.transform = "translateY(" + distance * multiplier + "px)";

  // var boxes = document.querySelectorAll(".about-text");

  // var multiplier = 0.2;

  // boxes.forEach(function(box) {
  //   var distance = elementDistanceFromBottomOfViewport(box);
  //   box.style.transform = "translateY(" + distance * multiplier + "px)";
  // });
}

function setBackgroundHeight() {
  var bg = document.querySelector(".about-background");
  var boxes = document.querySelectorAll(".about-foreground");
  var lastBox = boxes.item(boxes.length - 1);

  // boxes.forEach(function(box) {
  //   console.log(box.offsetTop + box.offsetHeight);
  //   console.log(box.getBoundingClientRect());
  // });

  bg.style.height = lastBox.offsetTop + lastBox.offsetHeight + "px";
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", setBackgroundHeight, false);
  addEventListener("DOMContentLoaded", parallax, false);
  addEventListener("load", parallax, false);
  addEventListener("scroll", parallax, false);
}

function elementDistanceFromBottomOfViewport(el) {
  var rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}
