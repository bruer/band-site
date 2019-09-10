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
