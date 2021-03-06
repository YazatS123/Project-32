class SlingShot{
    constructor(bodyA, pointB){
         var options = { 
             bodyA: bodyA,
              pointB: pointB,
               stiffness: 0.04,
                length: 3
               }
                 this.pointB = pointB 
                 this.Slingshot = Constraint.create(options); 
                 World.add(world, this.Slingshot); } 
                 fly(){
                      this.Slingshot.bodyA = null; 
                   } 
                  attach(body){
                    this.Slingshot.bodyA = body;
                  }
                   display(){  
                       //image(this.sling3,170,115); 
                       if(this.Slingshot.bodyA){
                            var pointA = this.Slingshot.bodyA.position;
                             var pointB = this.pointB; 
                             strokeWeight(4); 
                             fill("lightblue");
                             line(pointA.x, pointA.y, pointB.x, pointB.y)
                           } } }