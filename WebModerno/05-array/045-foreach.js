// ForEach em JavaScript

/**
 *    Uma callback function é passada com parâmetro para o ForEach, dessa
 * forma ela será aplicada para todos os elementos do array individualmente.
 *    Essa função pode receber até 3 parâmetros, o elemento, o índice do
 * elemento e o array por completo, respectivamente.
 */

const baralho = [
  { valor: 'Ás', naipe: 'Copas' },
  { valor: 'Ás', naipe: 'Ouros' },
  { valor: 'Ás', naipe: 'Paus' },
  { valor: 'Ás', naipe: 'Espadas' },
];

console.log(baralho);

baralho.forEach(({ valor, naipe }, index) => {
  console.log(`${valor} de ${naipe} na posição ${index} do baralho`);
});
