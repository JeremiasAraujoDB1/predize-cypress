

class QuestionMl {

   
    goQuestion(productURL) {
        //cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header')
        cy.forceVisit(productURL);
    }

    clickToLogin(){
        cy.get('[href="https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2068399384-item-de-teste-por-favor-no-ofertar-_JM&loginType=explicit#nav-header"]').click()
    }

    doQuestion(question, answerValidate) {
        cy.get('textarea[name="question"]').type(question);
        //cy.get('#newCookieDisclaimerButton').click();
        cy.contains('span[class="andes-button__content"]', 'Perguntar').click()
        cy.contains(answerValidate);
    }

    doDefaultQuestion() {
        cy.get('textarea[name="question"]').type('Mensagem do método padrão. Essa pergunta é fixa');
        //cy.get('#newCookieDisclaimerButton').click();
        cy.contains('span[class="andes-button__content"]', 'Perguntar').click()
        cy.contains("Mensagem enviada com sucesso!");
    }

}

export default new QuestionMl