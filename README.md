frontend-nanodegree-arcade-game
===============================

Frogger Arcade Game Design:
---------------------------
The arcade game code consists of the following sections:
	- The index.html, which is the main html file that will be loaded onto the browser in oder to play the game
	- The css folder which contains the style.css file
	- The js folder, which contains 3 js files. The resources.js file provides the image loading utility. THe app.js file provides the Player and Enemy classes implementation and instantiates them. The engine.js provides functionality to draw the game initially on the screen and then call update and render methods on the Player and Enemy objects objects.
	- The images folder contains the sprites/images of the animation that is used on the game.

How to run the game:
--------------------
	- In order to run the game, download the zip file or clone the project from the following github location: https://github.com/SJose81/frontend-nanodegree-arcade-game
	- Once you have downloaded/cloned the project, load the index.html file on any browser of your choice.
	- The game should load and you are ready to play the game!

How to play the game:
---------------------
	- In this game you have Player and Enemies (bugs). You are the player and your goal is to reach the water without colliding into any of the Enemies.
	- In case of a collision, the game is reset and the player moves back to the start square.
	- Once the player reaches the water, the game is won and the player is back to the initial position.
	- On order to move the player, use the keyboard arrow:
		-> The left arrow, moves the player to the left on the screen.
		-> The right arrow, moves the player to the right on the screen.
		-> The up arrow, moves the player to the up on the screen.
		-> The down arrow, moves the player to the down on the screen.
		-> Once the player reaches the left, right or bottom extreme position on the canvas then the player will not move any more as he/she cannot move off the screen. 
	- You are ready to play. ENJOY!!


