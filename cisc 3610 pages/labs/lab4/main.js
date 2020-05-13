var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 800,
        backgroundColor: '#efefef',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload () {
        this.load.image('pear', 'images/pear.png');
        this.load.image('orange', 'images/orange.png');
        this.load.image('apple', 'images/apple.png');
        this.load.image('tree', 'images/tree.png');
        this.load.image('cherry', 'images/cherry.png');
        this.load.image('peach', 'images/peach.png');    
    }

    function create () {
       var tree = this.add.image( 400, 300, 'tree');
       var pear = this.add.image( 50, 50, 'pear');
       var orange = this.add.image( 50, 50, 'orange');
       var apple = this.add.image( 50, 50, 'apple');
       var peach = this.add.image( 50, 50, 'peach');
       var cherry = this.add.image( 50, 50, 'cherry');
      
       //tree.setInteractive();
       pear.setInteractive();
       orange.setInteractive();
       apple.setInteractive();
       peach.setInteractive();
       cherry.setInteractive();


       //this.input.setDraggable(tree);
       this.input.setDraggable(pear);
       this.input.setDraggable(orange);
       this.input.setDraggable(apple);
       this.input.setDraggable(peach);
       this.input.setDraggable(cherry);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
    }

    function update ()
    {
    }

