# 👾 Rick and Morty Frontend — Angular 17

Frontend desenvolvido em **Angular 17** que consome o backend próprio da Rick and Morty API, exibindo personagens, episódios e localizações com tema dark espacial, filtros e paginação.

---

## 🌐 Demo

**[rickandmorty-frontend.vercel.app](https://rickandmorty-frontend.vercel.app)**

---

## 🔗 Repositórios do Projeto

| Repositório | Descrição |
|------------|-----------|
| [rickandmorty-frontend](https://github.com/GabrielVeras-dev/rickandmorty-frontend) | Este repositório — Frontend Angular |
| [rick-and-morty-api](https://github.com/GabrielVeras-dev) | Backend Spring Boot que a aplicação consome |

---

## 🚀 Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| **Angular 17** | Framework principal |
| **TypeScript** | Tipagem estática |
| **SCSS** | Estilização com tema dark espacial |
| **Angular Material** | Componentes de UI |
| **HttpClient** | Consumo da API backend |
| **Angular Signals** | Estado reativo |
| **Standalone Components** | Sem NgModule |
| **Vercel** | Deploy e hospedagem |

---

## ✨ Funcionalidades

- Listagem de personagens com cards visuais
- Busca de personagens por nome
- Filtro por status (Vivo, Morto, Desconhecido)
- Filtro por espécie
- Paginação de resultados
- Visualização de detalhes do personagem
- Tema dark espacial inspirado no universo Rick and Morty
- Layout responsivo para mobile e desktop

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── character-card/      → Card individual de personagem
│   │   ├── character-list/      → Listagem com filtros e paginação
│   │   └── character-detail/    → Detalhes do personagem
│   ├── services/
│   │   └── character.service.ts → Consumo da API backend
│   ├── models/
│   │   └── character.model.ts   → Interface TypeScript do personagem
│   └── app.component.ts         → Componente raiz
├── styles.scss                  → Tema dark global
└── index.html                   → Meta tags e configuração
```

---

## ⚙️ Como Rodar

### Pré-requisitos

- Node.js 18+
- Angular CLI 17+
- Backend da Rick and Morty API rodando localmente

### Passos

Clone o repositório:

```bash
git clone https://github.com/GabrielVeras-dev/rickandmorty-frontend.git
```

Entre na pasta:

```bash
cd rickandmorty-frontend
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
ng serve
```

Acesse em: **http://localhost:4200**

---

## 🔗 Configuração da API

Por padrão o frontend consome o backend em produção. Para rodar com o backend local, altere a URL base no service:

```typescript
// src/app/services/character.service.ts
private apiUrl = 'http://localhost:8080';
```

---

## 📦 Build para Produção

```bash
ng build
```

Os arquivos gerados ficam em `dist/rickandmorty-frontend/browser/`.

## 🏗️ Arquitetura

O projeto segue a arquitetura de componentes do Angular 17 com Standalone Components:

```
API Backend (Spring Boot)
        ↓
CharacterService (HttpClient)
        ↓
CharacterListComponent
        ↓
CharacterCardComponent
```

O `CharacterService` centraliza todas as chamadas HTTP para o backend, mantendo os componentes focados apenas na apresentação.

---

## 👨‍💻 Autor

**Gabriel de Abreu Veras**
Desenvolvedor Backend Java | Spring Boot | APIs REST

[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--gabrielveras-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/dev-gabrielveras/)
[![GitHub](https://img.shields.io/badge/GitHub-GabrielVeras--dev-black?style=flat&logo=github)](https://github.com/GabrielVeras-dev)
[![Portfolio](https://img.shields.io/badge/Portfolio-Elden%20Ring-gold?style=flat)](https://portfolio-eldenring.vercel.app)
