var goVertical = 0;
var goGorizontal = 0;


goVertical = Math.round(Math.random()*8/2+1);
//goGorizontal = 5 - goVertical;
goGorizontal = 5 - goVertical;

console.log("goVertical " + goVertical);
console.log("goGorizontal " + goGorizontal);

window.onload = Spawn();

function Spawn(){
	document.getElementById("dvd").style.top = "500px";	
	document.getElementById("dvd").style.left = "500px";
}

function Move(){
	document.getElementById("dvd").style.top = (parseInt(document.getElementById("dvd").style.top) + goVertical)+"px";
	document.getElementById("dvd").style.left = (parseInt(document.getElementById("dvd").style.left) + goGorizontal)+"px";
	console.log("высота экрана " + window.innerHeight);
	console.log("высота " + document.getElementById("dvd").style.top);
	console.log("ширина экрана " + window.innerWidth);
	console.log("ширина " + document.getElementById("dvd").style.left);
	//console.log(document.getElementById("dvd").style.top);
	//console.log(document.getElementById("dvd").style.left);
	if((parseInt(document.getElementById("dvd").style.top) >= window.innerHeight - 85) || (parseInt(document.getElementById("dvd").style.top) <= 0))
	{
		
		goVertical = goVertical * -1;
		document.getElementById("dvd").style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
		console.log("Vertical!!!")
	}
	if((parseInt(document.getElementById("dvd").style.left) >= window.innerWidth - 132) || (parseInt(document.getElementById("dvd").style.left) <= 0))
	{
		goGorizontal = Math.round(Math.random()*8/2+1);
		if((parseInt(document.getElementById("dvd").style.left) >= window.innerWidth - 132)){
		goGorizontal = goGorizontal * -1;
		}
		
		
		document.getElementById("dvd").style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
		console.log("Gorizontal")
	}

}
setInterval(Move,20)
function TopHit(){

}