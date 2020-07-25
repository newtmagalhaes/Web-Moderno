// Requerendo módulos em JavaScript

/**
 *    Há os módulos de terceiros instalados como
 * dependências pelo npm, que ficam instalados na
 * pasta node_modules/, e outros módulos, como
 * arquivos de extensão js fora dela.
 *    O método para requerer os arquivos são os
 * mesmos.
 */

const search = require('./049-export');
const { default: Axios } = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

Axios.get(url).then(({ data: funcionarios }) => {
  console.log(funcionarios.length);
  // Desafio, encontrar a mulher chinesa com menor salário
  console.log(
    funcionarios.filter(search.mulherChinesa).reduce(search.menorRenda)
  );
});
