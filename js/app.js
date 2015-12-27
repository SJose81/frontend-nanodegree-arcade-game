// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 0;
    this.movement = 20;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.movement*dt;
    if(this.x > ctx.canvas.width){
        this.x = 0;
    }

    //handling collision
    currEnemyImageWidth = Resources.get(this.sprite).width;
    currEnemyImageHeight = Resources.get(this.sprite).height;
    playerImageWidth = Resources.get(player.sprite).width;
    playerImageHeight = Resources.get(player.sprite).height;
    
    if(this.x + currEnemyImageWidth >= player.x && this.x <= player.x + playerImageWidth && 
        this.y + currEnemyImageHeight >= player.y && this.y <= player.y + playerImageHeight){    
            player.x = 200;
            player.y = 440;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.setY = function(yPos) {
    this.y = yPos;
};

Enemy.prototype.setMovement = function(mov){
    this.movement = mov;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 440;
    this.movement = 20;
};

Player.prototype.update = function() {
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPlayer = function() {
    if(this.y <= 40){
        this.y = ctx.canvas.height/1.3;
    }
};

Player.prototype.limitMovement = function() {
    //if the player is at the bottom of the canvas
    if(this.y >= ctx.canvas.height/1.3){
        this.y = ctx.canvas.height/1.3;
    }

    //if the player is at the exterme left of the canvas
    if(this.x <= ctx.canvas.width/40){
        this.x = ctx.canvas.width/40;
    }

    //if the player is at the exterme right of the canvas
    if(this.x >= ctx.canvas.width/1.2){
        this.x = ctx.canvas.width/1.2;
    }
};


Player.prototype.handleInput = function(keyInput) {
    if(keyInput == 'left'){
        this.x -= this.movement;
    }else if(keyInput ==  'up'){
        this.y -= this.movement;
    }else if(keyInput ==  'right'){
        this.x += this.movement;
    }else if(keyInput ==  'down'){
        this.y += this.movement;
    }else{

    }

    //Check boundary condition and limit movement
    this.limitMovement();

    //reset player
    this.resetPlayer();
    

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [];

enemy1 = new Enemy();
enemy1.setY(300);
enemy1.setMovement(50);

enemy2 = new Enemy();
enemy2.setY(135);
enemy2.setMovement(30);

enemy3 = new Enemy();
enemy3.setY(215);
enemy3.setMovement(70);

enemy4 = new Enemy();
enemy4.setY(135);
enemy4.setMovement(110);

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);

// Place the player object in a variable called player
player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
