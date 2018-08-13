    var colors = [];
    var numSquares = 6;
    var rgbPicked;
    var Rightcolor = document.querySelector(".Rightone");
    var squares = document.querySelectorAll(".square");
    var colorDisp = document.getElementById("colorDisplay");
    var messageDisp = document.querySelector("#message");
    var reset = document.querySelector("#reset");
    var h1 = document.querySelector("h1");
    var modeBtns = document.querySelectorAll(".mode");
    var sec = 0;
    var sounds = document.querySelectorAll("audio");
    var music = document.querySelector("#music");
    var audiosControl = "off";
    var lives = 0;
    var liveDisplay = document.querySelector("#live");
    starting();
    // music controls
    sounds[4].play();
    sounds[4].volume = 0.5;
    music.addEventListener("click", function () {
        if (audiosControl === "off") {
            sounds[4].pause();
            document.getElementById("musicAudio").innerHTML = "off";
            audiosControl = "on";
        } else {
            sounds[4].currentTime = 0;
            sounds[4].play();
            sounds[4].volume = 0.5;

            document.getElementById("musicAudio").innerHTML = "on";
            audiosControl = "off";
        }
    });

    function starting() {
        setModebtn();
        setSquares();
        resetGame();
    }

    function modes() {
        sounds[0].play();
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        resetGame();

    }

    function setModebtn() {
        for (var i = 0; i < modeBtns.length; i++) {
            modeBtns[i].addEventListener("click", modes);
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
                        for (var i = 0; i < modeBtns.length; i++) {
                            modeBtns[i].removeEventListener("click", modes);
                        }
                        reset.removeEventListener("click", resetSound);
                        sounds[3].play();
                        messageDisp.textContent = "Game Over!!";
                        displayColors("none");
                        setTimeout(function () {
                            showCorrectColor(rgbPicked);
                            reset.addEventListener("click", resetSound);
                            for (var i = 0; i < modeBtns.length; i++) {
                                modeBtns[i].addEventListener("click", modes);
                            }
                        }, 1000);

                    }
                }
            });

        }
    }

    function displayColors(hid) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.display = hid;
        }
    }

    function resetGame() {
        Rightcolor.classList.remove('Rightone');
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
                displayColors("block");
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }

    }

    function resetSound() {
        sounds[2].play();
        resetGame();
    }
    reset.addEventListener("click", resetSound);

    function changeColors(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }

    function showCorrectColor(color2) {
        Rightcolor.style.backgroundColor = color2;
        Rightcolor.classList.add('Rightone');
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
