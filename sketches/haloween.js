let fundo, morceg;

let morcegos = [];

function preload() {
  fundo = loadImage('fundoHaloween.jpg');
  morceg = loadImage('morcego1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  for (let i = 0; i < 7; i++) {

    morcegos.push({
      x: random(width),
      y: random(height-200),


      velocidade: random(0.8, 2),


      ang: random(TWO_PI),

      tamanho: random(100, 180)
    });
  }
}

function draw() {
  background(fundo);

  for (let m of morcegos) {


    m.x += m.velocidade;

    // movimento "voando"
    let yMov = sin(m.ang) * 20;

    image(
      morceg,m.x, m.y + yMov, m.tamanho, m.tamanho
    );

    // velocidade da animação
    m.ang += 0.03;

    // volta para o começo da tela
    if (m.x > width + 100) {
      m.x = -100;
      m.y = random(height- 200);
    }
  }
}