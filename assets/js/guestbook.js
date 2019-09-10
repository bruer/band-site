if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallax, false);
  addEventListener("scroll", parallax, false);
}

function parallax() {
  let fish = document.querySelector(".fish-box");
  let multiplier = fish.getAttribute("data-multiplier");
  let distance = elementDistanceFromBottomOfViewport(fish);
  console.log(multiplier * distance);

  fish.style.transform = "translateY(" + distance * multiplier + "px)";

  // var boxes = document.querySelectorAll(".about-text");

  // var multiplier = 0.2;

  // boxes.forEach(function(box) {
  //   var distance = elementDistanceFromBottomOfViewport(box);
  //   box.style.transform = "translateY(" + distance * multiplier + "px)";
  // });
}
