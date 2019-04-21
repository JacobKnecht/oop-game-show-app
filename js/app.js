 //create a new instance of the game class
 let game;

 //"Start Game" button click event listener
 document.querySelector('#btn__reset').addEventListener('click', function() {
   //create a new game
   game = new Game();
   //start the game
   game.startGame();
 });

 //Onscreen keyboard buttons click event listener
 document.querySelector('#qwerty').addEventListener('click', clickHandler);

 //Onscreen keyboard buttons keydown event listener
 document.addEventListener('keydown', keydownHandler);

 //function to handle onscreen keyboard keydown events
 function clickHandler(event) {
   if(event.target.className === 'key') {
     game.handleInteraction(event.target);
   }
 }

 //function to handle keydown events
 function keydownHandler(event) {
   const buttons = document.querySelectorAll('#qwerty button');
   for(let button of buttons) {
     if(button.textContent === event.key) {
       game.handleInteraction(button);
     }
   }
 }
