// new scene
let gameScene = new Phaser.Scene('Game');

gameScene.preload = function(){
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
};

gameScene.create = function(){
    let bg = this.add.sprite(0, 0, 'background');

    bg.setPosition(config.width/2, config.height/2);
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