const readline = require('readline-sync');  //chama o simulador de input no console
const Forca = require('./forca'); //chama a função forca da outra página

const jogo = new Forca('abacaxi'); //cria um novo jogo com a palavra abacaxi

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n"); //Variavel que pega o chute
    jogo.chutar(chute); //jogo com o metodo chutar ( que ta na forca forca)
    console.log(jogo.buscarDadosDoJogo()); //retornar como esta o dados do jogo
}

console.log("você " + jogo.buscarEstado());
