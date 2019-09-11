function setBackgroundHeight() {
  var bg = document.querySelector("");
  var boxes = document.querySelectorAll("");
  var lastBox = boxes.item(boxes.length - 1);

  // boxes.forEach(function(box) {
  //   console.log(box.offsetTop + box.offsetHeight);
  //   console.log(box.getBoundingClientRect());
  // });

  bg.style.height = lastBox.offsetTop + lastBox.offsetHeight + "px";
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