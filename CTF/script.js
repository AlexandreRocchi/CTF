function getCursorPosition(event) {

    if (event.clientX < document.documentElement.scrollWidth/2 && event.clientY < document.documentElement.scrollHeight) {
    document.getElementById("notaflag").style.left = 80 + "%";
    } else if (event.clientX > document.documentElement.scrollWidth/2) {
        document.getElementById("notaflag").style.left = 20 + "%";
    } 
}

document.addEventListener("keydown", function(event) {
    if(event.key == "F12") {
        document.getElementById("notaflag").style.display = "none";  
    }
  }, true);

document.addEventListener("contextmenu", function(event) {
    document.getElementById("notaflag").style.display = "none";  
});

let encodedStr = decodeURI(str);