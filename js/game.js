// new scene
let gameScene = new Phaser.Scene('Game');

// configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: gameScene
};

// create a new game

let game = new Phaser.Game(config);