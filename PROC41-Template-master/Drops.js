class createDrop{
    constructor(x,y){
    
    
        var options ={
            friction: 0.0
        }
        this.r=1;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color("blue");
        World.add(world, this.body);
        this.rain = this.body;
    
    }

    update() 
    {
        if (this.rain.position.y >= 510) 
        {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

}