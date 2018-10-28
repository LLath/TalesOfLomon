<div id="ModalLogin" class="modal">
    	<!-- Content -->
    	<div class="modal-content">
    		<span class="close" onclick="SpanClose()">&times;</span>
    		
    		<div id="Login" style="display: none;">
		        <form id="LoginForm" action="MyAccount.html"method="get" name="LoginForm">
		            <label>Username: </label>
		            <input type="text" name="username" id="username" placeholder="Username" />
		            <label>Password: </label>
		            <input type="password" name="password" id="password" placeholder="Password" />
		            <input type="button" value="Login" id="submit" onclick="Einloggen()"/>
		        </form>

		        <p id="Falsch" style="display:none; float:left;">Passwort bzw. Username passen nicht überein:</p>
		        <p id="Versuche" style="float:left; margin-left: 5px;"></p>
		    </div>

		    <div id="UnVergessen">
		        <a href="#" > Username vergessen</a>
		    </div>

		    <div id="PwVergessen">
		        <a href="#" > Password vergessen</a>
		    </div>

		    <div id="RegistrierenModal">
		    	<a href="#" > Registrieren</a>
		    </div>

    	</div>
    </div>