document.addEventListener("DOMContentLoaded", function() {
  var box1 = document.querySelector('.box1');
  var box2 = document.querySelector('.box2');
  var dziubek = document.querySelector('.menu>li>.dziubek');


  box1.addEventListener('mouseover', function(event) {
    var underlineLeft = this.querySelector('.underline-short');
    underlineLeft.style.display = "none";
  });
  box1.addEventListener('mouseout', function(event) {
    var underlineLeft = this.querySelector('.underline-short');
    underlineLeft.style.display = "block";
  });
  box2.addEventListener('mouseover', function(event) {
    var underlineRight = this.querySelector('.underline-short');
    underlineRight.style.display = "none";
  });
  box2.addEventListener('mouseout', function(event) {
    var underlineRight = this.querySelector('.underline-short');
    underlineRight.style.display = "block";
  });

  dziubek.parentElement.addEventListener('mouseover', function() {
    document.querySelector('.menu>li>ul.dziubek').style.display = "block";
  });

});

$(document).ready(function() {
  $('.bxslider').bxSlider();

});
