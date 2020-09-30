function explode(e, t) {
  var parentPosition = $(t).offset();

  var mX = e.pageX - parentPosition.left;
  var mY = e.pageY - parentPosition.top;

  $('.circle').css({ left: mX, top: mY });
  $('.circle').addClass('explode');
  $('.circle').removeClass('displode')
}

function displode(e, t) {
 var parentPosition = $(t).offset();

 var mX = e.pageX - parentPosition.left;
 var mY = e.pageY - parentPosition.top;

 $('.circle').css({ left: mX, top: mY });
 $('.circle').addClass('displode');
 $('.circle').removeClass('explode')
}

$(".b3").hover(
  function (event) {
    explode(event, $(this));
  },
  function (event) {
   displode(event, $(this));
  }
);
