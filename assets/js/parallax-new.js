if (window.addEventListener) {
  addEventListener("DOMContentLoaded", parallax, false);
  addEventListener("load", parallax, false);
  addEventListener("scroll", parallax, false);
}

function parallax() {
  const elements = document.querySelectorAll(".parallax");

  elements.forEach(function(element) {
    const distance = distanceFromBottomOfViewport(element);
    const multiplier = element.getAttribute("data-multiplier");

    switch (element.getAttribute("data-direction")) {
      case "up":
        element.style.transform = "translateY(-" + distance * multiplier + "px)";
        break;
      case "down":
        element.style.transform = "translateY(" + distance * multiplier + "px)";
        break;
      case "left":
        element.style.transform = "translateX(-" + distance * multiplier + "px)";
        break;
      case "right":
        element.style.transform = "translateX(" + distance * multiplier + "px)";
        break;
      default:
        console.log("no direction set");
        break;
    }
  });
}

function distanceFromTopOfViewport(element) {
  return element.getBoundingClientRect().top;
}

function distanceFromBottomOfViewport(element) {
  return window.innerHeight - element.getBoundingClientRect().top;
}
