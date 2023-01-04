function getCursorPosition(event) {
  if (event.clientX < document.documentElement.scrollWidth / 2 && event.clientY < document.documentElement.scrollHeight) {
    document.getElementById("notaflag").style.left = 80 + "%";
  } else if (event.clientX > document.documentElement.scrollWidth / 2) {
    document.getElementById("notaflag").style.left = 20 + "%";
  }
}

function flagClick() {
  fetch('stock2.php')
    .then(response => response.text())
    .then(name => {
      alert("Bien joué ! Décode le flag et il est à toi !: " + name);;
    });
}

document.addEventListener("keydown", function (event) {
  if (event.key == "F12") {
    document.getElementById("notaflag").style.display = "none";
  }
}, true);

document.addEventListener("contextmenu", function () {
  document.getElementById("notaflag").style.display = "none";
});

window.onload = function () {
  document.getElementById("notaflag").style.top = Math.floor(Math.random() * 100) + "%";
}
