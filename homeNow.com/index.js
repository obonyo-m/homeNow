$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
var bod = document.getElementById("bod");
var x = 100;
var z = setInterval(zoom, 5);
function zoom() {
  if (x >= 150) {
    clearInterval(z);
  } else {
    x += 0.05;
    bod.style.backgroundSize = x + "%";
  }
}
window.onload = function() {
  zoom();
};
