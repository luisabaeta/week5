var inputC;
var inputF;

// How do i get these values!?
var inputC = document.getElementById("inputCtoF").value;
var inputF = document.getElementById("inputFtoC").value;

function convertFtoC() {
	var outputC;
	var outputC = (inputF - 32) * 0..5556;
	document.getElementById("solutionFtoC").innerHTML = outputC + " &deg;C";
}

function convertCtoF() {
	var outputF;
	var outputF = inputC * 1.8 + 32;
	document.getElementById("solutionCtoF").innerHTML = inputC + " &deg;F";

}

document.getElementById("convertCtoF").onclick = convertCtoF;
document.getElementById("convertFtoC").onclick = convertFtoC;