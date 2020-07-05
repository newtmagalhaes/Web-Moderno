// Declarando objeto com função construtora

function Pessoa(nome = "ubireudo") {
  // atributos e métodos privados
  const name = nome;
  function falar() {
    return "Olá mundo!!!";
  }

  // atributos e métodos públicos
  this.getNome = name;
  this.frase = falar();
  this.falarFrase = function () {
    console.log(this.frase);
  };
  this.apresenteSe = () => {
    console.log(`Olá! meu nome é ${name}`);
  };
}

const humano = new Pessoa();
humano.apresenteSe();
console.log("typeof humano:", typeof humano);
console.log("humano:", humano);
