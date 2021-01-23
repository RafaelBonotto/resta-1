function setup() {
  createCanvas(700, 400);
  noLoop();
}

function draw() {

  background(180);
  exibirTabuleiro();
  iniciarJogadas();
}

function iniciarJogadas() {
  let i = 0;
  buscaParametros(0);
}

function buscaParametros(i) {
  if (i == 31)
    return;

  let seta = LISTA_DE_PARAMETROS[i].DIRECAO_DA_SETA;
  let movimento = LISTA_DE_PARAMETROS[i].METODO;
  let pecaLinha = LISTA_DE_PARAMETROS[i].PECA[0];
  let pecaColuna = LISTA_DE_PARAMETROS[i].PECA[1];
  let setaX = LISTA_DE_PARAMETROS[i].POSICAO_DA_SETA[0];
  let setaY = LISTA_DE_PARAMETROS[i].POSICAO_DA_SETA[1];
  let mileSegundos = 1500;

  setTimeout(() => {
    seta(pecaLinha, pecaColuna, setaX, setaY);
    setTimeout(() => {
      movimento(pecaLinha, pecaColuna);
      buscaParametros(i + 1);
    }, mileSegundos);
  }, mileSegundos);
  if (i == 30) {
    setTimeout(exibirFim, mileSegundos + mileSegundos);
  }
}