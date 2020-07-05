// Formas de declarar funções em JavaScript

// function declaration
function soma(a, b) {
  return a + b;
} // Ocorre Hoisting
console.log(soma, `\n${soma}`, "\n4 + 2 =", soma(4, 2));

// function expression
const sub = function (a, b) {
  return a - b;
};
console.log(sub, `\n${sub}`, "\n4 - 2 =", sub(4, 2));

// function named expression
const div = function dividir(a, b) {
  return a / b;
};
console.log(div, `\n${div}`, "\n4 / 2 =", div(4, 2));
