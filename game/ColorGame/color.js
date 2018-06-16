    var colors = generateRandomColors(6);

    var squares = document.querySelectorAll(".square");
    var rgbPicker = pickColor();
    var colorDisp = document.getElementById("colorDisplay");
    var messageDisp = document.querySelector("#message");
    var reset = document.querySelector("#reset");
    var h1 = document.querySelector("h1");
    colorDisp.textContent = rgbPicker;

    reset.addEventListener("click", function(){
        colors = generateRandomColors(6);
        rgbPicker = pickColor();
        colorDisp.textContent = rgbPicker;
        h1.style.backgroundColor = "";
        reset.textContent = "New game!!";
        messageDisp.textContent = "";
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
        }
        
    });
    
  
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            var clickColor = this.style.backgroundColor;
            
            if (clickColor === rgbPicker) {
                messageDisp.textContent = "CORRECT!!";
                changeColors(rgbPicker);
                h1.style.backgroundColor = clickColor;
                reset.textContent = "Play Again?!";
            } else {
            
                this.style.backgroundColor = "gray";
                messageDisp.textContent = "Try Again!!";
            }
        });

    }
function changeColors(color){
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
            }
    }

function pickColor() {
var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors (num) {
    //make array 
    var arr = [];
    //add num color to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    // return same arr
    
    return arr;

}

function randomColor () {
    // random color for red
   var r = Math.floor(Math.random()* 256);
    // random color for green
   var g =  Math.floor(Math.random()* 256);
    // random color for blue
   var b = Math.floor(Math.random()* 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


