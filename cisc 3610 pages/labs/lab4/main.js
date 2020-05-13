var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tree', 'images/peach.jpg');
}

function create ()
{
    var tree = this.add.image(500, 500, 'tree');

    tree.setInteractive();

    this.input.setDraggable(tree);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}
