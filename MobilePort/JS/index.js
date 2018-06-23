function index() {
    "use strict";
    
    $("#item").click(function () {
        $("#subitem").slideToggle(500);
    });

    
    // slide names for images
    var slide = document.getElementById("img1");
    var slideB = document.getElementById("img3");
    var slideC = document.getElementById("img4");
    var slideD = document.getElementById("img5");

    function slide1() {
        if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
            slide.className = "slide";
            slide.style.opacity = 1;
        } else {
            slide.className = "slideback";
            slide.style.opacity = 0;


        }
    }

    function slide2() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            slideB.className = "slide";
            slideB.style.opacity = 1;
        } else {
            slideB.className = "slideback";
            slideB.style.opacity = 0;


        }
    }

    function slide3() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            slideC.className = "slide";
            slideC.style.opacity = 1;
        } else {
            slideC.className = "slideback";
            slideC.style.opacity = 0;


        }
    }

    function slide4() {
        if (document.body.scrollTop > 1540 || document.documentElement.scrollTop > 1540) {
            slideD.className = "slide";
            slideD.style.opacity = 1;
        } else {
            slideD.className = "slideback";
            slideD.style.opacity = 0;


        }
    }
    

}
