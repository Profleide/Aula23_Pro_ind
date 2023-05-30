class CannonBall { // primeira parte
  constructor(x, y) //Esta função terá dois parâmetros, x e y, que serão as posições da bala de canhão.
  {
    var options = {
      isStatic: true // a bola do canhao tem q estar em movimento
    };
    this.r = 30; // sempre pra chamar uma propriedade dentro de uma função em uma classe nos usamos This.
    this.body = Bodies.circle(x, y, this.r, options); // criando um corpo circular
    this.image = loadImage("./assets/cannonball.png");// add o desenho no nosso corpo circular
    World.add(world, this.body); // add nossos objetos no nosso mundo
  }

  shoot() {
    var newAngle = cannon.angle - 28; 
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false); // aluno
    Matter.Body.setVelocity(this.body, { // Aluno
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }
// Esta função diz ao nosso código para desenhar as
//imagens no centro, o que significa que quando passarmos
//as posições x e y da imagem, esses pontos estarão no
//centro da imagem e não no canto superior esquerdo.
  
display() 
  {
    var pos = this.body.position; // declarar variavel q vai mostrar a posição da nossa bola de canhão
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
