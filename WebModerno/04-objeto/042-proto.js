// Cadeia de herança com protótipos

const objPai = { key: "value" },
  objFilho = { chave: "valor", __proto__: objPai };

console.log(objFilho);

/**
 *    Como a propriedade __proto__ aponta para objPai,
 * significa então que objFilho herda de objPai, então
 * o Filho possui os mesmos atributos e métodos do Pai.
 *    Caso __proto__ não seja definido, será Object.prototype,
 * que normalmente aponta para um objeto vazio e
 * Object.prototype.__proto__ aponta para null.
 *    Ao acessar uma chave no filho, caso ele não tenha,
 * em seguida será observado se o pai dele tem, e assim
 * sucessivamente.
 */

console.log(objFilho.__proto__.key, objFilho.key);
console.log(objFilho.__proto__.key === objFilho.key);

// Lista apenas as chaves presentes em objFilho
console.log(Object.keys(objFilho));

// Percorre todas as chaves em objFilho e em seu __proto__
for (let key in objFilho) {
  let str = objFilho.hasOwnProperty(key)
    ? `${key} é de objFilho`
    : `${key} é de objPai`;

  console.log(str);
}

function Fabrica(nome, idade) {
  return { nome, idade, __proto__: objPai };
}

const obj = Fabrica("ubireudo", 42);
console.log("\nobj.__proto__:", obj.__proto__);

console.log("Fabrica.prototype:", Fabrica.prototype);
console.log("Fabrica.__proto__:", Fabrica.__proto__);
console.log(Fabrica.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
