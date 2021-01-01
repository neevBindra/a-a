class Stone{

    constructor(x,y){
    var op = {
        isStatic:false,
        restitution:0,
        friction:0.5,
        density:1.2
    }

    
        this.body = Bodies.circle(x,y,5)
    this.width = width;
  this.height = height;
    this.image = loadImage("stone.png");
    World.add(world,this.body);
    }

    
    
    display(){
    
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
     //   rect (pos.x,pos.y,this.width,this.height)   
        fill ("white");
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
    }