Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preCadastro', (email, senha) =>{
cy.get('#reg_email').type(email)
cy.get('#reg_password').type(senha)
cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('cadastroFinal', (nome, sobrenome) =>{
cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
cy.get('#account_first_name').type(nome)
cy.get('#account_last_name').type(sobrenome)
cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('finalizarCompra', () =>{
cy.get('.dropdown-toggle > .mini-cart-items').click()
cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
cy.get('.checkout-button').click()
})

Cypress.Commands.add('cadastroCompra', (nome, sobrenome, endereco, cidade, cep, telefone) => {
cy.get('#billing_first_name').clear().type(nome)
cy.get('#billing_last_name').clear().type(sobrenome)
cy.get('#billing_address_1').clear().type(endereco)
cy.get('#billing_city').clear().type(cidade)
cy.get('#billing_postcode').clear().type(cep)
cy.get('#billing_phone').clear().type(telefone)
cy.get('#terms').click()
cy.get('#place_order').click()

})
