// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        win.sessionStorage.clear()
        return win.open(url, '_self');
    });
});


Cypress.Commands.add('loginML', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header')
    cy.get('[id="user_id"]').type(username);
    cy.contains('span[class="andes-button__content"]', 'Continuar').click()
    cy.get('input[id="password"]').type(password);
    cy.get('[id="action-complete"]').click();
    // cy.url().should('contain', '/login-successful')
  });
});


Cypress.Commands.add('doQuestionML', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header')
    cy.get('[id="user_id"]').type(username);
    cy.contains('span[class="andes-button__content"]', 'Continuar').click()
    cy.get('input[id="password"]').type(password);
    cy.get('[id="action-complete"]').click();

    cy.visit('https://produto.mercadolivre.com.br/MLB-2068399384-item-de-teste-por-favor-no-ofertar-_JM');
    cy.get('textarea[name="question"]').type('Mensagem do método padrão. Essa pergunta é fixa');
    cy.contains('span[class="andes-button__content"]', 'Perguntar').click()
    cy.contains("Mensagem enviada com sucesso!");
  });
});
