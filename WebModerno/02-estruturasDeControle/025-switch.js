// Switch em JavaScript

/**
 * switch (key){} - key é um valor a ser comparado dentro dos cases do bloco;
 *
 * case value: -    caso value seja equivalente à key, o que estiver abaixo
 *                  dele será executado, por isso é comum um break entre cases;
 *
 * default: -       é como um case que é executado caso nenhum case tenha sido executado;
 */

// key é um inteiro aleatório entre 0 e 10
const key = Math.random().toFixed(1) * 10;
console.log("O valor de key é:", key);

// Estrutura Switch:
console.log("\tTeste 1:");
switch (key) {
  case 10:
  case 9:
    console.log("Key é igual a 10 ou 9");
    break;
  case 8:
    console.log("Key é igual a 8");
    break;
  case 7:
    console.log("Key é igual a 7");
    break;
  case 6:
    console.log("Key é igual a 6");
    break;
  case 5:
    console.log("Key é igual a 5");
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Key é menor ou igual a 5");
    break;
  default:
    console.log("Key não é igual a nenhum dos casos");
    break;
}
