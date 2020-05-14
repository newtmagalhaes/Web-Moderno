// Tratando erro com try, catch e throw em JavaScript

function tratandoErro(erro) {
  throw "tudo certo por aqui";
}
function printCapitalizedName({ nome } = {}) {
  try {
    console.log(nome.toUpperCase() + "!!!");
  } catch (eita) {
    console.log("trantando erro!");
    tratandoErro(eita);
  } finally {
    console.log("Finalmente!!!");
  }
}
const pessoa = { nome: "Anilton" };
printCapitalizedName(pessoa);
// printCapitalizedName();
