$.fn.ignore = function (sel) {
  return this.clone()
    .find(sel || ">*")
    .remove()
    .end();
};

jQuery.fn.textNodes = function () {
  return this.contents().filter(function () {
    return this.nodeType === Node.TEXT_NODE && this.nodeValue.trim() !== "";
  });
};

var check = $(".title").ignore("div").text().trim();

function switchDOM() {
  if (check === "Sign up") {
    $(".title").textNodes().replaceWith("Login");
    $(".link").text("create an account");
    $("#First-name").toggleClass("hide");
    $("#Second-name").toggleClass("hide");
    $(".subscribe").text("Login");
    check = "Login";
  } else if (check === "Login") {
    $(".title").textNodes().replaceWith("Sign up");
    $(".link").text("login to your account");
    $("#First-name").toggleClass("hide");
    $("#Second-name").toggleClass("hide");
    $(".subscribe").text("Sign Up");
    check = "Sign up";
  }
}
$(".link").on("click", function () {
  switchDOM();
});
