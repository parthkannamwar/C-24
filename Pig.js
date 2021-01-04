class Pig
{
    constructor(x,y)
        {
            var boptions=
             {
                  restitution : 0.04,
                  density:1.0,
                  friction:0.4

            }

            this.body=Bodies.rectangle(x,y,50,50,boptions);
            this.width=50;
            this.height=50;

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
        stroke("green")
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}