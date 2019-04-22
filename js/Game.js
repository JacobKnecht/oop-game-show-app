 /**
  * Game class declaration
  * @class
  * @name Game
  */
 class Game {
   /**
    * Represents a game
    * @constructor
    */
   constructor() {
     /**
      * Game class property declarations
      * @property {number} Game.missed - The number of incorrect player guesses
      * @property {Object[]} Game.phrases - The phrases to be used in-game
      * @property {Object} Game.activePhrase - The currently displayed phrase
      */
     this.missed = 0;
     this.phrases = [new Phrase('There can only be one'),
                     new Phrase('Chip off the old block'),
                     new Phrase('War never changes'),
                     new Phrase('For good measure'),
                     new Phrase('A plague on both your houses')];
     this.activePhrase = null;
   }

   /**
    * Starts a game by hiding the start screen, generating a random phrase,
    * and adding the generated phrase to the display
    * @method
    * @name startGame
    */
   startGame() {
     document.querySelector('#overlay').style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }

   /**
    * Generates and returns a random phrase from the list of stored phrases
    * @method
    * @name getRandomPhrase
    * @returns {Object} - Randomly selected phrase object
    */
   getRandomPhrase() {
     const numOfPhrases = 5;
     const randomIndex = Math.floor(Math.random() * Math.floor(numOfPhrases));
     return this.phrases[randomIndex];
   }

   /**
    * Controls the game logic; disables the selected key from the onscreen
    * keyboard and either removes one of the player's lives or reveals the
    * corresponding letter in the phrase and checks to determine if the player
    * has won the game (ending the game if they won)
    * @method
    * @name handleInteraction
    * @param {Object} key - The HTML button that the player has clicked
    */
   handleInteraction(key) {
     console.log(typeof(key));
     key.setAttribute('disabled', true);
     if(this.activePhrase.checkLetter(key.textContent)) {
       key.classList.remove('key');
       key.classList.add('chosen');
       this.activePhrase.showMatchedLetter(key.textContent);
       if(this.checkForWin()) {
         this.gameOver(true);
       }
     } else {
       key.classList.remove('key');
       key.classList.add('wrong');
       this.removeLife();
     }
   }

   /**
    * Remove one of the player's lives if they guess incorrectly by changing
    * the image displayed on the scoreboard and check to determine if the
    * player is out of lives (ending the game if they are out)
    * @method
    * @name removeLife
    */
   removeLife() {
     const lives = document.querySelectorAll('img[src="images/liveHeart.png"]');
     lives[0].setAttribute('src','images/lostHeart.png');
     this.missed += 1;
     if(this.missed === 5) {
       this.gameOver();
     }
   }

   /**
    * Checks to determine whether or not the player has revealed all of the
    * letters in the phrase; if they have then they have won the game
    * @method
    * @name checkForWin
    * @returns {Boolean} - Whether or not any of the phrase's letters are hidden
    */
   checkForWin() {
     const currentPhrase = document.querySelectorAll('#phrase li');
     for(let li of currentPhrase) {
       /** Player hasn't guessed the complete phrase */
       if(li.classList.contains('hide')) {
         return false;
       }
     }
     /** Every character in the phrase has been shown */
     return true;
   }

   /**
    * Ends the game and generates an appropriate game over message by restoring
    * the start screen and displaying a message based on the whether or not the
    * player has won or lost the game; resets the gameboard in between games
    * @method
    * @name gameOver
    * @param {Boolean} hasWon - A Boolean value indicating if the player has won
    */
   gameOver(hasWon = false) {
     document.querySelector('#overlay').style.display = 'initial';
     if(hasWon) {
       document.querySelector('#game-over-message')
        .textContent = "You Win! Awesome!";
       document.querySelector('#game-over-message').style.color = '#000';
       document.querySelector('#overlay').classList.remove('start');
       document.querySelector('#overlay').classList.remove('lose');
       document.querySelector('#overlay').classList.add('win');
     } else {
       document.querySelector('#game-over-message')
        .textContent = "You are out of lives...";
       document.querySelector('#game-over-message').style.color = '#000';
       document.querySelector('#overlay').classList.remove('start');
       document.querySelector('#overlay').classList.remove('win');
       document.querySelector('#overlay').classList.add('lose');
     }
     this.resetGameBoard();
   }

   /**
    * Resets the gameboard by removing the old phrase from the display,
    * enabling all onscreen keyboard buttons (resetting their state) and
    * resetting the player's lives
    * @method
    * @name resetGameBoard
    */
   resetGameBoard() {
     /** Remove the old phrase li elements from the phrase display div */
     const oldPhrase = document.querySelectorAll('#phrase li');
     for(let letter of oldPhrase) {
       letter.parentNode.removeChild(letter);
     }
     /** Remove disabled attribute and restore initial class settings */
     const buttons = document.querySelectorAll('#qwerty button');
     for(let button of buttons) {
       button.removeAttribute('disabled');
       button.classList.remove('chosen', 'wrong');
       button.classList.add('key');
     }
     /** Restore the images for the player's lives in the scoreboard */
     const lives = document.querySelectorAll('img[src="images/lostHeart.png"]');
     for(let live of lives) {
       live.setAttribute('src', 'images/liveHeart.png');
     }
   }
 }
