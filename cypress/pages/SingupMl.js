

class SignupMl {

    goMl() {
         cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolivre.com.br%2F&loginType=explicit#nav-header',
         { onBeforeLoad: (win) => { win.sessionStorage.clear() } });
        //cy.visit('https://produto.mercadolivre.com.br/MLB-2068399384-item-de-teste-por-favor-no-ofertar-_JM');
    }

    signUp() {
        cy.contains('[data-link-id="login"]', 'Entre').click();
        cy.wait(1000)
    }

    loginMl(userId, password) {
        
        cy.get('[id="user_id"]').type(userId);
        cy.contains('span[class="andes-button__content"]', 'Continuar').click()
        cy.get('input[id="password"]').type(password);
        cy.get('[id="action-complete"]').click();
    }

}

export default new SignupMl;