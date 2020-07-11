// Alguns métodos úteis da classe Object em JavaScript

const obj_1 = { key: "value", chave: "valor" },
  obj_2 = { atributo: "variavel", metodo: () => "hello" },
  obj_3 = { key: "v1", key1: "v2", key2: "v3" };

// Retorna um array com as chaves do objeto
console.log(Object.keys(obj_1));

// Retorna um array de arrays ['chave', 'valor']
console.log(Object.entries(obj_2));

// Retorna um array com os valores do objeto
console.log(Object.values(obj_3));

// Adiciona os pares dos demais objetos ao primeiro
// (sobrescreve caso uma chave se repita) e retorna o resultado
console.log(Object.assign(obj_1, obj_2, obj_3));
