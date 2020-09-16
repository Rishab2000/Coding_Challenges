var cursor = $(".cursor");
var cursorX;
var cursorY;
var x;
var y;

function mouseMove(event) {
  x = event.pageX;
  y = event.pageY;
  cursorX = String(x + "px");
  cursorY = String(y + "px");
  cursor.css({ top: cursorY, left: cursorX });
}

$(".text-style").hover(
  function () {
    cursor.toggleClass("big");
    $(".cursor2").toggleClass("cursor-animation").toggleClass("hide");
  },
  function () {
    cursor.toggleClass("big");
    $(".cursor2").toggleClass("cursor-animation").toggleClass("hide");
  }
);

$(document).on('mousemove', function (event) {
  mouseMove(event);
});
