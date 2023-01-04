function getCursorPosition(event) {
    if (event.clientX < document.documentElement.scrollWidth/2 && event.clientY < document.documentElement.scrollHeight) {
    document.getElementById("notaflag").style.left = 80 + "%";
    } else if (event.clientX > document.documentElement.scrollWidth/2) {
        document.getElementById("notaflag").style.left = 20 + "%";
    } 
}

function flagClick() {
  alert("Bien joué ! Mais ce n'est pas ici que ce trouve le flag !");
}


document.addEventListener("keydown", function(event) {
    if(event.key == "F12") {
        document.getElementById("notaflag").style.display = "none";  
    }
  }, true);

document.addEventListener("contextmenu", function() {
    document.getElementById("notaflag").style.display = "none";  
});

window.onload = function() {
    document.getElementById("notaflag").style.top = Math.floor(Math.random() * 100) + "%";
  }
  
if (document.getElementById("notaflag").value = decodeURI("Y%40%C3%B9C%C3%A0n%3At%C3%A0K%C3%A9Th%C3%AEsFl%C3%A0g!")) {
  alert("Bien joué ! Vous avez comment récupéré le flag !");
}