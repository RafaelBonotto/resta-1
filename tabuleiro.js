let matriz = [  [-1,-1, 1, 1, 1,-1,-1],
                [-1,-1, 1, 1, 1,-1,-1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [-1,-1, 1, 1, 1,-1,-1],
                [-1,-1, 1, 1, 1,-1,-1],                    
                               			];

/*        Valores da matriz:
          -1 = quadrado cinza
           1 = Quadrado azul
           0 = Quadrado verde
           2 = Quadrado vermelho
*/

function desenhaQuadradoCinza(x, y){  // fica a parte
  let c = color(180);
  noStroke();
  fill(180);
  rect(x, y, 50, 50);  
}

function desenhaQuadradoAzul(x, y){  // param cor
  let cor = '#7B68EE';
  stroke('black');
  fill(cor);
  rect(x, y, 50, 50);  
}

function desenhaQuadradoVerde(x, y){  // param cor
  let cor = '#00FF00';
  stroke('black');
  fill(cor);
  rect(x, y, 50, 50);  
}

function desenhaQuadradoVermelho(x, y){  // param cor
  let cor = '#FF0000';
  stroke('black');
  fill(cor);
  rect(x, y, 50, 50);  
}


function exibirTabuleiro(){
  
    let x = 0;
	let y = 0;

	for(var lin= 0 ; lin < 7 ; lin++){
	    for(var col= 0; col < 7 ; col++){

	     	// cor cinza(180) para posições onde for proibido colocar peças (valor = -1)
	     	if (matriz[lin][col] == - 1){ 
                
				desenhaQuadradoCinza(x, y);// passa cor no param e arrumar na funcao
			}
            
			// cor azul onde houver uma peça (valor = 1)
			if (matriz[lin][col] == 1){ 
				
				desenhaQuadradoAzul(x, y);
			}
            
			// cor verde para ausência de peça (valor = 0) inicialmente no centro matriz[3][3]
			if (matriz[lin][col] == 0){
				
				desenhaQuadradoVerde(x, y);
			}
            
			if (matriz[lin][col] == 2){
                
				desenhaQuadradoVermelho(x, y);
			}

			x += 50;
	    }
  		
	   y += 50;
	   x = 0;    
	}
}

