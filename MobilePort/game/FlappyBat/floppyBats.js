function action() {
    var moveUp = 1;
    var moveDown = 0;
    var crash = document.getElementById("ground");
    var crash2 = document.getElementById("topRock");
    var batMov = document.getElementById("bat");
    'use strick'

        function batgame() {
            clearInterval(id);
            var gameover = document.getElementById("gOver");
            batMov.style.bottom = "40px";
            batMov.style.top = "";x
        }
        var tap = document.getElementById("flop");
        tap.addEventListener("click", batgame);    

    var id = setInterval(frames, 4)

    function frames() {
        if (moveDown == 500) {
            clearInterval(id);
        } else {
            moveDown++;
            batMov.style.top = moveDown + "px";
        }
    }



}
