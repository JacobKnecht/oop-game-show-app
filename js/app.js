 /**
  * Game class instance declaration
  * @var {Object} game
  */
 let game;

 /**
  * "Start Game" button click event listener; create a new game object and
  * start the game when the button is clicked
  */
 document.querySelector('#btn__reset').addEventListener('click', function() {
   game = new Game();
   game.startGame();
 });

 /** Onscreen keyboard buttons click event listener */
 document.querySelector('#qwerty').addEventListener('click', clickHandler);

 /** Onscreen keyboard buttons keydown event listener */
 document.addEventListener('keydown', keydownHandler);

 /**
  * Callback function that handles click events for the onscreen keyboard;
  * checks to determine if the target of the event is an onscreen keyboard
  * button, if so, it passes the button to the method that controls game logic
  * @callback
  * @name clickHandler
  * @param {Object} event - The click event that triggered the event listener
  */
 function clickHandler(event) {
   if(event.target.className === 'key') {
     game.handleInteraction(event.target);
   }
 }

 /**
  * Callback function that handles keydown events for the onscreen keyboard
  * buttons; checks to determine which key was pressed and then passes the
  * corresponding onscreen keyboard button to the method that controls game
  * logic
  * @callback
  * @name keydownHandler
  * @param {Object} event - The keydown event that triggered the event listener
  */
 function keydownHandler(event) {
   const buttons = document.querySelectorAll('#qwerty button');
   for(let button of buttons) {
     if(button.textContent === event.key &&
        !button.classList.contains('wrong')) {
       game.handleInteraction(button);
     }
   }
 }
