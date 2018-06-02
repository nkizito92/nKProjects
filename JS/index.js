function index() {
    "use strict";
    if (screen.width <= 800) {
            window.location.replace("MobilePort/index.html");
        }
var nav =  document.getElementById("navv");
    function fixed() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            //            grabs a class type selector and adds it to the Id
            nav.className = "fixedNav";
            

        } else {
            nav.className = "";
             
        }
    } 
    // slide names for images
    var slide = document.getElementById("img1");
    var slideB = document.getElementById("img3");
    var slideC = document.getElementById("img4");
    var slideD = document.getElementById("img5");

    function slide1() {
        if (document.body.scrollTop > 980 || document.documentElement.scrollTop > 980) {
            slide.className = "slide";
            slide.style.opacity = 1;
        } 
    }
    window.addEventListener("scroll", slide1);

    function slide2() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            slideB.className = "slide";
            slideB.style.opacity = 1;
        } else {
            slideB.className = "slideback";
            slideB.style.opacity = 0;


        }
    }
    window.addEventListener("scroll", slide2);

    function slide3() {
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            slideC.className = "slide";
            slideC.style.opacity = 1;
        } else {
            slideC.className = "slideback";
            slideC.style.opacity = 0;


        }
    }
    window.addEventListener("scroll", slide3);
    function slide4() {
        if (document.body.scrollTop > 2440|| document.documentElement.scrollTop > 2440) {
            slideD.className = "slide";
            slideD.style.opacity = 1;
        } else {
            slideD.className = "slideback";
            slideD.style.opacity = 0;


        }
    }
    window.addEventListener("scroll", slide4);
    window.addEventListener("scroll", fixed);
     function submition(){
        document.forms["formSub"].action = 'submit.php';
        document.forms["formSub"].submit();
     }
    
// display functions
//    function display() {
//        document.getElementById("li").hidden = true;
//        var button1 = document.getElementById("button1");
//        button1.innerHTML = "show";
//
//        function show() {
//            document.getElementById("li").hidden = false;
//            button1.innerHTML = "hide";
//
//            function hide() {
//                document.getElementById("li").hidden = true;
//                button1.innerHTML = "show";
//                display();
//            }
//            button1.addEventListener("click", hide);
//        }
//        button1.addEventListener("click", show);
//
//    }
//    display();
//
//    // create a button
//    var button4 = document.createElement("button");
//    button4.innerHTML = "clear";
//    //set button in body with appendChilds
//    document.body.appendChild(button4).hidden = true;
//    button4.style.margin = "30px 0 0 700px";
//    button4.id = "Clearing";
//    button4 = document.getElementById("Clearing");
//
//    document.getElementById("go").addEventListener("click", function output() {
//
//        var displayInput = document.getElementById("userIn").value;
//        document.getElementById("read").innerHTML += displayInput + "<br>";
//
//        button4.hidden = false;
//    });
//
//    function gg() {
//        document.getElementById("read").innerHTML = "";
//        button4.hidden = true;
//    }
//
//    button4.addEventListener("click", gg);


}
