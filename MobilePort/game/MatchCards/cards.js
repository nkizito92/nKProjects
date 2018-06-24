var val = ["AA", "D", "C", "O_O", "D", "C", "O_O", "AA"];

var values = [];
var flipped = 0;
var flip = [];
Array.prototype.cardsshuffle = function () {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;

    }
}

function cards() {
    document.getElementById("cards").className = "firecrack".hidden = true;
    var g = document.getElementById("reset").hidden = true;
    flipped = 0;
    var output = "";
    val.cardsshuffle();
    for (var i = 0; i < val.length; i++) {
        output += '<div id="cards' + i + '"onclick="cardflip(this,\'' + val[i] + '\')"></div>';
    }
    document.getElementById("cards").innerHTML = output;
        
    document.getElementById("winner").innerHTML = "";
    document.getElementById("reset").removeEventListener("click", cards);
}
// try  to make them images instead of letters 
function cardflip(card, valu) {
    if (card.innerHTML == "" && values.length < 2) {
        card.style.background = 'linear-gradient(20deg, white, black)';
        card.innerHTML = valu;
        if (values.length == 0) {
            values.push(valu);
            flip.push(card.id);
        } else if (values.length == 1) {
            values.push(valu);
            flip.push(card.id);

            if (values[0] == values[1]) {
                flipped += 2;
                values = [];
                flip = [];

                if (flipped == val.length) {
                    document.getElementById("winner").innerHTML = "You won the game!!!";
                    document.getElementById("cards").innerHTML = "";
                    var back = "back";
                    if (back === "back") {
                        var cback = document.getElementById("cards").className = "firecrack";
                        back = "normal";
                    } else if (back === "normal") {
                        cback.className = "";
                    }
                    var g = document.getElementById("reset").hidden = false;
                    var goo = document.getElementById("reset").innerHTML = "Reset game";
                    goo = document.getElementById("reset").addEventListener("click", cards);

                }
            } else {
                function flipp2back(card1, card2) {
                    card1 = document.getElementById(flip[0]);
                    card2 = document.getElementById(flip[1]);
                    card1.style.background = 'radial-gradient(white,black 60%)';

                    card2.style.background = 'radial-gradient(white,black 60%)';
                    card1.innerHTML = "";
                    card2.innerHTML = "";


                    values = [];
                    flip = [];
                }
                setTimeout(flipp2back, 700);
            }

        }
    }
}
