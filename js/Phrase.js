//Phrase class declaration
 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }
   addPhraseToDisplay() {
     const regex = /^[a-z ]+$/;
     const phraseDiv = document.querySelector('#phrase ul');
     this.phrase = this.phrase.trim();
     if(regex.test(this.phrase)) {
       for(let char of this.phrase) {
         if(char === ' ') { //character is a space
           let space = document.createElement('li');
           space.className = 'space';
           space.textContent = ' ';
           phraseDiv.append(space);
         } else { //character is a letter
           let letter = document.createElement('li');
           letter.classList.add('hide', 'letter', char);
           letter.textContent = char;
           phraseDiv.append(letter);
         }
       }
     } else {
       alert(this.phrase + ' is not a valid phrase');
     }
   }
   checkLetter(letter) {
     for(let char of this.phrase) {
       if(char === letter) {
         return true;
       }
     }
     return false;
   }
   showMatchedLetter(letter) {
     const matches = document.querySelectorAll('.' + letter);
     for(let match of matches) {
       match.classList.remove('hide');
       match.classList.add('show');
     }
   }
 }
