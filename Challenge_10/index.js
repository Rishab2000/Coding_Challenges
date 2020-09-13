var hamburger = $(".hamburger");

console.log($(hamburger)[0].classList[1]);

var text = $(".text");

$(hamburger).on("click", function () {
  $(hamburger).removeClass("pause").addClass("active");
  $(text).removeClass("pause").addClass("active");
});

$(text).on("click", function () {
  $(hamburger).removeClass("active");
  $(text).removeClass("active");
  console.log("test");
});
