function index() {
  "use strict";

  // NavBar

  var navburger = {
    divA: $("#item div:nth-child(1)"),
    divB: $("#item div:nth-child(2)"),
    divC: $("#item div:nth-child(3)")
  };
  $("#item").click(function() {
    $("#item").toggleClass("cirHamNav");
    navburger.divC.toggleClass("third");
    navburger.divA.toggleClass("first");
    navburger.divB.toggleClass("second");
    $("#subitem").slideToggle(500);
  });
  // removes greeting text
  setTimeout(function() {
    var greetings = document.querySelectorAll("#TreeImg div");
    for (var remove = 0; remove < greetings.length; remove++) {
      greetings[remove].innerHTML = "";
    }
  }, 4000);

  // slide names for assets/images
  var slide = document.getElementById("img1");
  var slideB = document.getElementById("img3");
  var slideC = document.getElementById("img4");
  var slideD = document.getElementById("img5");
  var games = [
    "url(../assets/images/app.JPG)",
    "url(../assets/images/colors.JPG)",
    "url(../assets/images/Circles.png)"
  ];
  var gameImgs = 0;
  slideC.style.height = "104px";
  function slide1() {
    if (
      document.body.scrollTop > 380 ||
      document.documentElement.scrollTop > 380
    ) {
      slide.className = "slide";
      slide.style.opacity = 1;
    }
  }

  function slide2() {
    if (
      document.body.scrollTop > 900 ||
      document.documentElement.scrollTop > 900
    ) {
      slideB.className = "slide";
      slideB.style.opacity = 1;
    } else {
      slideB.className = "slideback";
      slideB.style.opacity = 0;
    }
  }
  var gaming = document.getElementById("gamer");
  function slide3() {
    if (
      document.body.scrollTop > 1400 ||
      document.documentElement.scrollTop > 1400
    ) {
      slideC.className = "slide";
      slideC.style.opacity = 1;
    } else {
      slideC.className = "slideback";
      slideC.style.opacity = 0;
    }
  }
  // Changes app images
  var gamer = [
    "game/MatchCards/matchCards.html",
    "game/ColorGame/Colors.html",
    "../Challenges/Circles/Circles.html"
  ];
  setInterval(function() {
    gameimgs++;
    if (gameimgs > games.length - 1) {
      gameimgs = 0;
    }
    slideC.style.backgroundImage = games[gameImgs];
    gaming.setAttribute("href", gamer[gameImgs]);
  }, 3000);

  function slide4() {
    if (
      document.body.scrollTop > 1520 ||
      document.documentElement.scrollTop > 1520
    ) {
      slideD.className = "slide";
      slideD.style.opacity = 1;
    } else {
      slideD.className = "slideback";
      slideD.style.opacity = 0;
    }
  }
  var sliders = [slide1, slide2, slide3, slide4];

  function sliding() {
    for (var i = 0; i <= sliders.length; i++) {
      window.addEventListener("scroll", sliders[i]);
    }
  }

  sliding();
}
function nav() {
  var navburger = {
    divA: $("#item div:nth-child(1)"),
    divB: $("#item div:nth-child(2)"),
    divC: $("#item div:nth-child(3)")
  };
  $("#item").click(function() {
    $("#item").toggleClass("cirHamNav");
    navburger.divC.toggleClass("third");
    navburger.divA.toggleClass("first");
    navburger.divB.toggleClass("second");
    $("#subitem").slideToggle(500);
  });
}
