// Objects em JavaScript

/**
 * Objetos são limitados por chaves;
 *
 * São uma estrutura indexada, podendo
 * conter varias posições, onde cada uma
 * armazena um par "chave-valor", onde a
 * chave é um nome qualquer, como se fosse
 * a declaração da variável e o valor é o
 * dado armazenado na variável;
 */

// Declarando objects:

const livro = {
  /**
   * Dessa forma, o objeto que
   * o livro armazena não pode
   * ser alterado, mas os dados
   * dentro do objeto sim;
   */
  titulo: "Monarquia",
  autor: "Dante Alighieri",
  editora: "Lafonte",
};
console.log(livro);

console.log(livro.paginas);
/**
 * Quando se acessa uma chave
 * não declarada em um objeto,
 * seu retorno é undefined
 */

livro.paginas = 125; // É uma forma de criar novas chaves em um objeto
console.log(livro);

console.log(`Há duas formas de se acessar os valores em um objeto:
Por notação ponto: livro.autor: ${livro.autor};
Por notação subescrito: livro["autor"]: ${livro["autor"]}`);

livro["altura e largura"] = "22.8 e 15.6";
console.log(livro);
/**
 * A notação subescrito pode ser usada
 * para declarar chaves cuja assinatura
 * (nome da chave) é uma palavra com espaços
 *
 * O que não é uma boa prática!!!
 */
