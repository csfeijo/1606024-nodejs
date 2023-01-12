# 1606024-nodejs
Arquivos da Turma **1606024 NodeJS - Targettrust**

**Instrutor:** Cícero Feijó

## Antes de começar, certifique-se:
- Que o arquivo .eslint.json está no diretório do projeto.
- Que você tem a extensão do ESLint instalada no seu VSCode
- Que você tem um package.json com a entrada da dependência do ESLint criada: "eslint": "^8.28.0"
Execute:
```
npm install
```
A partir de agora o VSCode irá validar seu código sobre as definições do ESLint.


## Conteúdo já apresentado
### [ Aula 01 ]
- Configuração do projeto
- Clone do template no Git
- ESLint
- Package.json / module
- Módulo nativo http
- Primeiro servidor com NodeJS

### [ Aula02 ]
- Entendendo o res.write e res.end
- O que é o res.writeHead
- HTTP Status
- Criando módulos customizados em NodeJS
- Exercício
- Módulo nativo fs
- Enunciado do exercício para Aula 03
- Extra: configurando o VSCode para usar a fonte Fira Code

### [ Aula 03 ]
- Correção do exercício
- Design Patterns e otimização do exercício
- Entendendo NPM / Package.json
- Nodemon
- Introdução ao Express

### [ Aula 04 ]
- Express
- Rotas
- Rotas dinâmicas
- Static Files
- Midlewares
- __dirname

### [ Aula 05 ]
- Correção do exercício


## Links úteis
- [Site Professor Feijó](https://professorfeijo.com.br)
- [Credenciais no Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)
- [ESLint](https://eslint.org/)
- [NVM](https://github.com/nvm-sh/nvm)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [O que é CI/CD](https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd)
- [Entendendo a Arquitetura de Microservices](https://medium.com/xp-inc/entendendo-a-arquitetura-de-microservices-cdab6b52d6ed)
- [Uso do async/await para FS](https://dev.to/starpebble/async-await-with-nodejs-file-system-1aa2)
- [API do FS](https://nodejs.org/api/fs.html#filehandlereadfileoptions)
- [SonarQube](https://www.sonarsource.com/products/sonarqube/)
- [Mapeamento de teclas no VSCode](https://code.visualstudio.com/docs/getstarted/keybindings)
- [NVM - Node Version Manager](https://github.com/nvm-sh/nvm)
= [NVM - Usando e instalando](https://blog.cod3r.com.br/instalando-e-utilizando-o-nvm-no/)


## Anotações
- CI/CD -> Continuous Integraton (Integração continua) & Continuous Delivery (Entrega continua)
- Microservices

## Usando a fonte Fira Code no VSCode
- Acesse o link a seguir [Fira Code](https://github.com/tonsky/FiraCode) e scrolle a página até aparecer o botão de Download & Install
- Depois de efetuado o download no seu PC, descompacte o arquivo e acesse a pasta: ```/ttf```
- Selecione os arquivos e clique com o direito do mouse selecionando a opção "Instalar"
- Agora abra o seu VSCode e edite o arquivo ```.vscode/settings.json``` adicionando as linhas abaixo:
```
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
```
- Automaticamente o VSCode deverá trocar para o novo formato de fonte.

