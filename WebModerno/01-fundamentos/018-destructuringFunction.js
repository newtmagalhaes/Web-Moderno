// Operador de Destructuring em Functions em JavaScript

/**
 * Exemplo de onde o operador Destructuring
 * poderia ser mais viável
 */

function randomObject({ min = 0, max = 1000 } = {}) {
  /**
   * Recebe um objeto que possui os atributos
   * max e min, e realiza destructuring neles
   * gerando os parâmetros de entrada de mesmo
   * nome;
   */
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor); // Retorna um inteiro aleatório dentro do intervalo
}
function randomArray([min = 0, max = 1000] = []) {
  /**
   * Recebe um array que possui os atributos
   * max e min, e realiza destructuring neles
   * gerando os parâmetros de entrada de mesmo
   * nome;
   */
  const novoMin = Math.min(min, max),
    novoMax = Math.max(min, max),
    valor = Math.random() * (novoMax - novoMin) + novoMin;
  return Math.floor(valor); // Retorna um inteiro aleatório dentro do intervalo
}
console.log("Um número aleatório (Object):", randomObject());
console.log("Um número aleatório (Array):", randomArray());
