class Box
{
    constructor(x,y,width,height)
        {
            var boptions=
             {
                  restitution : 0.8,
                  density:1.0,
                  friction:1.0

            }

            this.body=Bodies.rectangle(x,y,width,height,boptions);
            this.width=width;
            this.height=height;

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
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}