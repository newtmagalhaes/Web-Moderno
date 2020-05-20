// For e For In em JavaScript

/**
 * para for(índice=valor_inicial; condition; índice++){}
 * o primeiro parâmetro é executado no primeiro laço do for
 * o segundo parâmetro é executado no início de cada laço do for
 * o terceiro parâmetro é executado após o bloco ter sido executado
 */

// Estrutura For padrão:
console.log("\tEstrutura For padrão");

console.log("\n\tCom let");
for (let indexlet = 0; indexlet < 5; indexlet++) {
  console.log(`indexlet = ${indexlet}`);
}

console.log("\n\tCom var");
for (var indexvar = 0; indexvar < 5; indexvar++) {
  console.log(`indexvar = ${indexvar}`);
}

// Estrutura For In Array:
const vetor = ["zero", "1", 2, true];
console.log("\n\tEstrutura For In Array");

console.log("\nCom let");
for (let letI in vetor) {
  console.log(`letI = ${letI}\tvetor[letI] = ${vetor[letI]}`);
}

console.log("\nCom var");
for (var varI in vetor) {
  console.log(`varI = ${varI}\tvetor[varI] = ${vetor[varI]}`);
}
/**
 * OBS: ao percorrer um array com For In,
 * o índice se torna a posição e seu
 * valor é acessado como na notação de array
 */

// Estrutura For In Object:
const objeto = { chave: "valor", key: "value", atributo: "atributo" };
console.log("\n\tEstrutura For In Object");

console.log("\nCom let");
for (let letI in objeto) {
  console.log(`objeto[letI] = ${objeto[letI]}\tletI = ${letI}`);
}

console.log("\nCom var");
for (var varI in objeto) {
  console.log(`objeto[varI] = ${objeto[varI]}\tvarI = ${varI}`);
}
/**
 * OBS: ao percorrer um object com For In,
 * o índice se torna o nome da chave e seu
 * valor é acessado como um array
 */

// Estrutura do ForEach:
console.log("\n\tEstrutura do ForEach");
vetor.forEach((elemento, indice, array) => {
  console.log(`array = [${array}]\tindice = ${indice}\telemento = ${elemento}`);
});
/**
 * forEach é exclusivo de arrays,
 * o primeiro parâmetro é uma função que recebe até 3 parâmetros,
 * a função é chamada para cada elemento do array
 */
