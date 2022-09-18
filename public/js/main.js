var menu          = document.querySelector("#menu-icon");
var menuDropdown  = document.getElementById("menu-dropdown");

menu.addEventListener('click', () => {
  menuDropdown.style.display = 'block';
});

document.addEventListener('mouseup', function(e) {
  if (!menuDropdown.contains(e.target) && menuDropdown != null) {
    menuDropdown.style.display = 'none';
  }
});

