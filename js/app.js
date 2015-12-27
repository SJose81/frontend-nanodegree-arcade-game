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

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    currEnemyImageWidth = Resources.get(this.sprite).width;
    currEnemyImageHeight = Resources.get(this.sprite).height;
    playerImageWidth = Resources.get(player.sprite).width;
    playerImageHeight = Resources.get(player.sprite).height;
    console.log(this.x + " " + this.y + " " + player.x + " " + player.y);
    
    if((this.x + currEnemyImageWidth >= player.x && ((this.y + currEnemyImageHeight >= player.y) || (this.y <= player.y + playerImageHeight))) || 
        (this.x <= player.x + playerImageWidth && ((this.y + currEnemyImageHeight >= player.y) || (this.y <= player.y + playerImageHeight)))){
        
            player.x = 200;
            player.y = 360;
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
    this.y = 360;
    this.movement = 20;
};

Player.prototype.update = function(input) {
    if(input == 'left'){
        this.x -= this.movement;
    }else if(input ==  'up'){
        this.y -= this.movement;
    }else if(input ==  'right'){
        this.x += this.movement;
    }else if(input ==  'down'){
        this.y += this.movement;
    }else{

    }

    if(this.y <= 0){
        this.y = ctx.canvas.height/1.5;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(keyInput) {
    this.update(keyInput);
    
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [];

/*enemy1 = new Enemy();
enemy1.setY(60);
enemy1.setMovement(60);

enemy2 = new Enemy();
enemy2.setY(145);
enemy2.setMovement(40);*/

enemy3 = new Enemy();
enemy3.setY(230);
enemy3.setMovement(80);

/*enemy4 = new Enemy();
enemy4.setY(145);
enemy4.setMovement(110);*/

//allEnemies.push(enemy1);
//allEnemies.push(enemy2);
allEnemies.push(enemy3);
//allEnemies.push(enemy4);

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
