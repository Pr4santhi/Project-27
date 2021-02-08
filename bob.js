class bob{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0,
            density:0.8		
			}
		this.x=x;
        this.y=y;
        this.r=r;
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options);
 		World.add(world, this.body);
    }
    display(){
    //   this.body.position.x = mouseX;
    //   this.body.position.y = mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.r, this.r);
    fill("pink");
    pop();

    }
  }
