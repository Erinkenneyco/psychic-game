//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to start the game
theGame();


function theGame() {
	//to generate random letters
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); //test
		
	checkIfCorrect();

	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//turns user's unicode into corresponding alphanumeric key,
			//then turns it into a lowercase string.
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


			//if statement to prevent user from choosing a key that's not part of
			//the alphabet. a = unicode 65, z = unicode 90.
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			//else/if statement to stop user from guess a letter they already guessed
			//and to stop the guesses counter from being deducted for a previous guess
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			//if the user guesses correctly
			} else if (userChoice === computerChoice) {
				console.log("You win."); //test
				
				//switches image of question mark to crystal ball when user wins.
				document.getElementById("image-here").setAttribute("src", "assets/images/113458-Crystal-Ball.jpg")

			
				
				setTimeout(function(){alert("You win!");},1000);
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				
				setTimeout(function(){document.getElementById("image-here").setAttribute("src", "assets/images/5a4613ddd099a2ad03f9c994.png");}, 1000);

				resetGame();

		//	if the user guesses wrong...
			} else {
				guessesLeft = guessesLeft - 1;
				
				document.getElementById("guesses-left").innerHTML = guessesLeft; 
				yourGuess.push(userChoice); 

				console.log("Your guesses so far: " + yourGuess); //test

				document.getElementById("your-guesses").innerHTML = yourGuess;

				console.log("Guesses Left: " + guessesLeft); //test

				noGuessesLeft();
			}
		}
	}

	function resetGame() {
		guessesLeft = 9; //reset variable
		yourGuess = [];  //reset array so it's empty
		document.getElementById("guesses-left").innerHTML = guessesLeft;  //reset display on screen
		document.getElementById("your-guesses").innerHTML = yourGuess;    //reset display on screen
		theGame(); //restart the game with new computerChoice.

	}

	function noGuessesLeft() {
		if (guessesLeft === 0) {
			console.log("YOU LOSE."); //test
			alert("YOU LOSE!");
			losses = losses + 1
			document.getElementById("your-losses").innerHTML = losses;

			resetGame();

		} else {
			console.log("Incorrect. Try again"); //test
			checkIfCorrect();
		}

	}

}




