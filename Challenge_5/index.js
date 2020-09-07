var i = 1;

function cardCycle() {
  if (i < 5) {
    $(".card-" + i).toggleClass("fade-out");
    console.log(".card-" + i);
    $(".card-" + (i + 1)).toggleClass("fade-in");
    i++;
    console.log(i);
  }
  if (i == 4) {
    i = 1;
    console.log(i);
    $(".card-1").toggleClass("fade-out");
    $(".card-2").toggleClass("fade-out").toggleClass("fade-in");
    $(".card-3").toggleClass("fade-in");
    setTimeout(function () {
      $(".card-3").toggleClass("fade-out");
    }, 1000);
  }
}

$(".button").on("click", function () {
  cardCycle();
});
