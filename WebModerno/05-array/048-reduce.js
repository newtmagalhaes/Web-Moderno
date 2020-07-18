// Reduce em JavaScript

const baralho = [
  { valor: 'Ás', naipe: 'Copas' },
  { valor: 'Ás', naipe: 'Ouros' },
  { valor: 'Ás', naipe: 'Paus' },
  { valor: 'Ás', naipe: 'Espadas' },
];

console.log(baralho);

// Reduzindo para um valor de outro tipo, na primeira iteração, cumulate recebe o valor inicial
const somaDeValor = (cumulate, { naipe: actual }) => {
  const valorDeNaipe = {
    Copas: 1,
    Ouros: 2,
    Paus: 4,
    Espadas: 8,
  };
  return cumulate + valorDeNaipe[actual];
};

// Reduzindo para um elemento
const zipBaralho = (cumulate, actual) => {
  for (let key in cumulate) {
    cumulate[key] += '-' + actual[key];
  }
  return cumulate;
};

const valorTotal = baralho.reduce(somaDeValor, 0);
const zipTotal = baralho.reduce(zipBaralho);

console.log(valorTotal, zipTotal);
