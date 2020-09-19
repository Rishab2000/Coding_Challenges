var newNumber;

function map(n, start1, stop1, start2, stop2) {
  newNumber = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  // console.log(newNumber);
  return newNumber;
}

function color(hue) {
  var hsvText = "hsl(" + hue + ",  96%, 51%, 1)";
  console.log(hsvText);
  $('.slider').css({"background-color": hsvText});
  $('')
}

$(".slider").on("input", function (event) {
  console.log(map(event.target.value, 1, 500, 29, 103));
  color(map(event.target.value, 1, 500, 29, 103));
  // console.log(hue);
  // color(map(event.target.value, 1, 100, 29, 103));
});
