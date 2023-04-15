const coords = {x: 0, y: 0,};
const circles = document.querySelectorAll(".circle");
const circle = document.querySelector(".circle");
circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});
const b = document.querySelector(".one");

b.onmouseenter = function(){
  circles.forEach(function (circle) {
    circle.style.display = "block";
  });
  b.onmousemove = function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    animateCircles();
  };
};
b.onmouseleave  = function(){
  circles.forEach(function (circle) {
    circle.style.display = "none";
  });
};
function animateCircles() {
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (12 - index) / 10;
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
}

//##############################################################################################################################