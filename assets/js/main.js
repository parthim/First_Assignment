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

// style for Intro Name
document.getElementById('intro-name').style.cssText ="color:red; font-size:30px;"

// Animation for Skills ProgressBar
 var widths = document.getElementsByClassName('progress-bar');
 for(let i=0;i<widths.length;i++){
  //  document.getElementsByClassName('progress-bar')[i].style.cssText = "width:"+width[i].innerText;
  let width =widths[i].innerText.replace(/[^0-9]/g, '');
  console.log(width);
  var w = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (w >= width) {
      clearInterval(id);
    } else {
      w++; 
      widths[i].style.width = w + '%';
      widths[i].innerText = w+'%';
    }
  }
 }

}) ();