function htmlbodyHeightUpdate(){
	var height3 = $( window ).height();
	var height1 = $('.nav').height()+50;
	height2 = $('.main').height();
	if(height2 > height3){
		$('html').height(Math.max(height1,height3,height2)+10);
			$('body').height(Math.max(height1,height3,height2)+10);
	}
	else
	{
		$('html').height(Math.max(height1,height3,height2));
		$('body').height(Math.max(height1,height3,height2));
	}

}
$(document).ready(function () {
	htmlbodyHeightUpdate();
	$( window ).resize(function() {
			htmlbodyHeightUpdate();
	});
	$( window ).scroll(function() {
		height2 = $('.main').height();
		htmlbodyHeightUpdate();
	});
});

let klasse = [];
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
    klasse = k+" "+b.innerText+" "+boni.innerText+" "+mali.innerText+" "+ruestung.innerText;

}

let name = "";
function LoadName(){
	var x = document.getElementById("Name");
	if(x.value == "Name")
		x.value = "";
	name = x.value;
}

let rasse = [];
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
    rasse = r +" "+ s.innerText+" "+boni.innerText+" "+mali.innerText+" "+fk.innerText;

}

var cpT=0;
var cpT1=0;
var cpT2=0;
var cpT3=0;
let cpT4=0;
let cpT5=0;
let cpT6=0;
let cpTgesamt =0;

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
		case "Talent4":
			cpT4=cpT;
			break;
		case "Talent5":
			cpT5=cpT;
			break;
		case "Talent6":
			cpT6=cpT;
			break;
	}
	cpTgesamt = parseInt(cpT1)+parseInt(cpT2)+parseInt(cpT3)+parseInt(cpT4)+parseInt(cpT5)+parseInt(cpT6);
}

let el1=0;
let el2=0;
let el3=0;
let elgesamt=0;
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
	elgesamt = parseInt(el1)+parseInt(el2)+parseInt(el3);
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
		ergebnis = parseInt(mu)+parseInt(vo)+parseInt(ko)+parseInt(ch)+parseInt(ge)+parseInt(we)+parseInt(int)+parseInt(st);
		ergebnishelp = ergebnis;
		}

		start = parseInt(start) - parseInt(ergebnishelp) - parseInt(cpTgesamt) - parseInt(elgesamt);
		startcp.innerHTML = start;
		attrcp.innerHTML = 90 - ergebnishelp;
}

function WerteBerechnen(){
	let ini = (parseInt(ge)+parseInt(int)+parseInt(st)/6-(parseInt(ko)/8))
	document.getElementById("IniAnzeigen").innerHTML = parseInt(ini);
	let leben = ((2*parseInt(ko)+2*parseInt(mu))/3)
	document.getElementById("LebenAnzeigen").innerHTML = parseInt(leben);
	let au = ((parseInt(mu)+2*(parseInt(ko))+parseInt(st)+parseInt(ge))/3);
	document.getElementById("AuAnzeigen").innerHTML = parseInt(au);
	let ap = ((parseInt(int)*parseInt(we))/10);
	document.getElementById("ApAnzeigen").innerHTML = parseInt(ap);
	let at = ((parseInt(st)+parseInt(mu))/4);
	document.getElementById("AtAnzeigen").innerHTML = parseInt(at);
	let pa = ((parseInt(ge)+parseInt(mu))/4);
	document.getElementById("PaAnzeigen").innerHTML = parseInt(pa);
	let fk = ((parseInt(vo)+parseInt(ge))/4);
	document.getElementById("FkAnzeigen").innerHTML = parseInt(fk);
	let mat = (((parseInt(we)+parseInt(int))*2)/7);
	document.getElementById("MAtAnzeigen").innerHTML = parseInt(mat);
	let mr = ((parseInt(int)+parseInt(we))/4);
	document.getElementById("MrAnzeigen").innerHTML = parseInt(mr);
	let lck = ((parseInt(ch)*2+parseInt(vo)+parseInt(int))/3);
	document.getElementById("LckAnzeigen").innerHTML = parseInt(lck);
}

var aufruf=2;
function LoginButton(){
	++aufruf;
	if(aufruf%2 && loginhidden == false)
		document.getElementById("Login").style.display="block";
	else
		document.getElementById("Login").style.display="none";
}

let usernamepublic;
usernamepublic = window.name;
var loginhidden = false;
var versuch = 3;
function Einloggen(){
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	if(username.value == "admin" && password.value == "admin123"){
		document.getElementById("Login").style.display = "none";
		window.name = username.value;
		loginhidden = true;
		document.getElementById("MyAccount").style.display ="block";
		document.getElementById("MyAccount").innerHTML = window.name;
		document.getElementById("LoginName").style.display = "none";
		document.getElementById("Erstellen").style.display = "block";
		document.getElementById("ModalLogin").style.display = "none";
		document.getElementById("Logout").style.display = "block";
	}else{
		versuch --;
		document.getElementById("Versuche").innerHTML = "Du hast noch "+versuch + " Verusche";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("username").style.borderColor = "red";
		document.getElementById("Falsch").style.display ="block";
		if(versuch == 0){
			username.disabled = true;
			password.disabled = true;
			document.getElementById("submit").disabled = true;
		}
	}
}

function myAccount(){
	document.getElementById("iframe_Erstellen").style.display = "none";
	//document.getElementById("Home").style.display = "none";
	document.getElementById("iframe_Login").style.display = "block";
}

function ErstellenAnzeigen(){
	document.getElementById("iframe_Login").style.display = "none";
	document.getElementById("Home").style.display = "none";
	document.getElementById("iframe_Erstellen").style.display = "block";
}

function Logout(){
	const logout = document.getElementById("Logout");
	localStorage.clear();
	location.reload();
}

let valshow = false;
function ShowChar(){
	let show = document.getElementById("Show");
	if(valshow == false){
		show.style.display = "block";
		valshow = true;
	}else{
		valshow = false;
		show.style.display = "none";
	}

}

function ErstellenonClick(){
	localStorage.setItem("name", name);
	localStorage.setItem("rasse", rasse);
	localStorage.setItem("klasse", klasse);
}

let valstats = false;
function ShowStats(){
	let charR = document.getElementById("CharRasse");
	let charK = document.getElementById("CharKlasse");
	let char = document.getElementById("CharStats");
	charR.innerHTML = localStorage.getItem("rasse");
	charK.innerHTML = localStorage.getItem("klasse");

	if(valstats == false){
		char.style.display = "block";
		valstats = true;
	}else{
		char.style.display = "none";
		valstats = false;
	}
}

function Modal(){
	const modal = document.getElementById("ModalLogin");
	modal.style.display = "block";
}

function SpanClose(){
	const modal = document.getElementById("ModalLogin");
	modal.style.display = "none";
}

window.onclick = function(event){
	const modal = document.getElementById("ModalLogin");
	if(event.target == modal){
		modal.style.display = "none";
	}
}

window.onload = function(){
	//document.getElementById("Logout").style.display = "none";
}

let click = 0;
let clickvergleich = 1;

let TalenteMenu = {
    erstellen: function(){

        click++;
        clickvergleich++;
        let getTalente = document.querySelector(".Talente"+click);
        getTalente.innerHTML = '<table>             <tr>                    <th>Stufe</th>                    <th>Talent</th>                    <th>CP</th>                    <th>Attribute</th>                </tr>                <tr>                    <td>                        <select name="Stufe'+click+'" id="Stufe'+click+'" onchange="Talente(\'Stufe'+click+'\', \'Talent'+click+'\', \'CPTalente'+click+'\', \'TalentAttribute'+click+'\'); AttributeRechner(\'CPTalente'+click+'\')">                            <option value="0" selected></option>                            <option value="1">1</option>                            <option value="2">2</option>                            <option value="3">3</option>                        </select>                    </td><td><select name="Talent'+click+'" id="Talent'+click+'"><option value="0"></option>                            <option value="1">Ackerbau</option>                            <option value="2">Alchemie</option>                            <option value="4"> Alte Sprachen</option>                        </select>                    </td>                    <td>                        <span id="CPTalente'+click+'" style="border-right: 1px #e5e5e5 solid;">-</span>                    </td>                    <td>                        <span id="TalentAttribute'+click+'">-</span>                    </td>                </tr>                </table>' + '<span class="Talente'+clickvergleich+'"></span>';
    },
    loeschen: function(){
        let getTalente = document.querySelector(".Talente"+click);
        getTalente.innerHTML = '<span class="Talente'+clickvergleich+'"></span>';

        click--;
        clickvergleich--;
    },
    einstellen: function(){

    }
}
