### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do
Manual da Pessoa Estudante da Trybe.

# Esquenta bloco 17

Neste repositório está criado a base de um projeto de esquenta do bloco 17 do curso de desenvolvimento da Trybe, esse bloco trata sobre Hooks e Context-API e aqui está uma forma de praticar os conhecimentos aprendidos nesse bloco.

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando um fork para colocar seus códigos.

# Sumário

- [Habilidades](#Habilidades)
- [O que deverá ser desenvolvido](#O-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#Desenvolvimento)
  - [Antes de começar a desenvolver](#Antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#Durante-o-desenvolvimento)
- [Como desenvolver](#Como-desenvolver)
  - [API](#API)
  - [Requisições](#Requisições)
    - [Retornar todos as pessoas usuárias](#Retornar-todos-as-pessoas-usuárias)
    - [Retornar uma pessoa usuária pelo id](#Retornar-uma-pessoa-usuária-pelo-id)
    - [Inserir uma nova pessoa usuária](#Inserir-uma-nova-pessoa-usuária)
    - [Atualizando informações de uma pessoa usuária](#Atualizando-informações-de-uma-pessoa-usuária)
    - [Deletado uma pessoa usuária](#Deletado-uma-pessoa-usuária)
    - [Atualizando a foto de perfil de uma pessoa usuária](#Atualizando-a-foto-de-perfil-de-uma-pessoa-usuária)

# Habilidades

  Nesse projeto, você será capaz de:

- Saber a melhor forma para instalar um gerenciador de pacotes;
- Inicializar um projeto em **React**;
- Utilizar JSX no **React**;
- Utilizar o **ReactDOM.render** para renderizar elementos numa página web;
- Utilizar o `import` para usar código externo junto ao seu;
- Criar componentes **React** corretamente;
- Fazer uso de `props` corretamente;
- Fazer composição de componentes corretamente;
- Criar múltiplos componentes dinamicamente;
- Utilizar **PropTypes** para checar o tipo de uma prop no uso de um componente;
- Utilizar **PropTypes** para garantir a presença de props obrigatórias no uso de um componente;
- Utilizar **PropTypes** para checar que uma prop é um objeto de formato específico;
- Utilizar **PropTypes** para garantir que uma prop é um array com elementos de um determinado tipo;
- Utilizar a Context API do React para gerenciar estado;
- Utilizar o React Hook useState;
- Utilizar o React Hook useContext;
- Utilizar o React Hook useEffect;
- Criar React Hooks customizados.

---

# O que deverá ser desenvolvido

Você deverá desenvolver uma aplicação que consiste em um quadro de metodologias ágeis, utilizando React.

Você precisará implementar componentes que em conjunto resultarão no quadro de metodologias ágeis, dinâmico.

## Desenvolvimento

Desenvolva uma aplicação **React** que seja composta por um `conjunto de componentes` React e
controlada por estados.

## Antes de começar a desenvolver

1. Antes de começar a desenvolver faça um fork desse repositório para o seu perfil pessoal do Github, dessa forma esse projeto vai ficar salvo no seu perfil pessoal e não afetará este repositório.

[Tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

2. Clone o repositório

- `git clone git@github.com:"SeuUsuatio"/sd-014-"SuaTribo"-monitoria.git`.

3. Mude para a branch do projeto:

- `git checkout hooks-context-api-esquenta-03-11-21`

4. Entre na pasta do projeto:

- `cd Bloco-17-Esquenta-03-11-21`

5. Instale as dependências, inicialize o projeto e rode os testes

- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Inicalize a API do projeto:
  - `npm run dev` (as requisições só vão funcionar depois de rodar esse comando, deixe esse comando rodando e abra um novo terminal caso precise usar o terminal, para parar esse comando é só usar ctrl + c)

6. Crie uma branch a partir da branch `hooks-context-api-esquenta-03-11-21`

- Verifique que você está na branch `hooks-context-api-esquenta-03-11-21`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `hooks-context-api-esquenta-03-11-21`
  - Exemplo: `git checkout hooks-context-api-esquenta-03-11-21`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-metodologias-ageis`

7. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listado o arquivo _package.json_ em vermelho)
- Adicione o arquivo alterado ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _ackage.json_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

8. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-metodologias-ageis`

9. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do seu respositório
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

Este repositório já possui um _template_ com um App React criado e já possui uma API criada. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo) e rodar o comando `npm run dev`, você não precisará realizar nenhuma configuração adicional.

É recomendado que o projeto seja desenvolvido dentro do diretório `/src`, essa é uma sugestão para você organizar seu código, mas fique a vontade para criar novos diretório, apagar os que foram criados ou utilizar os que já existem.

⚠️ **Você não deve alterar nada no diretório `/api` sobre nenhuma circunstância** ⚠️

Você pode consultar a base de dados no arquivo `/api/data/data.json`

---

## API

Este projeto possui uma API criada especificamente para ele, essa API irá cumprir todo o papel de pegar as requisições e consultar a base de dados e devolver os resultados para o front-end.

Todo o código relacionado a API pode ser encontrado na pasta `/api`

---

## Requisições

Neste projeto será necessário criar funções para fazer as requisições necessárias.

Para este projeto não será usado o `fetch()` para fazer as requisições, no lugar dele será usado o `axios()`, ele faz quase as mesmas coisas que o `fetch()` e tem o mesmo comportamento assíncrono, entretanto, o `axios()` nos permite mandar informações junto com a requisição, e para esse projeto mandar informação junto com a requisição é essencial, a forma como usar o `axios()` será explicada abaixo:

~~~JavaScript
// Importe o axios da biblioteca axios
const axios = require('axios'); 

// Chame a constante axios e passe o método HTTP que você deseja utilizar, como parâmetros passe o "endpoit" e o "objeto" que será utilizado pela API
axios.get('endpoint', objeto)
~~~

Cada `endpoint` dessa aplicação possui seu próprio requisito de informações para funcionar, cada um deles será mostrado abaixo:

---

### Retornar todos as pessoas usuárias

~~~JavaScript
axios.get('http://localhost:8080/')
~~~

---

### Retornar uma pessoa usuária pelo id

~~~JavaScript
axios.get(`http://localhost:8080/${id}`)
~~~

O `id` precisa ser uma string e ser o `id` da pessoa usuária que você quer retornar. Exemplo:

~~~JavaScript
'be9cfac4-4d72-386a-8912-eed311837403'
~~~

---

### Inserir uma nova pessoa usuária

~~~JavaScript
axios.post('http://localhost:8080/user/new', newUser)
~~~

A variável `newUser` precisa ser um objeto com todas as informações da nova pessoa usuária, tirando o `id`, todas as outras informações são obrigatórias, caso alguma fique em branco ou não seja passada, um erro será retornado. O `id` é gerado automáticamente quando uma nova pessoa usuária é inserida. Exemplo de objeto que deve ser passado:

~~~JavaScript
{
  first_name: 'Marco',
  last_name: 'Silva',
  birthday: '11-05-1980',
  image: 'http://placeimg.com/640/480/any',
  city: 'Rio Preto',
  email: 'marcosilva@trybe.com',
  phone: '+1390193082165',
  state: 'Minas Gerais',
  address: 'Avenida Elias de Aguiar, 6311. Bloco B',
  streetName: 'Rua Salazar'
}
~~~

---

### Atualizando informações de uma pessoa usuária

~~~JavaScript
axios.put('http://localhost:8080/user/update', user)
~~~

A variável `user` precisa ser um objeto com todas as informações da pessoa usuária, incluindo o `id`, todas as informações são obrigatórias, caso alguma fique em branco ou não seja passada, um erro será retornado. Exemplo de objeto que deve ser passado:

~~~JavaScript
{
  id: '7b470caa-a699-f43f-4792-45331ea82256'
  first_name: 'Marco',
  last_name: 'Silva',
  birthday: '11-05-1980',
  image: 'http://placeimg.com/640/480/any',
  city: 'Rio Preto',
  email: 'marcosilva@trybe.com',
  phone: '+1390193082165',
  state: 'Minas Gerais',
  address: 'Avenida Elias de Aguiar, 6311. Bloco B',
  streetName: 'Rua Salazar'
}
~~~

---

### Deletado uma pessoa usuária

~~~JavaScript
axios.delete(`http://localhost:8080/user/delete/${id}`)
~~~

O `id` precisa ser uma string e ser o `id` da pessoa usuária que você quer deletar. Exemplo:

~~~JavaScript
'be9cfac4-4d72-386a-8912-eed311837403'
~~~

---

### Atualizando a foto de perfil de uma pessoa usuária

~~~JavaScript
axios.put('http://localhost:8080/image', { id, image })
~~~

Todas as pessoas usuárias estão à principio com a mesma foto, caso você queira, é possível atualizar as fotos de perfil, a chave `id` precisa ser o `id` da pessoa usuária que você quer atualizar, e a chave `image` precisa ser o endpoint para a imagem que você deseja adicionar no lugar da imagem padrão. Exemplo:

~~~JavaScript
{
  id: '7b470caa-a699-f43f-4792-45331ea82256',
  image: 'https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg'
}
~~~

---
