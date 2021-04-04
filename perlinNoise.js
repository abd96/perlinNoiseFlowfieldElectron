'use strict';

const perlinNoise = (p) => {
    var inc = 0.1;
    var scl = 10;
    var zoff = 0;
    var cols, rows; 

    var particles = [];
    var flowField;

    p.setup = () => { 
        p.createCanvas(p.windowWidth, p.windowHeight, SVG);
        cols = p.floor(p.windowWidth / scl);
        rows = p.floor(p.windowHeight / scl);
        flowField = new Array(cols * rows);
        for (var i=0; i<10000; i++){

            particles[i] = new Particle(p, scl, cols);
        }
        p.background(255);
    }
    
    p.draw = () => {
        var yoff = 0;
        for(var y =0; y<rows; y++){
            var xoff = 0;
            for(var x=0; x<cols; x++){
                var index = x + y * cols;
                flowField[index] = v
                var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI; 
                var v = p5.Vector.fromAngle(angle);
                v.setMag(3);
                p.stroke(0, 50); 
                p.push();
                p.translate(x*scl, y*scl);
                p.rotate(v.heading());
                // p.line(0,0,scl,0);
                p.pop();
                xoff += inc;
            }
            yoff += inc;
            zoff += 0.001;
            for (var i=0; i<particles.length;i++){
                particles[i].follow(flowField);
                particles[i].edges();
                particles[i].update();
                particles[i].show();
            }

        }

    }

 }
