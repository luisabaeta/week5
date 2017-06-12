var inputC;
var inputF;

// How do i get these values!?
var inputC = document.getElementById("inputCtoF").input;
var inputF = document.getElementById("inputFtoC").input;

var inputC = Number(inputC);
var inputF = Number(inputF);

function convertFtoC() {
	var outputC;
	var outputC = (inputF - 32) * 0.5556;
	document.getElementById("solutionFtoC").innerHTML = outputC + " &deg;C";
}

function convertCtoF() {
	var outputF;
	var outputF = inputC * 1.8 + 32;
	document.getElementById("solutionCtoF").innerHTML = (inputC) + " &deg;F";
}

document.getElementById("convertCtoF").onclick = convertCtoF;
document.getElementById("convertFtoC").onclick = convertFtoC;

 if (inputC > 28) {
		document.getElementById("icons").innerHTML = "hello";
	}