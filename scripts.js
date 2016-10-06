
// logic variables

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

// logic

function revealRules() {
	d.innerHTML = m.revealRules;
}

function hideRules() {
	d.innerHTML = m.hideRules;
}

function userChoose(choice) {

	userChoice = choice;

	var pointOrPoints = "points";

	if(userChoice.text == "rock") {
		pointOrPoints = "point";
	}

	b.innerHTML = `
		You chose ${userChoice.text}, wagering ${userChoice.value} ${pointOrPoints}.<br>
		The computer did not choose ${compNotChoose.text}.<br><br>
		Would you like to multiply the stakes of the bet?
	`;

	c.innerHTML = `
		<button onclick="#">Stay</button>
		<button onclick="#">x2</button>
		<button onclick="#">x3</button>
	`;
}

function newGame() {
	
	a.innerHTML = `
		Top Score: ${topScore}<br><br>
		You: ${userScore}<br>
		Computer: ${compScore}
	`;

	b.innerHTML = ``;

	c.innerHTML = `
		<button onclick="userChoose(choices.rock)">Rock</button>
		<button onclick="userChoose(choices.paper)">Paper</button>
		<button onclick="userChoose(choices.scissors)">Scissors</button>
	`;
}

//execute code

if(topScore !== 0){
	a.innerHTML = m.topScore;	
}
b.innerHTML = `<h1>Rock Paper Scissors</h1>`;
c.innerHTML = `<button onclick="newGame()">New Game</button>`;
d.innerHTML = `<code onclick="revealRules()">How it works</code>`;











