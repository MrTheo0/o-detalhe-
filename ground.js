class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  Show(){

    var pos = this.body.position;
    Push();
    rectMode(CENTER);
    stroke(255);
    Fill(127);

    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    Pop();
    angle += 0.01;
  }

 
   
}
