// Submit button animation

let submitButtonMouseover = document.querySelector(".music-videos-discography-item");
let submitButtonMouseout = document.querySelector(".music-videos-discography-item");

submitButtonMouseover.addEventListener("mouseover", function () {
  anime({
    targets: ".music-videos-discography-item",
    scale: 1.3,
    easing: "easeInCubic",
    duration: 400,
  });
});

submitButtonMouseout.addEventListener("mouseout", function () {
  anime({
    targets: ".music-videos-discography-item",
    scale: 1,
    easing: "easeInCubic",
    duration: 400,
  });
});