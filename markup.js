
//markup variables

var topScore = 17;
var userScore = 5;
var compScore = 5;

var choices = {
	rock: {
		text: "rock",
		beats: "scissors",
		phrase: "crushes",
		value: 1
	},
	paper: {
		text: "paper",
		beats: "rock",
		phrase: "covers",
		value: 2
	},
	scissors: {
		text: "scissors",
		beats: "paper",
		phrase: "cuts",
		value: 3
	}
}

var userChoice;
var compChoice;
var compNotChoose = choices.scissors;

//markup
var m = {

	topScore: `
		Top Score: ${topScore}
	`,

	revealRules: `
		Rock wagers 1 point<br>
		Paper wagers 2 points<br>
		Scissors wagers 3 points<br><br>
		Stay above zero points<br><br>
		<code onclick="hideRules()">Hide Rules</code>
	`,

	hideRules: `
		<code onclick="revealRules()">How it works</code>
	`,

}
