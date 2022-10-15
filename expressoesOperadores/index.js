// expressões são qualquer linha de código que resolve alguma coisa no JavaScript, 
// um exemplo é a expressão:

let number; // undefined

/**
 * Binário 
 *  Recebe duas expressões com um operador entre elas.
 */
number = 1;
console.log(number + 1);

/**
 * Unário 
 * Recebe apenas uma expressão
*/ 

console.log(++number)

/**
 * Ternário
 * Recebe três expressões 
*/ 

let expression = true

console.log(expression ? 'alo' : 'nada')

/**
 * Expressão ternário
 * condition ? value1 : value2;
 */

let age = 19;
const drive = age >= 18 ? 'Can drive' : "Can't drive";

console.log(drive)
