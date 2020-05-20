// IF e ELSE em JavaScript

// Atribui verdadeiro ou falso à variável condition
const condition = Boolean(Number(Math.random().toFixed(0)));
console.log(`O valor lógico da variável condition é: ${condition}`);

// Estrutura if:
console.log("\tTeste 1:");
if (condition) {
  console.log("Esta mensagem aparecerá no console caso condition seja true");
}

// Estrutura if else:
console.log("\tTeste 2:");
if (condition) {
  console.log("Esta mensagem indica que condition é true");
} else {
  console.log("Esta mensagem indica que condition é false");
}
/**
 * OBS: caso só haja 1 comando no bloco if ou else, pode-se omitir as chaves;
 *      contudo, apenas o primeiro comando será interpretado como pertencente
 *      ao bloco que estaria relacionado caso existisse explicitamente;
 *
 * A observação acima permite facilitar a criação de "else if"
 */

// Estrutura if else sem chave:
console.log("\tTeste 3");
if (condition) console.log(`condition é: ${condition}`);
else console.log(`condition é: ${condition}`);

// Estrutura if else if ... else:
console.log("\tTeste 4");
if (condition == true) {
  console.log("Então condition é true");
} else if (condition == false) {
  console.log("Então condition é false");
} else {
  console.log("Então condition não é true nem false"); // Impossível de ocorrer
}
