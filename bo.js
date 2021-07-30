class Bo {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   
      display()
    {
      console.log(this.body.speed)
      var pos =this.body.position;
      if(this.body.speed<3){
      rectMode(CENTER);
      fill("pink")
      rect(pos.x, pos.y, this.width, this.height);}

      else
      {
        
         World.remove(world,this.body)
         push()
         this.Visibility=this.Visibility-5
         tint(255,this.Visibility)
         rect(this.x, this.y, this.width, this.height)
         pop();
      }
        
        
     
    }
  };