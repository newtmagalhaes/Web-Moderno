// Notação ponto em JavaScript

/**
 * A notação ponto pode ser utilizada
 * para acessar membros internos de
 * algum elemento, sejam todos estes
 * variáveis e funções;
 */
console.log("console é:", typeof console);

const pessoa = {
  nome: "Anilton",
};
pessoa.idade = 19; // criação e acesso de forma dinâmica
console.log(pessoa);

function teste(nome) {
  this.nome = nome;
}

const objeto = new teste("newt");
console.log("teste é:", typeof teste);
console.log("new teste é:", typeof new teste("nilt"));
console.log("objeto é:", objeto);
console.log("objeto.nome é:", objeto.nome);
console.log("this é:", typeof this);
