function searchActive(){
 $(".search").toggleClass("active")
}

function menuActive(){
 $(".card").toggleClass("menu-show"
 )
 $(".menu").toggleClass("here-i-am")
}

$(".search-icon-container").on("click", function(){
 searchActive();
});

$(".hamburger").on("click", function(){
 menuActive();
});