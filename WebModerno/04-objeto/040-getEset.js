// Métodos get e set em JavaScript

/**
 *    Normalmente não é possível fazer sobrecarga de método em JavaScript,
 * com exceção dos métodos 'get' e 'set', chamados como atributos (sem '()').
 * 
 *    Utilizar underline antes do nome de métodos e atributos não o torna
 * privado, mas é uma convenção para indicar que normalmente não deve ser
 * acessado diretamente.
 */

const obj = {
  _chave: "value",
  get chave() {
    return this._chave;
  },
  set chave(newValue) {
    this._chave = String(newValue);
    return this.chave;
  },
};

console.log(obj);
console.log(obj._chave, obj.chave);
obj.chave = 42;
console.log(obj.chave);
