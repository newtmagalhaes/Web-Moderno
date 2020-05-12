// Funções em JavaScript

/**
 * Funções são métodos (ações);
 *
 * Que podem possuir um nome para poder ser
 * chamada varias vezes no arquivo
 * (funções sem nome são chamadas de funções anônimas)
 *
 * Que podem possuir (parâmetros de entrada)
 * entre parêntesis e separados por virgulas;
 *
 * Que podem possuir {um algoritmo} realizando
 * alterações nos dados de entrada ou a partir deles;
 *
 * Que podem possuir [um retorno] na forma de
 * algum dado ou função;
 */

// Declarando Funções

function imprimirEntrada(entrada) {
  console.log(entrada);
  return entrada;
}
imprimirEntrada("Entrada");

// atribuindo função a uma variável
const var1ImprimirEntrada = imprimirEntrada(),
  var2ImprimirEntrada = imprimirEntrada;
/**
 * var1ImprimirEntrada recebeu o
 * retorno de imprimirEntrada
 *
 * Enquanto que var2ImprimirEntrada recebeu
 * por referência a função imprimirEntrada
 */

var2ImprimirEntrada("chamando função com var2");

console.log(var1ImprimirEntrada); // Imprime o que var1 referencia, o retorno de imprimirEntrada(), undefined
console.log(var2ImprimirEntrada); // Imprime o que var2 referencia, a uma função com nome imprimirEntrada

// Salvando funções em variáveis

const forma1 = function (entrada) {
  return console.log(entrada);
};
const forma2 = (entrada) => {
  return console.log(entrada);
};
const forma3 = (entrada) => console.log(entrada);
/**
 * Como as funções só possuem
 * 1 parâmetro de entrada, os
 * parêntesis nas funções arrow
 * ( => ) são opcionais
 */
