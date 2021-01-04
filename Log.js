class Log
{
    constructor(x,y,height,angle)
        {
            var boptions=
             {
                  restitution : 0.8,
                  density:1.0,
                  friction:1.0

            }

            this.body=Bodies.rectangle(x,y,25,height,boptions);
            this.width=25;
            this.height=height;

            Matter.Body.setAngle(this.body,angle)

         World.add(myworld,this.body);

        }
        
    display()
    {
        var angle=this.body.angle;
        var position=this.body.position;
        angleMode(RADIANS)
        push();
        translate(position.x,position.y);
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(7);
        stroke("brown")
        fill("orange");
        rect(0,0,this.width,this.height);
        pop();
    }
}