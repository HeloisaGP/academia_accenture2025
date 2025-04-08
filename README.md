# 📘 Desafio Técnico - Cypress | Academia Accenture 2025
Este projeto contém testes automatizados de ponta a ponta (E2E), desenvolvidos com o framework Cypress, com o objetivo de validar as funcionalidades do portal Tricentis Sample App conforme o desafio técnico proposto pela Academia Accenture 2025.

🚀 Objetivo
Automatizar o fluxo completo de preenchimento do formulário no portal Tricentis, garantindo a validação dos campos e contemplando também testes negativos.

🛠️ Setup do Ambiente
Siga os passos abaixo para configurar o ambiente de automação com Cypress:

1. Instalação do Node.js
Certifique-se de que o Node.js está instalado em sua máquina. Você pode baixá-lo em: https://nodejs.org/

2. Criação do diretório do projeto
Crie uma pasta para o projeto, no meu caso criei em C:\academia_acenture2025

3. Inicialização do projeto
Abra o terminal no Visual Studio Code e execute os comandos abaixo:
cd C:\academia_acenture2025
npm init

4. Instalação do Cypress
Execute o comando:
npm install cypress --save-dev

5. Abertura do Cypress
Abra a pasta no VS Code, e no terminal execute:
npx cypress open

* Clique em "E2E Testing (Not Configured)"
* Siga as instruções para criar os arquivos de configuração padrão

7. Configuração do Cucumber Preprocessor
Instale a biblioteca:
npm install -D cypress-cucumber-preprocessor

Em seguida, configure:
* cypress.config.js para importar e registrar o preprocessor.
Como deve ser configurado:
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://sampleapp.tricentis.com',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});

* package.json com os parâmetros de execução adequados.
Como deve ser configurado:
{
  "name": "desafio_cypress",
  "version": "2.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/support/step-definitions/"
  },
  "devDependencies": {
    "cypress": "^14.2.1",
    "cypress-cucumber-preprocessor": "^4.3.1"
  }
}

⚠️ Após ajustes, execute npx cypress open novamente. A interface deverá estar marcada como E2E Testing (configured).






