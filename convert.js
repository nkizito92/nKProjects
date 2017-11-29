'use strict';

function con() {
    var total = 0;
    var valA = document.getElementById('val');

    function reset() {
        total = 0;
        var recieveVala = "";
        document.getElementById("result").innerHTML = '';
        document.getElementById("prevM").innerHTML = '';
        // user previous input will display
        recieveVala = document.getElementById('prev').innerHTML = "Your #: " + valA.value;
        valA.value = document.getElementById("val").innerHTML = '0';
    }

    function clear() {
        total = 0;
        recieveVala = document.getElementById('prev').innerHTML = "";
        document.getElementById('formula').innerHTML = "";
        document.getElementById("result").innerHTML = '';
        document.getElementById("prevM").innerHTML = '';
        valA.value = document.getElementById("val").innerHTML = '0';

    }
    // globel values and elements

    var clears = document.getElementById("clear").addEventListener("click", clear);

    var newvalue = valA.value;
    var xx = document.getElementById("reset").addEventListener("click", reset);


    var a = document.getElementById("centimeters").addEventListener('click', IntoCe);
    var b = document.getElementById("inches").addEventListener('click', FtoI);
    var c = document.getElementById("foots").addEventListener('click', YtoF);
    var d = document.getElementById("millimeters").addEventListener('click', CetoMil);
    var val2 = 0;
    // measurement functions 
    function IntoCe() {
        val2 = 2.54;
        document.getElementById("prevM").innerHTML = "Inches to centimeters";
        document.getElementById("formula").innerHTML = "1 * 2.54";
    }

    function FtoI() {
        val2 = 12;
        document.getElementById("prevM").innerHTML = "Foot to Inches";
        document.getElementById("formula").innerHTML = "1 * 12";
    }

    function YtoF() {
        val2 = 3;

        document.getElementById("prevM").innerHTML = "Yard to Feet";
        document.getElementById("formula").innerHTML = "1 * 3";
    }

    function CetoMil() {
        val2 = 10;

        document.getElementById("prevM").innerHTML = "Cenitmeters to millimeters";
        document.getElementById("formula").innerHTML = "1 * 10";
    }


    // the converters button
    var converts = document.getElementById("converts").addEventListener("click", convertor);

    function convertor() {
        total = valA.value * val2;
        document.getElementById("result").innerHTML = total;
    }
    // this is how to create a bottom

    var butto = document.createElement("button");
    butto.innerHTML = "convert2";
    // you can give the js buttom a id like this
    butto.id = "other";

    // this is how you can place the bottom in the body
    var buttonn = document.getElementsByTagName("body")[0];
    buttonn.appendChild(butto);

    butto = document.getElementById("other").addEventListener('click', function () {
        total = valA.value * val2;
        document.getElementById("result").innerHTML = total;
    });

}
