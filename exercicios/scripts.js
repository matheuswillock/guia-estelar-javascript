// 1. Declare uma variável de nome weight
  var weight;

// 2. que tipo de dado éa variável acima?
  console.log(typeof weight) // Undefined;

/*
  3. Declare uma variável e atribua valores para cada um dos dados.
    * name: string;
    * age: Number (Integer);
    * stars: Number (Float);
    * isSubscribed: Boolean;
*/ 

var name = 'Matheus';
var age = 22;
var stars = 4.2;
var isSubscribed = true;

/*
  4. A variável student abaixo é de que tipo de dados?
    This is a Object.
  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

  4,2 Mostre no console a seguinte mensagem: 

    <name> de idade <age> pesa <weight> Kg.

    Atenção! Substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/ 

let student = {};
console.log(typeof student)

student = {
  name: 'Mike',
  age: 13,
  weight: 70
}

console.log(`${student.name}, de idade ${student.age} anos,  pesa ${student.weight} kg.`)

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/ 
let students = [];

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array) 
*/ 

students = [
  student
];

/*
  7. coloque no console o bvalor da posição zero do Array acima
*/ 
console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/ 
const matheus = {
  name: 'Matheus',
  age: 12,
  weight: 55
}

students[1] = matheus

console.log(students[1])

