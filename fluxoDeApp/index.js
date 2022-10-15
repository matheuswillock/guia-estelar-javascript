/**
 * Throw and try...catch block
 * 
 * Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.
 * 
 * Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.
 */

// throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}


// try...catch
try {
  sayMyName('Myke')
} catch (e) {
  console.log(e)
}