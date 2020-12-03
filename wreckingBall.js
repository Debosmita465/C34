class wreckingBall{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.6,
            'friciton':0.5,
            'density':1.2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
    push()
     translate(this.body.position.x,this.body.position.y);
     rectMode(CENTER);
     ellipse(0,0,this.radius*2);
     pop();
        
    }
}