/*
  Variáveis
    * var; pode de ser sobrescrita
    * let; pode de ser sobrescrita
    * const; não pode ser sobrescrita
    * Case-sensitive
    * Unicode
  Fracamente tipada
  Escopo block-statement {...}
  
*/ 

let clima = "quente"
console.log(clima) // quente

clima = "frio"; // *Sobrescrita de variável*
console.log(clima) // frio

const quente = true;
console.log(quente) // true
// quente = false
// console.log(quente) // gera um erro de tipagem.

/*
  Escopo
    é definido pelo block statement {...}
    * var é global e local e, semper sofre hoinsting.
    * const e let são apenas local
*/

// var
console.log("existe a var x?", x) 

{
  var x = 0;
  console.log("existe a var x?", x) 
}

console.log("existe a var x?", x) 

// console.log("existe a const z e a let y?", z, y) // gera de erro de referência.

{
  const z = 0;
  let y = 0;
  console.log("existe a const z e a let y?", z, y) 
}

//console.log("existe a const z e a let y?", z, y) // gera de erro de referência.
