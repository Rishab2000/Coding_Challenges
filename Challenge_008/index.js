var number = parseInt($(".number").text());

console.log($(".number").find(".fade-inup"));

// $(".number").find(".fade-outup").remove();

// $(".number").find(".fade-outdown").remove();

// // $(".number").find("span").removeClass();
function updateNumber(value) {
  number = number + value;

  console.log(number);

  $(".number").find(".fade-outup").remove();

  $(".number").find(".fade-outdown").remove();

  $(".number").find("span").removeClass();

  if (value < 0) {
    $(".number").find("span").addClass("fade-outdown");
    $(".number").append('<span class = "fade-indown">' + number);
  } else {
    $(".number").find("span").addClass("fade-outup");
    $(".number").append('<span class = "fade-inup">' + number + "</span>");
  }
}

$(".minus").on("click", function () {
  updateNumber(-1);
});

$(".plus").on("click", function () {
  updateNumber(1);
});
