/**
 * Estrutura de repetição
 * For
 * break - para a execução do loop
 * continue - pula a execução do momento
 */
console.log("de 1 a 10")
for (let i = 10; i > 0; i--) {

  console.log(i)
}

console.log("de 1 a 10 travando no 5")


for (let i = 10; i > 0; i--) {
  if (i === 5) {
    break;
  }
  console.log(i)
}

console.log("de 1 a 10 pulando no 5")

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i)
}

// While - excelente para quando não soubermos o momento de parada.
console.log("while i < 10")
let i = 0;
while (i < 10) {
  console.log(i)
  i++
}

// For...of
console.log("For of names...")
let names = ['João', 'Paulo', 'Pedro']

for (let name of names) {
  console.log(name)
}

// For...in - um loop dentro das prosperidades de um objeto
console.log("For in person...")
let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}
console.log('\nperson { ')

for (let property in person) {
  console.log(` ${property}: ${person[property]}`)
}

console.log('}')

/**
  person = { 
   name: 'John', 
   age: 30, 
   weight: 88.6
  }
*/
