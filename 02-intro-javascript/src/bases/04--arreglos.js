// Arreglo en JS

//const array = new Array(100);
const array = [1,2,3,4];
//array.push(1);

let array2 = [...array, 5];

const arra3 = array2.map(function (numero) {
  return numero * 2;
});


console.log(array2);
//console.log(array3);