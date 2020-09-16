function circleAnimation(event) {
  if ($(event.target).hasClass("circle-animation-fadeout")) {
    $(event.target)
      .removeClass("circle-animation-fadeout")
      .addClass("circle-animation-fadein");
    $(`#tick-${event.target.id.split("-").pop()}`)
      .removeClass("tick-animation-fadein")
      .addClass("tick-animation-fadeout");
    $(`#item-${event.target.id.split("-").pop()}`)
      .removeClass("item-animation-fadeout")
      .addClass("item-animation-fadein");
  } else {
    $(event.target)
      .removeClass("circle-animation-fadein")
      .addClass("circle-animation-fadeout");
    $("#tick-" + event.target.id.split("-").pop())
      .removeClass("tick-animation-fadeout")
      .addClass("tick-animation-fadein");
   $("#item-" + event.target.id.split("-").pop())
    .removeClass("item-animation-fadein")
    .addClass("item-animation-fadeout");
  }
}

$(`.circle`).on("click", function (event) {
  circleAnimation(event);
});
