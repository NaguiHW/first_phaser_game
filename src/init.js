// configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
};

// create a new game
let game = new Phaser.Game(config);

// load all images
function preload(){
    this.load.image('bird', 'assets/bird.png')
}

// show the images
function create(){
    this.bird = this.physics.add.image(50, 100, 'bird');
    this.bird.setCollideWorldBounds(true);
    this.bird.setBounce(0.35);
}

// update the game
function update(time, delta){

}