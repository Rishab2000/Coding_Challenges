var myText = "";

function appendElements(number) {
  console.log($('.input-box').val());

  $('.search-suggestions').append(
    $('<p class="search-items" id = "' + number + '"></p>')
  );
}

$('.input-box').on('input', function () {
  myText = $(this).val();

  if (myText.length) {
    $('.search-suggestions').addClass("show");
  } else {
    $('.search-suggestions').removeClass('show');
  }

  $("#0").html($('<span class ="bold">' + myText + '</span>'));
  $("#1").html('Veritatis et <span class ="bold">' + myText + '</span>');
 $("#2").html('Veritatis et <span class="bold">'  + myText + '</span> vero eos');
});

for (i = 0; i < 3; i++) {
  appendElements(i);
}
