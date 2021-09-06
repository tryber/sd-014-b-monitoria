const main = document.querySelector('main');
const p = document.createElement('p');

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const resposta = await fetch(API_URL, myObject).then((response) => response.json()).then((resposta) => resposta)
  p.innerText = resposta.joke;
  return main.appendChild(p);
};

fetchJoke()
const teste = document.createElement('span')
teste.innerText = 'Lá vem a piada'
main.appendChild(teste)
