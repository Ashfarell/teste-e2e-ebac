class ProdutosPage {

    buscarproduto(nomeProduto)  {
        cy.get('[name="s"]').eq(1).type(nomeProduto)               //campo de busca n/ existe no Cypress
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    }

    addProdutoCarrinhoX(tamanho, cor, qtd)  {
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()
    }

    visitarPaginaProduto(nomeProduto) {  
    const urlFormatada = nomeProduto.replace(/ /g, '-')                    //usando REGEX p/ substituir ' ' por '-'  
    cy.visit(`produto/${urlFormatada}`) 
    }
}
export default new ProdutosPage();
