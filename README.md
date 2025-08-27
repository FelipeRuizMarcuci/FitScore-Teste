# FitScore-Teste

Este projeto é uma aplicação web desenvolvida com **Next.js**, **TypeScript** e **Tailwind CSS**, destinada à avaliação de candidatos por meio de um formulário interativo. Os usuários respondem a perguntas relacionadas a **performance**, **energia** e **cultura**, e recebem uma pontuação (**FitScore**) junto com uma classificação.

---

## 🚀 Funcionalidades

- **Formulário de Avaliação:** Coleta informações sobre performance, energia e cultura.
- **Cálculo de FitScore:** Calcula a pontuação com base nas respostas.
- **Classificação Automática:** Classifica o candidato com base no FitScore.
- **Notificações por E-mail:** Envia e-mails com os resultados para o candidato e para o administrador.
- **Feedback Visual:** Exibe um modal de sucesso após o envio do formulário.

---

## 🛠 Tecnologias Utilizadas

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** API Routes do Next.js
- **Banco de Dados:** Supabase
- **Envio de E-mails:** Nodemailer (SMTP do Gmail)

---

## 📦 Instalação

Clone o repositório e instale as dependências:

````bash
git clone https://github.com/FelipeRuizMarcuci/FitScore-Teste.git
cd FitScore-Teste
npm install

## 🚀 Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
````

## 📄 Estrutura de Diretórios

- `pages/api` → Contém as rotas da API, incluindo o envio de e-mails e inserção de dados no banco.
- `pages/index.tsx` → Página principal com o formulário de avaliação.
- `components` → Componentes reutilizáveis, como o `QuestionBlock` para as perguntas.
- `services` → Funções auxiliares, como o envio de e-mails.

---

## 📧 Envio de E-mails

O envio de e-mails é realizado utilizando o **Nodemailer** com o serviço **SMTP do Gmail**.  
É importante garantir que as configurações de segurança da conta de e-mail permitam o envio de e-mails por meio de aplicativos externos.

---

## 🧪 Testes

Para rodar os testes:

```bash
npm run test

```
