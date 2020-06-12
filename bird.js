class Bird{
    constructor(x,y) {
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
        fill("red");
        this.body.position.x=mouseX
        this.body.position.y=mouseY
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}