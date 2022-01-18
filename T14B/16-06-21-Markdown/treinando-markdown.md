# Tudo sobre Markdown

Vamos aprender hoje principais funçoes da linguagem de marcaçao Markdown

## Headers

Os títulos seguem uma lógica de quanto mais cerquilhas (ou jogo da velha ou hashtag) maior o número do título e assim como no HTML, quanto menor o número do título, maior destaque, ou seja, o título 1 é mais importante e tem maior destaque que o título 2 e assim por diante. No **Markdown**, assim como **HTML** os títulos vão até o sexto nível.

Teste

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Enfâse

- **Negrito** ou __Negrito__
- *Itálico* ou _Itálico_
- _**Negrito com Itálico**_ *__Negrito com Itálico__*
- ~~Riscar~~
- <u>Sublinhado</u>

## Links

Tem duas formas de criar links, textos âncoras, onde o texto possui o link ou links diretos, onde a URL fica totalmente exposta:

- **Âncoras**

[typora](https://typora.io/)

- **Link direto**

<https://typora.io/>

## Imagens

**Inline:**
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

**Referencial:**
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Código (Code Highlight)

`Código em linha`

```Múltiplas linhas de código```

~~~javascript
  const teste = Múltiplas linhas de código

  if() {

  }
~~~

~~~python
exemplo = str('Exemplo')
~~~

~~~html
<h3>Exemplo</h3>
~~~

## Listas

### Ordenadas

1. Primeiro
2. Segundo

### Não ordendas

#### (-, +, *)

- alguma coisa

- outra coisa

- mais uma coisa

---

## Citação (blockquote)

>Use o sinal de maior que (>) para fazer blocos de citação.
>>Para adicionar mais uma linha à citação, basta teclar Enter para um novo
>>>código sinal. Isso gerará um novo parágrafo dentro do *blockquote*.
>>>>Códigos de **negrito**, _itálico_ e <https://links.com> funcionam aqui.

## Checkbox

- [x] Task 1
- [ ] Task 2
- [ ] Task 3
