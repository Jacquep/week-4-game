//Game Object

var game = {

	crystal1: 0,
	crystal2: 0,
	crystal3: 0,
	crystal4: 0,
	Wins: 0,
	Losses: 0,
	randomNumber: 0,
	score: 0,

	//Game Start/Restart
	//The game restarts whenever the player wins or loses. When the game begins again, the player should see a new random number. 
	//Also, all the crystals will have four new hidden values. 
	initialize: function() {

		//Create a function to pick a random number, call it pickRandomNumber 

		var pickRandomNumber = function(){
			return Math.floor(Math.random() * 50);
		}

		this.randomNumber = pickRandomNumber();
		this.crystal1 = pickRandomNumber();
		this.crystal2 = pickRandomNumber();
		this.crystal3 = pickRandomNumber();
		this.crystal4 = pickRandomNumber();

		this.score = 0;


		
	},	

	//Create a function that adds in the score counter 

	increaseScore: function(crystalValue) {

		//increaseScore by the value of the number assigned to that crsystal
		  this.score = crystalValue + this.score
	},

};


//Start the game
$(document).ready(function() {
	game.initialize();
	$(".randomNumber").text(game.randomNumber);


	//When player CLICKS on Crystal
	$("#navy").on("click", function() {
		//increaseScore by the value assigned to crystal1
		game.increaseScore(game.crystal1);
		//Update score box in html 
		$(".score").text(game.score);

		//if score is equal to randomNumber 
		if( game.randomNumber === game.score){
			//then the player wins
			this.Wins++;
			//increase wins in html and game 
			$(".Wins").text(game.Wins);
			//then reinitialize 
			game.initialize();
		} else if (game.score > game.randomNumber) { 
		//if score is more than randomNumber
			//player losses
			this.Losses++;
			//increase losses in html and game then reinitialize 
			$(".Losses").text(game.Losses);
			game.initialize();

		} 


	})	
		
	$("#blue").on("click", function() {
		//increaseScore by the value assigned to crystal1
		game.increaseScore(game.crystal2);
		//Update score box in html 
		$(".score").text(game.score);

		//if score is equal to randomNumber 
		if( game.randomNumber === game.score){
			//then the player wins
			this.Wins++;
			//increase wins in html and game 
			$(".Wins").text(game.Wins);
			//then reinitialize 
			game.initialize();
		} else if (game.score > game.randomNumber) { 
		//if score is more than randomNumber
			//player losses
			this.Losses++;
			//increase losses in html and game then reinitialize 
			$(".Losses").text(game.Losses);
			game.initialize();
		}
	})
	
	$("#purple").on("click", function() {
		//increaseScore by the value assigned to crystal1
		game.increaseScore(game.crystal3);
		//Update score box in html 
		$(".score").text(game.score);

		//if score is equal to randomNumber 
		if( game.randomNumber === game.score){
			//then the player wins
			this.Wins++;
			//increase wins in html and game 
			$(".Wins").text(game.Wins);
			//then reinitialize 
			game.initialize();
		} else if (game.score > game.randomNumber) { 
		//if score is more than randomNumber
			//player losses
			this.Losses++;
			//increase losses in html and game then reinitialize 
			$(".Losses").text(game.Losses);
			game.initialize();
		}

	})
	
	$("#red").on("click", function() {
		//increaseScore by the value assigned to crystal1
		game.increaseScore(game.crystal4);
		//Update score box in html 
		$(".score").text(game.score);

		//if score is equal to randomNumber 
		if( game.randomNumber === game.score){
			//then the player wins
			this.Wins++;
			//increase wins in html and game 
			$(".Wins").text(game.Wins);
			//then reinitialize 
			game.initialize();
		} else if (game.score > game.randomNumber) { 
		//if score is more than randomNumber
			//player losses
			this.Losses++;
			//increase losses in html and game then reinitialize 
			$(".Losses").text(game.Losses);
			game.initialize();
		}
	})
});

//Show the number of games the player wins and loses. Do not refresh the page as a means to restart the game. 




