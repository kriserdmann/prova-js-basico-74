/**
 * Questão 6: Manipulação de Objeto de Livro
 *
 * Implemente uma função chamada manipulacaoObjeto que não recebe parâmetros.
 * Esta função deve criar e manipular um objeto representando um livro,
 * realizando uma série de operações e retornando o objeto final.
 *
 * Requisitos:
 * a) Crie um objeto chamado "livro" com as propriedades: "titulo", "autor" e "anoPublicacao", com os seguintes dados:
 *    titulo: "O Alquimista",
 *    autor: "Paulo Coelho",
 *    anoPublicacao: 1988
 * b) Acesse a propriedade "titulo" do objeto "livro" e imprima no console.
 * c) Altere a propriedade "anoPublicacao" do objeto "livro" para 1992.
 * d) Adicione a propriedade "editora" ao objeto "livro" com o valor: "Rocco".
 * e) Adicione um método ao objeto "livro" chamado "getIdade" que retorne quantos anos o livro tem (ano atual - ano de publicação do livro).
 * f) Adicione um método ao objeto "livro" chamado "getDescricao" que retorne uma string contendo todas as informações do livro, no seguinte formato:
 *    'O livro "titulo" foi escrito por "autor" e publicado em "anoPublicacao".'.
 *
 * Retorne o objeto livro completo ao final da função.
 */

function manipulacaoObjeto() {
  // a) Criação do objeto livro com as propriedades especificadas
  const livro = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    anoPublicacao: 1988,
  };

  // b) Acesso e impressão no console do título do livro
  console.log(livro.titulo);

  // c) Alteração da propriedade anoPublicacao
  livro.anoPublicacao = 1992;

  // d) Adição da propriedade editora ao objeto livro
  livro.editora = 'Rocco';

  // e) Adição de um método ao objeto livro para obter sua idade
  livro.getIdade = function () {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.anoPublicacao;
  };

  // f) Adição de um método ao objeto livro para obter uma descrição completa
  livro.getDescricao = function () {
    return `O livro "${this.titulo}" foi escrito por "${this.autor}" e publicado em "${this.anoPublicacao}".`;
  };

  // Retorno do objeto livro completo com todos os métodos e propriedades adicionados
  return livro;
}

module.exports = manipulacaoObjeto;
