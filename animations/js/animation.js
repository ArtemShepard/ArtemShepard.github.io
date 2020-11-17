var value1 = 0;
var value2 = 0;
var i;
var p;
waitArr = ["Please Wait","Please Wait.","Please Wait..","Please Wait..."]
messageArr = ["hack your ass","disable antivirus","theft of your password",
"miner installation","format c:/","press F to pay respect...",
"install the Amigo browser","buy a license for Win.rar"]
pointArr = [">",">_"]
function progressbar(){
	value1 = value1 + Math.floor((Math.random()* 2));
	if (value1 >=350){
		value1 = 0;
	}
	document.getElementById("progressline1").style.width = value1 + "px";
	value2 = value2 + Math.floor((Math.random()* 35));
	if (value2 >=270){
		value2 = 0;
		string();
	}
	document.getElementById("progressline2").style.width = value2 + "px";
}
function wait(){
	
	if(i<3){
		i++;
		document.getElementById("wait").innerHTML = waitArr[i];
	}
	else{
		i=0;
		document.getElementById("wait").innerHTML = waitArr[i];
	}	
}
function point(){
	if(p<1){
		p++;
		document.getElementById("point").innerHTML = pointArr[p];
	}
	else{
		p=0;
		document.getElementById("point").innerHTML = pointArr[p];
	}	
}
function string(){
	document.getElementById("1string").innerHTML = document.getElementById("2string").textContent;
	document.getElementById("2string").innerHTML = document.getElementById("3string").textContent;
	document.getElementById("3string").innerHTML = document.getElementById("4string").textContent;
	document.getElementById("4string").innerHTML = document.getElementById("5string").textContent;
	document.getElementById("5string").innerHTML = document.getElementById("6string").textContent;
	document.getElementById("6string").innerHTML = document.getElementById("7string").textContent;
	document.getElementById("7string").innerHTML = document.getElementById("8string").textContent;
	document.getElementById("8string").innerHTML = document.getElementById("9string").textContent;
	document.getElementById("9string").innerHTML = document.getElementById("10string").textContent;
	document.getElementById("10string").innerHTML = document.getElementById("11string").textContent;
	document.getElementById("11string").innerHTML = document.getElementById("12string").textContent;
	document.getElementById("12string").innerHTML = document.getElementById("13string").textContent;
	document.getElementById("13string").innerHTML = document.getElementById("14string").textContent;
	document.getElementById("14string").innerHTML = document.getElementById("loadmessage2").textContent;
	document.getElementById("loadmessage2").innerHTML = messageArr[Math.floor(Math.random()*7)];
}

setInterval(progressbar,100);
setInterval(wait,1000);
setInterval(point,1000);