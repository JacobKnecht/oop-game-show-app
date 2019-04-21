//Game class declaration
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [new Phrase('There can only be one'),
                     new Phrase('Chip off the old block'),
                     new Phrase('War never changes'),
                     new Phrase('For good measure'),
                     new Phrase('A plague on both your houses')];
     this.activePhrase = null;
   }
   startGame() {
     document.querySelector('#overlay').style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }
   getRandomPhrase() {
     const numOfPhrases = 5;
     const randomIndex = Math.floor(Math.random() * Math.floor(numOfPhrases));
     return this.phrases[randomIndex];
   }
   handleInteraction(key) {
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
   removeLife() {
     const lives = document.querySelectorAll('img[src="images/liveHeart.png"]');
     lives[0].setAttribute('src','images/lostHeart.png');
     this.missed += 1;
     if(this.missed === 5) {
       this.gameOver();
     }
   }
   checkForWin() {
     const currentPhrase = document.querySelectorAll('#phrase li');
     for(let li of currentPhrase) {
       if(li.classList.contains('hide')) { //user hasn't guessed complete phrase
         return false;
       }
     }
     //every character in the phrase has been shown
     return true;
   }
   gameOver(hasWon = false) {
     document.querySelector('#overlay').style.display = 'initial';
     if(hasWon) {
       document.querySelector('#game-over-message')
        .textContent = "You Win! Awesome!"
       document.querySelector('#overlay').classList.remove('start');
       document.querySelector('#overlay').classList.remove('lose');
       document.querySelector('#overlay').classList.add('win');
     } else {
       document.querySelector('#game-over-message')
        .textContent = "You are out of lives..."
       document.querySelector('#overlay').classList.remove('start');
       document.querySelector('#overlay').classList.remove('win');
       document.querySelector('#overlay').classList.add('lose');
     }
     this.resetGameBoard();
   }
   resetGameBoard() {
     //remove old phrase
     const oldPhrase = document.querySelectorAll('#phrase li');
     for(let letter of oldPhrase) {
       letter.parentNode.removeChild(letter);
     }
     //enable all onscreen keyboard buttons and reset their state
     const buttons = document.querySelectorAll('#qwerty button');
     for(let button of buttons) {
       button.removeAttribute('disabled');
       button.classList.remove('chosen', 'wrong');
       button.classList.add('key');
     }
     //reset the player's lives
     const lives = document.querySelectorAll('img[src="images/lostHeart.png"]');
     for(let live of lives) {
       live.setAttribute('src', 'images/liveHeart.png');
     }
   }
 }
