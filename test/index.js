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

  var j = 0;
  var images = [];
  var captions = [];
  var time = 7000;

  images[0] = 'Images/metal-testing.jpg';
  images[1] = 'Images/coating.jpg';
  images[2] = 'Images/curing-oven.jpg';
  images[3] = 'Images/penetrant.jpg';
  images[4] = 'Images/black-white-bigpart-welds.jpg';
  captions[0] = 'Metal finishing, coatings, nondestructive testing, precision welding';
  captions[1] = 'Coated parts at MIL';
  captions[2] = 'IR Curing Oven';
  captions[3] = 'Liquid Dye Penetrant';
  captions[4] = 'Precision 5-axis machining – prior to chem film, mask, anodize';
  
