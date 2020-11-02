class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius);
    this.radius = Matter.Bodies.radius;
    
    World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("white");
        ellipse(0, 0, this.radius);
        pop();
      }
    };
