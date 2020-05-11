// Null & Undefined em JavaScript

/**
 * Nulo (conceito que extrapola a linguagem)
 * representa o nada, geralmente utilizado
 * para zerar variáveis;
 *
 * Indefinido é normalmente retornado de
 * variaveis que foram declaradas mas não
 * foram atribuidos valores a ela
 */

let varDeclarada; // Variável inicializada, porém undefined
console.log(varDeclarada);

// console.log(varNaoDeclarada); -> resulta em erro pois a variável it's not defined

varDeclarada = null;
console.log(varDeclarada); // Imprime "null" no console

varDeclarada = undefined; // É possível, porém não é uma boa prática, por isso prefira null
console.log(varDeclarada);

console.log(`null == undefined ? ${null == undefined};
null === undefined? ${null === undefined};`);
