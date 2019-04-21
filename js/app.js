 //create a new instance of the game class
 let game;
 //"Start Game" button click event listener
 document.querySelector('#btn__reset').addEventListener('click', function() {
   //create a new game
   game = new Game();
   //start the game
   game.startGame();
   //Onscreen keyboard buttons click event listener
   document.querySelector('#qwerty').addEventListener('click', function(e) {
     if(e.target.className === 'key') {
       game.handleInteraction(e.target);
     }
   });
 });
