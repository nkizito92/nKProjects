function index() {
  "use strict";
  var LoadImg = document.getElementById("loadImg");
  var TreeImg = document.getElementById("TreeImg");
  var greetings = document.querySelectorAll("#TreeImg h1, h2");
  TreeImg.addEventListener("load", function() {
    greetings.style.display = "block";
  });

  window.addEventListener("load", function() {
    LoadImg.style.display = "none";
  });
  // removes greeting text
  /* */

  if (screen.width <= 800) {
    window.location.replace("M/index.html");
  }
  var nav = document.querySelector("nav");
  var sticky = nav.offsetTop;
  var games = [
    "url(../assets/images/app.JPG)",
    "url(../assets/images/colors.JPG)",
    "url(../assets/images/Circles.png)"
  ];
  var gameimgs = 0;

  function fixed() {
    window.pageYOffset >= sticky
      ? (nav.className = "fixedNav")
      : (nav.className = "");
  }
  // slide names for images
  var slide = document.getElementById("img1");
  var slideB = document.getElementById("img3");
  var slideC = document.getElementById("img4");
  slideC.style.height = "312px";
  var slideD = document.getElementById("img5");

  function slide1() {
    if (
      document.body.scrollTop > 980 ||
      document.documentElement.scrollTop > 980
    ) {
      slide.className = "slide";
      slide.style.opacity = 1;
    }
  }

  function slide2() {
    if (
      document.body.scrollTop > 1500 ||
      document.documentElement.scrollTop > 1500
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
      document.body.scrollTop > 2000 ||
      document.documentElement.scrollTop > 2000
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
    "Challenges/Circles/Circles.html"
  ];
  setInterval(function() {
    gameimgs++;
    if (gameimgs > games.length - 1) {
      gameimgs = 0;
    }
    slideC.style.backgroundImage = games[gameimgs];
    gaming.setAttribute("href", gamer[gameimgs]);
  }, 3000);

  function slide4() {
    if (
      document.body.scrollTop > 2440 ||
      document.documentElement.scrollTop > 2440
    ) {
      slideD.className = "slide";
      slideD.style.opacity = 1;
    } else {
      slideD.className = "slideback";
      slideD.style.opacity = 0;
    }
  }
  var movers = [slide1, slide2, slide3, slide4, fixed];

  function sliding() {
    for (var i = 0; i <= movers.length - 1; i++) {
      window.addEventListener("scroll", movers[i]);
    }
  }
  sliding();
}
// contact form script
function contact() {
  var success = document.getElementById("success");
  var submitted = document.getElementById("submit");
  var name = document.getElementsByName("name").value,
    email = document.getElementsByName("email").value,
    subject = document.getElementsByName("subject").value;
  if (name === "" && email === "" && subject === "") {
    submitted.addEventListener("click", function() {
      setTimeout(function() {
        success.innerHTML = "Thank you for Contacting us!";
        console.log(name, email, subject);
      }, 5000);
    });
  }

  if (screen.width <= 800) {
    window.location.replace("/M/HTML/Contact.php");
  }
}

function nav() {
  var path = document.getElementById("path"),
    nav2 = document.getElementById("nav2"),
    sticky = nav2.offsetTop;
  // grabs a class type selector and adds it to the Id
  function fixed() {
    window.pageYOffset > sticky
      ? nav2.classList.add("fixedNav")
      : nav2.classList.remove("fixedNav");
  }

  window.addEventListener("scroll", fixed);
  // finds the current href and loads it
  if (screen.width <= 800) {
    window.location.replace("/M/HTML/" + path.getAttribute("href"));
  }
}
