class chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.008,
            length:60
        }
        this.bodyB = bodyB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.bodyB;
        strokeWeight(4);
       stroke('rgb(255,0,0)')
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}