class Block{
  constructor(x,y,width,height) {
    var options = {
      'restitution':1.3,
      'friction':0.5,
      'density':0.8
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(color){
    var pos =this.body.position;
    if(this.body.speed < 5){
      rectMode(CENTER);
      fill(color);
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
    }
  }
    
  };