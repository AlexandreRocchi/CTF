let duration = Math.floor(Math.random() * 3);
let multiplication = Math.floor(Math.random() * (5)) + 5
let addition = Math.floor(Math.random() * (5)) + 25;
let random = Math.floor(Math.random() * (5)) + 2;
function startTimer() {
  setInterval(function () {
    duration = duration + random;
    addition = addition + random * 2;
    document.getElementById("time").innerHTML = "Le code c'est " + duration + " * " + multiplication + " + " + addition;
  }, 1000);
}

window.onload = startTimer;
function Redirect() {
  if (document.getElementById("input").value == duration * multiplication + addition) {
    fetch('stock.php')
      .then(response => response.text())
      .then(name => {
        window.location = name;
      });
  } else {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}

(function () {
  var oldLog = console.log;
  console.log = function (name) {
    name = "Tricheur !"
    oldLog.apply(console, arguments);
  };
})();
















