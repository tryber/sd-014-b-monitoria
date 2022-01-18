const assert = require("assert");

// const sum = (num1, num2) => num1 + num2;

// const fatorial = (number) => {
//   let resultado = 1;
//   if (number===undefined) { return 0 }
//   if(typeof number !== 'number') {
//     throw Error ('Parâmetro inválido, por favor passe um número como parâmetro!');
//   }
//   for (let index = 2; index <= number; index += 1) {
//     resultado *= index;
//   }
//   return resultado;
// };

// assert.strictEqual(fatorial(3), 6);
// assert.strictEqual(typeof fatorial, 'function');
// assert.strictEqual(fatorial(0), 1);
// assert.strictEqual(fatorial(), 0);

const array = [];

// const cadastro = () => ['Xulambs', 38, 'Natal'] 
const cadastro = (name, lastname, city, age) => [`${lastname}, ${name}`, age, city];

// function cadastro() {
// }
  
assert.strictEqual(cadastro('Xulambs', 'Xablau', 'Natal', 38), ['Xablau, Xulambs', 38, 'Natal']);
assert.deepStrictEqual(cadastro('Xulambs', 'Xablau', 'Natal', 38), ['Xablau, Xulambs', 38, 'Natal']);
assert.deepStrictEqual(cadastro('Marco', 'Marcondes', 'Belo Horizonte', 35), ['Marcondes, Marco', 35, 'Belo Horizonte']);

// const cadastro = (name, age, city) => { cadastro = []; cadastro.push(name); cadastro.push(age); cadastro.push(city); return cadastro;} 

let n1 = 1;
let text = 'Olá'