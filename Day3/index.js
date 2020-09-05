var fileInput = $("#file-input");
var fileName;

function lineMove() {
  $(".line").toggleClass("line-move");
}

function loaderAnimation() {
  $(".loader").toggleClass("loader-show");
}

// finds the value (file name) in the "event" object
function getFileName(event) {
  fileName = event.target.value.split("\\").pop();
}

// Changes  upload image logo to the text of the choosen file
function changeImage() {
  $(".drop-file-logo").hide();
  $(".file-name").html(fileName);
  $(".button-container").toggleClass("show");
}

// Button element event listener
// event handler triggers input
$(".browse-file").on("click", function () {
  fileInput.click();
});

// event listener on ipnut
// event handler triggers getting file name and changing image to text
fileInput.on("input", function (event) {
  getFileName(event);
  console.log(fileName);
  changeImage();
});

$(".done-button").on("click", function () {
  loaderAnimation();
  $(".button-container").toggleClass("show");
  lineMove();
  $(".file-name").html("Uploading...");
  setTimeout(function () {
    loaderAnimation();
    lineMove();
    $(".file-name").html("DONE")
  }, 5000);
});
