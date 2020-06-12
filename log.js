class WoodLog{
    constructor(x,y,angle) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.width = 150;
        this.height = 10;
        this.body = Bodies.rectangle(x, y,this.width,this.height, options);
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("brown");
        rect(0,0, this.width, this.height);
        pop();
 }
}