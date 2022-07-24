class Forca {
  constructor(palavra){
    this.palavra = palavra.split(''),
    this.secreta = this.palavra.map((letra) => {return letra = "_"})
    this.vida = 6,
    this.estado = "Aguardando Chute",
    this.letrasChutadas = []
  }

  chutar(letra) { 
    if (letra.length <= 1){
      if(this.palavra.includes(letra)){
        for(let i = 0; i <= this.palavra.length - 1; i++){
          if(letra == this.palavra[i]){
            this.secreta[i] = letra
          }
        }
      }
      else if (this.letrasChutadas.includes(letra)) {
        console.log('Você já chutou essa letra! Tente outra.')
      }
      else {
        this.letrasChutadas.push(letra);
        this.vida = this.vida - 1
      }
    }
    else{
      console.log("Ei, você digitou mais que uma letra! É só uma! Ò.Ó ")
    }
  }
    

  buscarEstado() { 
    if (this.vida == 0){
      return "perdeu"
    }
    else if (!this.secreta.includes('_') && this.vida > 0){
      return "ganhou"
    }
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, 
          vidas: this.vida, 
          palavra: this.secreta
      }
  }
}

module.exports = Forca;
