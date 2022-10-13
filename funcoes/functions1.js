// argumentos e parâmetros

// function expression
// function anonymous

// parameters
const sum = function(numA, numB){
  return numA + numB;
}

console.log(sum(2, 3)) // arguments

// Function scope
let subject = 'create video'

function createThink(subject) {
  return subject
}

console.log(createThink(subject))

let fator = 0;

function updateFator() {
  fator = 10 + 10;
}

console.log(fator)
updateFator()
console.log(fator)

// function hoisting
sayMyName()

function sayMyName() {
  console.log('Heisenberg')
}

// arrow function
const sayMyName2 = (name) => {
  console.log(name)
}

sayMyName2('Math')

// callback function
function sayMyName3(name) {
  console.log('Antes de executar a função callback')
  name()
  console.log('Depois de executar a função callback')

}

sayMyName3(
  () => {
    console.log('Estou em uma função callback')
  }
)

/*
  Function() constructor

  * Expressão new 
  * criar um novo object
  * this keyword
*/ 

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + ' está andando'
  }
}

const mayke = new Person("Mayke")
console.log(mayke)
const joao = new Person("João")
console.log(joao)
