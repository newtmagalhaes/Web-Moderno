// Operadores Aritméticos em JavaScript

// Operadores Aritméticos retornam Numbers

/**
 * Operadores unários recebem um parâmetro,
 * normalmente Number, e caso seja uma variável,
 * altera seu valor e retorna ela, a ordem dessas
 * duas ações depende de como a operação foi declarada;
 *
 * pré-fixado: primeiro o número é alterado, depois é retornado;
 *
 * pós-fixado: primeiro o número é retornado, depois é alterado;
 */

let num1 = 42;
console.log(`operadores unários:
num1 = ${num1};

inversão de sinal: -num1 = ${-num1};

incrementos:
    pré-fixado:     ++num1 = ${++num1};
    pós-fixado:     num1++ = ${num1++};
num1 = ${num1};

decrementos:
    pré-fixado:     num1 = ${--num1};
    pós-fixado:     num1 = ${num1--};
num1 = ${num1};\n`);

/**
 * Operadores binários recebem dois parâmetros,
 * normalmente Numbers, e retornam um valor;
 */

const [a, b, c, d] = [1, 3, 5, 8];
console.log(`Operadores binários:
soma:           a + b = ${a + b};
subtração:      a - b = ${a - b};
multiplicação:  c * d = ${c * d};
divisão:        c / d = ${c / d};
módulo:         d % b = ${d % b};
exponenciação: b ** b = ${b ** b};`);
