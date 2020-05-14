// Operador Ternário em JavaScript

/**
 * O operador ternário possui 3 operandos e é declarado da
 * seguinte maneira: [A ? B : C];
 * caso A seja verdadeiro: B será retornado;
 * caso A seja falso: C será retornado;
 */

const situacao = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");
console.log("Com a nota 5, minha situação é:", situacao(5));
console.log("Com a nota 9, minha situação é:", situacao(9));
