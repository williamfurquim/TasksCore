# TasksCore

Aplicação fullstack de gerenciamento de tarefas desenvolvida para demonstrar competências práticas em desenvolvimento backend, frontend e boas práticas de engenharia de software.

---

## Visão geral

O TasksCore é uma aplicação web que permite autenticação de usuários e gerenciamento de tarefas individuais. O projeto foi construído com foco em padrões utilizados no mercado, incluindo arquitetura em camadas, segurança, organização de código e deploy em ambiente de produção.

---

## Principais competências demonstradas

* Desenvolvimento de APIs RESTful com Node.js e Express
* Arquitetura em camadas (Controller, Service, Repository)
* Autenticação e autorização com JSON Web Token (JWT)
* Criptografia de senhas com bcrypt
* Integração com banco de dados relacional (PostgreSQL)
* Uso de ORM (Prisma) para acesso a dados
* Tratamento centralizado de erros
* Desenvolvimento frontend com React e TypeScript
* Consumo de APIs com Axios
* Gerenciamento de estado no cliente
* Integração frontend-backend
* Versionamento com Git
* Deploy em produção (Render e Vercel)

---

## Tecnologias

### Backend

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT (JSON Web Token)
* Bcrypt

### Frontend

* React
* Vite
* TypeScript
* Axios

---

## Arquitetura

O backend foi estruturado seguindo separação de responsabilidades:

* Controllers: entrada e saída HTTP
* Services: regras de negócio
* Repositories: acesso ao banco de dados

Esse padrão facilita manutenção, escalabilidade e testabilidade da aplicação.

---

## Funcionalidades

### Usuários

* Registro de conta
* Autenticação
* Acesso a dados do usuário autenticado

### Tarefas

* Criação
* Listagem por usuário
* Atualização (título e status)
* Exclusão

---

## Deploy

* Backend: https://taskscore-nm9k.onrender.com
* Frontend: (em deploy)

Endpoint de verificação:

GET /health

---

## Execução local

### Backend

```bash
cd backend
npm install
```

Configurar variáveis de ambiente:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
```

```bash
npx prisma migrate dev
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de demonstrar capacidade de construir uma aplicação completa, aplicando conceitos fundamentais de engenharia de software, organização de código e integração entre sistemas, alinhados às práticas utilizadas em ambientes profissionais.

---

## Autor

William Furquim
