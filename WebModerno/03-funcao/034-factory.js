// Funções Factory em JavaScript

/**
 * Funções factory retornam uma nova
 * instância de objetos
 */

function Repository(name, author, hasLink = false) {
  const repo = { name, author };
  if (hasLink) {
    repo.link = `https://github.com/${author}/${name}`;
  }
  return repo;
}

const learningLanguage = Repository("Web-Moderno", "newtmagalhaes", true);
console.log(learningLanguage);
