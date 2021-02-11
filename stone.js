class Bomb {
    constructor(x, y, diameter) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.radius = diameter/2;
      this.image = loadImage("nuclear sign.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill("grey");
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
      pop ();
    }
  }