var user = $(".users");
var storage = $(".storage");
var project = $(".projects");

var user_fill = $(".users-fill");
var storage_fill = $(".storage-fill");
var project_fill = $(".projects-fill");

function onHover(event) {
  $(`#${event.currentTarget.id}`).toggleClass("card-hovered");
  if (event.currentTarget.id == "basic") {
    user.text("10 Users");
    storage.text("50 GB");
    project.text("4 Projects");
    user_fill.css({
      background: "linear-gradient(to right, #4ffbdf, #00d2fc)",
      width: "25%",
    });
    storage_fill.css({
      background: "linear-gradient(to right, #4ffbdf, #00d2fc)",
      width: "10%",
    });
    project_fill.css({
      background: "linear-gradient(to right, #4ffbdf, #00d2fc)",
      width: "30%",
    });
  } else if (event.currentTarget.id == "pro") {
    user.text("35 Users");
    storage.text("250 GB");
    project.text("25 Projects");
    user_fill.css({
      background: "linear-gradient(to right, #00d2fc, #845ec2)",
      width: "50%",
    });
    storage_fill.css({
      background: "linear-gradient(to right, #00d2fc, #845ec2)",
      width: "35%",
    });
    project_fill.css({
      background: "linear-gradient(to right, #00d2fc, #845ec2)",
      width: "60%",
    });
  } else if (event.currentTarget.id == "premium") {
    user.text("100 Users");
    storage.text("500 GB");
    project.text("50 Projects");
    user_fill.css({
      background: "linear-gradient(to right, #845ec2, #ff6f91)",
      width: "100%",
    });
    storage_fill.css({
      background: "linear-gradient(to right, #845ec2, #ff6f91)",
      width: "100%",
    });
    project_fill.css({
      background: "linear-gradient(to right, #845ec2, #ff6f91)",
      width: "100%",
    });
  }
}

function offHover(event) {
  console.log("no Hover");
  $(`#${event.currentTarget.id}`).toggleClass("card-hovered");
  user.text(" ");
  storage.text(" ");
  project.text(" ");
  user_fill.css({ width: "0%" });
  storage_fill.css({ width: "0%" });
  project_fill.css({ width: "0%" });
}

$(".card").hover(
  function (event) {
    onHover(event);
  },
  function (event) {
    offHover(event);
  }
);
