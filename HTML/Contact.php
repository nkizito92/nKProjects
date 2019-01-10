<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="/assets/CSS/main.css">
    <link rel="shortcut icon" href="../assets/images\mylogo.png">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <script src="https://use.fontawesome.com/b563a0f3f3.js"></script>
    <script src="../assets/JS/index.js"></script>
</head>

<body>
    <img id="backgroundImg" src="../assets/images/darkCloud.jpg">
     <nav>
        <!--my navigation bar -->
        <ul>
            <li> <a href="../index.html" title="Home"><img src="../assets/images/mylogo3.png" draggable="false">Nkizitos<span>Creative Web</span></a></li>
            <li> <a href="../index.html">Home</a></li>
            <li> <a href="AboutMe.html">About Me</a></li>
            <li> <a href="Interest.html">Interest</a></li>
            <li> <a id="path" href="Contact.php" style="text-decoration: underline">Contact</a></li>
            <li> <a href="Portfolio.html">Portfolio</a></li>
        </ul>

    </nav>
    
    <?php include('ContactformProcess.php'); ?>  
    <form name="formSub" action="<?= htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
        <legend  align="center">CONTACT ME</legend>
        <br>
       <input name="name" type="text" placeholder="FullName" required>
       <input name="email" type="email" placeholder="Email" required>
        <input name="subject" type="text" placeholder="Subject">
        <textarea name="message" id="EmailCenter" placeholder="YourText" style="font-size:15pt;" rows="10" wrap="soft" ></textarea>
        <input id="submit" type="submit" value="Send Message">
        <div id="success"></div>
    </form>
       <footer>
        <ul>
            <li> <a id="facebook" href="https://www.facebook.com/kizito.njoku" target="_blank"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
            </li>
            <li> <a id="youtube" target="_blank" href="https://www.youtube.com/channel/UC6OXldC5CIA1HgRXRKWUBfQ"><i class="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
            </li>
            <li> <a id="linkedIn" href="https://www.linkedin.com/in/kizito-njoku-606b8aa5/" target="_blank"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true" ></i></a>
            </li>
            <li> <a href="https://github.com/nkizito92" id="github" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            </li>
        </ul>


        <small>&copy; copyright 2017 Kizito Njoku, all rights reserved.</small>

    </footer>
    <script>contact();</script>
</body>

</html>
