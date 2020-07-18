// Map em JavaScript

/**
 *    Map aplica a função de callback para todos os elementos
 * e por fim retorna um novo array com os retornos da callback.
 */

const baralho = [
  { valor: 'Ás', naipe: 'Copas' },
  { valor: 'Ás', naipe: 'Ouros' },
  { valor: 'Ás', naipe: 'Paus' },
  { valor: 'Ás', naipe: 'Espadas' },
];

const porExtenso = ({ valor, naipe }) => `${valor} de ${naipe}`;

const porObjeto = (str) => {
  const [value, suit] = str.split(' de ');
  return { value, suit };
};

console.log(baralho);
console.log(baralho.map(porExtenso));
console.log(baralho.map(porExtenso).map(porObjeto));
