// While e Do While em JavaScript

/**
 * Enquanto a condição do while for verdadeira
 * o bloco associado continuará a ser executado
 */

// Estrutura While:
console.log("\tTeste 1");

let condition1 = Math.random().toFixed(1) * 10;
console.log("Condition1 é:", condition1);

console.log("Enquanto condition1 > 2 for true:");
while (condition1 > 2) {
  condition1 = Math.random().toFixed(1) * 10;
  console.log("Condition 1 agora é:", condition1);
}
console.log("\tLoop While encerrado");
console.log("Condition1 agora é:", condition1, "\n");

// Estrutura Do While:
console.log("\tTeste 2");

let condition2 = Math.random().toFixed(1) * 10;
console.log("Condition2 é:", condition2);

do {
  condition2 = Math.random().toFixed(1) * 10;
  console.log("Condition2 agora é:", condition2);
} while (condition2 > 2);
console.log("\tLoop Do While encerrado");
console.log("Condition2 agora é:", condition2);

/**
 * Diferenças entre While e Do While:
 * - While:     verifica a condição e em seguida executa ou não o bloco;
 * - Do While:  executa o bloco e depois verifica a condição;
 */
