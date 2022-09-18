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


var leftArrow   = document.getElementById("left-icon");
var rightArrow  = document.getElementById("right-icon");
var left        = 1;
var right       = 10;

function show() {
  for (let i = left; i <= right; i++) {
    document.getElementById("tag" + i).style.display = "inline";
  }
}

leftArrow.addEventListener('click', () => {
  document.getElementById("tag" + left).style.display = "none";
  left += 1
  right += 1

  for (let i = left; i <= right; i++) {
    document.getElementById("tag" + i).style.display = "inline";
  }
})

rightArrow.addEventListener('click', () => {
  if (left > 1) {
    document.getElementById("tag" + right).style.display = "none";
    left -= 1
    right -= 1

    for (let i = left; i <= right; i++) {
      document.getElementById("tag" + i).style.display = "inline";
    }
  }
})