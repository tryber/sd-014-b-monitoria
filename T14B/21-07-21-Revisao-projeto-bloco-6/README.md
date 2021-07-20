# Esquenta para o projeto do bloco 6

O esquenta proposto para o bloco 6 é a criação de uma página onde haja um formulário onde a pessoa possa introduzir alguns dados, como nome, cpf, email, telefone e outros, com o intuito de que as pessoas estudantes consigam praticar os conhecimentos adquiridos ao longo do bloco 6 e blocos anteriores.

## Antes de começar a desenvolver

Antes de começar a desenvolver faça um fork desse repositório para o seu perfil pessoal do Github, dessa forma esse projeto vai ficar salvo no seu perfil pessoal e não afetará este repositório.

[Tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

---
## Esquematização básica do layout

A esquematização básica do layout pode ser encontrada [Aqui](./imagens/layout-background-branco.png)

![Esquematização básica do layout esquenta bloco 3][esquematizacao]

[esquematizacao]: ./imagens/layout-background-preto.png

---

## Layout básico

O layout básico pode ser encontrado [Aqui](./imagens/layout-basico.png)

![Layout base esquenta bloco 3][layout]

[layout]: ./imagens/layout-basico.png

---

## Observações técnicas

- É esperado que essa página seja desenvolvida usando TAGs semânticas
- Não existem testes para verificar o uso das TAGs, mas fique a vontade para desenvolver tais testes, caso ache necessário.

## Requisitos

1. É esperado que haja 1 input do tipo texto, onde será possível inserir o nome e o sobrenome da pessoa usuária;

- Crie uma label com o valor `Nome e sobrenome`;
- Crie um input do tipo texto;

2. É esperado que haja 1 input do tipo texto, onde será possível inserir o e-mail da pessoa usuária;

- Crie uma label com o valor `E-mail`;
- Crie um input do tipo texto;

3. É esperado que haja 1 input do tipo texto, onde será possível inserir o telefone da pessoa usuária;

- Crie uma label com o valor `Telefone`;
- Crie um input do tipo texto;

4. É esperado que haja 1 input do tipo texto, onde será possível inserir o endereço da pessoa usuária;

- Crie uma label com o valor `Endereço`;
- Crie um input do tipo texto;

5. É esperado que haja 1 input do tipo dropdown, onde será possível escolher o Estado com o UF da pessoa usuária. Exemplo: `MG - Minas Gerais`;

- Crie uma label com o valor `Estado`;
- Crie um input do tipo dropdown;
- Cada opção deve ser um Estado do Brasil, incluindo o Distrito Federal;
- O valor padrão deve ser: `Escolha um estado`;

6. É esperado que haja 2 inputs do tipo checkbox, onde será possível escolher ser a pessoa deseja ou não receber e-mails de avisos;

- Crie uma label com o valor `Sim`;
- Crie um input do tipo checkbox;
- Crie uma label com o valor `Não`;
- Crie um input do tipo checkbox;

7. É esperado que haja 2 inputs do tipo checkbox, onde será possível escolher ser a pessoa deseja ou não receber notificações de possíveis alterações no site ou aplicativo;

- Crie uma label com o valor `Sim`;
- Crie um input do tipo checkbox;
- Crie uma label com o valor `Não`;
- Crie um input do tipo checkbox;

8. É esperado que haja 1 input do tipo dropdown, onde será possível escolher a forma como a pessoa usuária ficou sabendo do site;

- Crie uma label com o valor `Como nos conheceu?`;
- Crie um input do tipo dropdown;
- Os valores devem ser `Escolha uma indicação`, `Amigos`, `Redes sociais`, `Outros`;
- `Escolha uma indicação` deve ser o valor padrão;

9. É esperado que haja 5 inputs do tipo radio, onde será possível escolher a avaliação da experiência no site;

- Cada input deve ter uma label com um dos seguintes textos: `Péssima`, `Ruim`, `Média`, `Boa`, `Excelente`;

10. É esperado que haja 1 input do tipo textarea, onde será possível que a pessoa usuária deixe seu comentário sobre o site;

- Crie uma label com o valor `Comentários, sugestões ou críticas`;
- Crie um input do tipo textarea;

11. É esperado que haja 1 botão do tipo submit, onde só será possível enviar o formulário no momento em que todos os campos estiverem preenchidos;

- Os dropdowns não podem estar no valor padrão;

---

- Esse diretório possui arquivos de HTML, CSS e JS que podem ser usado como uma espécie de gabarito, mas **ATENÇÃO**, a forma como esses arquivos foram escritos e as propriedades usadas, não são a única forma de realizar essa tarefa, foi somente a forma como a equipe desenvolvedora desse projeto escolheu.
- Fique a vontade para construir a sua própria solução e fique a vontade para ir além do que foi proposto aqui, como por exemplo adicionar uma forma de remover os textos e as imagens com cliques.

---

Bons estudos e #VQV :rocket:
