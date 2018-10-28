<!DOCTYPE html>
<html lang="en">
<head>
    <title>TalesOfLomon</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="src/js/use.js"> </script>
    <link rel="stylesheet" href="src/CSS/home.css">
    <link rel="icon" href="src/pic/ToL_Icon.png">
</head>
<body>

	<?php
		include_once 'modal.php';
	?>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <img class="navbar-brand" src="https://llath.github.io/TalesOfLomon/src/pic/TalesOfLomon.png" alt="TalesOfLomon"></img>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                		<li ><a href="http://de.talesoflomon.wikia.com/wiki/TalesofLomon_Wikia" target="_blank" >Wiki</a></li>
	                    <li ><a id="SpreadSheet" href="https://docs.google.com/spreadsheets/d/1kqwdqHWEAbSDSdtm7tDFMSpGqPS5S5IBF_sBjsxOGo4/edit?usp=sharing"
	                        target="_blank">  SpreadSheet </a></li>
	                    <li><a href="https://llath.github.io/TalesOfLomon/src/CharachterSheetTalesofLomon.pdf" 
	                        target = "_blank"> CharacterSheet </a></li>
	                    <li><a href="http://game-icons.net/" target="_blank">Free use Icons</a></li>
                	
                    
                    	<li id="Logout"><a href="#" onclick="Logout()">Logout</a></li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-inverse sidebar" role="navigation">
    	<div class="container-fluid">
    		<!-- Icons -->
    		<div class ="navbar-header">
    			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
    				<span class="sr-only"> Toggle navigation</span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    				<span class="icon-bar"></span>
    			</button>
    			<a href="#" class="navbar-brand" id="MyAccount">Registrieren</a>
    		</div>
    		<!-- Navbar links bzw. Content -->
    		<div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
    			<ul class="nav navbar-nav">
    				<li id="LoginName"><a href="#" onclick="LoginButton(); Modal()">Login<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>

    				<li><a href="src/Pages/Erstellen.html" onclick="ErstellenAnzeigen()" style="display: none;" id="Erstellen" target="iframe_Erstellen">Charakter Erstellen<span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-plus"></span></a></li>
    			</ul>
    		</div>	
    	</div>
    </nav>

    <iframe frameborder="0" id="iframe_Login" name="iframe_Login" height="760" class="main"></iframe>
    <iframe frameborder="0" id="iframe_Erstellen" name="iframe_Erstellen" height="760" class="main"></iframe>

    <!-- <iframe src="src/Pages/Erstellen.html" class="main" frameborder="0" height="760"></iframe> -->

    

</body>

<!-- <footer class="page-footer font-small black pt-4 mt-4">
    <a href="https://github.com/LLath/TalesOfLomon" target="_blank"> GitHub </a>
    <br>
    <a href="https://talesoflomon.herokuapp.com/" target="_blank"> Heroku-Web </a>
</footer>  -->                        
</html>
