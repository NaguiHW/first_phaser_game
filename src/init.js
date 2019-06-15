// configuration of the game
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'container',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                //y : 500
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
    this.cursor = this.input.keyboard.createCursorKeys();
}

// update the game
function update(time, delta){
    if(this.cursor.right.isDown){
        this.bird.x++;
    } else if (this.cursor.left.isDown){
        this.bird.x--;
    }
}