console.log("Js connected");

$(".button").on("click", function () {
  if ($(".mover").hasClass("click-left")) {
    $(".left").addClass("hide-text-left");
    $(".right").removeClass("hide-text-right");
    $(".mover").removeClass("click-left");
    $(".mover").addClass("click-right");
  } else {
    $(".right").addClass("hide-text-right");
    $(".left").removeClass("hide-text-left");
    $(".mover").removeClass("click-right");
    $(".mover").addClass("click-left");
  }
});
