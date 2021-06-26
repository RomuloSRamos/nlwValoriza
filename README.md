<h1 align="center">NLW Valoriza</h1>

<p align="center">	
   <a href="https://www.linkedin.com/in/romulo-s-ramos/">
      <img alt="Romulo S. Ramos" src="https://img.shields.io/badge/Romulo S. Ramos-8257E5?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/RomuloSRamos/nlwValoriza?color=774DD6">
  <a href="https://github.com/RomuloSRamos/nlwValoriza/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RomuloSRamos/nlwValoriza?color=774DD6">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-8257E5">
  <a href="https://github.com/RomuloSRamos/nlwValoriza/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/RomuloSRamos/nlwValoriza?color=8257E5&logo=github">
  </a>
</p>

> :rocket: Valoriza é um projeto desenvolvido durante a 
NLW/Together da @Rocketseat Trata-se de uma plataforma para promover o reconhecimento entre companheiros de equipe.

# :pushpin: Conteúdo

* [Tecnologias](#computer-technologies)
* [Features](#rocket-features)
* [Como Executar](#construction_worker-how-to-run)
* [Encontrou um bug ou está Faltando uma Feature específica?](#bug-issues)
* [Contribuindo](#tada-contributing)
* [Licença](#closed_book-license)


# :computer: Technologies
Este projeto foi feito usando as seguintes tecnologias:

* [NodeJS](https://nodejs.org/en/)      
* [Express](https://expressjs.com/)   
* [Typescript](https://www.typescriptlang.org/)
* [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)   

# :rocket: Features
## To-Do
### Regras
- Cadastro de usuário

    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    
    [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    
    [ x ] Não é permitido cadastrar Tag sem nome

    [ x ] Não é permitido cadastrar mais de uma Tag com o mesmo nome
    
    [ x ] Não é permitido cadastrar por usuários que não sejam administrador

- Cadastro de elogios

    [ x ] Não é permitido um usuário cadastrar um elogio pra si

    [ x ] Não é permiti cadastrar elogios para usuáios invalidos
    
    [ x ] O susário precisa está logado na alicação


# :construction_worker: Como executar
```bash
# Clone Repositório
$ git clone https://github.com/RomuloSRamos/nlwValoriza.git
```
### 📦 Run API

```bash
# vá para pasta do projeto
$ cd nlwValoriza

# Instale as Dependências
$ npm install

# execute as Migrations para criar as tabelas do banco de dados
$ npx typeorm migration:run

# execute a Aplicação
$ yarn run dev
```
A aplicação estará disponível em http://localhost:3333/


# :bug: Issues
Sinta-se à vontade para **registrar um nova issue** com seu título e descrição no repositório [nlwValoriza](https://github.com/RomuloSRamos/nlwValoriza/issues). Se você já encontrou uma solução para o seu problema, adoraria revisar sua **pull request**!

# :tada: Contribuindo
Em primeiro lugar, obrigado por estar interessado em ajudar, seu tempo é sempre apreciado em todos os sentidos. :100:

Aqui estão algumas dicas:

* Verifique na [pagina de issues](https://github.com/RomuloSRamos/nlwValoriza/issues) as questões já abertas (ou talvez até mesmo encerradas) que já podem resolver sua questão / bug / solicitação de recurso.
* Pedidos de novas Features são bem-vindos! Forneça alguns detalhes sobre por que seria útil para você e outras pessoas, explique como você está usando o **nlwValoriza** e, se possível, até mesmo algumas capturas de tela!

# :closed_book: License
---
Released in 2021 :closed_book: License
Este projeto está sob a licença [MIT](./LICENSE).
---
Feito com 💜 por [Romulo S. Ramos](https://github.com/RomuloSRamos) guiado por [danileao](https://github.com/danileao) Especialista da [Rocketseat](https://github.com/rocketseat-education) 🚀.
[Vai lá e Participa da comunidade!](https://discord.gg/gKUVrzrPrU)

---


Dê uma ⭐️ se este projeto te ajudou!
    
