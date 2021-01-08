class Dustbin {
    constructor(x, y, height, angle, width) {
        var Box_options = {
            'restitution' : 0,
            isStatic : true,
        }

        this.body = Bodies.rectangle(x, y, width, height, Box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        
        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);
    }


    display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y)
    rotate(angle);
    imageMode(CENTER);
    fill ("red")
    stroke('red');
    image (this.image, 0, 0, this.width, this.height);
    pop();
    }

    }