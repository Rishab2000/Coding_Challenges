function circleAnimation(event) {
  if ($(event.target).hasClass("circle-animation-fadeout")) {
    $(event.target)
      .removeClass("circle-animation-fadeout")
      .addClass("circle-animation-fadein");
    $(`#tick-${event.target.id.split("-").pop()}`)
      .removeClass("tick-animation-fadein")
      .addClass("tick-animation-fadeout");
  } else {
    $(event.target)
      .removeClass("circle-animation-fadein")
      .addClass("circle-animation-fadeout");
   $("#tick-" + event.target.id.split("-").pop())
      .removeClass("tick-animation-fadeout")
      .addClass("tick-animation-fadein");
    console.log("tick-" + event.target.id.split("-").pop());
    console.log(`tick-${event.target.id.split("-").pop()}`);
  }
}

$(`.circle`).on("click", function (event) {
  circleAnimation(event);
});
