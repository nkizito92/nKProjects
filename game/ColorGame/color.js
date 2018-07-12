    var colors = [];
    var numSquares = 6;
    var rgbPicked;
    var squares = document.querySelectorAll(".square");
    var colorDisp = document.getElementById("colorDisplay");
    var messageDisp = document.querySelector("#message");
    var reset = document.querySelector("#reset");
    var h1 = document.querySelector("h1");
    var modeBtns = document.querySelectorAll(".mode");
    var sec = 0;
    var sounds = document.querySelectorAll("audio");
    var lives = 0;
    var liveDisplay = document.querySelector("#live");
    starting();

    function starting() {
        setModebtn();
        setSquares();
        resetGame();
    }

    function setModebtn() {
        for (var i = 0; i < modeBtns.length; i++) {
            modeBtns[i].addEventListener("click", function () {
                sounds[0].play();
                modeBtns[0].classList.remove("selected");
                modeBtns[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
                resetGame();

            });
        }
    }

    function setSquares() {
           
        for (var i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function () {
                var clickColor = this.style.backgroundColor;

                if (clickColor === rgbPicked) {
                    sounds[1].play();
                    messageDisp.textContent = "CORRECT!!";
                    changeColors(rgbPicked);
                    h1.style.backgroundColor = clickColor;
                    reset.textContent = "Play Again?!";

                } else {
                    lives--;
                    liveDisplay.innerHTML = lives;
                    this.style.backgroundColor = "black";
                    messageDisp.textContent = "Try Again!!";
            //     Chech for lives left 
                    if (lives <= 0) {
                        lives = 1;
                        sounds[3].play();
                        messageDisp.textContent = "Game Over!!";
                        changeColors("black");
                    }
                }
            });

        }
    }

    function resetGame() {
        lives = 3;
        liveDisplay.innerHTML = lives;
        colors = generateRandomColors(numSquares);
        rgbPicked = pickColor();
        colorDisp.textContent = rgbPicked;
        h1.style.backgroundColor = "";
        reset.textContent = "New game!!";
        messageDisp.textContent = "";
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }

    }
    reset.addEventListener("click", function () {
        sounds[2].play(); resetGame();});

    function changeColors(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num) {
        //make array 
        var arr = [];
        //add num color to array
        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        // return same arr

        return arr;

    }

    function randomColor() {
        // random color for red
        var r = Math.floor(Math.random() * 256);
        // random color for green
        var g = Math.floor(Math.random() * 256);
        // random color for blue
        var b = Math.floor(Math.random() * 256);

        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
