// Initialize Firebase
// var config = {
//    	apiKey: "AIzaSyChNFyuy9rkDIojdipdkP3orAI3J_RISJA",
//     authDomain: "tolchar-472bf.firebaseapp.com",
//     databaseURL: "https://tolchar-472bf.firebaseio.com",
//     projectId: "tolchar-472bf",
//     storageBucket: "tolchar-472bf.appspot.com",
//     messagingSenderId: "972554852149"
// };
// firebase.initializeApp(config);
// var database = firebase.database().ref("Herkunft");

// function FirebaseTest(){
// 	database.on("value").then(function(snapshot){
// 		var key = childSnapshot.key;
// 		var childData = childSnapshot.val();

// 		var null_val = childSnapshot.val().Startgeld;
		
// 		document.getElementById("Testi").innerHTML = null_val;
// 	}
// 	);
/ }

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

window.onload = function CharP(){
	var start = 72;
	var atthelp = 42;
	var x = document.getElementById("CharPunkt");
	var attrcp = document.getElementById("AttrPunkt");
	x.innerHTML = start;
	attrcp.innerHTML = atthelp;
}

var cpT=0;
var cpT1=0;
var cpT2=0;
var cpT3=0;

function Talente(Stufe, Talent, ausgabe, Attribute){
	var stufe = document.getElementById(Stufe);
	var talent = document.getElementById(Talent);
	var showcp = document.getElementById(ausgabe);
	var kosten = parseInt(talent.value);
	var cphelp = 0;

	cphelp = (parseInt(stufe.value)*kosten) + cphelp;

	for(var i=0; i<=parseInt(stufe.value); i++)
		cpT = cphelp +(i * kosten);

	showcp.innerHTML = cpT;
	var show = document.getElementById(Attribute);
	var displayTE = talent.options[talent.selectedIndex].text;
	switch(displayTE){
		case "Ackerbau":
			show.innerHTML = "Ko,Ko,St";
			break;
		case "Alchemie":
			show.innerHTML = "Vo,In,In";
			break;
		case "Alte Sprachen":
			show.innerHTML = "Vo,In,In";
			break;
		case "":
			show.innerHTML = "";
			break;
	}
	switch(talent.id){
		case "Talent1":
			cpT1= cpT;
			break;
		case "Talent2":
			cpT2=cpT;
			break;
		case "Talent3":
			cpT3=cpT;
			break;
	}
}

var el1=0;
var el2=0;
var el3=0;
function Zauber(Zauber, show){
	var cphelp = 0;
	var cpshow = document.getElementById(show);
	var magic = document.getElementById(Zauber);
	var magicVal = magic.value;
	var kosten = 7;
	var cpZ =0;

	cphelp = (magicVal * kosten) + cphelp;

	for(var i=0; i<magicVal; i++)
		cpZ = cphelp +(i * kosten);

	switch(magicVal){
		case 0: 
			cpshow.innerHTML =0;
			break;
		case "halt":
			break;
		default:
			cpshow.innerHTML = cpZ;
	}
	switch(magic.id){
		case "ZStufe1":
			el1 = cpZ;
			break;
		case "ZStufe2":
			el2 = cpZ;
			break;
		case "ZStufe3":
			el3 = cpZ;
			break;
	}
}



var savehelp = 0;
var mu=6;
var vo=6;
var ko=6;
var ch=6;
var ge=6;
var we=6;
var int=6;
var st=6;
function AttributeRechner(display, auswahl){
	var cphelp = 0;
	var start = 120;
	var ergebnishelp =0;
	var startcp = document.getElementById("CharPunkt");
	var attrcp = document.getElementById("AttrPunkt");
	var displayID = document.getElementById(display).id;
	
	try{
		var displayVal = document.getElementById(auswahl).value;
	}
	catch(err){
		var dis = document.getElementById(display).textContent;
	}

	Attribute();
	function Attribute(){
		var ergebnis = 0;
		switch(displayID){
			case "MuWerte":
				mu = displayVal;
				break;
			case "VoWerte":
				vo = displayVal;
				break;
			case "KoWerte":
				ko = displayVal;
				break;
			case "ChWerte":
				ch = displayVal;
				break;
			case "GeWerte":
				ge = displayVal;
				break;
			case "WeWerte":
				we = displayVal;
				break;
			case "InWerte":
				int = displayVal;
				break;
			case "StWerte":
				st = displayVal;
				break;
		}
	ergebnis =parseInt(mu)+parseInt(vo)+parseInt(ko)+parseInt(ch)+parseInt(ge)+parseInt(we)+parseInt(int)+parseInt(st);
	ergebnishelp = ergebnis;
	}

	start = parseInt(start) - parseInt(ergebnishelp) - parseInt(cpT1) - parseInt(cpT2) - parseInt(cpT3) - parseInt(el1) - parseInt(el2) - parseInt(el3);
	startcp.innerHTML = start;
	attrcp.innerHTML = 90 - ergebnishelp;
}
