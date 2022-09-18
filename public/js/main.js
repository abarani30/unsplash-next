var menu          = document.querySelector("#menu-icon");
var menuDropdown  = document.getElementById("menu-dropdown");
var user          = document.querySelector("#user-avatar");
var userDropdown  = document.getElementById("user-dropdown");

menu.addEventListener('click', () => {
  menuDropdown.style.display = 'block';
});

document.addEventListener('mouseup', function(e) {
  if (!menuDropdown.contains(e.target) && menuDropdown != null) {
    menuDropdown.style.display = 'none';
  }
});

user.addEventListener('click', () => {
  userDropdown.style.display = 'block';
});

document.addEventListener('mouseup', function(e) {
  if (!userDropdown.contains(e.target) && userDropdown != null) {
    userDropdown.style.display = 'none';
  }
});