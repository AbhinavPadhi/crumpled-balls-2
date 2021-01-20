class paper{

   constructor(x,y,r){

       var options={

           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:0.75

       }
       this.x=x;
       this.y=y;
       this.r=r;
       this.image = loadImage("images/paper.png");

       this.body=Bodies.circle(x,y,this.r/2,options);
       World.add(world,this.body);

   }

   display(){
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y);
       imageMode(CENTER)
       image(this.image,0,0,60,60);
       pop()
   }







}
