window.onscroll = function() {myFunction()};
var header = document.getElementById("navigation2");
function myFunction() {
 if (window.pageYOffset > 0) {
   header.classList.add("fixed-top");
 } else {
   header.classList.remove("fixed-top");
 }
}