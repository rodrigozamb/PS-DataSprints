


#
# Sobre

Bem-vindo ao repositório de solução do Case Técnico de um PS da DataSprints. O desafio é criar uma API REST simples com duas rotas, uma para cadastro e outra para login de usuário. 


# Tecnologias utilizadas
 <a href="https://www.docker.com/"><img align="center" alt="Hideki-React" height="30" width="34" src="https://img.icons8.com/color/480/docker.png"> - Docker</a><br/>
<a href="https://www.typescriptlang.org/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"> - Typescript</a><br/>
<a href="https://nodejs.org/en/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://img.icons8.com/color/480/nodejs.png"> - NodeJS</a><br/>
<a href="https://jestjs.io/pt-BR/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://camo.githubusercontent.com/62089edec0ee40bb26b3bf5f973b14d7f8e4b4e942f115cde5b9a5f9c0ca3382/687474703a2f2f7365656b6c6f676f2e636f6d2f696d616765732f4a2f6a6573742d6c6f676f2d463939303145424246372d7365656b6c6f676f2e636f6d2e706e67"> - Jest</a><br/>
<a href="https://nodejs.org/en/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4"> - TypeORM</a><br/>
<a href="https://www.postgresql.org/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://img.icons8.com/color/480/postgresql.png"> - Postgres</a><br/>
<a href="https://swagger.io/"><img align="center" alt="Hideki-Ts" height="30" width="40" src="https://avatars0.githubusercontent.com/u/7658037?v=3&s=200"> - Swagger</a><br/>

# Instalação
Para executar o projeto siga os seguintes passos:<br/>
```bash
# Clone o repositório
$ git clone https://github.com/rodrigozamb/PS-DataSprints.git

# Entre no repositório
$ cd PS-DataSprints

# Instale as dependências
$ yarn install

# Inicie a aplicação e o Banco de Dados
$ sudo docker-compose up -d
$ sudo docker-compose start

# Caso queira conferir o estado dos containers
$ sudo docker ps
```
# Configuração da API
- O servidor local da aplicação, criado pelo Docker, estará rodando na porta 3333<br/>
- O Banco de Dados Postgres, também criado pelo Docker, estará rodando na porta 5555<br/>

Dessa forma, foram criadas 3 rotas a fim de solucionar o desafio proposto.<br/>
São elas :<br/>
 - http://localhost:3333/users/signup - realiza o cadastro de um novo usuário na aplicação <br/>
 - http://localhost:3333/users/signin - realiza o login de um usuário cadastrado, fornecendo como resposta um token de autenticação<br/>
 - [Extra] http://localhost:3333/users/action - uma rota que somente usuário autenticados podem acessar, é necessário informar o token de autenticação na requisição<br/>

O acesso ao Banco de Dados utilizado é dado pelo endereço : 'localhost:5432/techCase_dataSprints'

# Documentação
A Documentação completa da API pode ser acessada em :<br/>
http://localhost:3333/api-docs <br/>

<br/>
<br/>
<br/>
Atenciosamente, Rodrigo Zamboni Silva
