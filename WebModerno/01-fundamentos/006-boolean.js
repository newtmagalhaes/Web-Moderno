// Booleans em JavaScript

// Dados booleanos são verdadeiros ou falsos
const falso = false,
  verdadeiro = true;

/**
 * false e true são normalmente
 * retornados como resultado de
 * operadores binários;
 *
 * São úteis também em estruturas
 * de controle como loops e condicionais;
 *
 * Para converter um dado em booleano,
 * normalmente se utiliza a dupla negação
 * lógica, um operador unário declarado por "!"
 */

console.log(`verdadeiro é: ${verdadeiro};
1 (qualquer number diferente de 0) é: ${!!1};
Infinity é: ${!!Infinity};
"string não vazia" é: ${!!"string não vazia"};
{} (qualquer objeto) é: ${!!{}};
[] (qualquer array) é: ${!![]};

falso é: ${falso};
0 é: ${!!0};
NaN é: ${!!NaN};
"" é: ${!!""};
null é: ${!!null};
undefined é: ${!!undefined};`);
