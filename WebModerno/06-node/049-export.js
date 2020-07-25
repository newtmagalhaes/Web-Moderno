// Exportando variáveis e funções em JavaScript

/**
 *    Cada arquivo é considerado um módulo isolado,
 * a acessibilidade de algo dentro de um arquivo está
 * limitada apenas ao próprio arquivo.
 *    Para tornar algo feito dentro de um módulo acessível
 * por outro módulo é necessário exportar esse algo.
 */

// Das 3 formas, a melhor é a primeira
console.log(module.exports, exports, this);
console.log(module.exports === this);
console.log(exports === this);

/**
 *    Caso alguém tente acessar este módulo,
 * terá acesso apenas ao que estiver sendo
 * atribuído ao module.exports.
 */
module.exports = {
  menorRenda(funcAtual, funcMenor) {
    return funcAtual.salario < funcMenor.salario ? funcAtual : funcMenor;
  },
  mulherChinesa({ pais, genero }) {
    return pais === 'China' && genero === 'F';
  },
};
