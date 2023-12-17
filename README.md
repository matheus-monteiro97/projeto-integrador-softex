# Fap Desk 👩‍💻
O **Fap Desk** é um serviço de atendimento ao cliente que possui como característica primordial a centralização de solicitações em uma única plataforma virtual facilitando o gerenciamento de chamados. 
A ideia se basia no funcionamento de um software help desk permitindo que os chamados sejam classificados em ordem de importância. Priorizando sempre as solicitações mais urgentes antes.

## Necessidades do Cliente:
A **Info Rio Sistemas**, nosso cliente, precisa de uma aplicação Help Desk que possibilite:
1) Auxiliar no registro das solicitações de atendimento dos seus clientes para com seus respectivos produtos;
2) Permita o gerenciamento destes atendimentos por parte de seus colaboradores;
3) Proporcione aos seus clientes uma experência agradável, desde o momento da solicitação do chamado até o seu fechamento;
   
## Usuários do Fap Desk: 
<div align="middle">
🙎‍♀️🙎🏻‍♀️🙎🏼‍♀️🙎🏽‍♀️🙎🏾‍♀️🙎🏿‍♀️  QUEM SÃO OS USUÁRIOS DA NOSSA APLICAÇÃO? 🙎‍♂️🙎🏻‍♂️🙎🏼‍♂️🙎🏽‍♂️🙎🏾‍♂️🙎🏿‍♂️ 
</div>



1) João um FUNCIONÁRIO da **Info Rio Sistemas**, ele precisa de um aplicação que facilite o gerenciamento dos seus chamados e torne seu trabalho mais ágil.
   
2) Maria uma CLIENTE da **Info Rio Sistemas**, gostaria de um serviço de atendimento ao cliente facilato, onde seria possível abrir e acompanhar chamados de forma simples e ágil.

## Requisitos do projeto: 

A **Fap Desk** é uma aplicação Back-End idealizada para atender o padrão de arquitetura **MVC - Model, View, Controller**.

**MARIA -> cliente da Info Rio Sistemas:**
1) Funcionalidade de Cadastro: nome, telefone, e-mail, senha (com criptografia via hash), nome e endereço da empresa que Maria trabalha. 
2) Funcionalidade de Login: inserção de e-mail e senha da Maria com checagem no banco e validação via JWT, além de link "esqueceu a senha". ???
3) Funcionalidade de Alteração de Senha: permite alteração da senha pela Maria, basta inserir e-mail, senha atual, e senha a que deseja implementar. ????

**JOÃO -> funcionário da Info Rio Sistemas:**
1) Funcionalidade de Cadastro: Nome, função na Info Rio Sistemas, documento de identificação, telefone, e-mail, senha (com criptografia via hash).
2) Funcionalidade de Login: Inserção de e-mail e senha do João com checagem no banco e validação via JWT, além de link "esqueceu a senha". ???
3) Alteração de Senha: permite alteração da senha pelo João, basta inserir e-mail, senha atual, e senha a que deseja implementar. ????

**CHAMADOS -> Solicitado por Maria e vizualidado por João**: 
1) Dados dos Chamados: Nome da empresa que Maria trabalha, funcionário (Maria), título, serviço utilizado, problema, descrição, técnico responsável (João), prioridade, status, solução. 
2) Ordenação de Chamados: Os chamados serão ordenados por prioridade (Baixa, média ou alta) e os chamados fechados não poderão ser vizualizados, porém caso Maria precise pode modificar a ordem de prioridade dos chamados para cronológica e solicitar a vizualização de chamados fechados.

**Funcionalidades dos chamados para Maria:**
1) Abertura: Maria está apta para abrir os chamados e inserir todos os campos, exceto: Técnico Responsável, Solução e Status.
**Observação:** O nome da empresa e funcionário serão inseridos automaticamente, assim que Maria se logar na aplicação. 
2) Acompanhamento: Maria poderá ter acesso exclusivamente aos chamados abertos pela empresa a qual trabalha. 
Atualização de Chamado: Os clientes poderão atualizar todos os campos aos quais possui permissão para inserir na abertura de chamados. 


## Modelagem: 
Mostrar o diagrama entidade/relacionamento.

## Tecnologias utilizadas: 
indicar as tecnologias utilizadas na construção da aplicação.

-> Linguagem:

-> Frameworks:

-> Banco de dados:

-> IDE:

<div align="middle">
  
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="60" height="60"/>
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" height="60"/>
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="60" height="60"/>
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="60" height="60" />

</div>

## Rodando o projeto: 
Nesse campo pode ser descrito um pequeno tutorial de como terceiros podem startar a aplicação (indicar as bibliotecas que precisam ser baixadas por exemplo)

## Equipe Técnica:

-> Tech Lider:

![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=0E76A8)

-> Analista de Requisitos:

-> Desenvolvedores:



