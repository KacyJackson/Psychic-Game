
//<script type="text/javascript">

// Create the scoreboard and corresponding variables

      var guessesLeft = 5;
      var lettersGuessed = []
      var emptyString = "";
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      var reset = function() {
          guessesLeft = 5;
          lettersGuessed = [];
          emptyString = "";

          }
     

 // Next, we give JavaScript a function to execute when onkeyup event fires.
      
      document.onkeyup = function(event) {
      var userText = event.key;

// Log the user text to the console.

      console.log(userText);

//Add each option the user types to the empty string and log to the console, lettersGuessed.

      lettersGuessed.push(userText);
      
      document.getElementById("guesses-made").innerHTML = lettersGuessed.join(", ");
      
      console.log(lettersGuessed);


//Computer chooses random letter from alphabet string.


		for (var i = 0; i < 1; i++) {
		  emptyString += randomLetter;
		
		console.log(randomLetter);
  
}

//Player tries to guess the letter that the computer chose.

		if (parseInt(userText) === randomLetter) {

  		document.getElementById("user-text").innerHTML = userText;
      document.getElementById("status").innerHTML = "Yes";
  

}  


		else {


 		  document.getElementById("user-text").innerHTML = userText;
      document.getElementById("status").innerHTML = "No";
      guessesLeft = guessesLeft-1;
      document.getElementById("guesses-left").innerHTML = guessesLeft;
      console.log(guessesLeft);

}


    if ((guessesLeft) == 0){
    
    reset();
    alert("Sorry, you are not psychic.  Click okay to play again.");
        }


}

//</script>




