import signupMl from '../pages/SingupMl'
import ad from '../pages/QuestionMl'
import signupPredize from '../pages/SignupPredize'

describe('Suite Case Pre-vendas: Importação e Envio de Pergunta', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(function(){
        cy.fixture('data').then((d)=>{
            this.data = d
        })

    })
    
    // it('Fazer pergunta no ML', function(){

    //     //Realizar o login no Mercado Livre
    //     signupMl.goMl()
    //     // signupMl.loginMl(this.data.ml.userTest, this.data.ml.passwordTest)
    //     signupMl.signUp()
 
    //     //Fazer uma pergunta no produto de teste
    //     // ad.goQuestion(this.data.ml.product_test_URL)
    //     //ad.clickToLogin()
    //     //signupMl.loginMl(this.data.ml.userTest, this.data.ml.passwordTest)
    //     ad.doQuestion(this.data.ml.question_to_send, this.data.ml.answer_validate)
    
    // });

    it('Responder a pergunta no Predize', function () {

     //   cy.loginML(this.data.ml.userTest, this.data.ml.passwordTest)   
        cy.doQuestionML(this.data.ml.userTest, this.data.ml.passwordTest) 
      //  ad.goQuestion(this.data.ml.product_test_URL)
      //  ad.doQuestion(this.data.ml.question_to_send, this.data.ml.answer_validate)
           
        //Realizar Login no Predize
        signupPredize.goPredize();
        signupPredize.loginPredize(this.data.predize.userTest, this.data.predize.passwordTest);
        
        //Procurando Mensagem enviada e respondendo        
        signupPredize.findQuestion(this.data.ml.question_to_send);
        signupPredize.answerQuestion(this.data.predize.msg_answer,this.data.predize.msg_expected);

    });

});