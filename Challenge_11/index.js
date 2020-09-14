console.log("initiation test");

$(".image").on("click", function (event) {
  if ($(".image").hasClass("active")) {
    $();
    $(`#img-${event.target.id.split("-").pop()}`).removeClass("active");
    $(`#img-${event.target.id.split("-").pop()}`).addClass("inactive");
  } else {
    $(`#img-${event.target.id.split("-").pop()}`).removeClass("inactive");
    $(`#img-${event.target.id.split("-").pop()}`).addClass("active");
  }
});
