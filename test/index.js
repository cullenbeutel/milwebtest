/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menubtn')) {

    var menus = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openDropdown = dropdowns[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
}

var slideIndex = 1;
showSlides(slideIndex;)
function plusSlides(n) {
  showSlides(slideIndex += n);
}
