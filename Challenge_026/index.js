$(".button_face").on("click", function () {
  $(".button").toggleClass("button_flip");
});

$(".button_face--front").hover(
  function (event) {
    var parentOffest = $(this).offset();
    var pX = event.pageX - parentOffest.left;
    var pY = event.pageY - parentOffest.top;

    $(".inner").css({ left: pX, top: pY });
    $(".inner").addClass("explode");
    $(".inner").removeClass("displode");
  },
  function (event) {
    var parentOffest = $(this).offset();
    var pX = event.pageX - parentOffest.left;
    var pY = event.pageY - parentOffest.top;

    $(".inner").css({ left: pX, top: pY });
    $(".inner").addClass("displode");
    $(".inner").removeClass("explode");
  }
);
