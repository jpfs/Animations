var btnPlay = document.getElementById("play");

var box = document.getElementById("box");

var points = document.getElementById("points");

var angle = 45;

var turn = true;

var start;

var totalPoints = 1000;

btnPlay.addEventListener("click", function () {
  if (turn) {
    updateELements([btnPlay, box], ["orangered", "#bbb"], ["stop", ""]);

    start = setInterval(function () {
      box.style.transform = "rotate(" + angle + "deg)";
      angle += 45;
    }, 100);
  } else {
    clearInterval(start);
    var stoppedAt = angle - 45;
    var margin = stoppedAt % 360;

    if (margin == 0) {
      updateELements([box], ["#28a745"], ["winner"]);
      totalPoints += 1000;
    } else {
      updateELements([box], ["orangered"], ["loser"]);
      totalPoints -= 360 - margin;
    }
    updateELements([btnPlay], ["#28a745"], ["play"]);
    points.innerText = totalPoints;
  }
  turn = !turn;
});

function updateELements(elements, bgColors, texts) {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = bgColors[i];
    elements[i].innerText = texts[i];
  }
}
