/** Transformar notas escolares
 * 
 * Crie um algoritmo que transforme as notas do sistema numérico para sistemas de notas em caracteres tipo A B C
 * 
 * de 90 para cima - A
 * entre 80 - 89   - B
 * entre 70 - 79   - C
 * entre 60 - 69   - D
 * menor que 60    - F
*/

console.log(`Exercício notas escolares:\n${boletim(70)}`)

function boletim(nota) {

  let classeA = nota >= 90;
  let classeB = nota >= 80 && nota <= 89;
  let classeC = nota >= 70 && nota <= 79;
  let classeD = nota >= 60 && nota <= 69;
  let classeF = nota < 60;

  let notaFinal;

  if (classeA) {
    notaFinal = 'A'
  } else if (classeB) {
    notaFinal = 'B'
  } else if (classeC) {
    notaFinal = 'C'
  } else if (classeD) {
    notaFinal = 'D'
  } else if (classeF) {
    notaFinal = 'F'
  } else {
    notaFinal = 'Nota inválida'
  }

  return `Boletim: ${notaFinal}`

}

/** Sistema de gastos familiar
 * 
 * Crie um objeto que possuirá 2 propriedades, ambos do tipo array: 
 *  - receitas: []
 *  - despesas: []
 * 
 * Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
 * 
*/

const family = {
  incomes: [10, 20, 30.54],
  expenses: [1502]
}

console.log(`Exercício saldo familiar:\n  
  ${familyBalances(family)}`
)

function familyBalances(familyRevenue) {
  let incomesTotal = 0;
  let expensesTotal = 0;

  for (let expenses in familyRevenue) {

    if (expenses === 'receitas') {
      for (receita of familyRevenue[expenses]) {
        incomesTotal += receita
      }
    } else {
      for (despesa of familyRevenue[expenses]) {
        expensesTotal += despesa
      }
    }
  }

  let familyBalances = incomesTotal - expensesTotal;

  return balanceCalculate(familyBalances)

}

function balanceCalculate(balance) {

  if (balance > 0) {
    return `O saldo familiar está positivo: R$ ${String(balance).replace(".", ",")}`;
  } else {
    return `O saldo familiar está negativo: R$ ${String(balance).replace(".", ",")}`;
  }

}

/** Celsius em fahrenheit
 * 
 * Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra.
 * 
 * c = (F - 32) * 5/9
 * 
 * F = c * 9/5 + 32 
*/

const temperatures = ['100°F', '37,8°C', '37.8°Z', '500,21f']

for (let temperature of temperatures) {
  try {
    console.log(`Exercício conversão de ${temperature}:\n 
      ${convertTemperature(temperature)}`
    )
  } catch (error) {
    console.log(error)
  }
}

function convertTemperature(string) {

  if (string.toLowerCase().includes('f')) {
    let value = convertStringToNumber(string)
    return ((value - 32) * 5 / 9).toFixed(2) + ' °C'

  } else if (string.toLowerCase().includes('c')) {
    let value = convertStringToNumber(string)
    return (value * 9 / 5 + 32).toFixed(2) + ' °F'

  } else {
    throw new Error('Dado inválido')
  }

}

function convertStringToNumber(string) {
  return Number(string.toLowerCase()
    .replace("°", "")
    .replace("c", "")
    .replace("f", "")
    .replace(",", ".")
  )
}

/** Buscando e contando dados em Arrays
 * 
 * 
 * baseado no Array de livros por categoria abaixo, faça os seguintes desafios
 * 
 *  - Contar o número de categorias e o número de livros em cada categoria.
 *  - Contar o número de autores.
 *  - Mostrar livros do autor Augusto Cury.
 *  - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 * 
*/

let booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Classon",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sheron L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Voce é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  }
];

console.log(`Exercício:\nQuantidade de categorias e de livros em cada categoria:\n${booksInCategories()}`)

console.log(`Exercício:\nQuantidade de autores:\n${countAuthor()}`)

console.log(`Exercício:\nLivros do ator: \n${findBooksByAuthor('augusto Cury')}`)

function booksInCategories() {
  let message = '';
  let quantitiesCategories = [];
  let books = [];

  for (let category of booksByCategory) {

    quantitiesCategories.push(category.category)
    books.push(category.books.length)

  }

  let i = 0;
  for (let category of quantitiesCategories) {

    message += `Categoria: ${category} | Quantidade de livros: ${books[i]} \n`

    i++

  }

  return `${quantitiesCategories.length} categoria(s)\n${message}`

}

function countAuthor() {
  let authors = [];
  let count = 0;

  for (let category of booksByCategory) {
    for (let book of category.books) {
      let author = book.author

      if (!authors.includes(author)) {
        authors.push(author)
        count++
      }

    }

  }

  return `Quantidade de autores: ${count}`
}

function findBooksByAuthor(author) {
  let books = "";

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author.toLocaleLowerCase().includes(author.toLocaleLowerCase())) {
        books += `${book.title}\n`
      }
    }
  }

  return `${author.toUpperCase()}\n${books}`

}
