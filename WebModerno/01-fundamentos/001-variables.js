// Declarando variáveis em JavaScript

/**
 * Há 4 formas de declarar variáveis,
 * e 3 delas utilizam palavras reservadas;
 */

// Declarando sem palavra resservada:
variavel1 = "String1";
/* Obs: essa não é uma boa prática */

// Declarando com const:
const variavel2 = "String2";
/* Obs: é uma boa prática usar const sempre que possível */

// Declarando com var:
var variavel3 = "String3";

// Declarando com let:
let variavel4 = "String4";

/**
 * Obs: let e var são semelhantes,
 * porém, é sempre mais aconselhável
 * utilizar o let pra evitar problemas
 * devido a "estranhezas" do var;
 *
 * Obs: inicialmente, quando uma
 * variável é declarada o dado
 * inicial que ela contém é undefined;
 *
 */

console.log(
  `O que está armazenado na variável1 é: ${variavel1} do tipo ${typeof variavel1};
    O que está armazenado na variável1 é: ${variavel2} do tipo ${typeof variavel2};
    O que está armazenado na variável1 é: ${variavel3} do tipo ${typeof variavel3};
    O que está armazenado na variável1 é: ${variavel4} do tipo ${typeof variavel4};`
);
