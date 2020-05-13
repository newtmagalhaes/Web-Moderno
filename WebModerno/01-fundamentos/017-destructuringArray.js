// Operador de Destructuring em Arrays em JavaScript

const array = ["str0", "str1", "str2", "str3", "str4", "str5"];
console.log("array é:", array);

// Aplicando Destructuring:

const [, constante1, , , , , constante2 = "era undefined"] = array;
/**
 * Nesse caso, é declarado uma constante1 que recebe
 * o valor armazenado na posição 1 do array e uma
 * constante2 que recebe o valor na posição 6 do array
 * e caso este valor seja undefined, será atribuido a
 * string "era undefined" no lugar;
 */
console.log("constante1 é:", constante1);
console.log("constante2 é:", constante2);
