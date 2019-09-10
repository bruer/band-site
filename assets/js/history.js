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

// if (window.addEventListener) {
//   addEventListener("DOMContentLoaded", parallaxUp, false);
//   addEventListener("load", parallaxUp, false);
//   addEventListener("scroll", parallaxUp, false);

//   addEventListener("DOMContentLoaded", parallaxDown, false);
//   addEventListener("load", parallaxDown, false);
//   addEventListener("scroll", parallaxDown, false);
// }

function parallaxUp() {
  const elements = document.querySelectorAll(".parallax-up");

  elements.forEach(function(element) {
    let distance = elementDistanceFromBottomOfViewport(element);
    let multiplier = element.getAttribute("data-multiplier");
    element.style.transform = "translateY(-" + distance * multiplier + "px)";
  });
}

function parallaxDown() {
  const elements = document.querySelectorAll(".parallax-down");

  elements.forEach(function(element) {
    let distance = elementDistanceFromBottomOfViewport(element);
    let multiplier = element.getAttribute("data-multiplier");
    element.style.transform = "translateY(" + distance * multiplier + "px)";
  });
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallax, false);
  addEventListener("load", parallax, false);
  addEventListener("scroll", parallax, false);
}

function parallax() {
  const elements = document.querySelectorAll(".parallax");

  elements.forEach(function(element) {
    let distance = elementDistanceFromBottomOfViewport(element);
    let multiplier = element.getAttribute("data-multiplier");

    switch (element.getAttribute("data-direction")) {
      case "up":
        element.style.transform =
          "translateY(-" + distance * multiplier + "px)";
        break;
      case "down":
        element.style.transform = "translateY(" + distance * multiplier + "px)";
        break;

      default:
        console.log("no direction");
        break;
    }
  });
}
