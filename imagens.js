var setaParaBaixo;
var setaParaCima;
var setaParaDireita;
var setaParaEsquerda;

// CARREGA IMAGENS

function preload() {
  setaParaBaixo = loadImage("imagens/setaParaBaixo.png");
  setaParaCima = loadImage("imagens/setaParaCima.png");
  setaParaEsquerda = loadImage("imagens/setaParaEsquerda.png");
  setaParaDireita = loadImage("imagens/setaParaDireita.png");
}

// EXIBIR AS SETAS

function mostraSetaParaBaixo(x, y) {
  image(setaParaBaixo, x, y, 50, 150);
}
function mostraSetaParaCima(x, y) {
  image(setaParaCima, x, y, 50, 150);
}
function mostraSetaParaEsquerda(x, y) {
  image(setaParaEsquerda, x, y, 150, 50);
}

function mostraSetaParaDireita(x, y) {
  image(setaParaDireita, x, y, 150, 50);
}