# 📘 **Notes Front-End — Next.js + Context API + TailwindCSS**

Este é o front-end do projeto **Notes**, desenvolvido com **Next.js**, **Context API**, **hooks personalizados** e **TailwindCSS**, integrado à API criada com FastAPI.

O objetivo é entregar uma interface leve, moderna e responsiva para gerenciar notas e tags, cobrindo todo o fluxo: criar, editar, listar e remover notas, além de gerenciar suas tags.

---

## 🚀 **Tecnologias Utilizadas**

- **Next.js 14+ (App Router)**
- **React 18**
- **TypeScript**
- **Context API**
- **Hooks personalizados**
- **TailwindCSS**
- **Fetch API**
- **FastAPI (Backend)**

---

## 🛠️ **Pré-requisitos**

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js 18+**
- **npm, yarn ou pnpm**
- A API rodando localmente em:
  ```
  http://127.0.0.1:8000
  ```

---

## 📦 **Instalação**

### 1️⃣ Clone este repositório

```bash
git clone https://github.com/usuario/notes-frontend.git
cd notes-frontend
```

### 2️⃣ Instale as dependências

```bash
npm install
# ou
yarn
# ou
pnpm install
```

---

## ▶️ **Rodando o projeto**

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:3000
```

---

## 🎨 **TailwindCSS**

O projeto usa **TailwindCSS** como biblioteca principal de estilização.  
A configuração padrão está em:

```
tailwind.config.js
postcss.config.js
src/app/globals.css
```

O arquivo `globals.css` já importa:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Todos os componentes e páginas utilizam classes utilitárias do Tailwind para estilização rápida, consistente e responsiva.

---

## 🔌 **Configuração da API**

O front se comunica com o backend FastAPI através do arquivo:

```
src/lib/api.ts
```

Edite este valor caso sua API esteja em outro endereço:

```ts
export const BASE_URL = "http://127.0.0.1:8000";
```

---

## 🧩 **Estrutura do Projeto**

```
src/
 ├── app/                # Rotas e páginas Next.js
 ├── components/         # Componentes reutilizáveis
 ├── context/            # Contextos globais (NotesContext, TagsContext...)
 ├── hooks/              # Hooks personalizados (useNotes, useApi, useTags...)
 ├── lib/                # Cliente da API, utils
 ├── types/              # Tipagens globais (TypeScript)
 └── styles/             # Estilos globais (Tailwind)
```

---

## 📚 **Fluxo de Dados**

O projeto utiliza uma arquitetura clara e organizada:

1. **`api.ts`** → camada de comunicação com o backend
2. **hooks customizados** → tratam regras de negócio e chamam `api.ts`
3. **Context API** → mantém estados globais
4. **componentes** → consomem apenas o contexto, nunca `fetch`

Isso mantém o código limpo, escalável e fácil de testar.

---

## 🔄 **Comandos úteis**

Rodar o projeto:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
```

Rodar preview:

```bash
npm run start
```

---

## 🧪 **Integração com Backend (FastAPI)**

Para testar a API, você pode usar o Swagger nativo do FastAPI:

```
http://127.0.0.1:8000/docs
```

---

## 📝 **Funcionalidades do Front**

- Interface moderna usando TailwindCSS
- Criar notas
- Listar notas
- Editar notas
- Excluir notas
- Criar e editar tags
- Associação entre notas ↔ tags
- Atualização automática após operações
- Context API para gerenciamento global
- Hooks customizados para maior organização

---

## 🧠 **Futuras melhorias**

- Autenticação com JWT
- Filtro por tags
- Busca inteligente
- Tema Light/Dark (baseado em Tailwind)
- Testes unitários
- Migração para TanStack Query
- PWA

---

## 🤝 **Contribuição**

Pull requests são bem-vindos!  
Para mudanças maiores, abra uma issue para discutirmos a melhoria.

---

## 📄 **Licença**

Projeto livre para uso pessoal e estudos.
