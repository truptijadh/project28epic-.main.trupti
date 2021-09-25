class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };//options

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

        World.add(world, this.body);

        this.life1 = "yellow";
        this.life2 = "yellow";
        this.life3 = "yellow";
  }//constructor

  life(){
    push()
    textSize(20);
    fill("white");
    text("Computer",980,30);

    fill(this.life1);
    rect(880,40,70,30);
    fill(this.life2);
    rect(950,40,70,30);
    fill(this.life3);
    rect(1020,40,70,30);
  }

   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

  
  }//display
}//class computer
