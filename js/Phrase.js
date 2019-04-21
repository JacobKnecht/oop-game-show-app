 /**
  * Phrase class declaration
  * @class
  * @name Phrase
  */
 class Phrase {
   /**
    * Represents a phrase
    * @constructor
    * @param {string} phrase - The phrase to be displayed in-game
    */
   constructor(phrase) {
     /**
      * Phrase class property declarations
      * @property {string} Phrase.phrase - The phrase's text (lowercase format)
      */
     this.phrase = phrase.toLowerCase();
   }

   /**
    * Generates the HTML to display the phrase used in-game
    * @method
    * @name addPhraseToDisplay
    */
   addPhraseToDisplay() {
     const phraseDiv = document.querySelector('#phrase ul');
     this.phrase = this.phrase.trim(); /** Cleans the phrase's formatting */
     /** Phrases should only contain letters and spaces */
     const regex = /^[a-z ]+$/;
     if(regex.test(this.phrase)) {
       for(let char of this.phrase) {
         if(char === ' ') { /** If the character is a space */
           let space = document.createElement('li');
           space.className = 'space';
           space.textContent = ' ';
           phraseDiv.append(space);
         } else { /** If the character is a letter */
           let letter = document.createElement('li');
           letter.classList.add('hide', 'letter', char);
           /**
            * The li elements containing the phrase's letters are given the
            * initial text value of the '-' character; this prevents the player
            * from cheating by dragging their mouse over the li elements and
            * highlighting the characters, which should be hidden
            * Note: Initializing the text value with white space or leaving the
            * value uninitialized causes the li elements to shift on the
            * display when the user selects a correct character
            */
           letter.textContent = '-';
           phraseDiv.append(letter);
         }
       }
     } else { /** Phrase contains one or more non-letter/non-space characters */
       alert(this.phrase + ' is not a valid phrase');
     }
   }

   /**
    * Checks for the player's chosen letter in the displayed phrase
    * @method
    * @name checkLetter
    * @param {string} letter - The player's chosen letter
    * @returns {Boolean} - Whether the phrase contains the chosen letter
    */
   checkLetter(letter) {
     for(let char of this.phrase) {
       if(char === letter) {
         return true;
       }
     }
     return false;
   }

   /**
    * Reveals correctly matched letter in the displayed phrase
    * @method
    * @name showMatchedLetter
    * @param {string} letter - A correctly matched letter
    */
   showMatchedLetter(letter) {
     const matches = document.querySelectorAll('.' + letter);
     for(let match of matches) {
       /**
        * Set text value of the li element when it is correctly guessed to
        * prevent players from cheating by generating content early
        */
       match.textContent = letter;
       match.classList.remove('hide');
       match.classList.add('show');
     }
   }
 }
