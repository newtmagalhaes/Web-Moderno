// Arrays em JavaScript

/**
 * Array são limitados pelos colchetes;
 *
 * são uma estrutura indexada, podendo
 * conter varias posições, onde cada uma
 * armazena um dado de qualquer tipo;
 *
 * Obs: não é uma boa prática conter
 * tipos diferentes no mesmo array;
 *
 * null e undefined no array são
 * considerados posições vazias no array;
 */

// Declarando Array:
const array = [Infinity, "string", true, null, undefined];
console.log("array: ", array);

console.log(`retorno do array: ${array};
o dado na posição 2 do array é dado por array[2]: ${array[2]};
o dado numa posição que extrapola o array, por exemplo array[42]: ${array[42]};
o tipo do array é: ${typeof array}`);

array.push("fim", "do array"); // Insere o dado no final do array e retorna o novo tamanho
array.unshift("inicio"); // Insere o dado no final do array
console.log(array);

console.log(`o ultimo elemento do array é: ${array.pop()}`);
// array.pop() remove o ultimo elemento do array e retorna ele

delete array[6];
console.log(
  "após deletar o elemento da sexta posição do array, permanece uma posição vazia\n",
  array
);

function embaralhar(array) {
  let indice_atual = array.length,
    valor_temporario,
    indice_aleatorio;
  while (0 !== indice_atual) {
    indice_aleatorio = Math.floor(Math.random() * indice_atual);
    indice_atual -= 1;
    valor_temporario = array[indice_atual];
    array[indice_atual] = array[indice_aleatorio];
    array[indice_aleatorio] = valor_temporario;
  }
}

embaralhar(array);
console.log("Array embaralhado:\n", array);
