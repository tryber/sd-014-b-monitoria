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
- [Requisitos](#Requisitos)
  - [1 - Renderize a página inicial](#1-Renderize-a-página-inicial)
  - [2 - Renderize a página de cadastro de usuários](#2-Renderize-a-página-de-cadastro-de-usuários)
  - [3 Renderize a pagína de detalhes de cada usuário](#3-Renderize-a-pagína-de-detalhes-de-cada-usuário)
  - [4 Crie os cartões de usuários da página principal](#4-Crie-os-cartões-de-usuários-da-página-principal)
- [Requisito Bônus](#Requisito-Bônus)
  - [5 Crie testes para todas as telas e componentes do projeto](#5-Crie-testes-para-todas-as-telas-e-componentes-do-projeto)

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
- Entre na pasta desse projeto no repositório que você acabou de clonar:
  - `cd user-library`

3. Instale as dependências, inicialize o projeto e rode os testes

- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
- Inicalize a API do projeto:
  - `npm run dev` (as requisições só vão funcionar depois de rodar esse comando, deixe esse comando rodando e abra um novo terminal caso precise usar o terminal, para parar esse comando é só usar ctrl + c)

4. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-user-library`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`

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

6. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-user-library`

7. Crie um novo `Pull Request` _(PR)_

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

Alguns diretórios já foram criados dentro do diretório `/src` como sugestão para você organizar seu código, mas fique a vontade para criar novos diretório, apagar os que foram criados ou utilizar os que já existem

⚠️ **Você não deve alterar nada no diretório `/api` sobre nenhuma circunstância** ⚠️

Você pode consultar a base de dados no arquivo `/api/data/data.json`

## API

Este projeto possui uma API criada especificamente para ele, essa API irá cumprir todo o papel de pegar as requisições e consultar a base de dados e devolver os resultados para o front-end.

Todo o código relacionado a API pode ser encontrado na pasta `/api`

## Requisições

Esse projeto já possui funções implementadas para fazer as requisições para a API, cada uma dessas funções possui suas peculiaridades, algumas precisam de coisas específicas para funcionar, os detalhes de cada uma será explicado logo abaixo, essas funções podem ser encontradas no arquivo `/src/services/fetchAPI.js`

- `getAllUsers()`
  1. Essa função retorna todos os usuários presentes na base de dados, em conjunto com as suas informações;
  2. Não é necessário passar nenhum parâmetro para essa função;

- `getUserById()`
  1. Essa função retorna informações de um usuário específico presente na base de dados;
  2. É necessário passar um parâmetro para essa função, esse parâmetro precisa ser o `id` de um usuário, exemplo: `be9cfac4-4d72-386a-8912-eed311837403`;

- `insertUser()`
  1. Essa função insere um novo usuário na base de dados;
  2. É necessário passar um parâmetro para essa função, esse parâmetro precisa ser um objeto com todas as informações do usuário, as informações necessárias serão descritas mais abaixo nesse README;

---

# Requisitos

## 1 Renderize a página inicial

A página inicial deverá ter:

- Um cabeçalho com:
  - O título Tryclub
  - Menu de navegação
  - Um botão para adicionar um novo usuário que quando clicado redirecione a pessoa usária para a página com um formulário;

- Uma parte principal com:
  - Um lista com os usuários

## 2 Renderize a página de cadastro de usuários

A pagina de cadastro deve ter:

- Um formulário com campos para inserir as seguintes informações:
  - Nome
  - Sobrenome
  - Data de nascimento
  - Foto de perfil
  - Cidade onde vive
  - Estado onde vive
  - E-mail
  - Telefone
  - Endereço

- Um botão para enviar o formulário

⚠️ **Atenção, todas as informações desse formulário devem ser de preenchimento obrigatório, ou seja, não deve ser possível enviar informações em branco.** ⚠️

Para adicionar um novo usuário é necessário utilizar a função `insertUser()`, essa função precisa de um objeto para poder funcionar, o objeto a ser passado deve seguir igual ao exemplo abaixo:

~~~JavaScript
{
  "id": "be9cfac4-4d72-386a-8912-eed311837403",
  "first_name": "Gian",
  "last_name": "Barreto",
  "birthday": "2009-05-11",
  "image": "http://placeimg.com/640/480/any",
  "city": "Rafael do Leste",
  "email": "anderson71@espinoza.com",
  "phone": "+1390193082165",
  "state": "Rondônia",
  "address": "Avenida Elias de Aguiar, 6311. Bloco B"
}
~~~

Essa função só irá adicionar um usuário por vez, então faça seu formulário de forma que seja possível cadastrar somente um usuário por vez.

A chave `id` será criada automáticamente pela API, então não se preocupe em desenvolver a lógica para implementá-lo

## 3 Renderize a pagína de detalhes de cada usuário

Ao clicar em um cartão de usuário na página principal nossa aplicação deve ser redirecionada para uma página onde todas as informações da pessoa clicada apareçam na tela.

## 4 Crie os cartões de usuários da página principal

Os cartões dos usuários na página principal devem ter somente as seguinte informações:

- Avatar de usuário
- Nome completo
- Cidade
- Estado

# Requisito Bônus

## 5 Crie testes para todas as telas e componentes do projeto

Esse repositório não possui testes implementados para testar a aplicação, fique a vontade para implementar seus testes e assim praticar também os conhecimentos de RTL, vistos durante o bloco 15;

Template do projeto desenvolvido por [Iago de Paula Ferreira](https://github.com/IagoPFerreira)
