class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,25);
        image(this.sling2,175,25);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,23,8);
            push();
            if(pointA.x<=200) {
                strokeWeight(6);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y+10);
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y+5);
                image(this.sling3,pointA.x-30,pointA.y-10,10,25);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y+10);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y+5);
                image(this.sling3,pointA.x+24,pointA.y-10,10,25);
            }
            pop();
        }
    }
    
}