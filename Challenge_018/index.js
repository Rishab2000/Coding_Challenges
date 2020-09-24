var record = $('.record');
var recording = $('.recording');
var circle = $('.circle')
$(".container").on("click", function () {
  startRecording();
});

function startRecording() {
  if (record.hasClass('fade-out')) {
    record.toggleClass('fade-out').toggleClass('fade-in');
    recording.toggleClass('fade-in').toggleClass('fade-out');
    circle.toggleClass('animate')
  } else {
    record.toggleClass('fade-out').removeClass('fade-in');
    recording.toggleClass('fade-in').removeClass('fade-out');
    circle.toggleClass('animate')
  }
}
