// JavaScript possui tipagem fraca

let exemplo = "String";
console.log(
  "o valor armazenado na variável exemplo é: ",
  exemplo,
  "do tipo: ",
  typeof exemplo
);

/**
 * Com tipagem fraca, pode-se também
 * alterar o tipo do dado armazendado
 * em uma variável durante a execução
 * e mesmo assim não ocorrerá um erro
 */

exemplo = Infinity;
console.log(
  "o valor armazenado na variável exemplo é: ",
  exemplo,
  "do tipo: ",
  typeof exemplo
);
