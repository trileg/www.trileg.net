$(window).load(init());

function init() {
  $("#profile_img").mouseover(function() {
    $("#profile_img").attr("src", "me.png");
  });
  $("#profile_img").mouseout(function() {
    $("#profile_img").attr("src", "real.jpg");
  });
}
