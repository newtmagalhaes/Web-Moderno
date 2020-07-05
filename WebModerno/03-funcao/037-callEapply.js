// Funções Call e Apply em JavaScript

/**
 * call e apply são métodos para o tipo function.
 *
 * Para function example (param) {code}:
 *      example.call() e example.apply() possuem apenas 1 diferença
 *
 * Ambos os métodos chamarão a função example,
 * porém, o contexto dela (crucial para o this)
 * será o do primeiro parâmetro.
 *
 * Para o call, o segundo parâmetro em diante serão os parâmetros da função example;
 * Para o apply, o segundo parâmetro será um [array] contendo os parâmetros da função example;
 */

function calcPrice(tax = 0, moneyUnit = "$") {
  return `the price is: ${moneyUnit} ${(
    this.value *
    (1 - this.discount) *
    (1 + tax)
  ).toFixed(2)}`;
}

const product = {
  value: 8001,
  discount: 0.42,
  calcPrice,
};

global.value = 8001;
global.discount = 0.42;
console.log(calcPrice(0.24, "R$"));
// Neste contexto, this se refere ao escopo global

console.log(product.calcPrice(0.24, "R$"));
// Neste contexto, this se refere aos atributos do objeto product

console.log(calcPrice.call(product, 0.24, "R$"));
// Neste contexto, this se refere ao contexto passado como primeiro parâmetro, ou seja, product

console.log(calcPrice.apply(product, [0.24, "R$"]));
// Neste contexto, this se refere ao contexto passado como primeiro parâmetro, ou seja, product
