class SignupPredize {

    goPredize() {
        cy.forceVisit('https://app.predize.com.br/#/login');
        cy.visit('https://app.predize.com.br/#/login');
        // cy.visit('https://app.predize.com.br/#/login');

    }

    loginPredize(userName, password) {
        cy.get('input[id="username"]').type(userName);
        cy.get('[id="password"]').type(password);
        cy.contains('Manter-me conectado').click();
        cy.contains('[id="login"]', 'Entrar').click();
        cy.wait(1000)
    }

    findQuestion(mlQuestion) {
        // cy.visit('app.predize.com.br');
        cy.get('[href="#/questions/"]').click();
        cy.get('#table-questions tbody tr:nth-child(1)').contains(mlQuestion).click();
        
    }

    answerQuestion (msgAnswer, msgExpexted) {

        cy.get('[id="boxMessage"]').type(msgAnswer);
        cy.contains('.pre-order-answer-button', 'Responder').click();
        cy.contains(msgExpexted);
    }

}

export default new SignupPredize;