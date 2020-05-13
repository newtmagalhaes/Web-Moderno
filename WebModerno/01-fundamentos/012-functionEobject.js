// Comparações entre functions e objects em JavaScript

console.log("Function é:", typeof Function);
console.log("new Function é:", typeof new Function());
console.log("Object é:", typeof Object);
console.log("new Object é:", typeof new Object());

const Cliente = function () {};
console.log("Cliente é:", typeof Cliente);
console.log("new Cliente é:", typeof new Cliente());

class Produto {} // ES 2015 (ES6)
console.log("Produto é:", typeof Produto);
console.log("new Produto é:", typeof new Produto());
