var i = 1;

function cardCycle() {
  $(`.card-${i}`).toggleClass("fade-in");
  $(`.card-${i}`).toggleClass("fade-out");
  i = (i + 1) % 4 ? i + 1 : 1;

  // Left side of question mark is the condition for the cycle if it is true (i+1) excutes and if its false (1) makes i = 1

  //? acts as an if statement right hand of the colon (:) excutes of the condition is true and left hand side if the condition is false

  $(`.card-${i}`).removeClass("fade-out");
  $(`.card-${i}`).addClass("fade-in");
}

$(".button").on("click", function () {
  cardCycle();
});
