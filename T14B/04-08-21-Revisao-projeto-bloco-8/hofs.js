// Explicita

// function teste1(params) {
//   return 'Xablau!';
// };

// const Hugo = function () {
//   console.log('hof é vida!')}; 

// console.log(teste1());

// Anônima
// exemplo.addEventListener('click', (event) => {
//   event.target
// })

// Arrow Function
// () => {}

// HOF => HOFs são funções que recebem outras funções como parâmetro e/ou retornam outra função.
// (() => {}) => () => {}
// sort, find, forEach, some, reduce, map, filter, every, addListener

// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 30, 40];

// const arrayText = ['c', 'a', 'g','e', 'b', 'd', 'f']

// arrayText.sort();

// arrayNumeros.sort((a, b) => b - a);
// console.log(arrayText);
// console.log(arrayNumeros);

// const selectPar = (numero) => numero % 2 === 0;

// const numerosPares = arrayNumeros.map(selectPar());

// const numerosParesMap = arrayNumeros
//   .map((numero) => {
//   return numero % 2 === 0 ? numero : 'não é par';
//   // return (numero % 2 === 0) && numero;
// })
//   .filter((elemento) => elemento === 'não é par')
//   .map((el, index) => index % 2 === 0 && 'par dentro do par')
//   .map((e) => console.log(e));

// const numerosParesFilter = arrayNumeros.filter((numero) => numero % 2 === 0)

// console.log(numerosParesMap);
// console.log(numerosParesFilter);
// console.log(arrayNumeros);

// const testMap = arrayNumeros.map((numero) => numero % 2 !== 0 ? numero : 'não é impar');

// const testForEach = arrayNumeros.forEach((numero) => numero % 2 !== 0 ? console.log(numero) : 'não é impar');

// arrayText.forEach((elemento) => {
//   const body = document.querySelector('body');
//   const p = document.createElement('p');
//   p.innerText = elemento;
//   body.appendChild(p);
// })

// console.log(testMap);
// console.log(testForEach);

// const casa = {
//   quarto: () => 'Olá',
//   sala: 'Local para passar o tempo',
// }

// console.log(casa.quarto())

// String.
// Array.
// Object.
// Number.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 21, 30, 40];

const arrayText = ['c', 'a', 'g','e', 'b', 'd', 'f']

const testeReduceNumeros = arrayNumeros.reduce((acc, curr, index) => {
  acc += curr;
  return acc
});

const casa = {
  quarto: '',
  sala: '',
  cozinha: '',
}

const esportes = {
  surf: '',
  volei: '',
  corrida: '',
}

const object = {...casa, ...esportes};

console.log(object);

// arrayText.map(() => {})

console.log(testeReduceNumeros);

// console.log('1' + 1);

// calback do map tem 3 parametros padrões: Elemento_Atual, Index_Atual, Array
// calback do reduce tem 4 paramtros padrões: Elemento_Anterior, Elemento_Atual, Index_Atual, Array
