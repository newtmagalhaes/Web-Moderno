// Mais conceitos de funções em JavaScript

/**
 * (this) pode variar conforme a situação
 *      - Caso esteja no escopo global:
 *          - no back-end é o objeto global;
 *          - no front-end é o objeto window;
 *      - Caso esteja dentro de uma function, ele varia conforme quem o chama;
 *      - Caso esteja dentro de uma arrow function, ele varia conforme o contexto da sua declaração;
 *      - Caso esteja dentro de um objeto ou classe, ele se refere ao próprio objeto instanciado;
 *
 * Como (this) pode variar conforme o contexto, existem métodos para definir o contexto
 *      - bind: retorna uma função ligada ao contexto passado como parâmetro;
 *      - call e apply: chama a função ligada ao contexto passado como parâmetro;
 */

function isEntrada(entrada) {
  return this === entrada;
}

function isGlobal() {
  return this === globalThis;
}

// Funcionam apenas no console do browser
function isWindow() {
  return this === window;
}
function isDocument() {
  return this === document;
}

const objeto = {
  isObjeto: function (external) {
    return this === external;
  },
  isGlobal: function () {
    return this === globalThis;
  },
  self: function () {
    return this;
  },
};

console.log(`\tThis no escopo global

this:               ${this};
objeto.self():      ${objeto.self()};

typeof this:        ${typeof this};
typeof arguments:   ${typeof arguments}

this is arguments:  ${isEntrada(arguments)};
this is global:     ${isGlobal()};
objeto is this:     ${objeto.isObjeto(this)};
objeto is objeto:   ${objeto.isObjeto(objeto)};
objeto is himself:  ${objeto === objeto.self()};
objeto is global:   ${objeto.isGlobal()};`);
