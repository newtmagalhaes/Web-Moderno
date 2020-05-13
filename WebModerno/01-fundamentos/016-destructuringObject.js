// Operador de Destructuring em Objetos em JavaScript

/**
 * É um operador para extrair
 * elementos de alguma estrutura
 * como um objeto ou array, por exemplo;
 */

const pessoa = {
  nome: "Anilton",
  idade: 19,
  endereco: {
    logradouro: "Rua tal",
    numero: NaN,
  },
};
console.log("pessoa é:", pessoa);

// Aplicando o Destructuring:

const { nome, idade } = pessoa;
/**
 * Acima, significa que, da estrutura pessoa,
 * está sendo retornado os atributos nome e idade
 * e atribuindo seus valores a variáveis de mesmo nome
 */
console.log("nome é: ", nome);
console.log("idade é:", idade);

const { endereco: localizacao } = pessoa;
/**
 * Realiza o destructuring na estrutura pessoa,
 * retorna o que está em pessoa.endereco e atribui
 * à variável localização que está sendo declarada;
 */
console.log("localizacao é:", localizacao);

const { sobrenome: outroNome = "Magalhães" } = pessoa;
/**
 * Caso seja realizado o destructuring de um objeto cujo atributo (sobrenome)
 * não exista, será como acessá-lo, o que retornará undefined, e para garantir
 * que outroNome não seja undefined, declara-se que, caso isso ocorra, será
 * atribuido nele o dado opcional ("Magalhães");
 */
console.log("outroNome é:", outroNome);

// Cuidado ao utilizar o Destructuring em estruturas aninhadas!!!
console.log("pessoa é:", pessoa);
