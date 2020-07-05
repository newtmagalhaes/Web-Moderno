// Formas de declarar objetos em JavaScript

// Instanciando Classe
class ClasseRepositório {
  constructor(author, name) {
    this.author = author;
    this.name = name;
    this.link = `Https://github.com/${this.author}/${this.name}`;
  }
}

// Instanciando Função construtora
function ConstructorRepositorio(author, name) {
  this.author = author;
  this.name = name;
  this.link = `Https://github.com/${this.author}/${this.name}`;
}

// Chamando Função Factory
function FactoryRepositorio(author, name) {
  return { author, name, link: `Https://github.com/${author}/${name}` };
}

const byClass = new ClasseRepositório("newtmagalhaes", "Aprendendo-Linguagens"),
  byFactory = FactoryRepositorio("newtmagalhaes", "Aprendendo-Linguagens"),
  byConstructor = new ConstructorRepositorio(
    "newtmagalhaes",
    "Aprendendo-Linguagens"
  );

console.log(`\tObjetos Criados\n`);
console.log("por Classe:\t", byClass);
console.log("por Construtor:\t", byConstructor);
console.log("por Factory:\t", byFactory);
