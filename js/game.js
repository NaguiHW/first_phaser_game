// create new scene
let gameScene = new Phaser.Scene('Game');

// load all images
gameScene.preload = function(){
    // loadgind background image
    this.load.image('background', 'assets/background.png');

    // loading player image
    this.load.image('player', 'assets/player.png');
    
    // loading dragon image
    this.load.image('enemy', 'assets/dragon.png');
};

// call the images
gameScene.create = function(){
    // calling the background
    let bg = this.add.sprite(config.width/2, config.height/2, 'background');

    // calling the player
    let player = this.add.sprite(50, config.height/2, 'player');
    
    // calling the player
    let enemy = this.add.sprite(250, config.height/2, 'enemy');
    enemy.flipX = true;
    enemy.setScale(0.65, 0.65);
};

// configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game

let game = new Phaser.Game(config);