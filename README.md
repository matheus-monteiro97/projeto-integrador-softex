
![fapDesk](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/47a3df9c-4b75-4bdc-9042-9f6b799eed9a) 

O **Fap Desk** é um serviço de atendimento ao cliente que possui como característica primordial a centralização de solicitações em uma única plataforma virtual facilitando o gerenciamento de chamados. 
A ideia se baseia no funcionamento de um software help desk permitindo que os chamados sejam classificados em ordem de importância. Priorizando sempre as solicitações mais urgentes.

<div align="middle">
   
 ![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)
 
</div> 

## Necessidades do Cliente: 💭
A **Info Rio Sistemas**, nosso cliente, precisa de uma aplicação Help Desk que possibilite:
1) Auxiliar no registro das solicitações de atendimento dos seus clientes para com seus respectivos produtos;
2) Permita o gerenciamento destes atendimentos por parte de seus colaboradores;
3) Proporcione aos seus clientes uma experência agradável, desde o momento da solicitação do chamado até o seu fechamento;
   
## Usuários do Fap Desk: 🧍‍♂️🧍‍♀️

<div align="middle">

🙎‍♀️🙎🏻‍♀️🙎🏼‍♀️🙎🏽‍♀️🙎🏾‍♀️🙎🏿‍♀️  QUEM SÃO OS USUÁRIOS DA NOSSA APLICAÇÃO? 🙎‍♂️🙎🏻‍♂️🙎🏼‍♂️🙎🏽‍♂️🙎🏾‍♂️🙎🏿‍♂️ 

</div>

1) **João** um FUNCIONÁRIO da **Info Rio Sistemas**, ele precisa de um aplicação que facilite o gerenciamento dos seus chamados e torne seu trabalho mais ágil.
   
![Persona João (FapDesk)](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/f09bcbc1-07c7-4c8a-962c-6ff805607a82)

2) **Maria** uma CLIENTE da **Info Rio Sistemas**, gostaria de um serviço de atendimento ao cliente facilitado, onde seria possível abrir e acompanhar chamados de forma simples e ágil.

![Persona Maria (FapDesk)](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/a7202ca4-d221-49c9-8cbf-b4891b6fd297)

## Requisitos do projeto: 📚

A **Fap Desk** é uma aplicação Back-End idealizada para atender o padrão de arquitetura **MVC - Model, View, Controller**.

📌 **CHAMADOS -> Solicitado por Maria e visualidado por João**: 
* `Dados dos Chamados`: informações do solicitante (Maria), informações do técnico responsável (João), data de criação, data de fechamento, título, problema, solução, descrição, prioridade, status. 
* `Ordenação de Chamados`: Os chamados serão ordenados por prioridade (Baixa, média ou alta) e os chamados fechados não poderão ser vizualizados, porém caso Maria precise, pode modificar a ordem de prioridade dos chamados para cronológica e solicitar a vizualização de chamados fechados.
  
📌 **MARIA -> cliente da Info Rio Sistemas:**
* `Funcionalidade de Cadastro`: nome, telefone, e-mail, senha (com criptografia via hash), nome e endereço da empresa que Maria trabalha, cargo, departamento, tipo de usuário (cliente), data de registro.
* `Funcionalidade de Atualização`: nome, telefone, e-mail, nome e endereço da empresa que Maria trabalha, cargo, departamento. 
* `Funcionalidade de Login`: inserção de e-mail e senha da Maria com checagem no banco e validação via JWT.
* `Funcionalidade de Alteração de Senha`: Permite alteração da senha pela Maria.

📌 **Funcionalidades dos chamados para MARIA:**
* `Abertura`: Maria está apta para abrir os chamados e inserir todos os campos, **exceto**: Técnico Responsável, problema, solução, prioridade e Status.
**Observação:** O nome da empresa e do funcionário(Maria) serão inseridos automaticamente, assim que a mesma se logar na aplicação. 
* `Acompanhamento`: Maria poderá ter acesso exclusivamente aos chamados abertos pela empresa a qual trabalha. 
* `Atualização`: Maria poderá atualizar todos os campos aos quais possui permissão no momento da abertura de chamados.
  

![Experiencia de Maria](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/d2fe96b4-07f7-479a-b2ea-4ccdadb9c4a3)

📌 **JOÃO -> funcionário da Info Rio Sistemas:**
* `Funcionalidade de Cadastro`: Nome, cargo na Info Rio Sistemas, documento de identificação, telefone, e-mail, senha (com criptografia via hash), tipo de usuário (funcionário e/ou administrador).
* `Funcionalidade de Atualização`: Nome, cargo na Info Rio Sistemas, documento de identificação, telefone, e-mail, tipo de usuário.
* `Funcionalidade de Login`: Inserção de e-mail e senha do João com checagem no banco e validação via JWT.
* `Funcionalidade de Alteração de Senha`: Permite alteração da senha pelo João. 

📌 **Funcionalidades dos chamados para JOÃO:**
* `Abertura`: João terá acesso a **todos** os campos para abertura de chamados, **incluíndo** Técnico Responsável, Solução e Status.
* `Acompanhamento`: João terá acesso a **todos**, incluindo aqueles delegados aos seus colegas técnicos da Info Rio Sistemas. 
* `Atualização`: O João poderá atualizar **todos** os chamados, incluindo aqueles delegados aos seus colegas técnicos Info Rio Sistemas.
  

![Experiencia de João](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/61ca4182-f5d5-4859-95f5-49d3db51583d)

## Diagrama UML: 📂
A estrutura do FAP Desk se dará da seguinte forma:
1) Classe abstrata **User**;
2) Classes **Customer** e **Employee** que herdam as características de **User**;
3) Classe **Called** se relaciona com a classe **Customer** através de *composição* e com a classe **Employee** atavés de *agregação*;

![Diagrama UML fapdesk](https://github.com/DanielaXavier1995/projeto-integrador-softex/assets/116307469/dd6b2c92-c21b-49ba-b6f4-7c0509991b33)

## Tecnologias utilizadas: 🛠️

-> **Linguagem:** JavaScript;

-> **IDE:** Visual Studio Code;

-> **Frameworks:** Node.js e Express;

-> **ORM:** Sequelize;

-> **Banco de dados:** Supabase;

-> **Autenticação e Criptografia:** JWT e Bcrypt;

-> **Documentação:** Swagger;

-> **Hospedagem em nuvem**: Vercel ou Render;

-> **Versionamento:** Git & GitHub;

<div align="middle">
  
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="60" height="60"/>
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" height="60"/>
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="60" height="60" />
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60" height="60"/> 
<img align="middle" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60" height="60"/> 

</div>

## Acesso ao projeto: 📁  **FINALIZAR**
 -> Como baixar o projeto;
 
 -> Link da aplicação em nuvem;

## Abrir e rodar o projeto: 🛠️  **FINALIZAR**
Nesse campo pode ser descrito um pequeno tutorial de como terceiros podem startar a aplicação (indicar as bibliotecas que precisam ser baixadas por exemplo)

## Equipe Técnica: 👨‍💻 👩‍💻

| Perfil | Nome | Função | Github | Linkedin |
| :----------------: | :-----: | :---------: | :---------: | :---------: |
| <img width="100" alt="Foto Advalker" src="imagens/advalker.jpeg"> | `Advalker Souto` | Gerente de Requisitos <br> Desenvolvedor Back-end | <a href="https://github.com/Advalker"> <img height="80" alt="GitHub Advalker" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"></a> | <a href= "https://www.linkedin.com/in/advalker-l-s-maior-5436a520a/"><img height="80" alt="linkedin Advalker" src="imagens/linkedln.png"></a> |
| <img width="100" alt="Foto Matheus" src="imagens/Daniela.jpeg"> | `Daniela Xavier` | Gerente de Projetos <br> Desenvolvedor Back-end | <a href="https://github.com/DanielaXavier1995"> <img height="80" alt="GitHub Daniela" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"></a> | <a href= "https://www.linkedin.com/in/dani-xavier/"><img height="80" alt="linkedin Matheus" src="imagens/linkedln.png"></a> |
| <img width="100" alt="Foto Luiz" src="imagens/luiz.jpeg"> | `Luiz Cláudio` | Desenvolvedor Back-end <br> Q.A| <a href="https://github.com/LuizClaudioPestana"><img height="80" alt="GitHub Luiz" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"></a> | <a href= "https://www.linkedin.com/in/luizclaudiopestana/"><img height="80" alt="linkedin Luiz" src="imagens/linkedln.png"></a> |
| <img width="100" alt="Foto Marcelo" src="imagens/marcelo.jpeg"> | `Marcelo Mendonça` | Desenvolvedor <br> Back-end | <a href="https://github.com/mclmendonca"> <img height="80" alt="GitHub Marcelo" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"></a> | <a href=""> <img height="80" alt="linkedin Marcelo" src="imagens/linkedln.png"></a> | 
| <img width="100" alt="Foto Matheus" src="imagens/Matheus.jpg"> | `Matheus Monteiro` | Teach Lead <br> Desenvolvedor Back-end | <a href="https://github.com/matheus-monteiro97"> <img height="80" alt="GitHub Matheus" src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg"></a> | <a href= "https://www.linkedin.com/in/matheus-monteiro97/"><img height="80" alt="linkedin Matheus" src="imagens/linkedln.png"></a> |





