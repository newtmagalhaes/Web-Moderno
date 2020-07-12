// Classes em JavaScript

class Pai {
  constructor(sobrenome = "odueribu") {
    this.sobrenome = sobrenome;
  }
}

class Filho extends Pai {
  constructor(nome = "ubireudo", sobrenome = "odueribu") {
    super(sobrenome);
    this.nome = nome;
  }
}

const pessoa = new Filho("Dave", "Aved");

console.log(pessoa);
console.log(pessoa.__proto__, Filho.prototype);
console.log(Filho.prototype === pessoa.__proto__);
