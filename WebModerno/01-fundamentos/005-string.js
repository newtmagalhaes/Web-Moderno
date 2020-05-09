// Strings em JavaScript

// Exemplos de declaração:
const str1 = "Esta String foi declarada com apóstrofos",
  str2 = "Esta String foi declarada com aspas",
  str3 = `Esta String foi declarada com crases`,
  str4 = "o texto de str4",
  str5 = `Com essa template String (Delimitada por crases) é possível que aqui apareça ${str4}`,
  str6 =
    "Com as outras duas formas, o mesmo não contece e ${str4} aparece desse jeito",
  str7 = "uma string qualquer";

console.log(str1, "\n", str2, "\n", str3, "\n", str4, "\n", str5, "\n", str6);

// Algumas utilidades:
let caractere = str7[2]; // Dessa forma, caractere recebe a letra que está na posição 2

console.log(`\n
Obs:    com apóstrofos e aspas não se pode quebrar a linha no meio de uma string,
        porém, isto é possível nas strings declaradas com crases, e além disso, a
        quebra de linha e os epaçamentos com as teclas "Tab" e "Enter" são notados;
 
Caractere recebe a letra na posição 2 de str7 (${str7[2]}), que é: ${caractere};
str7.charCodeAt(2) retorna o valor do caractere dessa posição na tabela ASCII, que é: ${str7.charCodeAt(2)};
str7.charAt(2) é equivalente a str7[2];
Caso seja passado uma posição que exceda o tamanho da string, ele não retorna nada;
str7.subString(4, 10) retorna uma string que inicia na posição 4 até a posição 10 sem incluir a ultima: ${str7.substring(4,10)};
str7.replace("e", 3) retorna uma string onde os caracteres "e" foram substituidos por "3": ${str7.replace("e",3)};`);
