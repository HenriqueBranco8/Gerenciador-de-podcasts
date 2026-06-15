# 🎙️ Podcast Manager

projeto desenvolvido durante o curso da DIO.ME

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge\&logo=npm\&logoColor=white)

API desenvolvida em **Node.js** com **TypeScript** para gerenciar episódios de podcasts.

O projeto permite listar episódios disponíveis e filtrar episódios por nome do podcast.

A aplicação foi construída utilizando o módulo HTTP nativo do Node.js, sem uso de frameworks como Express, seguindo uma organização baseada em arquitetura MVC.

---

## 📌 Índice

* [Funcionalidades](#-funcionalidades)
* [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Estrutura do projeto](#-estrutura-do-projeto)
* [Como instalar](#-como-instalar)
* [Como executar](#-como-executar)
* [Rotas da API](#-rotas-da-api)
* [Rotas disponíveis](#-rotas-disponiveis)
* [Exemplo do servidor](#-exemplo-do-servidor)
* [Arquitetura](#-arquitetura)
* [Possíveis melhorias futuras](#-possiveis-melhorias-futuras)
* [Autor](#-autor)


---

## 🚀 Funcionalidades

* Listar todos os episódios de podcasts disponíveis
* Filtrar episódios por nome do podcast
* Retornar os dados em formato JSON
* Organização do projeto em camadas
* API criada sem framework externo

---

## 🛠️ Tecnologias utilizadas

| Tecnologia  | Descrição                                             |
| ----------- | ----------------------------------------------------- |
| Node.js     | Ambiente de execução JavaScript                       |
| TypeScript  | Superset JavaScript com tipagem estática              |
| HTTP nativo | Módulo nativo do Node.js para criação do servidor     |
| TSX         | Execução de TypeScript em ambiente de desenvolvimento |
| NPM         | Gerenciador de pacotes                                |
| MVC         | Organização arquitetural do projeto                   |

---

## 📁 Estrutura do projeto

```txt
src/
├── controllers/
├── models/
├── data/
├── routes/
├── services/
├── utils/
├── app.ts
└── server.ts
```

---

## 📦 Como instalar

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd podcast-manager
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run start:dev
```

A API será executada em:

```txt
http://localhost:3636
```

---

## 🌐 Rotas da API

### 📄 Listar todos os episódios

Retorna todos os episódios cadastrados.

```http
GET /api/list
```

#### Exemplo de requisição

```txt
http://localhost:3636/api/list
```

#### Exemplo de resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "BANCO MASTER + MC RYAN E MC POZE PRESOS EM AÇÃO DA PF + OPERAÇÃO NO VIDIGAL",
    "videoId": "7etIRnPuhkQ",
    "categories": [
      "política"
    ]
  },
  {
    "podcastName": "flow",
    "episode": "BRADESCO PROCESSA VORCARO + NOVA OPERAÇÃO CONTRA BANCO MASTER + VÍDEO DO PT É ALVO DE INVESTIGAÇÃO",
    "videoId": "vRU8LaBvqg0",
    "categories": [
      "política"
    ]
  },
  {
    "podcastName": "Red-Cast",
    "episode": "teste",
    "videoId": "T3s73",
    "categories": [
      "política"
    ]
  }
]
```

---

### 🔎 Filtrar episódios por podcast

Retorna os episódios filtrados pelo nome do podcast informado na query string.

```http
GET /api/episodes?p=nome-do-podcast
```

#### Exemplo de requisição

```txt
http://localhost:3636/api/episodes?p=Red-Cast
```

#### Exemplo de resposta

```json
[
  {
    "podcastName": "Red-Cast",
    "episode": "teste",
    "videoId": "T3s73",
    "categories": [
      "política"
    ]
  }
]
```

---

## 🧭 Rotas disponíveis

As rotas da aplicação estão centralizadas no arquivo de rotas:

```ts
export enum Routes {
  LIST = "/api/list",
  EPISODES = "/api/episodes"
}
```

| Método | Rota                              | Descrição                            |
| ------ | --------------------------------- | ------------------------------------ |
| GET    | `/api/list`                       | Lista todos os episódios             |
| GET    | `/api/episodes?p=nome-do-podcast` | Filtra episódios por nome do podcast |

---

## 🧩 Exemplo do servidor

O servidor utiliza o módulo HTTP nativo do Node.js para receber as requisições e direcioná-las para seus respectivos controllers.

```ts
import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/podcasts-controllers";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
      await getFilterEpisodes(request, response);
    }
  }
);
```

---

## 🏗️ Arquitetura

O projeto segue uma organização baseada em MVC, separando responsabilidades em diferentes camadas:

| Camada        | Responsabilidade                                                 |
| ------------- | ---------------------------------------------------------------- |
| `controllers` | Responsáveis por receber as requisições e retornar as respostas  |
| `services`    | Responsáveis pelas regras de negócio                             |
| `models`      | Responsáveis pela definição dos modelos de dados                 |
| `data`        | Camada utilizada para armazenar ou simular os dados da aplicação |
| `routes`      | Centralização das rotas disponíveis na API                       |
| `utils`       | Arquivos auxiliares, como métodos HTTP e constantes              |
| `app.ts`      | Configuração principal da aplicação                              |
| `server.ts`   | Inicialização do servidor                                        |

---

## 📈 Possíveis melhorias futuras

* Adicionar novos métodos HTTP, como POST, PUT e DELETE
* Criar cadastro de novos episódios
* Implementar atualização e remoção de episódios
* Adicionar banco de dados
* Criar validações para parâmetros de busca
* Implementar tratamento para rotas inexistentes
* Adicionar testes automatizados
* Documentar a API com Swagger
* Criar paginação para listagem de episódios

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática com Node.js, TypeScript e criação de APIs sem framework.
