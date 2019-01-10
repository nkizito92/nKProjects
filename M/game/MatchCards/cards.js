var val = ["AA", "D", "C", "O_O", "D", "C", "O_O", "AA"];

var values = [];
var flipped = 0;
var flip = [];
var sounds = document.getElementsByTagName("audio");
Array.prototype.cardsshuffle = function() {
  var i = this.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
};
// Random colors
function randomColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return "rgb( " + r + ", " + g + ", " + b + " )";
}
// change background
function changeBgroundColor() {
  clearInterval(timer);
  var bgroundColor = document.getElementById("bColors");
  var timer = setInterval(function() {
    bgroundColor.style.background =
      "linear-gradient(90deg,black," + randomColor() + ")";
  }, 4000);
}

function cards() {
  lives = 6;
  var liveDisplay = document.getElementById("lives");
  liveDisplay.innerHTML = lives;
  document.getElementById("cards").className = "firecrack".hidden = true;
  var g = (document.getElementById("reset").hidden = true);
  flipped = 0;
  var output = "";
  val.cardsshuffle();
  for (var i = 0; i < val.length; i++) {
    output +=
      '<div id="cardss' +
      i +
      '"onclick="cardflip(this,\'' +
      val[i] +
      "')\"></div>";
  }
  document.getElementById("cards").innerHTML = output;

  document.getElementById("winner").innerHTML = "";
  document.getElementById("reset").removeEventListener("click", function() {
    sounds[1].play();
    cards();
  });
}
// try  to make them images instead of letters
function cardflip(card, valu) {
  var liveDisplay = document.getElementById("lives");
  if (card.innerHTML == "" && values.length < 2) {
    card.style.background = "linear-gradient(20deg, white, black)";
    card.innerHTML = valu;
    // flips the first card
    if (values.length == 0) {
      values.push(valu);
      flip.push(card.id);
      // flips the second card
    } else if (values.length == 1) {
      values.push(valu);
      flip.push(card.id);

      if (values[0] == values[1]) {
        flipped += 2;
        values = [];
        flip = [];
        sounds[1].currentTime = 0;
        sounds[1].play();

        if (flipped == val.length) {
          sounds[1].pause();
          sounds[2].play();

          document.getElementById("winner").innerHTML = "You won the game!!!";
          document.getElementById("cards").innerHTML = "";
          var back = "back";
          if (back === "back") {
            var cback = (document.getElementById("cards").className =
              "firecrack");
            back = "normal";
          } else if (back === "normal") {
            cback.className = "";
          }
          var g = (document.getElementById("reset").hidden = false);
          var goo = document.getElementById("reset");
          goo.innerHTML = "Reset game";
          goo.addEventListener("click", function() {
            sounds[3].play();
            cards();
          });
        }
        // picking the wrong card
      } else {
        function flipp2back(card1, card2) {
          card1 = document.getElementById(flip[0]);
          card2 = document.getElementById(flip[1]);
          card1.style.background = "radial-gradient(white,black 60%)";

          card2.style.background = "radial-gradient(white,black 60%)";
          card1.innerHTML = "";
          card2.innerHTML = "";

          sounds[0].play();
          values = [];
          flip = [];
          liveDisplay.textContent = lives;
        }
        setTimeout(flipp2back, 700);
        lives--;

        if (lives <= 0) {
          lives = 0;
          liveDisplay.textContent = lives;
          setTimeout(cards, 701);
        }
      }
    }
  }
}
