window.onload = function CharP(){
	try{
		var start = 72;
		var atthelp = 42;
		var x = document.getElementById("CharPunkt");
		var attrcp = document.getElementById("AttrPunkt");
		x.innerHTML = start;
		attrcp.innerHTML = atthelp;
	}catch(err){
		var username = usernamepublic;
		document.getElementById("AccountName").innerHTML = username;
		document.getElementById("Char1").innerHTML = localStorage.getItem("name");
	}
	
}