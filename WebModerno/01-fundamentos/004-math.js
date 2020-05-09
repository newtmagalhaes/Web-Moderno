// Operações básicas com Math

// Algumas constantes:
const pi = Math.PI,
  euler = Math.E;

let number1 = Math.pow(42, 2), // Retorna o primeiro número elevado pelo segundo;
  number2 = Math.exp(2), // Retorna [e] elevado pelo parâmetro de entrada;
  number3 = Math.sin(Math.PI / 2), // Retorna o seno do parâmetro dado em radianos;
  number4 = 0.1 + 0.7;
/**
 * ATENÇÃO!!!
 * operações com números de ponto flutuante
 * podem gerar imprecisões, então cuidado e
 * se preciso aproxime os resultados
 */

console.log(
  " O valor de Pi é aproximadamente:",
  pi,
  "\n",
  "O valor de 'e' é aproximadamente:",
  euler,
  "\n",
  "O valor de number1 é: ",
  number1,
  "\n",
  "O valor de number2 é: ",
  number2,
  "\n",
  "O valor de number3 é: ",
  number3,
  "\n",
  "O valor de number4 é: ",
  number4,
  "\n",
  "O valor de number4 arredondado para duas casas decimais é: ",
  number4.toFixed(2),
  "\n"
);
