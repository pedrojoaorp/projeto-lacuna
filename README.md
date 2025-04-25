# Descrição

Neste repositório está a pré-tarefa para o curso de DevOps sendo oferecido pela Lacuna Software. Abaixo estão algumas informações importantes sobre o projeto.

## Setup do projeto

```bash
$ npm install
```

## Compilar e rodar o projeto

```bash
$ npm run start:dev
```

## Sobre o projeto

O projeto representa uma API simples de receitas e ingredientes. As receitas possuem nome, instruções de preparo e a lista de ingredientes assim como suas quantidades; os ingredientes possuem nome e sua unidade de medida. Mais especificamente, as estruturas de receita e ingrediente estão definidas da seguinte maneira:

```bash
Recipe:
id - Int
name - String
ingredients - Ingredient[]
ingredients_qnts - String
instructions - String

Ingredient
id - Int
name - String
unit - String
recipes - Recipe[]
```

Com o projeto rodando, podemos chamar a API para interagir com o banco de dados. A seguir estão todos os comandos possíveis, assim como alguns exemplos e explicações onde necessário. O banco de dados roda localmente, com a URL "localhost:3000"; as extensões de URL apresentadas vêm após o localhost.

### Ingredientes

```bash
- POST - Criar ingrediente
- URL: "/ingredient"
- Exemplo de corpo da requisição:
{
	"name": "canela",
	"unit": "colheres de chá",
}

- GET - Ver todos os ingredientes
- URL: "/ingredient"

- GET - Ver ingrediente específico
- URL: "/ingredient/[id do ingrediente]"

- PATCH - Atualizar ingrediente
- URL: "/ingredient/[id do ingrediente]"
- Exemplo de corpo da requisição:
{
  "name": "açúcar",
}

- DELETE - Deletar ingrediente específico
- URL: "/ingredient/[id do ingrediente]"

```

### Receitas

```bash
- POST - Criar receita
- URL: "/recipe"
- Exemplo de corpo da requisição:
{
	"name": "Bolo",
	"ingredients_qnts": "500|250|15",
	"ingredients": {"connect": [{"id": 1}, {"id": 2}]}, // Para cada ingrediente, colocar o id neste formato
	"instructions": "Pegue os itens, coloque-os na bancada de trabalho nas posições corretas, e coloque o bolo resultante no seu inventário",
}

- GET - Ver todas as receitas
- URL: "/recipe"

-GET - Ver receita específica
-URL: "/recipe/[id da receita]"

- GET - Ver receita específica, em texto formatado como receita
- URL: "/recipe/formatted/[id da receita]"
- Formato de retorno:
[
	"Receita: Bolo\nIngredientes:\n> água: 500 ml\n> óleo: 250 ml\n\nInstruções:Pegue os itens, coloque-os na bancada de trabalho nas posições corretas, e coloque o bolo resultante no seu inventário"
]

- PATCH - Atualizar receita
- URL: "/recipe/[id da receita]"
- Exemplo de corpo da requisição:
{
  "name": "Torta",
}

- DELETE - Deletar receita
- URL: "/recipe/[id da receita]"
```
