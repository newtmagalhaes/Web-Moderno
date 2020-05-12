// Diferenças entre var e let em JavaScript

// Escopo de bloco
{
  var varbloco = "var declarado dentro do bloco";
  let letbloco = "let declarado dentro do bloco";
  console.log(`Dentro do bloco temos:\n${varbloco}\n${letbloco}\n`);
}

// console.log(`Fora do bloco temos:\n${varbloco}\n${letbloco}\n`);

/**
 * A função acima resulta em erro pois [letbloco] não foi declarado,
 * ou seja, [letbloco] ficou restrito ao escopo de bloco, enquanto
 * [varbloco] não;
 */

// var permite redeclarar variáveis, let não!
var varfora = "var declarado fora";
let letfora = "let declarado fora";
{
  var varfora = "var declarado dentro";
  let letfora = "let declarado dentro";
  console.log(`Dentro do bloco:\n${varfora}\n${letfora}`);
}
console.log(`Fora do bloco:\n${varfora}\n${letfora}`);
/**
 * acima, houve sobrescrita de [varfora];
 *
 * enquanto, quando [letfora] foi chamado, foi
 * retornado o valor que ela tinha dentro do bloco;
 *
 * caso não existisse [letfora] no bloco, seria retornado
 * o valor de [letfora] declarado fora do bloco;
 */

// em loop

const vararray = [],
  letarray = [];

for (var varI = 0; varI < 5; varI++) {
  console.log("varI =", varI);
  vararray.push(() => {
    return varI;
  });
}
// console.log("varI =", varI);
console.log(
  "O retorno de vararray[2]() é:",
  vararray[2](),
  "\n",
  "O retorno de vararray[4]() é:",
  vararray[4]()
);

for (let letI = 0; letI < 5; letI++) {
  console.log("letI =", letI);
  letarray.push(() => {
    return letI;
  });
}
// console.log("letI =", letI);
console.log(
  "O retorno de letarray[2]() é:",
  letarray[2](),
  "\n",
  "O retorno de letarray[4]() é:",
  letarray[4]()
);

function observeHoisting() {
  /**
   * Variáveis declaras com var se comportam com Hoisting,
   * ou seja, suas declarações são movidas para o topo do
   * escopo a qual pertencem, enquanto a atribuição ocorre
   * na mesma linha do código;
   *
   * Hoisting não ocorre com let;
   */
  console.log("valor de variavel =", variavel);
  var variavel = "uma String";
  console.log("valor de variavel =", variavel);
}
observeHoisting();
