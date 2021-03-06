# Game Show App

Objective - The purpose of this project is to demonstrate object-oriented programming
principles through the creation of a game show application. The application
allows players to select letters from an on-screen keyboard to guess which
letters are contained within a hidden, randomly-selected phrase. If the
player selects a letter contained in the phrase, it is revealed within the
phrase's display; if they guess incorrectly, they lose a life. If the player
loses all five of their lives, they lose the game; if they correctly guess
the entire phrase, they win the game. It is designed to meet the requirements
for an 'Exceeds Expectations' grade.

Functionality - The game is driven by the implementation of two classes, Phrase and Game. The
Phrase class represents a phrase to be displayed to the player and the Game
class represents an active game. Each class contains properties and methods
that enable the program to display phrases, check for player choice validity,
start and end games, and handle the game's logic, amongst other
functionalities.

Implementation - The project is implemented through two classes and their associated properties
and methods:
1. class Phrase : Represents a phrase to be used in-game. Contains the
following properties and methods:  
  * constructor(phrase) : Receives as a parameter a string to be used as
the phrase, and converts said string to an all lowercase format.
Creates a Phrase object and initializes its properties.  
  * Phase.phrase : A property representing the phrase used in the game.  
  * Phrase.addPhraseToDisplay() : Generates the HTML to display the phrase used in the game.  
  * Phrase.checkLetter(letter) : Receives as a parameter a letter that
represents the player's choice, and then checks to determine whether
the active phrase contains the letter. Returns a Boolean signifying
whether the phrase contains the letter.  
  * Phrase.showMatchedLetter(letter) : Receives as a parameter a letter
that has been matched in the phrase and reveals that letter in the
phrase's display.  
2. class Game : Represents an active game. Contains the following properties
and methods:  
  * constructor() : Creates a Game object and initializes it properties.  
  * Game.missed : A property representing the number of incorrect guesses.  
  * Game.phrases : A property representing an array of Phrase objects containing the phrases to be used in the game.  
  * Game.activePhrase: A property representing the phrase being displayed in the game.  
  * Game.startGame() : Starts a game by hiding the start screen, selecting a random phrase, and adding that phrase to the display.  
  * Game.getRandomPhrase() : Returns a randomly-selected phrase from the phrases stored in the Game.phrases property.  
  * Game.handleInteraction(key) : Receives as a parameter one of the
on-screen keyboard buttons that the player has selected and disables
it. It then removes a life from the player's total lives or reveals
the corresponding letter in the phrase depending on whether the
letter was correctly guessed.  
  * Game.removeLife() : Removes one of the player's lives if they guess incorrectly.  
  * Game.checkForWin() : Determines whether the player has won the game
by checking to see if they have revealed all of the letters in the
phrase. Returns a Boolean value signifying whether there are any
more hidden letters in the phrase.  
  * Game.gameOver(hasWon = false) : Ends the game. Receives as a
parameter a Boolean value signifying whether the player has won the
game. If they have, the settings for a win state are generated; if
the player did not win then the settings for a lose state are
generated.  
  * Game.resetGameBoard() : Resets the game board by removing the old
phrase from the display, restoring the on-screen keyboard buttons to
their initial state and restoring the player's lives.  

The game is created and monitored in app.js, a file containing the following
callback functions and event-listeners:

3. document.querySelector('#btn__reset').addEventListener('click') : An
event-listener for click events on the "Start Game" button. Creates
and starts a new game.
4. document.querySelector('#qwerty').addEventListener('click') : An event
-listener for click events on the buttons in the on-screen keyboard.
Calls a callback function to handle the event.
5. document.addEventListener('keydown') : An event-listener for 'keydown'
events occurring in the document. Calls a callback function to handle
the event.
6. clickHandler(event) : Receives as a parameter a click event and
passes the corresponding on-screen keyboard button to
Game.handleInteraction(key) to dictate the game's logic.
7. keydownHandler(event) : Receives as a parameter a 'keydown' event and
passes the corresponding on-screen keyboard button to
Game.handleInteraction(key) to dictate the game's logic.
