class Mango{
    constructor(x,y){
    var op ={
        isStatic:true,
        restitution:1.0,
        friction:0.5,
        density:1.2
    }
   

       this.body = Bodies.circle(x,y,50,op)
       this.width = width;
       this.heightb = height;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
     push ();
        fill ("white")
       ellipseMode(RADIUS);
     //   rect(pos.x, pos.y,this.width,this.height);
        imageMode (CENTER);
        image(this.image,pos.x,pos.y,50);
        pop ();
    }

}