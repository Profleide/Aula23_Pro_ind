class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle; // add angulo (Aluno)
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  
  display() {
    console.log(this.angle)
    // Aluno
    if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) { // movimento do teclado
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) { // movimento do teclado
      this.angle -= 1;
    }

    push();
    translate(this.x, this.y); // Aluno
    rotate(this.angle); // Aluno
    imageMode(CENTER); // Aluno
    image(this.cannon_image,0,0, this.width, this.height); // Aluno
    pop();
    image(this.cannon_base, 70, 20, 200, 200); // Aluno
    noFill();
  }
}
