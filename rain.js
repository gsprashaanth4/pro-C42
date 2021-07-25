class rain
{
    constructor(x,y,radius)
    {
        var options = {restitution: 0.1 , density: 0.5};
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }

    cycle()
    {
        if(this.body.position.y > 714)
        {
            Matter.Body.setPosition(this.body,{x: random(0,710) , y:0});
        }
    }
}