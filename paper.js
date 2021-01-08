class Paper {
   constructor(x, y,r) {
      var options={
         isStatic : true,
         restitution: 0.3,
         friction : 0.5,
         density : 1,
      }

       this.body = Bodies.circle(x, y, r/2, options);
       this.x = x;
       this.y = y;
       this.r = r;
       this.image = loadImage("paper.png");
       
       World.add(world, this.body);
   }


   display() {
   
   var pos = this.body.position;

   push();
   translate(pos.x, pos.y)
   imageMode(RADIUS);
   image(this.image, 0, 0, this.r);
   pop();
   }

}