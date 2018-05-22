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

var j = 0;
var images = [];
var time = 7000;

images[0] = 'Images/black-white-bigpart-welds.jpg';
images[1] = 'Images/coated-parts.jpg';
images[2] = 'Images/curing-oven.jpg';
images[3] = 'Images/metal-testing.jpg';
images[4] = 'Images/penetrant.jpg';


function changeImg(){
  document.picture.src = images[j]

  if(j < images.length - 1){
    j++;
  }
  else{
    j = 0;
  }

  setTimeout("changeImg()",time);
}

window.onload = changeImg;
