class Pig{
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}