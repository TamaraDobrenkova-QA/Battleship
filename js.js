var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Hi! This is battleship :) Choose a number from 0 to 6 to hit a three-decker ship:");
	if (guess < 0 || guess > 6) {
		alert("Enter a valid number 0-6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank the ship!");
			}
		} else {
			alert("MISS");
		}
	}
}

var stats = "It took you " + guesses + " tries to sink the ship. Your shooting accuracy was " + (3 / guesses);
alert(stats);
