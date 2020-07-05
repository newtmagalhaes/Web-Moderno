// Callback em JavaScript

/**
 * Funções callback recebem uma função como parâmetro
 * para em seguida aplicá-la chamando uma ou mais vezes
 */

function arrayNotas(numeroDeNotas = 10) {
  let notas = [];
  for (let i = 0; i < numeroDeNotas; i++) {
    notas.push(Number((Math.random() * 10).toFixed(2)));
  }
  return notas;
}

const notas = arrayNotas();
console.log("array de notas:", notas);

// Exemplo filtrando notas

// Sem callback
const aprovados = [];
for (let i in notas) {
  if (notas[i] >= 7) aprovados.push(notas[i]);
}

console.log("aprovados:", aprovados);

// Com callback
const reprovados = notas.filter((nota) => nota < 7);

console.log("reprovados:", reprovados);
