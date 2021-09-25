class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("player.png");

    World.add(world, this.body);

    this.life1 = "yellow";
    this.life2 = "yellow";
    this.life3 = "yellow";
  }

  life(){
    push()
    textSize(20);
    fill("white");
    text("Player",280,30);

    fill(this.life1);
    rect(180,40,70,30);
    fill(this.life2);
    rect(250,40,70,30);
    fill(this.life3);
    rect(320,40,70,30);

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


  }
}
