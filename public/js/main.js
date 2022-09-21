var menuDropdown  = document.getElementById("menu-dropdown");
var userDropdown  = document.getElementById("user-dropdown");

document.addEventListener('mouseup', function(e) {
  if (menuDropdown != null) {
    if (!menuDropdown.contains(e.target)) {
      menuDropdown.style.display = 'none';
    }
  }
});

document.addEventListener('mouseup', function(e) {
  if (userDropdown != null) {
    if (!userDropdown.contains(e.target)) {
      userDropdown.style.display = 'none';
    }
  }
});