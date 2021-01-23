let numeroDaJogada = 1;

let LISTA_DE_PARAMETROS = [
  {
    METODO: baixo, //0
    PECA: [1, 3],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [90, 45]
  },
  {
    METODO: direita,
    PECA: [2, 1],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [50, 150]
  },
  {
    METODO: cima, //2
    PECA: [3, 3],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [200, 50]
  },
  {
    METODO: esquerda,
    PECA: [2, 5],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [150, 50]
  },
  {
    METODO: baixo, //4
    PECA: [0, 4],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [150, 0]
  },
  {
    METODO: direita,
    PECA: [2, 3],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [150, 150]
  },
  {
    METODO: direita, //6
    PECA: [0, 2],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [100, 50]
  },
  {
    METODO: direita,
    PECA: [1, 2],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [100, 100]
  },
  {
    METODO: baixo, //8
    PECA: [0, 4],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [150, 0]
  },
  {
    METODO: esquerda,
    PECA: [2, 5],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [150, 50]
  },
  {
    METODO: cima, //10
    PECA: [4, 4],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [250, 100]
  },
  {
    METODO: direita,
    PECA: [2, 3],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [150, 150]
  },
  {
    METODO: esquerda, //12
    PECA: [4, 6],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [200, 150]
  },
  {
    METODO: cima,
    PECA: [5, 4],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [250, 150]
  },
  {
    METODO: baixo, //14
    PECA: [2, 6],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [250, 100]
  },
  {
    METODO: baixo,
    PECA: [2, 5],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [200, 100]
  },
  {
    METODO: esquerda, //16
    PECA: [4, 6],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [200, 150]
  },
  {
    METODO: baixo,
    PECA: [3, 4],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [150, 150]
  },
  {
    METODO: cima, //18
    PECA: [6, 4],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [250, 200]
  },
  {
    METODO: direita,
    PECA: [4, 3],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [150, 250]
  },
  {
    METODO: direita, //20
    PECA: [6, 2],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [100, 305]
  },
  {
    METODO: direita,
    PECA: [5, 2],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [100, 300]
  },
  {
    METODO: cima, //22
    PECA: [6, 4],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [250, 200]
  },
  {
    METODO: esquerda,
    PECA: [4, 5],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [150, 150]
  },
  {
    METODO: baixo, //24
    PECA: [3, 2],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [50, 150]
  },
  {
    METODO: direita,
    PECA: [4, 0],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [0, 250]
  },
  {
    METODO: baixo, //26  
    PECA: [2, 0],
    DIRECAO_DA_SETA: setaBx,
    POSICAO_DA_SETA: [5, 100]
  },
  {
    METODO: esquerda,
    PECA: [4, 3],
    DIRECAO_DA_SETA: setaEsq,
    POSICAO_DA_SETA: [50, 150]
  },
  {
    METODO: direita, //28  
    PECA: [4, 0],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [0, 250]
  },
  {
    METODO: cima,
    PECA: [5, 2],
    DIRECAO_DA_SETA: setaCima,
    POSICAO_DA_SETA: [150, 150]
  },
  {
    METODO: direita, //30  
    PECA: [3, 1],
    DIRECAO_DA_SETA: setaDir,
    POSICAO_DA_SETA: [50, 200]
  },
];

//  MOVIMENTO PARA CIMA

function cima(lin, col) {
  matriz[lin][col] = 0;
  matriz[lin - 1][col] = 0;
  matriz[lin - 2][col] = 1;
  exibirTabuleiro();
}
//  MOVIMENTO PARA BAIXO

function baixo(lin, col) {
  matriz[lin][col] = 0;
  matriz[lin + 1][col] = 0;
  matriz[lin + 2][col] = 1;
  exibirTabuleiro();
}

//  MOVIMENTO PARA ESQUERDA

function esquerda(lin, col) {
  matriz[lin][col] = 0;
  matriz[lin][col - 1] = 0;
  matriz[lin][col - 2] = 1;
  exibirTabuleiro();
}

//  MOVIMENTO PARA DIREITA

function direita(lin, col) {
  matriz[lin][col] = 0;
  matriz[lin][col + 1] = 0;
  matriz[lin][col + 2] = 1;
  exibirTabuleiro();
}

//  EXIBIR QUADRADO VERMELHO E SETA PARA CIMA

function setaCima(lin, col, setax, setay) {
  matriz[lin][col] = 2;
  exibirTabuleiro();
  exibirNumeroDaJogada();
  mostraSetaParaCima(setax, setay);
}

//  EXIBIR QUADRADO VERMELHO E SETA PARA BAIXO 

function setaBx(lin, col, setax, setay) {
  matriz[lin][col] = 2;
  exibirTabuleiro();
  exibirNumeroDaJogada();
  mostraSetaParaBaixo(setax, setay);
}

//  EXIBIR QUADRADO VERMELHO E SETA PARA ESQUERDA

function setaEsq(lin, col, setax, setay) {
  matriz[lin][col] = 2;
  exibirTabuleiro();
  exibirNumeroDaJogada();
  mostraSetaParaEsquerda(setax, setay);
}

//  EXIBIR QUADRADO VERMELHO E SETA PARA DIREITA

function setaDir(lin, col, setax, setay) {
  matriz[lin][col] = 2;
  exibirTabuleiro();
  exibirNumeroDaJogada();
  mostraSetaParaDireita(setax, setay);
}

//  EXIBIR NÚMERO DA JOGADA

function exibirNumeroDaJogada() {
  let cor = 'red';
  stroke('black');
  fill(cor);
  rect(400, 100, 170, 120); // Quadrado vermelho(JOGADA)
  fill(0);
  textSize(32);
  textFont('Helvetica');
  textStyle(BOLD);
  text(' JOGADA', 405, 130); // Texto do quadrado(JOGADA)
  textSize(60);
  text(numeroDaJogada, 460, 190); // Número da jogada
  numeroDaJogada += 1;
}

//  EXIBIR FIM

function exibirFim() {
  let cor = 'red';
  stroke('black');
  fill(cor);
  rect(400, 100, 170, 120); // Quadrado vermelho(FIM)
  fill(0);
  textSize(50);
  textFont('Helvetica');
  textStyle(BOLD);
  text(' FIM', 430, 180); // Texto do quadrado(FIM)  
}