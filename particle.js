
class Particle{

    constructor(p){
        this.p   = p
        this.pos = p.createVector(p.random(p.windowWidth), 
        p.random(p.windowHeight));
        this.vel = p5.Vector.random2D();
        this.acc = p5.Vector.random2D();
        this.maxspeed = 4;
        this.prevPos = this.pos.copy();
    }

    update(){
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force){
        this.acc.add(force);
    }
    
    show(){
        this.p.stroke(0, 5);
        this.p.strokeWeight(1);
        this.p.line(this.pos.x,this.pos.y, this.prevPos.x, 
        this.prevPos.y)
        this.p.point(this.pos.x, this.pos.y);
        this.updatePrev()
    }
    
    updatePrev(){
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;

    }

    edges(){

        if(this.pos.x > this.p.windowWidth) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if(this.pos.x < 0) {
            this.pos.x = this.p.windowWidth; 
            this.updatePrev();
        }
        if(this.pos.y > this.p.windowHeight) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if(this.pos.y < 0) {
            this.pos.y = this.p.windowHeight;
            this.updatePrev();
        }
    }

    follow(vectors) { 
        var x = this.p.floor(this.pos.x / 20);
        var y = this.p.floor(this.pos.y / 20);
        var index = x+y*20;
        var force = vectors[index];
        this.applyForce(force);
        
    }
    
    
}
