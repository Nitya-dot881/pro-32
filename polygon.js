class Polygon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.image = loadImage("9.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
     // rect(pos.x, pos.y, this.width, this.height);


     
    }
  };
