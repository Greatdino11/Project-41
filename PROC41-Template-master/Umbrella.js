class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.r = 70;

        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.body = Bodies.circle(x, y, this.r, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 30, 250,250);
        pop();
    }
}