// Numbers em JavaScript

let numero1 = "42", // String que pode ser convertida em Number
  /**
   * CUIDADO!!!
   * numero1 contém uma string que
   * pode seer convertida em number
   * por isso algumas operações com
   * number funcionam com ele;
   */
  numero2 = 42,
  numero3 = Infinity,
  numero4 = NaN,
  /**
   * NaN é a sigla para ["Not A Number"]
   * geralmente ela é retornada quando
   * uma operação exclusiva de Number é
   * aplicado a um dado que não pode ser
   * convertido em Number
   */
  numero5 = Number("42"),
  numero6 = "String"; // String que não pode ser convertida em Number

console.log(
  "\n",
  "O que está armazenado em numero1 é: ",
  numero1,
  "do tipo",
  typeof numero1,
  "\n",
  "O que está armazenado em numero2 é: ",
  numero2,
  "do tipo",
  typeof numero2,
  "\n",
  "O que está armazenado em numero3 é: ",
  numero3,
  "do tipo",
  typeof numero3,
  "\n",
  "O que está armazenado em numero4 é: ",
  numero4,
  "do tipo",
  typeof numero4,
  "\n",
  "O que está armazenado em numero5 é: ",
  numero5,
  "do tipo",
  typeof numero5,
  "\n",
  "O que está armazenado em numero6 é: ",
  numero6,
  "do tipo",
  typeof numero6
);

console.log(
  "\n",
  "numero1 + numero2 = ",
  numero1 + numero2,
  "\n", //ocorre concatenação, por isso não retorna NaN;
  "numero1 - numero2 = ",
  numero1 - numero2,
  "\n", //ocorre subtração normal;
  "numero2 + numero3 = ",
  numero2 + numero3,
  "\n",
  "numero2 + numero4 = ",
  numero2 + numero4,
  "\n",
  "numero5++ =",
  numero5++,
  "\n", // aqui, mostra o número no console, depois ele é incrementado para 43;
  "++numero5 =",
  ++numero5,
  "\n", // aqui, incrementa-se o número antes de o expor no console;
  "numero6++ =",
  ++numero6
);
