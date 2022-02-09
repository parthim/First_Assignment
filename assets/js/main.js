(function(){
    // Get the Navbar id
var navItems = document.getElementById("nav-bar");
// Get all buttons with class="btn" inside the container
var navItem = navItems.getElementsByClassName("nav-tab");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}) ();