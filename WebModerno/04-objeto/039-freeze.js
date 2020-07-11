// const e freeze em JavaScript

/**
 *    Independente da palavra reservada utilizada para declarar,
 * a nova variável (obj) armazena um objeto literal, e mesmo
 * utilizando 'const' é possível alterar seus atributos e métodos.
 *    Isso ocorre devido à variável (obj) guardar a referência de
 * onde o objeto está na memória e não respectivamente o que há dentro.
 */

const obj = { key: "value", chave: "valor" };

console.log(obj);
obj.atri = "buto";
console.log(obj);

// Para também impedir a alteração do que há dentro do objeto, usa-se o método:
Object.freeze(obj);
obj.chave = "novo valor"; // alteração ignorada
console.log(obj);
