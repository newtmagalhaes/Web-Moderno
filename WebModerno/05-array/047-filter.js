// Filter em JavaScript

const baralho = [
  { valor: 'Ás', naipe: 'Copas' },
  { valor: 'Ás', naipe: 'Ouros' },
  { valor: 'Ás', naipe: 'Paus' },
  { valor: 'Ás', naipe: 'Espadas' },
];

console.log(baralho);

// Retorna um novo array com os elementos no qual a callback retornou true.
const naipesVermelhos = baralho.filter(
  ({ naipe }) => naipe === 'Copas' || naipe === 'Ouros'
);

console.log(naipesVermelhos);
