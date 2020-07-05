// Funções anônimas em JavaScript

// Funções anônimas não possuem nome, porém, podem ser acessadas atraves de outras variáveis
const maior = (value1, value2) => (value1 < value2 ? value2 : value1);

const mostreRetorno = (entrada1, entrada2, func = maior) =>
  func(entrada1, entrada2);

console.log(mostreRetorno(24, 42));
console.log(mostreRetorno(42, 24, (v1, v2) => v1 - v2));
