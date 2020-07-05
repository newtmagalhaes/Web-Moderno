// Modo antigo para funções com parâmetros variáveis

/**
 *  arguments é uma variável local disponível em todas as funções.
 *  Quando uma função é invocada, arguments é um objeto listando
 * listando todos os parâmetros que foram passados nessa mesma
 * ordem, tornando possível acessar parâmetros excedentes aos
 * declarados na função.
 */

function somatorio() {
  console.log(arguments);

  let soma = 0;
  for (const i in arguments) {
    soma += arguments[i];
    console.log(`${i}: ${arguments[i]}`);
  }

  return soma;
}

console.log(somatorio(1, 2, 3, 4, 5, 6));
