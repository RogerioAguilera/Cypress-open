/// <reference types="Cypress" />
const url = Cypress.config("baseUrl")


class IndexPage {
    // Acessa o site
    acessarSite(){

        cy.visit(url)
    }


// Buscar produto
buscarProduto() {
    cy.get('#search_query_top').type('Faded Short Sleeve')

}

// Adiciona o produto
adicionarProduto() {
    cy.get('#searchbox > .btn').click()

  }


// Verificar quantidade do Produto inserido
  validarProduto(){
    cy.get('.ajax_add_to_cart_button > span').type("submit")
    cy.get('[title="View my shopping cart"]').click({multiple:true});
    cy.get('[title="View my shopping cart"]').click({multiple:true});
    cy.get('#cart_quantity_up_1_1_0_0 > span').click();
    cy.get('#cart_quantity_down_1_1_0_0 > span').click();
  }

}

export default IndexPage;