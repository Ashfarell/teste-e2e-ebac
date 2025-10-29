/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
import { faker } from '@faker-js/faker';
import produtosPage from '../support/page_objects/produtos.page';


describe('Funcionalidade: E2E', () => {
//context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente
      Quero acessar a Loja EBAC
      Para fazer um pedido de 4 produtos
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
  beforeEach(() => {
      cy.visit('minha-conta')
  });
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //cy.preCadastro(faker.internet.email(), faker.internet.password())     //Comando customizado (email +_ senha)
    cy.get('#username').type(perfil.email)                                  //usando Fixture
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()                           // Fixture; se usar Comando=>CANCELAR
      //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
   
    cy.cadastroFinal(faker.person.firstName(), faker.person.lastName())     //Comando customizado (nome + sobrenome)
    cy.get('.woocommerce-message').should('exist')


    cy.get('#primary-menu > .menu-item-629 > a').click()                    //ir p/ página produto


    produtosPage.buscarproduto('Ariel Roll Sleeve Sweatshirt')              //PAGE objects p/ selecionar 1º produto
    let qtd = 3                                                             //VAR p/ qtd
    produtosPage.addProdutoCarrinhoX('XL', 'Green', qtd)                     //PAGE objects p/ add produto
    cy.get('.woocommerce-message').should('exist')
    cy.get('.woocommerce-message').should('contain', qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    cy.get('.woocommerce-message').should('contain', qtd)


    produtosPage.visitarPaginaProduto('Balboa Persistence Tee')           //PAGE objects p/ selecionar 2º produto
    produtosPage.addProdutoCarrinhoX('S', 'Orange', 2)                    //PAGE objects p/ add produto
    cy.get('.woocommerce-message').should('exist')


    cy.get('#primary-menu > .menu-item-629 > a').click()                    //ir p/ página produto


    produtosPage.buscarproduto('Aero Daily Fitness Tee')                    //PAGE p/ selecionar 3º produto
    produtosPage.addProdutoCarrinhoX('XS', 'Yellow', 1)                     //PAGE objects p/ add produto


    cy.get('#primary-menu > .menu-item-629 > a').click()                    //ir p/ página produto
     
    produtosPage.buscarproduto('Erica Evercool Sports Bra')                 //PAGE p/ selecionar 4º produto
    produtosPage.addProdutoCarrinhoX('M', 'Blue', 5)  


    cy.finalizarCompra()                                                //Comando p/ ir p/ carrinho


    let cep = '03528-002'                                               //Nº gerado c/ faker n/ era aceito
    let telefone = '11877563897'                                        //Nº gerado c/ faker n/ era aceito
    cy.cadastroCompra(faker.person.firstName(), faker.person.lastName(), faker.location.streetAddress(), faker.location.city(), cep , telefone)
    cy.get('.woocommerce-order-overview__order > strong').should('exist')
    });




  //it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
  //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
  // });
})
