// Métodos interessantes de arrays em JavaScript

// Implementação semelhante a objeto
console.log(
  typeof Array, // Função construtora
  typeof new Array(), // Nova instância de array
  typeof [] // Declaração literal de array
);

const fruits = ['apple', 'banana', 'grape'];
console.log(fruits);

// Push: insere elementos no final do array e retorna o novo tamanho
const size = fruits.push('pineapple');
console.log(fruits, size);

// Pop: remove o ultimo elemento do array e o retorna
const last = fruits.pop();
console.log(fruits, last);

// Shift: remove o primeiro elemento do array e o retorna
const first = fruits.shift();
console.log(fruits, first);

// Unshift: insere elementos no início do array e retorna o novo tamanho
const newLength = fruits.unshift('tomato');
console.log(fruits, newLength);

// Slice: retorna um pedaço do array entre no intervalo [início, fim)
const slice = fruits.slice(1, 3);
console.log(fruits, slice);

// Splice: remove e retorna um pedaço do array no intervalo [início, fim)
//          e insere os elementos seguintes a partir dessa posição inicial
const splice = fruits.splice(1, 3, 'orange', 'watermelon');
console.log(fruits, splice);

// Reverse: inverte a ordem dos elementos no array e retorna o array
fruits.reverse();
console.log(fruits);
