var inputC;
var inputF;

function convertFtoC() {
	inputF = document.getElementById("inputFtoC").value;
	inputF = Number(inputF);	
	var outputC;
	var outputC = (inputF - 32) * 0.5556;
	document.getElementById("solutionFtoC").innerHTML = outputC + " &deg;C";

	if (outputC > 28) {
	document.getElementById("icons").innerHTML = '<img src="images/melted_popsicle.png">';}
	if (outputC > 23 && outputC < 29) {
	document.getElementById("icons").innerHTML = '<img src="images/popsicle.png">';}
	if (outputC < 18) {
	document.getElementById("icons").innerHTML = '<img src="images/tea.png">';}
}

function convertCtoF() {
	inputC = document.getElementById("inputCtoF").value;
	inputC = Number(inputC);
	var outputF;
	var outputF = inputC * 1.8 + 32;
	document.getElementById("solutionCtoF").innerHTML = outputF + " &deg;F";
}

document.getElementById("convertCtoF").onclick = convertCtoF;
document.getElementById("convertFtoC").onclick = convertFtoC;



// if (outputC > 28) {
// 	document.getElementById("icons").innerHTML = 'img src="images/melted_popsicle.png"';	
// }
// if (inputC > 23 && < 29) {
// 		document.getElementById("icons").innerHTML = 'img src="images/popsicle.png"';
// 	}

// if (inputC < 18) {
// 		document.getElementById("icons").innerHTML = 'img src="images/tea.png"';
// 	}