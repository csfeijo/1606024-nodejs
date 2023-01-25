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
- Thunder Client
- Métodos GET, POST, PUT/PATCH & DELETE
- Collection no Thunder Client
- Requests via Thunder Client
- Body Parser Middleware

### [ Aula 06 ]
- Bate Papo sobre POC e organização de projeto (Jira, Trello, etc)
- Mock com JSON
- Conectando o MySQL no NodeJS
- Tratando erros e status de conexão na API
- Implementação das rotas:
  - GET /departamentos e GET /departamentos/:idDepartamento

### [ Aula 07 ]
- Correção do exercício
- End-point da API utilizando req.body + req.params
- .env no NodeJS
- Introdução ao Swagger

### [ Aula 08 ]
- Correção do exercício
- Bate papo: fluxo de desenvolvimento com Pull Request no GitHub
- Swagger JS Doc
- Swagger UI

### [ Aula 09 ]
- Correção do exercício
- API do GitHub
- Brasil API
- BFF (chamada para API´s de terceiros)
- Deploy com Vercel e Surge

### [ Aula 10 ]
- Correção de exercício
- Deploy de API na Vercel
- Environment Variables
- Testes automatizados
- Bate Papo de Carreira
- Próximos passos
- O que virá no próximo curso?




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
- [NVM - Usando e instalando](https://blog.cod3r.com.br/instalando-e-utilizando-o-nvm-no/)
- [Colocando cores no console](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

### Ferramentas de gerenciamento de projeto
- [Jira](jira.com)
- [Trello](trello.com)
- [PivotalTracker](pivotaltracker.com)

### Carreira
- [The Developer Roadmap](https://roadmap.sh/)
- [The Developer Roadmap - Front-End](https://roadmap.sh/frontend/)
- [The Developer Roadmap - Back-End](https://roadmap.sh/backend/)

### Sobre API´s
- [BFF](https://medium.com/digitalproductsdev/arquitetura-bff-back-end-for-front-end-13e2cbfbcda2)
- [RestAPI](https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api)
= [Introdução a API Restful](https://www.devmedia.com.br/introducao-a-web-services-restful/37387#:~:text=O%20padr%C3%A3o%20REST%20determina%20como,entidade%20em%20um%20dado%20momento.)
- [Status Codes for API´s](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/#:~:text=404%20means%20Not%20Found.,something%20wrong%20on%20the%20backend.)

- [GitHubAPI - CSFEIJO](https://api.github.com/users/csfeijo)
- [GitHubAPI - CSFEIJO/REPOS](https://api.github.com/users/csfeijo/repos)
- [DOTENV](https://github.com/motdotla/dotenv#readme)

- [API Brasil](https://brasilapi.com.br/)
- [GIT HUB API](https://docs.github.com/pt/rest?apiVersion=2022-11-28)

- [Diferença entre PUT e PATCH](https://cursos.alura.com.br/forum/topico-diferenca-entre-put-e-patch-44669)

### Deploy
- [Vercel - (Host de estáticos)](https://vercel.com)
- [Surge - (Host de estáticos)](surge.sh)
- [Infinityfree - (Host de PHP e MySQL)](https://www.infinityfree.net/)
- [Projeto Base para API na Vercel - vimos na última aula](https://github.com/csfeijo/nodejs-api-vercel)


### BD
- [MongoDB VS MySQL](https://kinsta.com/pt/blog/mongodb-vs-mysql/#mongodb-vs-mysql-quando-uslos)
- [Principais BD não relacionais](https://blog.saphir.com.br/conheca-os-principais-bancos-de-dados-nosql-nao-relacionais/)

#### FREELANCER
- [Workana](https://www.workana.com/pt/)
- [CROWD](https://crowd.br.com/sou-freelancer/)

### Next Steps
- Testes automatizados de API
  - BDD: Behavior Driven Development (Desenv. orientado a comportamento)
  - TDD: Test Driven Development (Desenv. orientado a teste)

- https://oauth.net/2/
- Deploy CI/CD (Jenkins, GitHub Actions...)
- Serviços de Deploys (Vercel, Netlify, Fly.io, Surge)
- MongoDB (NoSQL)

DEPARTAMENTOS
[
  { id: 1, nome: 'Rec Hum', sigla: 'RH' },
  { id: 2, nome: 'Sist. Inf.', sigla: 'SI' }
  { id: 3, nome: 'Sist. Inf.', sigla: 'SI', descricao: 'adasdadasd' }
]

const model = new Model('departamentos')
model.updateByid(1, { nome: 'Humanos' })
model.deleteById(1)
model.deleteAll()
model.findById(1)
model.all()

AMBIENTE LOCAL
.env
DB_HOST: localhost (pq o banco está local)

AMBIENTE DE HOMOLOGAÇÃO
.env
DB_HOST: hlg.mysql.site.com BANCO QUE ESTÁ EM OUTRO ENDEREÇO

AMBIENTE DE PRODUCAO
.env
DB_HOST: prod.mysql.site.com BANCO QUE ESTÁ EM OUTRO ENDEREÇO











## Extensoes
- Git Graph


## Anotações
- CI/CD -> Continuous Integraton (Integração continua) & Continuous Delivery (Entrega continua)
- Microservices
- Mock (mock-up): é a entrega de dados no formato esperado, porém dados fakes.
- Variáveis de ambiente (Environment Variables): são usadas para armanzenar informações sensíveis e que não podem ser adicionadas no código fonte da aplicação.

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

