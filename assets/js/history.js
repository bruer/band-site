if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallaxLeaf, false);
  addEventListener("load", parallaxLeaf, false);
  addEventListener("scroll", parallaxLeaf, false);
}

function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}

function translate(element, n, direction) {
  let distance = elementDistanceFromBottomOfViewport(element);
  let multiplier = n;

  element.style.transform = "translateY(" + direction + distance * multiplier + "px)";
}

function parallaxLeaf() {
  let leaf1 = document.querySelector(".leaf-box-1");
  let leaf2 = document.querySelector(".leaf-box-2");
  let leaf3 = document.querySelector(".leaf-box-3");
  let leaf4 = document.querySelector(".leaf-box-4");
  let leaf5 = document.querySelector(".leaf-box-5");
  let leaf6 = document.querySelector(".leaf-box-6");
  let leaf7 = document.querySelector(".leaf-box-7");
  let leaf8 = document.querySelector(".leaf-box-8");

  translate(leaf1, 0.2, "-");
  translate(leaf2, 0.5, "");
  translate(leaf3, 0.3, "-");
  translate(leaf4, 0.2, "");
  translate(leaf5, 0.2, "");
  translate(leaf6, 0.1, "-");
  translate(leaf7, 0.7, "");
  translate(leaf8, 0.4, "-");
}






























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
