  // Initialize Firebase
var config = {
   	apiKey: "AIzaSyChNFyuy9rkDIojdipdkP3orAI3J_RISJA",
    authDomain: "tolchar-472bf.firebaseapp.com",
    databaseURL: "https://tolchar-472bf.firebaseio.com",
    projectId: "tolchar-472bf",
    storageBucket: "tolchar-472bf.appspot.com",
    messagingSenderId: "972554852149"
};
firebase.initializeApp(config);
var database = firebase.database().ref("Herkunft");

function FirebaseTest(){
	database.on("value").then(function(snapshot){
		var key = childSnapshot.key;
		var childData = childSnapshot.val();

		var null_val = childSnapshot.val().Startgeld;
		
		document.getElementById("Testi").innerHTML = null_val;
	}
	);
}

function KlassenChange(){
   	var k = document.getElementById("Klassen").value;
   	var b = document.getElementById("Beschreibung");
   	var boni = document.getElementById("KBoni");
   	var mali = document.getElementById("KMali");
   	var ruestung = document.getElementById("Ruestung");

    switch(k){
    	case "Krieger":
    		b.innerHTML = "Krieger sind gut für den Nahkampf und geübt mit schwerer Rüstung";
    		boni.innerHTML = "Boni: -";
    		mali.innerHTML = "Mali: -";
    		ruestung.innerHTML = "Rüstung: Schwer";
    		break;
    	case "Schurke":
    		b.innerHTML = "Schurken sind geübt im Nahkampf und dem Schleichen";
    		boni.innerHTML = "Boni: Schleichen";
    		mali.innerHTML = "Mali: Weniger Leben";
    		ruestung.innerHTML = "Rüstung: Leder";
    		break;
    	case "Magier":    
    		b.innerHTML = "Geübt mit allerlei Magie";
    		boni.innerHTML = "Boni: Dies und das";
    		mali.innerHTML = "Mali: Weniger Leben";
    		ruestung.innerHTML = "Rüstung: Stoff";
    		break;
    	case "Priester":
    		b.innerHTML = "Sind geübt in der Heilung von den Mitstreitern";
    		boni.innerHTML = "Boni: Dies und das";
    		mali.innerHTML = "Boni: Dies und das";
    		ruestung.innerHTML = "Boni: Dies und das";
    		break;
    	case "KeineKlasse":
    		b.innerHTML = "";
    		boni.innerHTML = "";
    		mali.innerHTML = "";
    		ruestung.innerHTML = "";

    }

}

function ErstellenonClick(){
	alert("Chrakter wurde erstellt");
}

function LoadName(){	
	var x = document.getElementById("Name");
	if(x.value == "Name")
		x.value = "";
}

function RassenChange(){
	var r = document.getElementById("Rassen").value;
	var s = document.getElementById("Sprache");
   	var boni = document.getElementById("RBoni");
   	var mali = document.getElementById("RMali");
   	var fk = document.getElementById("Faehigkeit");

	switch(r){
    	case "Boorken":
    		s.innerHTML = "Sprache: Entisch (Kann nicht auf regulärem Weg erlernt werden)";
    		boni.innerHTML = "Boni: hohe Regenerationsrate in Wäldern, Sümpfen und auf Wiesen, Reliktkunde St.3 - frei";
    		mali.innerHTML = "Mali: Erhält doppelten Schaden durch Feuer.";
    		fk.innerHTML = "Fähigkeit: Die Wurzeln meiner Ahnen: Rootet alle Answesenden im Umfeld von ca. 10m";
    		break;
    	case "Centurs":
    		s.innerHTML = "Sprache: Centur";
    		boni.innerHTML = "Hat 2 Möglichkeiten sich zu bewegen: auf 2 und auf 4 Beinen.";
    		mali.innerHTML = "Kann nicht schleichen.";
    		fk.innerHTML = "Fähigkeit: Kann auf lange Strecken sehr schnell Rennen.";
    		break;
    	case "Dragonier":    
    		s.innerHTML = "Sprache: Dragonisch";
    		boni.innerHTML = "Boni: 2 Schaden auf Faustwaffen.";
    		mali.innerHTML = "Mali: Kampfmalus bei kalten Temperaturen.";
    		fk.innerHTML = "Schuppenrüstung: Erhält 40 Runden lang + 2 Rüstung, kann nur einmal alle 24 Stunden benutzt werden.";
    		break;
    	case "KeineRasse":
    		s.innerHTML = "";
    		boni.innerHTML = "";
    		mali.innerHTML = "";
    		fk.innerHTML = "";

    }


}