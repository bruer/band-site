function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top;
}

function translate(element, n, direction) {
  let distance = elementDistanceFromBottomOfViewport(element);
  let multiplier = n;

  element.style.transform =
    "translateY(" + direction + distance * multiplier + "px)";
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallaxLeaf, false);
  addEventListener("load", parallaxLeaf, false);
  addEventListener("scroll", parallaxLeaf, false);
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
  addEventListener("DOMContentLoaded", parallaxLeft, false);
  addEventListener("load", parallaxLeft, false);
  addEventListener("scroll", parallaxLeft, false);
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
  addEventListener("DOMContentLoaded", parallaxRight, false);
  addEventListener("load", parallaxRight, false);
  addEventListener("scroll", parallaxRight, false);
}
