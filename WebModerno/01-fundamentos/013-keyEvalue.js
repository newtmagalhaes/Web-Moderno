// Par key:value em JavaScript

/**
 * Um par key:value pode ser
 * entendido como uma variavel
 * qualquer, que possui um nome
 * (assinatura) que é chave pela
 * qual é acessada e um valor (value)
 * que ela retorna por ser chamada;
 */

const variavel = "String"; // Escopo global

function teste() {
  const variavel = "Characters"; // Escopo da função
  return variavel;
}

const pessoa = {
  nome: "Anilton",
  idade: 19,
};

console.log("variavel:", variavel);
console.log("teste():", teste());
console.log("pessoa:", pessoa);
