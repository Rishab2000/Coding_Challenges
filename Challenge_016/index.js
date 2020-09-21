$(".circle").on("click", function () {
  for (i = 1; i < 13; i++) {
    $(`.ln${i}`).toggleClass(`ln${i}-clicked`);
    console.log(`ln${i}`);
    console.log(`ln${i}-clicked`);
  }
  $('.circle').toggleClass('circle-active')
});
