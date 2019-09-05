function parallax() {

    var header = document.querySelector(".about-foreground");
    // console.log(header);
    var multiplier = 0.3;

    // console.log(isElementInViewport(header));

    if (isElementInViewport(header)) {
        var distance = elementDistanceFromBottomOfViewport(header);
        
        // console.log(distance);
        console.log(distance * multiplier);
        
        header.style.transform = "translateY(" + distance*multiplier + "px)";
      }
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    console.log("rect top "+rect.top);
    console.log("rect bottom "+rect.bottom);
    // console.log("rect left "+rect.left);
    // console.log("rect right "+rect.right);
    
    console.log("window height "+window.innerHeight);
    // console.log("window width "+window.innerWidth);
    // alert(window.innerWidth);

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
    //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    // addEventListener('DOMContentLoaded', parallax, false); 
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
  }
  
  function elementDistanceFromBottomOfViewport(el) {
    var rect = el.getBoundingClientRect();
  
    return window.innerHeight - rect.top;
    // return window.innerWidth - rect.right;
  }